# Simple Chat API

This project is a real-time chat API built using NestJS and Redis, designed to serve as a backend for a chat application. It uses WebSockets to enable real-time communication between users and includes features like storing messages in Redis.

## Features
- Real-time messaging using WebSockets
- Message storage in Redis
- Simple user management
- JWT Authentication

## Getting Started

Follow these instructions to set up and run the project.

### Prerequisites
- Node.js (>= 14.x)
- Redis server

### Setup Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/simple-chat-api.git
   cd simple-chat-api
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up Redis to run on your local machine.
4. Run the development server:
   ```bash
   npm run start:dev
   ```

### Usage
The API runs on `http://localhost:3000`. You can connect via a WebSocket client to `/chat` to send and receive messages.

## Learning Objectives
- Understand how to set up a NestJS application with WebSockets.
- Learn how to integrate Redis for real-time data storage and retrieval.
- Develop a simple chat application architecture.

## Author
- Your Name

## License
MIT