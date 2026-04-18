# URL-Short 

A simple URL shortener built with **Node.js**, **Express**, and **MongoDB** — designed for beginners to understand the basics of building a backend web service.

This project lets you convert long URLs into short, shareable links (similar to bit.ly or tinyurl).

---

## What This Does

When a user sends a long URL to this service:

1. It generates a **short unique code** (using `shortid`) for that URL.
2. Saves it to a **MongoDB database**.
3. When someone visits the short URL, the server redirects them to the original long URL.

---

## Technologies Used

✔ Node.js & Express (server)  
✔ MongoDB & Mongoose (database)  
✔ shortid (unique short code generator)  
✔ dotenv (environment variable support)

---

## Features

- Shorten long URLs
- Redirect short URLs to full URLs
- Easy to understand and extend

---

## Prerequisites

Before you begin, make sure you have:

- **Node.js** installed (version 16+ is recommended)
- **MongoDB** running locally or a cloud MongoDB URI

---

## Setup & Installation

1. **Clone the repository**

```bash
git clone https://github.com/Akumar-developer/URL-Short.git
cd URL-Short
```

2. **Install dependencies**

```bash
npm install
```
This installs all required packages listed in package.json.

3. **Configure environment variables**

Create a .env file in the root folder and add:

```env
MONGODB_URI=<your_mongodb_connection_string>
PORT=5000
```

Replace <your_mongodb_connection_string> with your own MongoDB URI.


4. **Start the app**

```bash
npm run dev
```

The server should start on http://localhost:5000.


** Typical Folder Structure**
.
├── controllers/     # Route logic

├── models/          # Mongoose models

├── routes/          # API endpoints

├── index.js         # App entry point

├── connectDB.js     # MongoDB connection

├── package.json

└── .env
