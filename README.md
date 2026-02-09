# 🤖 AI eBook Creator - Full Stack Application

An AI-powered platform designed to help authors and creators generate, edit, and export professional-grade eBooks in minutes. From generating outlines to crafting chapter content and designing covers, this application streamlines the entire eBook creation process.

![Project Preview](./src/assets/eBookCreator_cover.png);

## 🚀 Key Features

- **🧠 AI-Driven Workflow**: Generate full book outlines and detailed chapters using advanced AI models like Google Gemini and Groq.
- **🎨 Custom Cover Design**: Upload and manage high-quality book covers for your projects.
- **✍️ Interactive eBook Editor**: A powerful markdown-based editor for refining and personalizing your content.
- **📑 Multi-Format Export**: Export your finished books to professional **PDF** and **DOCX** formats.
- **👤 User Profiles**: Customize your author profile with names and avatars.
- **🔒 Secure Auth**: JWT-based authentication system for private project management.

## 🛠️ Tech Stack

### Frontend & UI
- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Notifications**: [React Hot Toast](https://react-hot-toast.com/)
- **Drag & Drop**: [@dnd-kit/core](https://dndkit.com/)

### Backend & API
- **Environment**: [Node.js](https://nodejs.org/)
- **Framework**: [Express.js](https://expressjs.com/)
- **Language**: [CommonJS](https://nodejs.org/api/modules.html)
- **Authentication**: [JSON Web Token (JWT)](https://jwt.io/)
- **File Handling**: [Multer](https://github.com/expressjs/multer)
- **Document Generation**: [PDFKit](https://pdfkit.org/) & [DOCX](https://docx.js.org/)

### Artificial Intelligence
- **Models**: [Google Generative AI (Gemini)](https://ai.google.dev/) & [Groq SDK](https://groq.com/)

### Database & Storage
- **Database**: [MongoDB](https://www.mongodb.com/)
- **ODM**: [Mongoose](https://mongoosejs.com/)

## 🏁 Getting Started

### Prerequisites
- **Node.js**: v18+ 
- **MongoDB**: A running instance (Local or Atlas)
- **API Keys**: Google Gemini or Groq API key

### Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd AI_eBook_Creator
   ```

2. **Setup Backend**:
   ```bash
   cd backend
   npm install
   # Create a .env file with your MONGO_URI, JWT_SECRET, and API_KEY
   npm run dev
   ```

3. **Setup Frontend**:
   ```bash
   cd ../frontend
   npm install
   npm run dev
   ```

## 📂 Architecture

- `/frontend`: React application containing the dashboard, editor, and landing page.
- `/backend`: Express server handling AI generation, file exports, and user data.
- `/backend/models`: Mongoose schemas for Users and Books.
- `/backend/controllers`: Business logic for AI generation and authentication.

---

Developed with ❤️ by [Shoriful Dev]
