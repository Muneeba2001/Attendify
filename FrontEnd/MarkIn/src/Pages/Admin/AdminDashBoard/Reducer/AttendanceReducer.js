import { act } from "react";


const initialState = {
  totalEmployees: 0,
  totalStudents: 0,
  totalAttendance: 0,
  employeesPresent: 0,
  employeesAbsent: 0,
  studentsPresent: 0,
  studentsAbsent: 0,
};

const AttendanceCount = (state = initialState, action) => {
  switch (action.type) {
    case "SET_TOTAL_EMPLOYEES":
      return { ...state, totalEmployees: action.payload };
    case "SET_TOTAL_STUDENTS":
      return { ...state, totalStudents: action.payload };
      case "SET_TOTAL_ATTENDANCE":
      return { ...state, totalAttendance: action.payload };
    case "SET_EMPLOYEES_PRESENT":
      return { ...state, employeesPresent: action.payload };
    case "SET_EMPLOYEES_ABSENT":
      return { ...state, employeesAbsent: action.payload };
    case "SET_STUDENTS_PRESENT":
      return { ...state, studentsPresent: action.payload };
    case "SET_STUDENTS_ABSENT":
      return { ...state, studentsAbsent: action.payload };

    default:
      return state;
  }
};

export default AttendanceCount;
