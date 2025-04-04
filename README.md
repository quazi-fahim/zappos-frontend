# Zappos Fullstack Application (Frontend & Backend)

## 🚀 Overview
This project is a full-stack e-commerce application similar to Zappos, built using **Vite, React, Redux (without slices), Chakra UI, Express, and MongoDB**.

---

## 🛠️ Features
### 🌐 Frontend
- **User Authentication** (Login, Logout)
- **Product Listing Page** (Fetch products from API)
- **Cart Functionality** (Add/Remove items from cart)
- **Chakra UI for Styling**
- **Redux for State Management** (Without Redux Toolkit slices)
- **Routing using React Router**

### 🔧 Backend
- **User Authentication (JWT-based)**
- **Product Management (CRUD operations)**
- **Order Management**
- **MongoDB Database**
- **Express API with CORS and Middleware Handling**

---

## 🏗️ Tech Stack
### 📌 Frontend:
- **Vite, React, Chakra UI**
- **Redux, React-Redux, Redux-Thunk**
- **React Router DOM**
- **Axios for Data Fetching**

### 📌 Backend:
- **Node.js, Express.js**
- **MongoDB with Mongoose**
- **JWT Authentication**
- **CORS for Cross-Origin Requests**

---

## 📥 Installation
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-username/zappos-fullstack.git
cd zappos-fullstack
```

### 2️⃣ Install Dependencies
#### 🔹 Frontend
```sh
cd frontend
npm install
```

#### 🔹 Backend
```sh
cd backend
npm install
```

### 3️⃣ Environment Variables
Create a `.env` file in the `backend` directory and add:
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 4️⃣ Run the Application
#### ▶️ Start Backend Server
```sh
cd backend
npm run dev
```
The backend will run at `http://localhost:5000/`.

#### ▶️ Start Frontend Server
```sh
cd frontend
npm run dev
```
The frontend will run at `http://localhost:5173/`.

---

## 📂 Folder Structure
```
zappos-fullstack/
  ├── frontend/
  │   ├── src/
  │   │   ├── components/    # Reusable components
  │   │   ├── pages/         # Page components (Login, Products, Cart)
  │   │   ├── redux/         # Redux store, reducers, actions
  │   │   ├── App.jsx        # Main application component
  │   │   ├── main.jsx       # Entry point
  │   ├── public/            # Static assets
  │   ├── package.json
  │   ├── vite.config.js
  │   ├── .env
  ├── backend/
  │   ├── controllers/       # Controller files
  │   ├── middlewares/       # Authentication & validation middleware
  │   ├── models/            # Mongoose models (User, Product, Order)
  │   ├── routes/            # API routes
  │   ├── config/            # Database configuration
  │   ├── server.js          # Entry point for Express server
  │   ├── package.json
  │   ├── .env
```

---

## 🔗 API Endpoints
### 🔑 Authentication
- `POST /api/auth/register` - User Registration
- `POST /api/auth/login` - User Login

### 🛒 Products
- `GET /api/products` - Fetch all products
- `POST /api/products` - Add a new product (Admin only)
- `PUT /api/products/:id` - Update product details (Admin only)
- `DELETE /api/products/:id` - Delete a product (Admin only)

### 📦 Orders
- `POST /api/orders` - Place an order
- `GET /api/orders/:userId` - Get user orders

---

## 🚀 Deployment
### 🏗️ Build Frontend for Production
```sh
cd frontend
npm run build
```
This generates a `dist/` folder with optimized assets.

### 🖥️ Deploy Backend
Use **Heroku, Render, or any cloud provider**:
```sh
cd backend
npm start
```

---



