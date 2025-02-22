from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager, create_access_token
from pymongo import MongoClient
import os

app = Flask(__name__)
CORS(app)  # السماح لـ CORS لجميع الطلبات
bcrypt = Bcrypt(app)
app.config["JWT_SECRET_KEY"] = "your_jwt_secret"  # مفتاح أمان JWT
jwt = JWTManager(app)

# الاتصال بقاعدة بيانات MongoDB
MONGO_URI="mongodb+srv://ahmedghazal439:QKy7ryXrYahxTsoF@cluster0.i7dkp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
client = MongoClient(MONGO_URI)
db = client["Cluster0"]
users_collection = db["users"]

# 📌 تسجيل مستخدم جديد
@app.route("/register", methods=["POST"])
def register():
    data = request.json
    email = data.get("email")
    password = data.get("password")

    if users_collection.find_one({"email": email}):
        return jsonify({"message": "User already exists"}), 400

    hashed_password = bcrypt.generate_password_hash(password).decode("utf-8")
    users_collection.insert_one({"email": email, "password": hashed_password})

    return jsonify({"message": "User registered successfully!"}), 201

# 📌 تسجيل الدخول
@app.route("/login", methods=["POST"])
def login():
    data = request.json
    email = data.get("email")
    password = data.get("password")

    user = users_collection.find_one({"email": email})
    if not user or not bcrypt.check_password_hash(user["password"], password):
        return jsonify({"message": "Invalid email or password"}), 401

    access_token = create_access_token(identity=email)
    return jsonify({"token": access_token, "email": email}), 200

# تشغيل السيرفر
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
