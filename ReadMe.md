# Attendify

Attendify is a comprehensive attendance management system designed to record and manage the attendance of students and employees. The system provides functionalities for registering users, recording attendance, and generating reports based on user activities.

## Table of Contents

- [Features](#features)
- [Backend](#backend)
  - [Technologies](#technologies)
  - [API Endpoints](#api-endpoints)
- [Frontend](#frontend)
  - [Technologies](#technologies-1)
  - [Setup](#setup-1)
  - [Components](#components)
- [License](#license)

## Features

- User registration and authentication
- Attendance recording (Check-in and Check-out)
- Attendance reports (daily, weekly, monthly, yearly)
- User management (CRUD operations for users)

## Backend

### Technologies

- Node.js
- Express.js
- MongoDB
- Mongoose
- bcrypt
- uuid

### API Endpoints

#### User Authentication
- `POST /Register` - Register a new user
- `POST /Login` - User login
- `GET /employees` - Get all registered users
- `PUT /UpdateEmployee/:id` - Update user details
- `DELETE /DeleteEmployee/:id` - Delete a user

#### Student Management
- `GET /students` - Get all students
- `GET /students/:id` - Get a single student by ID
- `POST /students` - Create a new student
- `PUT /students/:id` - Update a student by ID
- `DELETE /students/:id` - Delete a student by ID

#### Attendance Management
- `GET /attendance` - Get all attendance records
- `PUT /attendance` - Update attendance records
- `PATCH /EmployeeCheckIn/:id` - Check-in an employee
- `PATCH /EmployeeCheckOut/:id` - Check-out an employee
- `GET /AttendanceCount/:duration` - Get attendance count (today, week, month, year)
- `GET /AbsentCount/:duration` - Get absent count (today, week, month, year)


## FrontEnd

### Technologies

- React
- Redux
- Tailwind CSS
- Axios
- Formik
- Yup


### Components
- `Authentication
Login.jsx` - User login form
- `Register.jsx` - User registration form
- `ForgetPassword.jsx ` - Password recovery form
### Dashboard
- `DashBoard.jsx` - Main dashboard displaying 
attendance  statistics
- `AttendanceSheet.jsx` - Attendance recording and viewing

### User Management
- `Employee.jsx` - Manage employee details
- `Student.jsx` - Manage student details

### Reports
- `Report.jsx` - Generate attendance reports

### Layouts
- `DefaultLayout.jsx` - Default layout for the application

### BreadCrumbs
- `AdminDashBoardCrumb.jsx` - Breadcrumb for Admin Dashboard
- `EmployeeBreadCrumb.jsx` - Breadcrumb for Employee Management
- `ManageBreadCrumb.jsx` - Breadcrumb for Manage Section
- `ReportBreadCrumb.jsx` - Breadcrumb for Reports
- `TrackBreadCrumb.jsx` - Breadcrumb for Tracking Attendance

### Dashboard Components
- `Header.jsx` - Header component for the dashboard
- `SideBar.jsx` - Sidebar component for the dashboard
- `Body.jsx` - Body component for the dashboard