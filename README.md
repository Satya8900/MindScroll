# MindScroll
A web application that allows users to share their thoughts, ideas, creativity, and knowledge through blog posts. It provides a simple and engaging platform for writing, publishing, and reading content across various topics.

## Demo

You can try the application live at : https://mindscroll.vercel.app

## Features

- Add, edit, and delete blogs
- Clean and minimal UI with pagination
- Responsive design for mobile and desktop
- Built with modern web technologies
- Secure login with JWT auth and Argon2 hashing
## Tech Stack

- **Frontend**: React, Bootstrap
- **Backend**: Node.js, Express
- **Database**: PostgreSQL
- **Authentication**: JWT, Argon2
- **Others**: Vite, Axios

## Getting Started

Follow these steps to run the project locally.

### Prerequisites

- Node.js and npm installed
- PostgreSQL running locally or via a cloud provider

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Satya8900/MindScroll.git
cd MindScroll
```

2. Install dependencies for both client and server:

```bash
cd client
npm install
cd ../server
npm install
```
3. Set up environment variables:

Create `.env` file in both `client` and `server` directory and copy & paste the respective `.env.example` file.

4. Start the development servers:

- Start the backend:

```bash
cd server
npm run dev
```

- Start the frontend:

```bash
cd client
npm run dev
```

The app should now be running on `http://localhost:5173`.

## Folder Structure

```
MindScroll/
│
├── client/          # React frontend
├── server/          # Express backend
└── README.md        # Project readme
```
## Contributing

Contributions are welcome! Feel free to fork the repository and submit a pull request.
## License

This project is licensed under the [MIT License](https://choosealicense.com/licenses/mit/) .


## Feedback

If you have any feedback, please reach out to us at [linkedin.com/in/satyanp](https://www.linkedin.com/in/satyanp/) .
