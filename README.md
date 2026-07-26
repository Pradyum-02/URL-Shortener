<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&height=220&color=0:00c6ff,100:0072ff&text=URL%20Shortener&fontSize=42&fontColor=ffffff&animation=fadeIn&fontAlignY=38"/>

# 🔗 URL Shortener

### Production Ready URL Shortening Application built with Node.js, Express.js, MongoDB & Vanilla JavaScript

A full-stack URL Shortener that converts long URLs into short, shareable links with automatic redirection, persistent MongoDB storage, and a clean responsive frontend.

<p>

<img src="https://img.shields.io/badge/Node.js-Backend-green?style=for-the-badge&logo=node.js"/>

<img src="https://img.shields.io/badge/Express.js-API-black?style=for-the-badge&logo=express"/>

<img src="https://img.shields.io/badge/MongoDB-Database-green?style=for-the-badge&logo=mongodb"/>

<img src="https://img.shields.io/badge/Vercel-Deployed-black?style=for-the-badge&logo=vercel"/>

</p>

</div>

---

# 🚀 Live Demo

### Website

🌐 **https://url-shortener-nu-ecru.vercel.app/**

Open the website, paste any long URL, and instantly generate a shortened link.

---

# ✨ Features

- ✅ Convert Long URLs into Short URLs
- ✅ Generate Unique Short Codes
- ✅ Automatic URL Redirection
- ✅ MongoDB Database Storage
- ✅ RESTful Backend API
- ✅ Responsive Frontend
- ✅ Production Deployment
- ✅ Fast & Lightweight

---

# 🛠 Tech Stack

<div align="center">

<img src="https://skillicons.dev/icons?i=html,css,js,nodejs,express,mongodb,git,github,vscode,vercel" />

</div>

### Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose

### Frontend

- HTML5
- CSS3
- JavaScript

---

# 📂 Project Structure

```text
URL-Shortener
│
├── backend
│   ├── src
│   │   ├── config
│   │   ├── controllers
│   │   ├── middleware
│   │   ├── models
│   │   ├── routes
│   │   └── utils
│   │
│   ├── server.js
│   └── package.json
│
└── frontend
    ├── index.html
    ├── style.css
    └── script.js
```

---

# 📌 API Endpoints

## Create Short URL

```http
POST /api/url/shorten
```

### Request

```json
{
  "originalUrl": "https://www.google.com"
}
```

### Response

```json
{
  "success": true,
  "shortUrl": "https://your-backend-url/abc123"
}
```

---

## Redirect

```http
GET /:shortCode
```

Example

```text
https://your-backend-url/abc123
```

Automatically redirects to the original website.

---

# 🔄 Application Flow

```text
User Enters Long URL
          │
          ▼
Frontend Sends API Request
          │
          ▼
Backend Generates Short Code
          │
          ▼
Store in MongoDB Atlas
          │
          ▼
Return Short URL
          │
          ▼
User Opens Short URL
          │
          ▼
Backend Finds Original URL
          │
          ▼
Redirect User
```

---

# 🧪 Try It Yourself

### Live Website

**https://url-shortener-nu-ecru.vercel.app/**

Example URL to shorten:

```text
https://github.com/Pradyum-02
```

Generate a short link and test the automatic redirection.

---

# 🚀 Deployment

### Frontend

- **Vercel**

### Backend

- **Render**

### Database

- **MongoDB Atlas**

---

# 👨‍💻 Developed By

## Pradyum Meshram

### GitHub

https://github.com/Pradyum-02

### Portfolio

https://portfolio-pradyum.vercel.app/

---

<div align="center">

### ⭐ If you found this project useful, consider giving it a Star ⭐

Built with ❤️ using Node.js, Express.js & MongoDB

</div>

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&height=120&section=footer&color=0:00c6ff,100:0072ff"/>

</div>
