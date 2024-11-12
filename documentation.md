# Hospital Management System Documentation

## Introduction
Welcome to the **Hospital Management System (HMS)**! This solution provides a streamlined way for hospitals to manage key aspects of their operations, including appointments, staff management, and patient records. The system is designed for ease of use and to support the efficient functioning of healthcare institutions.

---

## Features

### Core Features
- **Authentication**: Secure login and registration process to protect sensitive information.
- **Admin Panel**: Provides full control over hospital data and management operations.
- **Booking Appointment**: A dedicated section for patients to easily book appointments.
- **Doctor Panel**: Allows doctors to update their profiles, manage appointments, and access patient data.
- **Receptionist Panel**: Enables receptionists to manage patient appointments and contact staff.

### Additional Features
- **Role-based Access**: Different functionalities based on user roles (Admin, Doctor, Receptionist, etc.)
- **Responsive Design**: Tailored user interfaces that work seamlessly across devices (desktop, tablet, mobile).
- **Theme Toggle**: Light and Dark mode options to enhance user experience.

---

## Technologies Used
The Hospital Management System has been developed using the following technologies:

- **Node.js**: A JavaScript runtime for building the backend of the application.
- **Express.js**: A lightweight framework that simplifies the creation of RESTful APIs for the application.
- **MongoDB**: A NoSQL database used to store hospital data, including patient details, doctor profiles, appointments, and more.
- **React**: A frontend library for building user interfaces in a highly dynamic and responsive way.
- **Tailwind CSS**: A utility-first CSS framework that facilitates the creation of responsive layouts and clean, customizable designs.

### Useful Links:
- [Node.js](https://nodejs.org/) - Official website for Node.js.
- [MongoDB](https://www.mongodb.com/) - Learn about MongoDB and how it powers your database.
- [Express.js](https://expressjs.com/) - Visit Express.js for detailed documentation.
- [React](https://react.dev/) - React is the frontend technology used to build dynamic user interfaces.
- [Tailwind CSS](https://tailwindcss.com/) - Explore Tailwind CSS for building responsive and user-friendly designs.

---

## Prerequisites

Before running the Hospital Management System on your local machine, ensure you have the following software installed:

1. **Node.js**: Required to run the application and install dependencies.
   - Visit the [Node.js Download page](https://nodejs.org/) and install the latest stable version.
   - After installation, verify it by running:
     ```bash
     node -v
     npm -v
     ```

2. **MongoDB**: This application uses MongoDB as the database. Follow these steps:
   - Download MongoDB from the [MongoDB Download Center](https://www.mongodb.com/try/download/community).
   - Install MongoDB based on your operating system. After installation, start the MongoDB server by running:
     ```bash
     mongod
     ```
   - **Note**: If you’re running MongoDB locally, ensure the default MongoDB URI (`mongodb://localhost:27017/`) is configured correctly in your application settings.

3. **Git**: Git is used to clone the repository (optional, but recommended for easier access).
   - Download Git from the [official Git website](https://git-scm.com/).
   - Verify installation by running:
     ```bash
     git --version
     ```

---

## Installation

Follow these steps to install and run the Hospital Management System locally:

1. **Clone the repository**:
   - Open a terminal and run the following command to clone the repository:
     ```bash
     git clone https://github.com/UmairZakria/HMS-Project
     ```

2. **Navigate to the frontend project folder**:
   ```bash
   cd Frontend
   ```

3. **Install frontend dependencies**:
   - Run the following command to install the required dependencies:
     ```bash
     npm install
     ```

4. **Run the frontend**:
   - After installation, you can start the frontend by running:
     ```bash
     npm run dev
     ```

5. **Navigate to the backend project folder**:
   - Change the directory to the backend folder:
     ```bash
     cd Backend
     ```

6. **Install backend dependencies**:
   - Run the following command to install backend dependencies:
     ```bash
     npm install
     ```

7. **Run the backend server**:
   - Start the backend server using:
     ```bash
     nodemon
     ```

---

## Running the Project

### 1. Access the Application
   - Once both the frontend and backend are running, open your web browser and visit [http://localhost:3000](http://localhost:3000) to access the application.

### 2. Using the Application
   - The system will provide different access levels based on the user role (Admin, Doctor, Receptionist).
   - You will be able to navigate through different features such as **Appointments**, **Patient Management**, and more.

---

## Admin Panel Overview

The **Admin Panel** is the heart of the Hospital Management System. It provides comprehensive access to manage hospital data.

### 1. **Manage Records**
   - **Doctors**: Add, edit, view, or delete doctor profiles. Manage their schedules.
   - **Receptionists**: Add, edit, view, or delete receptionist profiles.
   - **Departments**: Organize hospital departments (e.g., Cardiology, Neurology). Easily add, edit, or delete departments as needed.
   - **Appointments**: View all appointments, schedule new appointments.
   - **Admins**: Add or remove other admins,who can access the Admin Panel.

### 2. **Settings**
   - **Update Admin Credentials**: Change your admin email, password, or display name.


### 3. **Messages**
   - **View Messages**: Admins can view messages submitted by users via the **Contact Us** page. Respond to inquiries, provide support, or gather feedback.

### 4. **Theme Toggle**
   - **Switch Themes**: Choose between a Light or Dark theme for the Admin Panel. The theme toggle is located at the top of the Admin Panel interface for easy access.

---

## Doctor Portal Overview

The **Doctor Portal** is where medical professionals can manage their patient records and appointments.

### Key Features:
- **Patient Management**: Doctors can access a list of their scheduled patients.
- **Appointment Schedule**: Doctors can view and manage upcoming appointments. They can also update their availability for new appointments.


---

## Receptionist Portal Overview

The **Receptionist Portal** helps receptionists manage appointments and contact staff for coordination.

### Key Features:
- **Appointment Scheduling**: Receptionists can schedule, update, or cancel patient appointments based on doctor availability.



---

## User Features

### 1. **Appointments**
   - Users can easily book appointments with available doctors through the **Appointment Booking** page.
     ```bash
     /Booknow
     ```

### 2. **Message**
   - Users can send messages to the admin using the **Contact Us** page to ask questions, submit feedback, or request assistance.
     ```bash
     /contact
     ```

---