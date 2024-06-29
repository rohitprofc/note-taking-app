# Note-Taking App

This is a simple Note-Taking application built with React for the frontend and Express.js with MongoDB for the backend.

## Features

- Add, update, and delete notes
- View a list of all notes

## Technologies Used

- **Frontend**: React
- **Backend**: Express.js
- **Database**: MongoDB
- **HTTP Client**: Axios

## Prerequisites

- Node.js
- npm (Node Package Manager)
- MongoDB

## Installation

1) **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/notes-app.git
   cd notes-app

2) **Backend Setup**:
    - Navigate to Backend 
        - ```cd backend```
    - Install dependencies
        - ```npm install express body-parser cors mongoose dotenv```
    - Create a .env file with your MongoDB URL    
        - ```MONGO_URI=your_mongodb_uri```
    - Start the backend server:    
        - ```npm start```

3) **Frontend Setup**:
    - Navigate to Backend 
        - ```cd frontend```
    - Install dependencies
        - ```npm install react react-dom axios```
    - Start the backend server:    
        - ```npm start```

## Usage
- Open your browser and navigate to http://localhost:3000 to access the app.

- Use the interface to add, edit, or delete notes.

## API Endpoints
- GET /api/notes: Retrieve all notes

- GET /api/notes/

    : Retrieve a note by ID

- POST /api/notes: Create a new note

- PUT /api/notes/

    : Update a note by ID

- DELETE /api/notes/

    : Delete a note by ID

## Troubleshooting
- Ensure MongoDB is running and accessible.
- Check console logs for any errors during development.