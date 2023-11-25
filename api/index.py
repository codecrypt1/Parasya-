from typing import List
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from motor.motor_asyncio import AsyncIOMotorClient
from bson import ObjectId
from pydantic import BaseModel
from fastapi import FastAPI, HTTPException, Path

from pymongo import MongoClient

import motor.motor_asyncio

client = motor.motor_asyncio.AsyncIOMotorClient(
    'mongodb+srv://harikpaug18:admin@cluster0.4wq2bn8.mongodb.net/')
database = client.ForumDB
collection = database.Forum


async def fetch_all_forums():
    forums = []
    cursor = collection.find({})
    async for document in cursor:
        forums.append(Forum(**document))
    return forums


class User(BaseModel):
    name: str
    profilePic: str


class Comment(BaseModel):
    user: User
    title: str
    details: str


class Forum(BaseModel):
    image: str
    title: str
    context: str
    comments: list[Comment]


app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def get_main():
    try:
        return {"Hello": "World"}
    except Exception as e:
        print(f"An error occurred: {str(e)}")
        raise HTTPException(status_code=500, detail="Internal Server Error")


@app.get("/forum")
async def get_todo():
    try:
        response = await fetch_all_forums()
        return response
    except Exception as e:
        print(f"An error occurred: {str(e)}")
        raise HTTPException(status_code=500, detail="Internal Server Error")

if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="127.0.0.1", port=8000)