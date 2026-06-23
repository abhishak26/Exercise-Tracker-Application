# Exercise Tracker Application

A full-stack exercise tracking app with a React frontend and an Express/Mongoose backend. Users can create, view, update, and delete workouts with fields for title, load, and reps.

## Project Structure

- `backend/` - Express API connected to MongoDB
- `frontend/` - React client that consumes the API

## Features

- View all saved workouts
- Add a new workout
- Update an existing workout
- Delete a workout
- Store workout data in MongoDB

## Tech Stack

- Frontend: React, React Router, Context API
- Backend: Node.js, Express, Mongoose
- Database: MongoDB

## Requirements

- Node.js and npm
- A running MongoDB database

## Setup

### 1. Install dependencies

From the project root, install dependencies for both apps:

```bash
cd backend
npm install

cd ../frontend
npm install
```

### 2. Configure environment variables

Create a `.env` file inside `backend/` with your MongoDB connection string and server port:

```env
MONGO_URI=your_mongodb_connection_string
PORT=4000
```

The frontend is already configured to proxy API requests to `http://localhost:4000`.

## Running the App

### Start the backend

```bash
cd backend
npm run dev
```

If you are not using `nodemon`, you can run:

```bash
npm start
```

### Start the frontend

In a separate terminal:

```bash
cd frontend
npm start
```

The frontend runs on `http://localhost:3000` by default.

## API Endpoints

All workout routes are mounted under `/api/workouts`.

- `GET /api/workouts` - Get all workouts
- `GET /api/workouts/:id` - Get a single workout
- `POST /api/workouts` - Create a workout
- `PATCH /api/workouts/:id` - Update a workout
- `DELETE /api/workouts/:id` - Delete a workout

## Workout Schema

Each workout document includes:

- `title` - string, required
- `load` - number, required
- `reps` - number, required
- `createdAt` and `updatedAt` timestamps

## Notes

- The backend will not start unless MongoDB is reachable and `MONGO_URI` is set.
- The frontend fetches workouts from `/api/workouts` and updates state through a context provider.