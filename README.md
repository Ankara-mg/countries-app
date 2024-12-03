# Countries Info App

## Overview

This project contains both the frontend and backend components for a simple web application. This application is useful for visualizing detailed information about countries.

## Installation Guide

1. Clone the repository.

```bash
git clone https://github.com/Ankara-mg/countries-app.git
```

### Install the Backend

1. Move to the backend directory.

```bash
cd backend
```

2. Install the dependencies.

```bash
npm install
```

3. Add/modify the .env file.

Example:
```bash
# Port where the backend service is running
PORT = 3000

# Public APIs necessary for fetching data
DN_API_URL = https://date.nager.at/api/v3/
CN_API_URL = https://countriesnow.space/api/v0.1/countries/
```

4. Start the server.

```bash
npm start
```

This will start the backend server on http://localhost:3000/ by default.

### Install the frontend

1. From the root directory, navigate to the frontend folder.

```bash
cd frontend
```

2. Install the dependencies.

```bash
npm install
```

3. Add/modify the .env file.

Example:
```bash
# Port where the frontend service is running
VITE_PORT = 3001

# URL to the backend service
VITE_API_URL = "http://localhost:3000/"
```

4. Start the server.

```bash
npm start
```
This will start the frontend server on http://localhost:3001/ by default. Navigate to your browser to see the application.
