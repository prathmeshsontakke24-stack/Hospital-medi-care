# 🏥 Hospital-MediCare

Hospital-MediCare is a modern healthcare web application that allows patients to explore medical services, view doctors, book appointments, and contact the hospital online. The project is built using React and provides a responsive and user-friendly interface for healthcare management.

---

## 🚀 Features

<img width="1887" height="762" alt="Screenshot 2026-07-03 234112" src="https://github.com/user-attachments/assets/b2218d1b-64f5-418a-8c6f-ad1a24cc5061" />
<img width="1877" height="782" alt="webScreen2" src="https://github.com/user-attachments/assets/3362a0a4-f689-42a6-a3a5-6b2217ae2787" />
<img width="1890" height="815" alt="Screenshot 2026-07-03 234324" src="https://github.com/user-attachments/assets/3da81fb2-4d6d-465d-9d75-e5ce3aec0ce5" />


### 🏠 Home Page

* Attractive landing page
* Hospital introduction
* Quick navigation to services and appointments
* Responsive design

### 👨‍⚕️ Doctors Section

* Display doctor profiles
* Doctor specialization details
* Experience and qualification information
* Book Appointment button for each doctor

### 📅 Appointment Booking

* Appointment booking form
* Select doctor from available specialists
* Enter patient details
* Appointment confirmation message after submission

### 💡 Innovation Section

* Highlights hospital technologies and facilities
* Healthcare innovation showcase
* Medical service information

### 📞 Contact Section

* Contact form for patient inquiries
* User-friendly interface
* Form validation

### 📧 Newsletter Subscription

* Subscribe to hospital updates
* Email input validation
* Success message after subscription

### 📱 Responsive Design

* Mobile-friendly layout
* Tablet and desktop support
* Modern UI/UX

---

## 🛠️ Technologies Used

### Frontend

* React.js
* JavaScript (ES6+)
* HTML5
* CSS3

### Libraries

* Axios
* React Hooks
* React Router DOM

---

## 📂 Project Structure

```bash
Hospital-MediCare/
│
├── public/
│
├── src/
│   ├── assets/
│   │   ├── images/
│   │   └── icons/
│   │
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Doctors.jsx
│   │   ├── Innovation.jsx
│   │   ├── Contact.jsx
│   │   ├── Subscribe.jsx
│   │   └── Footer.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Appointment.jsx
│   │   └── Confirmation.jsx
│   │
│   ├── services/
│   │   └── api.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
└── README.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/your-username/Hospital-MediCare.git
```

### Navigate to Project

```bash
cd Hospital-MediCare
```

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

Application will run on:

```bash
http://localhost:5173
```

---

## 🔌 API Integration

The project uses Axios for fetching doctor and healthcare-related data.

### Why Axios?

* Easy HTTP requests
* Automatic JSON transformation
* Better error handling
* Request and response interceptors
* Cleaner syntax than Fetch API

Example:

```javascript
import axios from "axios";

const response = await axios.get(
  "https://jsonplaceholder.typicode.com/users"
);

console.log(response.data);
```

---

## 📋 Appointment Workflow

1. User visits Home Page.
2. User selects a doctor.
3. User clicks "Book Appointment".
4. Appointment form opens.
5. User enters required details.
6. Form validation checks data.
7. Appointment is submitted.
8. Confirmation page displays success message.

---

## 🎨 UI Features

* Clean Healthcare Theme
* Smooth Navigation
* Interactive Buttons
* Responsive Layout
* Modern Card Design
* Professional Color Scheme

---

## 🔮 Future Enhancements

* User Authentication
* Patient Dashboard
* Doctor Dashboard
* Online Consultation
* Payment Gateway Integration
* Medical Records Management
* Appointment History
* Admin Panel

---

## 👨‍💻 Author

Developed as a Frontend Healthcare Management Project using React, JavaScript, CSS, and Axios.

---

## 📜 License

This project is created for educational and portfolio purposes.
