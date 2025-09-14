CodeQuest
A modern full-stack web application built with React + Vite frontend and NestJS backend

Show Image
Show Image
Show Image
Show Image

🚀 Quick Start
bash
# Clone the repository
git clone <your-repo-url>
cd codeQuest

# Install dependencies for both frontend and backend
npm run install:all

# Start development servers
npm run dev
🏗️ Tech Stack
Frontend	Backend
React 18	NestJS
TypeScript	TypeScript
Vite	Node.js
ESLint	Jest Testing
📁 Project Structure
codeQuest/
├── frontend/          # React + Vite application
├── backend/           # NestJS API
├── package.json       # Root package.json with scripts
└── README.md
🔧 Development
bash
# Frontend (http://localhost:5173)
npm run dev:frontend

# Backend (http://localhost:3000)
npm run dev:backend

# Both simultaneously
npm run dev
📦 Build & Deploy
bash
# Build frontend
npm run build:frontend

# Build backend
npm run build:backend

# Build both
npm run build

# Deploy to production
npm run deploy
🧪 Testing
bash
# Frontend tests
npm run test:frontend

# Backend tests
npm run test:backend

# All tests with coverage
npm run test:all
📜 Available Scripts
Script	Description
npm run dev	Start both frontend and backend in development
npm run build	Build both applications for production
npm run test:all	Run all tests with coverage
npm run lint	Lint both frontend and backend code
npm run clean	Clean build artifacts and node_modules
🚀 Deployment Options
Option 1: NestJS Mau (Recommended)
bash
npm install -g @nestjs/mau
mau deploy
Option 2: Manual Deployment
Frontend: Deploy to Vercel, Netlify, or AWS S3
Backend: Deploy to AWS, Heroku, or DigitalOcean
📚 Documentation
Frontend Documentation
Backend API Documentation
Deployment Guide
🤝 Contributing
Fork the repository
Create a feature branch: git checkout -b feature/amazing-feature
Commit changes: git commit -m 'Add amazing feature'
Push to branch: git push origin feature/amazing-feature
Open a Pull Request
📄 License
MIT License - see LICENSE file for details.

<div align="center"> <strong>Built with ❤️ using modern web technologies</strong> </div>
