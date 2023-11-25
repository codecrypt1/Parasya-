from pydantic import BaseModel
from typing import List

class User(BaseModel):
    name: str
    profile_pic: str

class Comment(BaseModel):
    user: User
    title: str
    details: str

class Forum(BaseModel):
    _id: int
    image: str
    title: str
    context: str
    comments: list[Comment]
