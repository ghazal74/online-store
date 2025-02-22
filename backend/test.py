import jwt

token = jwt.encode({"test": "value"}, "secret", algorithm="HS256")
print(token)
