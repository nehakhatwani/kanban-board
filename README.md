# Kanban Board | Frontend Web Application

A production-ready **Kanban Board application** built using **React, TypeScript, and Vite** as part of a frontend assignment.  
The application allows users to manage tasks efficiently across different workflow stages with a clean and responsive UI.

##  Live Demo
https://kanban-board-phi-virid.vercel.app/login

##  Project Overview

This project demonstrates real-world **frontend development skills**, including component-based architecture, client-side routing, state management, drag-and-drop interactions, and production deployment.

##  Features

- User Login and Logout flow  
- Create and manage tasks  
- Kanban workflow with:
  - Todo
  - In Progress
  - Done
- Drag-and-drop task movement between columns  
- Button-based task status updates  
- Responsive pastel-themed UI  
- Client-side routing with React Router  
- Deployed on Vercel with SPA routing support  


##  Tech Stack

- **React**
- **TypeScript**
- **Vite**
- **Tailwind CSS**
- **React Router DOM**
- **Zustand (State Management)**
- **@hello-pangea/dnd (Drag & Drop)**
- **Vercel (Deployment)**

---

##  Folder Structure

kanban-board/
├── src/
│ ├── app/
│ ├── pages/
│ ├── components/
│ ├── store/
│ ├── hooks/
│ ├── services/
│ ├── types/
│ ├── utils/
│ ├── index.css
│ └── main.tsx
├── public/
├── vercel.json
├── package.json
└── README.md


## ⚙️ Installation & Local Setup

```bash
git clone https://github.com/nehakhatwani/kanban-board.git
cd kanban-board
npm install
npm run dev

   ## Application runs at :
   http://localhost:5173


## Deployment

Deployed using Vercel
## vercel.json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
