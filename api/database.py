import motor.motor_asyncio
from model import Forum

client = motor.motor_asyncio.AsyncIOMotorClient('mongodb+srv://harikpaug18:admin@cluster0.4wq2bn8.mongodb.net/')
database = client.ForumDB
collection = database.Forum

async def fetch_all_forums():
    forums = []
    cursor = collection.find({})
    async for document in cursor:
        forums.append(Forum(**document))
    return forums