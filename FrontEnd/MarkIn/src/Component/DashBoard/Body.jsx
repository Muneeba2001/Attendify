import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { 
  AbsentToday, 
  PresentMonth, 
  PresentToday, 
  PresentWeek, 
  PresentYear,
  AbsentYear
} from "../../Pages/Admin/AdminDashBoard/ActionCreator/AttendanceCount";
import AdminDashBoardCrumb from "../BreadCrumbs/AdminDashBoardCrumb";
import { Card, CardContent, Typography, Avatar, Grid, Box } from "@mui/material";

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
    { title: "Present", subtitle: "Today", value: select.PresentToday },
    { title: "Present", subtitle: "This Week", value: select.PresentWeek },
    { title: "Present", subtitle: "This Month", value: select.PresentMonth },
    {title: "Absent", subtitle: "Today", value: select.AbsentToday,},
    { title: "Present", subtitle: "This Year", value: select.PresentYear, big: true },
    { title: "Absent", subtitle: "This Year", value: select.AbsentYear, big: true }
  ];

  return (
    <div className="container px-10 py-2">
      <Typography variant="h4" color="primary" fontWeight="bold">
        Dashboard
      </Typography>
      <AdminDashBoardCrumb />

      <Grid container spacing={3} className="py-4">
        {cardData.map((card, index) => (
          <Grid
            item
            xs={card.fullWidth ? 12 : 6}
            md={card.big ? 6 : 3}
            key={index}
          >
            <Card elevation={3} sx={{ height: card.big ? 250 : 150, borderRadius: 2 }}>
              <CardContent>
                <Typography variant="h6" color="primary" fontWeight="bold">
                  {card.title}
                </Typography>
                <Typography variant="subtitle2" color="textSecondary">
                  | {card.subtitle}
                </Typography>

                <Box display="flex" alignItems="center" mt={2}>
                  <Avatar sx={{ bgcolor: "lightgray", width: 56, height: 56 }} />
                  <Box ml={2}>
                    <Typography variant="h5" color="primary">
                      {card.value}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      12% increase
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Body;
