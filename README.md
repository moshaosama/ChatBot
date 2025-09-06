# 🤖 AI Chatbot — Chat Completions Edition

![AI Animation](https://media.giphy.com/media/bAI7Zt5T4BxwO/giphy.gif)

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Open%20Now-00CC88?style=for-the-badge&logo=vercel)](https://chat-bot-plum-nine.vercel.app/)
![Built with](https://img.shields.io/badge/Chat%20Completions-API-8A2BE2?style=for-the-badge&logo=openai)
![Next.js](https://img.shields.io/badge/Next.js-14-000?style=for-the-badge&logo=next.js)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)

---

## 🌐 Live Demo

👉 **Try it now:** [chat-bot-plum-nine.vercel.app](https://chat-bot-plum-nine.vercel.app/)

![Chatbot Demo](https://media.giphy.com/media/Kc1L5Kw6ut8xWx6sSX/giphy.gif)

---

## ✨ Features

- ⚡ Streaming responses (typing effect)
- 🧩 Chat History
- 🧠 System Prompt (custom persona)
- 🌍 Multilingual UI (i18n ready)
- 🎨 Polished design with Tailwind + shadcn/ui
- 🚀 1-Click Deploy (Vercel)

---

## 🖼️ Screens & Aesthetic

![AI Visual 1](https://media.giphy.com/media/duzpaTbCUy9Vu/giphy.gif)
![AI Visual 2](https://media.giphy.com/media/fwbZnTftCXVocKzfxR/giphy.gif)
![AI Visual 3](https://media.giphy.com/media/coxQHKASG60HrHtvkt/giphy.gif)

---

## 🏗️ Architecture

```txt
app/
 ├─ (chat)/page.tsx        # Chat UI
 ├─ api/chat/route.ts      # Chat Completions API route
 └─ layout.tsx             # Theme & Providers
components/
 ├─ Chat.tsx               # Streaming logic
 ├─ Message.tsx            # Message bubble
 └─ SendMessage.tsx        # Input form
lib/
 ├─ ai.ts                  # AI client
 └─ utils.ts               # Helpers
