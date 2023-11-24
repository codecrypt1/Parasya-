from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
from pydantic import BaseModel

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("startup")
async def startup_db_client():
    app.mongodb_client = AsyncIOMotorClient("mongodb://localhost:27017")
    app.mongodb = app.mongodb_client["studenthub"]
    app.collection = app.mongodb["users"]

@app.on_event("shutdown")
async def shutdown_db_client():
    app.mongodb_client.close()

@app.get("/api")
async def read_root():
    return {"message": "Hello, FastAPI!"}

class User(BaseModel):
    name: str
    email:str
    password:str
    college:str

class Forum(BaseModel):
    name:str
    image:str
    title:str
    context:str

@app.post("/api/items/")
async def create_item(item: User):
    inserted_item = await app.collection.insert_one(item.dict())
    return {"id": str(inserted_item.inserted_id)}


@app.get("/api/items/{item_id}")
async def read_item(item_id: str):
    document = await app.collection.find_one({"_id": item_id})
    if document:
        return document
    raise HTTPException(status_code=404, detail="Item not found")

@app.put("/api/items/{item_id}")
async def update_item(item_id: str, item: User):
    updated_item = await app.collection.update_one(
        {"_id": item_id}, {"$set": item.dict()}
    )
    if updated_item.modified_count:
        return {"message": "Item updated successfully"}
    raise HTTPException(status_code=404, detail="Item not found")
@app.delete("/api/items/{item_id}")
async def delete_item(item_id: str):
    deleted_item = await app.collection.delete_one({"_id": item_id})
    if deleted_item.deleted_count:
        return {"message": "Item deleted successfully"}
    raise HTTPException(status_code=404, detail="Item not found")