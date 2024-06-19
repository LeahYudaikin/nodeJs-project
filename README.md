# Node.js Project for Coordination System

## Project Description
This project is developed to allow help seekers to submit requests and volunteers to volunteer to assist with these requests. The system provides a server-side API interface for managing various data within the system.

## Attachments
- **Postman Collection**: A JSON file containing all the API endpoints with sample uses and tests.

## Installation and Running
1. **Installing Dependencies**: Run `npm install` to install all required dependencies.
2. **Running**: Start the server by running `npm start`. The server will run on HOST = '127.0.0.1' and PORT = 8080.

## Project Management
### Main Files
- `server.js`: Entry point file for the server.
- `routes/`: Contains route definitions for each separate resource in the API.
- `controllers/`: Contains business logic for each resource.
- `models/`: Defines data models and access to them.

## Core API Features
- All APIs are based on REST principles and are divided into separate resources.
- Data management through MongoDB as the database.

## Data Structure
- **Help Request**: Location, description, phone, status, number of people, priority code, volunteer code.
- **Priorities**: Priority values (low, medium, high, critical).
- **Status**: Waiting, in progress, completed.
- **Volunteers**: First name, last name, phone, list of specialties.
- **Location**: Location code, name.

## Thank You
I appreciate the opportunity to present this project. If you have any questions or comments, please feel free to contact me.

Thank you and enjoy the project!
