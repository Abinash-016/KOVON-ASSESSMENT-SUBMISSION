Kovon Backend Hiring Assignment
📌 Objective

This project implements a backend service for Kovon’s global job marketplace using:

Node.js

TypeScript

Express.js

MongoDB Atlas

Mongoose

The system supports:

Storing candidates

Storing job roles

Allowing candidates to apply for jobs

Automatic eligibility score calculation

Recruiter shortlisting functionality

REST API exposure



⚙ Setup Instructions
1️⃣ Clone the Repository
git clone <your-repository-link>
cd kovon-backend

2️⃣ Install Dependencies
npm install

3️⃣ Create Environment File

Create a .env file in the root directory:

PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string


Example:

PORT=5000
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/kovon_db?retryWrites=true&w=majority

4️⃣ Run the Server
npm run dev


Server will run at:

http://localhost:5000

🔄 Application Flow

Client sends request (Postman / API client)

Route matches endpoint

Controller handles HTTP request/response

Service executes business logic

Repository interacts with MongoDB

Response returned to client

🧩 Layer Responsibilities
Routes

Defines API endpoints and connects them to controllers.

Controllers

Handles request and response logic.
Does not contain business logic.

Services

Contains core business logic:

Eligibility score calculation

Status determination (ELIGIBLE / REJECTED)

Sorting logic

Shortlist restriction validation

Repositories

Handles database operations using Mongoose.

Models

Defines MongoDB schema structure.

📊 Architecture Diagram

Below is the architecture of the implemented system:

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



             📊 Database Schema
Candidate

name (String)

skill (String)

experience (Number)

languageScore (Number)

documentsVerified (Boolean)

createdAt (Date)

Job

title (String)

country (String)

minExperience (Number)

minLanguageScore (Number)

createdAt (Date)

Application

candidateId (ObjectId, ref: Candidate)

jobId (ObjectId, ref: Job)

eligibilityScore (Number)

status (ELIGIBLE | REJECTED | SHORTLISTED)

createdAt (Date)