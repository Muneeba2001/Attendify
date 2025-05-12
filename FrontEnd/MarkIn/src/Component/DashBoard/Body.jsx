import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setTotalEmployees,
  setTotalStudents,
  setTotalAttendance,
  setEmployeesPresent,
  setEmployeesAbsent,
  setStudentsAbsent,
  setStudentsPresent,
} from "../../Pages/Admin/AdminDashBoard/ActionCreator/AttendanceCount";
import AdminDashBoardCrumb from "../BreadCrumbs/AdminDashBoardCrumb";
import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Grid,
  Box,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { AccessTime, People } from "@mui/icons-material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

const Body = () => {
  const dispatch = useDispatch();
  const select = useSelector((state) => state.attendance);
  dispatch(setTotalEmployees());
  dispatch(setTotalStudents());
  dispatch(setTotalAttendance());
  dispatch(setEmployeesPresent());
  dispatch(setEmployeesAbsent());
  dispatch(setStudentsPresent());
  dispatch(setStudentsAbsent());

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const cardData = [
    {
      title: "Total Employees",
      value: select.totalEmployees,
      icon: <People />,
      diff: "+2 new employees added",
    },
    {
      title: "Total Students",
      value: select.totalStudents,
      icon: <People />,
      diff: "+2 new students added",
    },
    {
      title: "Total Attendance Today",
      value: select.totalAttendance,
      icon: <AccessTime sx={{ color: "#00bcd4" }} />,
      diff: "students and employees",
    },
    {
      title: "Employees Present",
      value: select.employeesPresent,
      icon: <CheckCircleOutlineIcon sx={{ color: "green" }} />,
      diff: "-10% Less than yesterday",
    },
    {
      title: "Employees Absent",
      value: select.employeesAbsent,
      icon: <HighlightOffIcon sx={{ color: "red" }} />,
      diff: "+5% Increase than yesterday",
    },
    {
      title: "Students Present",
      value: select.studentsPresent,
      icon: <CheckCircleOutlineIcon sx={{ color: "green" }} />,
      diff: "-10% Less than yesterday",
    },
    {
      title: "Students Absent",
      value: select.studentsAbsent,
      icon: <HighlightOffIcon sx={{ color: "red" }} />,
      diff: "+5% Increase than yesterday",
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "#0f0f0f",
        minHeight: "100vh",
        color: "#fff",
        px: 6,
        py: 4,
      }}
    >
      <Typography
        variant="h5"
        sx={{ fontWeight: "bold", color: "#fff", mb: 2 }}
      >
        Dashboard
      </Typography>
      <AdminDashBoardCrumb />

      <Grid container spacing={3}>
        {/* Real-time Clock */}
        <Grid item xs={12} md={3}>
          <Card sx={{ backgroundColor: "#1e1e1e", color: "#fff", p: 2 }}>
            <Typography variant="subtitle2" color="gray">
              Realtime Insight
            </Typography>
            <Typography variant="h4" sx={{ my: 1 }}>
              {new Date().toLocaleTimeString()}
            </Typography>
            <Typography variant="body1" color="gray">
              Today: {new Date().toLocaleDateString("en-UK")}
            </Typography>
            <Box mt={2}>
              <button className="rounded bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700">
                Advanced Configuration
              </button>
            </Box>
          </Card>
        </Grid>

        {/* Stat Cards */}
        {cardData.map((card, index) => (
          <Grid item xs={12} md={3} key={index}>
            <Card sx={{ backgroundColor: "#1e1e1e", color: "#fff", p: 2 }}>
              <Box display="flex" justifyContent="space-between">
                <Box>
                  <Typography variant="subtitle2" color="gray">
                    {card.title}
                  </Typography>
                  <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                    {card.value}
                  </Typography>
                  <Typography variant="body2" color="gray">
                    {card.diff}
                  </Typography>
                </Box>
                <Avatar sx={{ bgcolor: "#2d2d2d" }}>{card.icon}</Avatar>
              </Box>
            </Card>
          </Grid>
        ))}

        {/* Attendance Comparison Chart */}
        <Grid item xs={12}>
          <Card sx={{ backgroundColor: "#1e1e1e", color: "#fff", p: 2 }}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="subtitle1">
                Attendance Comparison Chart
              </Typography>
              <ToggleButtonGroup color="primary" exclusive>
                <ToggleButton
                  value="daily"
                  sx={{ color: "#fff", borderColor: "#555" }}
                >
                  Daily
                </ToggleButton>
                <ToggleButton
                  value="weekly"
                  sx={{ color: "#fff", borderColor: "#555" }}
                >
                  Weekly
                </ToggleButton>
                <ToggleButton
                  value="monthly"
                  sx={{ color: "#fff", borderColor: "#555" }}
                >
                  Monthly
                </ToggleButton>
              </ToggleButtonGroup>
            </Box>
            {/* You can place your Chart component here */}
            <Box mt={3} height={250} bgcolor="#0f0f0f" borderRadius={2}>
              {/* Placeholder for chart */}
              <Typography align="center" color="gray">
                Chart goes here
              </Typography>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Body;
