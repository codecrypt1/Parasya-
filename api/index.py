# main.py

from fastapi import FastAPI, HTTPException, Depends, status
from fastapi.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
from jose import JWTError, jwt
from passlib.context import CryptContext
from pydantic import BaseModel
from datetime import datetime, timedelta
from fastapi.security import OAuth2PasswordBearer

app = FastAPI()

# Enable CORS (Cross-Origin Resource Sharing)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# MongoDB setup
@app.on_event("startup")
async def startup_db_client():
    app.mongodb_client = AsyncIOMotorClient("mongodb://localhost:27017")
    app.mongodb = app.mongodb_client["studenthub"]
    app.users_collection = app.mongodb["users"]

@app.on_event("shutdown")
async def shutdown_db_client():
    app.mongodb_client.close()

# Secret key to sign JWT tokens
SECRET_KEY = "your_secret_key"
ALGORITHM = "HS256"

# Password hashing
PASSWORD_HASHING = CryptContext(schemes=["bcrypt"], deprecated="auto")

# User model for registration
class UserRegistration(BaseModel):
    name: str
    email: str
    college: str
    id: str
    password: str

# User model for token response
class User(BaseModel):
    name: str
    email: str
    college: str
    id: str

# Token generation for login
@app.post("/api/token")
async def login(email: str, password: str):
    print(email,password)
    user = await app.users_collection.find_one({"email": email})
    if user and PASSWORD_HASHING.verify(password, user["hashed_password"]):
        token_data = {"sub": user["email"]}
        return {"access_token": create_jwt_token(token_data), "token_type": "bearer"}
    raise HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Invalid credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
# Registration endpoint
@app.post("/api/register", response_model=User)
async def register(user: UserRegistration):
    hashed_password = PASSWORD_HASHING.hash(user.password)
    user_dict = user.dict()
    user_dict["hashed_password"] = hashed_password
    user_id = await app.users_collection.insert_one(user_dict)
    return {"name": user.name, "email": user.email, "college": user.college, "id": str(user_id.inserted_id)}

# Function to create JWT token
def create_jwt_token(data: dict, expires_delta: timedelta = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=15)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt
