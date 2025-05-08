# 📝 Task Overview

A simple and powerful **To-Do List Application** with support for recurring tasks. This project provides users with flexible task scheduling, intuitive UI, and secure authentication.

---

## 🚀 Overview

**Task Overview** is a task management app built using modern web technologies. It allows users to create, update, and manage tasks, including sophisticated recurring task options.

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: [React.js](https://reactjs.org/) with [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **State Management**: React Context API

### Backend
- **Framework**: [Express.js](https://expressjs.com/)
- **Authentication**: JWT (JSON Web Tokens)
- **ORM**: [Sequelize](https://sequelize.org/)
- **Database**: [PostgreSQL](https://www.postgresql.org/)

---

## ✅ Features

### 1. 🗂️ Task Management

- **CRUD Operations**:
  - Create new tasks
  - View task list and details
  - Update tasks
  - Delete tasks

- **Recurring Task Support**:
  - **Standard Frequencies**:
    - Daily
    - Weekly
    - Monthly
    - Yearly
  - **Custom Recurrence Options**:
    - Every X days/weeks/months/years
    - Specific days of the week (e.g., Mon/Wed/Fri)
    - Nth weekday of the month (e.g., 2nd Tuesday)
    - Start date and optional end date

### 2. 🖥️ User Interface

- Clean and responsive UI with Tailwind CSS
- Reusable **Date Picker Component** for recurrence setup
- Visual preview of recurring task dates

---

## 📦 Project Structure


---

## 🔐 Authentication

- JWT-based user authentication
- Secure endpoints for managing personal task data

---

## 📅 Recurrence Logic

Supports complex recurrence rules similar to calendar apps:
- Interval-based (every X units)
- Day-of-week filters
- Month-based logic
- Preview logic helps visualize the next occurrences

---

## 🧪 Coming Soon

- Reminders and notifications
- Drag-and-drop UI for task organization
- Dark mode support

---

## 🏁 Getting Started

### Prerequisites
- Node.js
- PostgreSQL

### Setup

```bash
# Clone the repository
git clone https://github.com/yourusername/task-overview.git
cd task-overview

# Install backend dependencies
cd backend
npm install

# Run database migrations and seeders (Sequelize CLI)
npx sequelize db:migrate
npx sequelize db:seed:all

# Start backend server
npm run dev

# Setup frontend
cd ../frontend
npm install
npm run dev
