# Full-Stack Blog Post Manager

A full-stack web application to create, view, update and delete blog posts. The project follows best practices for backend API design and database integration.

## 🚀 Features

- CRUD operations for blog posts (Create, Read, Update, Delete)
- RESTful API built with Node.js and Express
- Database support (MongoDB or PostgreSQL)
- Error handling with proper validation and logging
- Unit tests for backend reliability
- Security best practices (input validation, sanitized queries)
- Docker support for easy deployment (bonus)


## 🛠️ Tech Stack

- Backend: Node.js, Express.js
- Database: PostgreSQL
- Testing: Jest
- Containerization: Docker (optional)

## ⚙️ Installation & Setup

### 1. Clone Repository
    git clone https://github.com/StephenNeelDurai/fintrellis-blog-server.git
    cd blog-post-manager

### 2. Create Database
    -- 1. Create Database
    CREATE DATABASE fintrellis_blog;

    -- 2. Create User with password
    CREATE USER blog_admin WITH PASSWORD 'StrongPassword123!';

    -- 3. Grant privileges
    GRANT ALL PRIVILEGES ON DATABASE fintrellis_blog TO blog_admin;

    -- 4. Connect to the db and grant schema-level privileges
    \c fintrellis_blog;
    GRANT ALL PRIVILEGES ON SCHEMA public TO blog_admin;


### 3. Install Packages
    npm install
    npm run dev

### 4. 🧪 Testing
    npm test

### 5. 🐳 Docker Setup (Optional)

#### Build and start container
    docker-compose up --build -d
#### Check logs
    docker-compose logs -f
#### Stop and remove
    docker-compose down  

### 👨‍💻 Author

Stephen Neeldurai Gnanaudayakumar

🔗 [LinkedIn](https://www.linkedin.com/in/stephen-neel-durai-g/)