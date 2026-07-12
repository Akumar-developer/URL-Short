
# 🔗 URL-Short

A simple **URL Shortener** built with **Node.js**, **Express**, and **MongoDB**. This project demonstrates how to build a RESTful backend service that converts long URLs into short, shareable links.

The application uses **MongoDB Atlas** for persistent storage and supports running either locally or inside a **Docker container** using a properly optimized multi-stage build.

---

## 🚀 Features

* Generate short URLs from long URLs
* Redirect short URLs to their original destination
* MongoDB Atlas integration
* Environment variable support with `dotenv`
* Multi-stage Docker build for a smaller, production-only image
* Non-root container user for reduced attack surface
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
├── Dockerfile         # Multi-stage containerization
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

## 🐳 Multi-Stage Build: Why and What Changed

This Dockerfile went through a real optimization pass, not just a template copy-paste.

**The mistake:** an earlier version of this Dockerfile ended its runtime stage with `COPY --from=builder /app .` — copying the builder stage's entire directory, including its full `node_modules` (built with devDependencies included). That one line silently overwrote the clean production-only `node_modules` the runtime stage had already installed with `npm ci --omit=dev`. The build was multi-stage in name, but shipped dev dependencies into production anyway.

**The fix:** copy only the specific artifacts the runtime actually needs from the builder stage, instead of the whole directory:

```dockerfile
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/index.js ./
COPY --from=builder /app/controllers ./controllers
COPY --from=builder /app/models ./models
COPY --from=builder /app/routes ./routes
```

**Measured result** (`docker images`, before vs. after the fix):

| | Disk Usage | Content Size |
|---|---|---|
| Before (buggy) | 320MB | 75.3MB |
| After (fixed) | 273MB | 63.1MB |
| **Improvement** | **−14.7%** | **−16.2%** |

The image also runs as a non-root user (`appuser`), created and applied in the runtime stage, rather than running the container as root by default.

**Takeaway:** `COPY --from=builder` copies exactly what you point it at — nothing more, nothing less. Multi-stage builds don't optimize automatically; the discipline is in deciding precisely what crosses the stage boundary.

---

<img width="1366" height="640" alt="Screenshot (12)" src="https://github.com/user-attachments/assets/0e5fd3bd-24e2-4f36-94f2-7f5d03aa76cc" />

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
* The Docker image runs as a non-root user and is built to avoid embedding secrets.

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
