# 🎭 Emotion Reflector

Emotion Reflector is a modern **full-stack AI-powered web app** that analyzes user-written reflections or thoughts and predicts the underlying **emotion, confidence score, and emoji** in real time.

It combines the power of **FastAPI (Python)** for fast backend processing with a **Next.js (React + TypeScript) frontend**, designed with elegant modern UI (Tailwind CSS & gradient transitions) and deployed seamlessly in the cloud.

---

## 🚀 Live Demo
Frontend: [https://response-frontend.vercel.app](https://response-frontend.vercel.app)  
Backend (API): [https://response-app-backend.onrender.com/analyze](https://response-app-backend.onrender.com/analyze)

---

## ✨ Features
- 🧠 Predict emotion from free text (using keyword-based NLP logic)
- 📊 Show confidence score & matching emoji
- 💻 Beautiful, responsive frontend with glassmorphism & gradient UI
- ⚡ Real-time interaction with backend API
- 🌐 Deployed on Render (Python) & Vercel (Next.js)

---

## 🛠️ Technologies Used
### Frontend:
- **Next.js** (React + TypeScript)
- **Tailwind CSS** – modern utility-first styling
- **Axios** – for HTTP requests
- **Vercel** – frontend deployment

### Backend:
- **FastAPI** – high-performance Python framework
- **Pydantic** – request validation
- **Uvicorn** – ASGI server
- **Render** – backend deployment
- **CORS middleware** – to enable frontend-backend communication

---

## 📦 Folder Structure (simplified)
```plaintext
/response-frontend     ← Next.js app
  /components
    EmotionForm.tsx    ← UI & API integration
  /pages
    index.tsx          ← Home page

/response-backend      ← FastAPI app
  main.py              ← API & emotion analysis logic
```
# 🏗 How to Run Locally
📌 Prerequisites:
Node.js ≥ 18

Python ≥ 3.8

pip

(Optional) virtualenv

# 🔧 Setup Backend (FastAPI)
bash
Copy
Edit
# Clone repo & go to backend folder
cd response-backend

# (Optional) Create virtual environment
python -m venv env
source env/bin/activate   # On Windows: env\Scripts\activate

# Install dependencies
pip install fastapi uvicorn

# Run the server
uvicorn main:app --host=0.0.0.0 --port=8000

🌐 Deployment
Frontend: Deploy to Vercel

Backend: Deploy to Render (free web service) with main.py entry and uvicorn main:app --host=0.0.0.0 --port=8000

Ensure correct CORS setup in FastAPI:

python
Copy
Edit
origins = [
    "http://localhost:3000",
    "https://response-frontend.vercel.app"
]
✅ Why this project matters

This project demonstrates:

Building & deploying modern, full-stack AI tools

Writing clean, modular code (TypeScript & Python)

Connecting frontend & backend securely (CORS, environment variables)

Designing beautiful, user-friendly interfaces with advanced CSS & transitions

Cloud deployment with real URLs – ready to show in your portfolio or resume


Built with by me  Surya Pratap Singh







