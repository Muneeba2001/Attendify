import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  AbsentToday,
  PresentMonth,
  PresentToday,
  PresentWeek,
  PresentYear,
  AbsentYear,
} from "../../Pages/Admin/AdminDashBoard/ActionCreator/AttendanceCount";
import AdminDashBoardCrumb from "../BreadCrumbs/AdminDashBoardCrumb";
import { Card, CardContent, Typography, Avatar, Grid, Box, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { AccessTime, People, EventAvailable, Schedule, ExitToApp } from "@mui/icons-material";

const Body = () => {
  const dispatch = useDispatch();
  const select = useSelector((state) => state.attendance);

  useEffect(() => {
    dispatch(PresentToday());
    dispatch(PresentWeek());
    dispatch(PresentMonth());
    dispatch(PresentYear());
    dispatch(AbsentYear());
    dispatch(AbsentToday());
  }, [dispatch]);

  const cardData = [
    { title: "Total Employees", value: 452, icon: <People />, diff: "+2 new employees added" },
    { title: "On Time", value: 360, icon: <EventAvailable />, diff: "-10% Less than yesterday" },
    { title: "Late Arrival", value: 62, icon: <Schedule />, diff: "+5% Increase than yesterday" },
    { title: "Early Departures", value: 6, icon: <ExitToApp />, diff: "-10% Less than yesterday" },
  ];

  return (
    <Box sx={{ backgroundColor: "#0f0f0f", minHeight: "100vh", color: "#fff", px: 6, py: 4 }}>
      <Typography variant="h5" sx={{ fontWeight: "bold", color: "#fff", mb: 2 }}>
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
              <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded text-sm">
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
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Typography variant="subtitle1">Attendance Comparison Chart</Typography>
              <ToggleButtonGroup color="primary" exclusive>
                <ToggleButton value="daily" sx={{ color: "#fff", borderColor: "#555" }}>
                  Daily
                </ToggleButton>
                <ToggleButton value="weekly" sx={{ color: "#fff", borderColor: "#555" }}>
                  Weekly
                </ToggleButton>
                <ToggleButton value="monthly" sx={{ color: "#fff", borderColor: "#555" }}>
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
