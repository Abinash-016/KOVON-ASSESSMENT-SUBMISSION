# 📦 Kovon Backend Hiring Assignment

## 📌 Objective

This project implements a backend service for Kovon's Global Job
Marketplace using:

-   Node.js
-   TypeScript
-   Express.js
-   MongoDB Atlas
-   Mongoose

The system supports:

-   Storing candidates
-   Storing job roles
-   Allowing candidates to apply for jobs
-   Automatic eligibility score calculation
-   Recruiter shortlisting functionality
-   REST API exposure

------------------------------------------------------------------------

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository

``` bash
git clone <your-repository-link>
cd kovon-backend
```

### 2️⃣ Install Dependencies

``` bash
npm install
```

### 3️⃣ Create Environment File

Create a `.env` file in the root directory:

``` env
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
```

Example:

``` env
PORT=5000
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/kovon_db?retryWrites=true&w=majority
```

### 4️⃣ Run the Server

``` bash
npm run dev
```

Server runs at:

    http://localhost:5000

------------------------------------------------------------------------

## 🔄 Application Flow

    Client (Postman / API Client)
            ↓
    Express Routes
            ↓
    Controllers
            ↓
    Service Layer (Business Logic)
            ↓
    Repository Layer (Database Access)
            ↓
    MongoDB Atlas

------------------------------------------------------------------------

## 🧩 Layer Responsibilities

### 📌 Routes

-   Defines API endpoints
-   Connects endpoints to controllers

### 📌 Controllers

-   Handles HTTP request & response
-   Delegates business logic to services

### 📌 Services

Contains core business logic: - Eligibility score calculation - Status
determination (ELIGIBLE / REJECTED) - Sorting logic - Shortlist
restriction validation

### 📌 Repositories

-   Handles database operations using Mongoose

### 📌 Models

-   Defines MongoDB schema structure

------------------------------------------------------------------------

## 📊 Database Schema

### 👤 Candidate

  Field               Type
  ------------------- ---------
  name                String
  skill               String
  experience          Number
  languageScore       Number
  documentsVerified   Boolean
  createdAt           Date

------------------------------------------------------------------------

### 💼 Job

  Field              Type
  ------------------ --------
  title              String
  country            String
  minExperience      Number
  minLanguageScore   Number
  createdAt          Date

------------------------------------------------------------------------

### 📄 Application

  Field              Type
  ------------------ -----------------------------------
  candidateId        ObjectId
  jobId              ObjectId
  eligibilityScore   Number
  status             ELIGIBLE / REJECTED / SHORTLISTED
  createdAt          Date

------------------------------------------------------------------------

## 🏗 Architecture Overview

                Client (Postman)
                        |
                        v
                   Express Routes
                        |
                        v
                    Controllers
                        |
                        v
                  Service Layer
              (Business Logic)
                        |
                        v
                Repository Layer
              (Database Access)
                        |
                        v
                 MongoDB Atlas

------------------------------------------------------------------------

## 🚀 Tech Stack Summary

  Layer       Technology Used
  ----------- -----------------
  Runtime     Node.js
  Language    TypeScript
  Framework   Express.js
  Database    MongoDB Atlas
  ODM         Mongoose

------------------------------------------------------------------------
