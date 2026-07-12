# 🔗 URL-Short

A simple **URL Shortener** built with **Node.js**, **Express**, and **MongoDB**. This project demonstrates how to build a RESTful backend service that converts long URLs into short, shareable links.

The application uses **MongoDB Atlas** for persistent storage and supports running either locally or inside a **Docker container**.

---

## 🚀 Features

* Generate short URLs from long URLs
* Redirect short URLs to their original destination
* MongoDB Atlas integration
* Environment variable support with `dotenv`
* Docker support for containerized deployment
* Beginner-friendly project structure

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* shortid
* dotenv
* Docker

---

## 📁 Project Structure

```text
.
├── controllers/      # Business logic
├── models/           # Mongoose models
├── routes/           # API routes
├── connectDB.js      # MongoDB connection
├── index.js          # Application entry point
├── Dockerfile        # Containerization
├── .dockerignore
├── package.json
└── README.md
```

---

# Running the Project Locally

## 1. Clone the repository

```bash
git clone https://github.com/Akumar-developer/URL-Short.git

cd URL-Short
```

---

## 2. Install dependencies

```bash
npm install
```

---

## 3. Create a `.env` file

Create a `.env` file in the project root.

```env
MONGODB_URI=your_mongodb_atlas_connection_string
PORT=3000
```

Replace `your_mongodb_atlas_connection_string` with your own MongoDB Atlas URI.

---

## 4. Start the development server

```bash
npm run dev
```

The application will be available at

```
http://localhost:3000
```

---

# Running with Docker

## 1. Build the Docker image

```bash
docker build -t url-short .
```

---

## 2. Run the container

```bash
docker run \
-e MONGODB_URI="your_mongodb_atlas_connection_string" \
-e PORT=3000 \
-p 3000:3000 \
url-short
```

The application will be available at

```
http://localhost:3000
```

---

## Environment Variables

| Variable      | Description                        |
| ------------- | ---------------------------------- |
| `MONGODB_URI` | MongoDB Atlas connection string    |
| `PORT`        | Port on which the application runs |

---

## Security Notes

* Never commit your `.env` file.
* Keep your MongoDB Atlas credentials private.
* Use environment variables to provide sensitive configuration at runtime.
* The Docker image is designed to run the application without embedding secrets.

---

## API Overview

### Create a Short URL

**POST**

```
/url
```

Example Request

```json
{
  "url": "https://www.example.com"
}
```

---

### Redirect to Original URL

**GET**

```
/:urlId
```

The server looks up the short URL in MongoDB and redirects the client to the original URL.

---


This project is licensed under the MIT License.
