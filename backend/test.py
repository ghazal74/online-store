from pymongo import MongoClient
client = MongoClient(
    "mongodb+srv://ahmedghazal439:QKy7ryXrYahxTsoF@cluster0.i7dkp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
)
print(client.server_info())
