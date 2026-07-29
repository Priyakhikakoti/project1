# 🌐 Priyakhi Kakoti - Personal Portfolio Website

A modern and responsive personal portfolio website developed to showcase my skills, projects, internship experience, resume, and contact information. The portfolio also features an AI chatbot, voice assistant, GitHub integration, and a PHP-MySQL contact form.

---

## 🚀 Features

- Responsive Portfolio Website
- Modern UI with Smooth Animations
- AI Chatbot
- Voice Assistant (Speech Recognition & Speech Synthesis)
- GitHub Repository Integration
- Resume Preview & Download
- Login & Signup Pages
- Contact Form using PHP & MySQL
- Mobile Friendly Design
- SEO Optimized

---

## 🛠️ Technologies Used

### Frontend
- HTML5
- CSS3
- JavaScript

### Backend
- PHP

### Database
- MySQL

### Tools & Environment
- XAMPP
- Visual Studio Code
- Git & GitHub

### APIs
- GitHub REST API
- Web Speech API

---

## 📂 Project Structure

```text
project1/
│
├── 404.html
├── animation.js
├── chatbot.css
├── chatbot.js
├── contact.php
├── db.php
├── github.js
├── index.html
├── index.js
├── login.css
├── login.html
├── magnetic.js
├── portfolio_db.sql
├── preview.png
├── profile.webp
├── README.md
├── resume.css
├── resume.html
├── resume.pdf
├── script.js
├── signup.css
├── signup.html
└── style.css
```

---

## ⚙️ Installation & Setup

### Step 1: Install XAMPP

Download and install XAMPP from:

https://www.apachefriends.org/

---

### Step 2: Copy the Project

Copy the **project1** folder into:

```text
C:\xampp\htdocs\
```

Your project path should be:

```text
C:\xampp\htdocs\project1
```

---

### Step 3: Start Apache & MySQL

Open the **XAMPP Control Panel** and start:

- Apache
- MySQL

---

### Step 4: Import the Database

1. Open your browser and visit:

```
http://localhost/phpmyadmin
```

2. Create a new database named:

```
portfolio_db
```

3. Click **Import**.

4. Select the file:

```
portfolio_db.sql
```

5. Click **Go**.

---

### Step 5: Configure Database Connection

Open **db.php** and verify your database credentials.

Example:

```php
$conn = new mysqli(
    "localhost",
    "root",
    "",
    "portfolio_db",
    3307
);
```

> **Note:** Change the MySQL port if your XAMPP installation uses a different port.

---

### Step 6: Run the Project

Open your browser and visit:

```
http://localhost/project1/
```

---

## 📸 Screenshots

Add screenshots of the following pages:

- Home Page
- About Section
- Projects Section
- GitHub Integration
- AI Chatbot
- Contact Form
- Resume Page

---

## 🗄️ Database

The database file included with this project is:

```
portfolio_db.sql
```

Import this file into phpMyAdmin before running the project.

---

## 👩‍💻 Author

**Priyakhi Kakoti**

GitHub: https://github.com/Priyakhikakoti

LinkedIn: "https://www.linkedin.com/in/priyakhi-kakoti/"

Email: priyakhikakoti@gmail.com

---

## 📄 License

This project was developed for educational and portfolio purposes.