import axios from "axios";

export const setTotalEmployees = () => async(dispatch) => {
    try {
        const res = await axios.get(`http://localhost:3000/stats/totalEmployees`);
        dispatch({ type: 'TOTAL_EMPLOYEES', payload: res.data.total });
    } catch (err) {
        console.log("Error fetching total employees", err);
    }
};

export const setTotalStudents = () => async(dispatch) => {
    try {
        const res = await axios.get(`http://localhost:3000/stats/totalStudents`);
        dispatch({ type: 'TOTAL_STUDENTS', payload: res.data.total });
    } catch (err) {
        console.log("Error fetching total students", err);
    }
};

export const setTotalAttendance = () => async(dispatch) => {
    try {
        const res = await axios.get(`http://localhost:3000/stats/totalStudents`);
        dispatch({ type: 'TOTAL_ATTENDANCE', payload: res.data.total });
    } catch (err) {
        console.log("Error fetching total students", err);
    }
};

export const setEmployeesPresent = () => async(dispatch) => {
    try {
        const res = await axios.get(`http://localhost:3000/stats/employeesPresent`);
        dispatch({ type: 'EMPLOYEES_PRESENT', payload: res.data.count });
    } catch (err) {
        console.log("Error fetching present employees", err);
    }
};

export const setEmployeesAbsent = () => async(dispatch) => {
    try {
        const res = await axios.get(`http://localhost:3000/stats/employeesAbsent`);
        dispatch({ type: 'EMPLOYEES_ABSENT', payload: res.data.count });
    } catch (err) {
        console.log("Error fetching absent employees", err);
    }
};

export const setStudentsPresent = () => async(dispatch) => {
    try {
        const res = await axios.get(`http://localhost:3000/stats/studentsPresent`);
        dispatch({ type: 'STUDENTS_PRESENT', payload: res.data.count });
    } catch (err) {
        console.log("Error fetching present students", err);
    }
};

export const setStudentsAbsent = () => async(dispatch) => {
    try {
        const res = await axios.get(`http://localhost:3000/stats/studentsAbsent`);
        dispatch({ type: 'STUDENTS_ABSENT', payload: res.data.count });
    } catch (err) {
        console.log("Error fetching absent students", err);
    }
};
