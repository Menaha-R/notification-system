import { useEffect, useState } from "react";

import {
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Select,
  MenuItem,
  Box,
  Chip,
} from "@mui/material";

function App() {

  const [notifications, setNotifications] = useState([]);

  const [filter, setFilter] = useState("");

  const weights = {
    Placement: 3,
    Result: 2,
    Event: 1,
  };

  useEffect(() => {

    const data = [
      {
        ID: 1,
        Type: "Placement",
        Message: "TCS Corporation Hiring",
        Timestamp: "2026-05-18 10:00:00"
      },
      {
        ID: 2,
        Type: "Result",
        Message: "Semester Results Published",
        Timestamp: "2026-05-18 09:00:00"
      },
      {
        ID: 3,
        Type: "Event",
        Message: "Hackathon Tomorrow",
        Timestamp: "2026-05-17 08:00:00"
      },
      {
        ID: 4,
        Type: "Placement",
        Message: "Infosys Recruitment Drive",
        Timestamp: "2026-05-18 11:00:00"
      },
      {
        ID: 5,
        Type: "Event",
        Message: "Farewell Function",
        Timestamp: "2026-05-18 07:30:00"
      }
    ];

    const updated = data.map((item) => {

      const score =
        weights[item.Type] * 10000000000 +
        new Date(item.Timestamp).getTime();

      return {
        ...item,
        score,
      };
    });

    updated.sort((a, b) => b.score - a.score);

    if (filter === "") {

      setNotifications(updated);

    } else {

      const filtered = updated.filter(
        (item) => item.Type === filter
      );

      setNotifications(filtered);
    }

  }, [filter]);

  const priorityNotifications =
    notifications.slice(0, 2);

  const getColor = (type) => {

    if (type === "Placement") {
      return "linear-gradient(135deg, #ff6a00, #ee0979)";
    }

    if (type === "Result") {
      return "linear-gradient(135deg, #36d1dc, #5b86e5)";
    }

    return "linear-gradient(135deg, #11998e, #38ef7d)";
  };

  return (

    <Box
      sx={{
        minHeight: "100vh",
        background:
          "linear-gradient(to right, #141e30, #243b55)",
        py: 5,
      }}
    >

      <Container>

        <Typography
          variant="h3"
          align="center"
          sx={{
            color: "white",
            fontWeight: "bold",
            mb: 4,
          }}
        >
          Campus Notification System
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mb: 4,
          }}
        >

          <Select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            displayEmpty
            sx={{
              background: "white",
              borderRadius: 3,
              minWidth: 220,
            }}
          >

            <MenuItem value="">
              All Notifications
            </MenuItem>

            <MenuItem value="Placement">
              Placement
            </MenuItem>

            <MenuItem value="Result">
              Result
            </MenuItem>

            <MenuItem value="Event">
              Event
            </MenuItem>

          </Select>

        </Box>

        <Typography
          variant="h5"
          sx={{
            color: "#ffd700",
            mb: 2,
            fontWeight: "bold",
          }}
        >
          Priority Notifications
        </Typography>

        <Grid container spacing={3}>

          {priorityNotifications.map((item) => (

            <Grid item xs={12} md={6} key={item.ID}>

              <Card
                sx={{
                  borderRadius: 5,
                  background: getColor(item.Type),
                  color: "white",
                  boxShadow: 8,
                  transition: "0.3s",
                  '&:hover': {
                    transform: "scale(1.03)",
                  },
                }}
              >

                <CardContent>

                  <Chip
                    label={item.Type}
                    sx={{
                      background: "white",
                      color: "black",
                      fontWeight: "bold",
                      mb: 2,
                    }}
                  />

                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold" }}
                  >
                    {item.Message}
                  </Typography>

                  <Typography sx={{ mt: 2 }}>
                    {item.Timestamp}
                  </Typography>

                </CardContent>

              </Card>

            </Grid>

          ))}

        </Grid>

        <Typography
          variant="h5"
          sx={{
            color: "white",
            mt: 5,
            mb: 2,
            fontWeight: "bold",
          }}
        >
          All Notifications
        </Typography>

        <Grid container spacing={3}>

          {notifications.map((item) => (

            <Grid item xs={12} md={4} key={item.ID}>

              <Card
                sx={{
                  borderRadius: 5,
                  background: getColor(item.Type),
                  color: "white",
                  boxShadow: 8,
                  transition: "0.3s",
                  '&:hover': {
                    transform: "translateY(-8px)",
                  },
                }}
              >

                <CardContent>

                  <Chip
                    label={item.Type}
                    sx={{
                      background: "white",
                      color: "black",
                      fontWeight: "bold",
                      mb: 2,
                    }}
                  />

                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold" }}
                  >
                    {item.Message}
                  </Typography>

                  <Typography sx={{ mt: 2 }}>
                    {item.Timestamp}
                  </Typography>

                </CardContent>

              </Card>

            </Grid>

          ))}

        </Grid>

      </Container>

    </Box>
  );
}

export default App;