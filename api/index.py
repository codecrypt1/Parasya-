import os
from typing import Optional, List

from fastapi import FastAPI, Body, HTTPException, status, Depends
from fastapi.responses import Response
from pydantic import ConfigDict, BaseModel, Field, EmailStr
from pydantic.functional_validators import BeforeValidator
from fastapi.security import OAuth2PasswordBearer
import requests
from jose import jwt

from typing_extensions import Annotated

from bson import ObjectId
import motor.motor_asyncio
from pymongo import ReturnDocument

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")


GOOGLE_CLIENT_ID = "1000665711129-8m8dnlj3u4jrvoo21a9hpeaq46tu4idf.apps.googleusercontent.com"
GOOGLE_CLIENT_SECRET = "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"
GOOGLE_REDIRECT_URI = "http://localhost:3000/"


app = FastAPI()

client = motor.motor_asyncio.AsyncIOMotorClient("mongodb://localhost:27017/studenthub")
db = client["studenthubconnect"]
student_collection = db.get_collection("studenthub")

@app.get("/api/login/google")
async def login_google():
    return {
        "url": f"https://accounts.google.com/o/oauth2/auth?response_type=code&client_id={GOOGLE_CLIENT_ID}&redirect_uri={GOOGLE_REDIRECT_URI}&scope=openid%20profile%20email&access_type=offline"
    }

@app.get("/api/auth/google")
async def auth_google(code: str):
    token_url = "https://accounts.google.com/o/oauth2/token"
    data = {
        "code": code,
        "client_id": GOOGLE_CLIENT_ID,
        "client_secret": GOOGLE_CLIENT_SECRET,
        "redirect_uri": GOOGLE_REDIRECT_URI,
        "grant_type": "authorization_code",
    }
    response = requests.post(token_url, data=data)
    access_token = response.json().get("access_token")
    user_info = requests.get("https://www.googleapis.com/oauth2/v1/userinfo", headers={"Authorization": f"Bearer {access_token}"})
    return user_info.json()

@app.get("/token")
async def get_token(token: str = Depends(oauth2_scheme)):
    return jwt.decode(token, GOOGLE_CLIENT_SECRET, algorithms=["HS256"])

@app.get("/api/python")
def home():
    return {"message": "asd"}