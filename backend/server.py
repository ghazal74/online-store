from flask import Flask, request, jsonify
from flask_cors import CORS
from mongoengine import Document, StringField, connect
import bcrypt
import jwt
import os
import logging
import datetime
from dotenv import load_dotenv

# تحميل المتغيرات من .env
load_dotenv()

# إعداد Flask
app = Flask(__name__)
CORS(app)  # تمكين CORS لجميع الطلبات

# إعداد Logging لحفظ الأخطاء في ملف log
logging.basicConfig(
    filename="app.log",
    level=logging.INFO,
    format="%(asctime)s - %(levelname)s - %(message)s",
)

# الاتصال بقاعدة بيانات MongoDB باستخدام MongoEngine
MONGO_URI = os.getenv("MONGO_URI")
connect("Cluster0", host=MONGO_URI)

# مفتاح الأمان لـ JWT
JWT_SECRET = os.getenv("JWT_SECRET", "default_secret_key")


# تعريف نموذج المستخدم باستخدام MongoEngine
class User(Document):
    email = StringField(required=True, unique=True)
    password = StringField(required=True)


# ✅ تسجيل مستخدم جديد
@app.route("/register", methods=["POST"])
def register():
    try:
        data = request.json
        email = data.get("email")
        password = data.get("password")

        if User.objects(email=email).first():
            return jsonify({"message": "User already exists"}), 400

        hashed_password = bcrypt.hashpw(
            password.encode("utf-8"), bcrypt.gensalt()
        ).decode("utf-8")
        user = User(email=email, password=hashed_password)
        user.save()

        logging.info(f"New user registered: {email}")
        return jsonify({"message": "User registered successfully!"}), 201
    except Exception as e:
        logging.error(f"Error in register: {str(e)}")
        return jsonify({"error": str(e)}), 500


# ✅ تسجيل الدخول مع JWT Tokens (Access & Refresh Tokens)
@app.route("/login", methods=["POST"])
def login():
    try:
        data = request.get_json()  # ✅ استخدم get_json() بدلاً من request.json
        email = data.get("email")
        password = data.get("password")

        if not email or not password:
            return jsonify({"message": "Email and password are required"}), 400

        user = User.objects(email=email).first()
        if not user or not bcrypt.checkpw(password.encode("utf-8"), user.password.encode("utf-8")):
            return jsonify({"message": "Invalid email or password"}), 401

        access_token = jwt.encode({"email": email}, JWT_SECRET, algorithm="HS256")
        return jsonify({"access_token": access_token, "email": email}), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500



# ✅ تجديد `Access Token` باستخدام `Refresh Token`
@app.route("/refresh", methods=["POST"])
def refresh_token():
    try:
        data = request.json
        refresh_token = data.get("refresh_token")

        decoded = jwt.decode(refresh_token, JWT_SECRET, algorithms=["HS256"])
        new_access_token = jwt.encode(
            {
                "email": decoded["email"],
                "exp": datetime.datetime.utcnow() + datetime.timedelta(minutes=15),
            },
            JWT_SECRET,
            algorithm="HS256",
        )

        return jsonify({"access_token": new_access_token}), 200
    except jwt.ExpiredSignatureError:
        return jsonify({"message": "Refresh token expired"}), 401
    except Exception as e:
        logging.error(f"Error in refresh_token: {str(e)}")
        return jsonify({"error": str(e)}), 500


# ✅ تسجيل الخروج (حذف `Refresh Token`)
@app.route("/logout", methods=["POST"])
def logout():
    return jsonify({"message": "Logged out successfully!"}), 200


# ✅ صفحة محمية تحتاج إلى `Access Token`
@app.route("/protected", methods=["GET"])
def protected():
    token = (
        request.headers.get("Authorization").split(" ")[1]
        if request.headers.get("Authorization")
        else None
    )
    if not token:
        return jsonify({"message": "Missing token"}), 401

    try:
        decoded = jwt.decode(token, JWT_SECRET, algorithms=["HS256"])
        return jsonify({"message": "You have access", "email": decoded["email"]}), 200
    except jwt.ExpiredSignatureError:
        return jsonify({"message": "Token expired"}), 401
    except Exception as e:
        logging.error(f"Error in protected: {str(e)}")
        return jsonify({"error": str(e)}), 500


@app.route("/", methods=["GET"])
def home():
    return jsonify({"message": "🚀 Flask API is running!"}), 200

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
