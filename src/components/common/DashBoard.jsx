import axios from "axios";
import { useEffect, useState } from "react";
import { Card, CardContent, Typography, Grid, Box } from "@mui/material";
import { Pie, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";

// Register ChartJS components
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
);

const DashBoard = () => {
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [savings, setsavings] = useState(0);
  const [budget, setbudget] = useState(0);
  const userId = localStorage.getItem("id");

  const getFinancialData = async () => {
    try {
      const expenseRes = await axios.get(`/expense/getexpenseUserId/${userId}`);
      const totalExpense = expenseRes.data.data.reduce(
        (sum, item) => sum + item.amount,
        0
      );
      setExpense(totalExpense);

      const incomeRes = await axios.get(`/income/getincomeByUserId/${userId}`);
      const totalIncome = incomeRes.data.data.reduce(
        (sum, item) => sum + item.amount,
        0
      );
      setIncome(totalIncome);

      const budgetRes = await axios.get(`/budget/getbudgetUserId/${userId}`);
      const totalBudget = budgetRes.data.data.reduce(
        (sum, item) => sum + item.amount,
        0
      );
      setbudget(totalBudget);

      setsavings(totalIncome - totalExpense);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getFinancialData();
  }, []);

  const pieChartData = {
    labels: ["Income", "Expense", "Budget"],
    datasets: [
      {
        data: [income, expense, budget],
        backgroundColor: ["#36A2EB", "#FF6384", "#FFCE56"],
      },
    ],
  };

  const lineChartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Income",
        data: [
          income,
          income - 1000,
          income - 2000,
          income - 1500,
          income - 500,
          income,
        ],
        borderColor: "#36A2EB",
        fill: false,
      },
      {
        label: "Expenses",
        data: [
          expense,
          expense + 500,
          expense + 1000,
          expense - 500,
          expense,
          expense + 200,
        ],
        borderColor: "#FF6384",
        fill: false,
      },
      {
        label: "Budget",
        data: [
          budget,
          budget - 500,
          budget + 1000,
          budget - 300,
          budget + 200,
          budget,
        ],
        borderColor: "#FFCE56",
        fill: false,
      },
    ],
  };

  return (
    <Box
      sx={{
        padding: 3,
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #222, #111)",
        color: "#EFEBE9",
        textAlign: "center",
        overflowX: "hidden",
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{ color: "#ff6f61", fontFamily: "Lucida Console" }}
      >
        Welcome Back , User!
      </Typography>
      <div style={{ color: "#ff6f61", fontFamily: "Lucida Console" }}>
        <h5> Budget Buddy Helps You Stay In Control Of Your Finances By Tracking Your Income... </h5>
      </div>
      <br />
      <Grid
        container
        spacing={3}
        sx={{ marginBottom: 3, justifyContent: "center" }}
      >
        {[
          {
            label: "Total Income",
            value: income,
          },
          {
            label: "Total Expenses",
            value: expense,
          },
          {
            label: "Savings",
            value: savings,
          },
          {
            label: "Total Budget",
            value: budget,
          },
        ].map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              sx={{
                background: "#222",
                color: "#EFEBE9",
                borderRadius: "14px",
                boxShadow: "0 10px 30px rgba(255, 111, 97, 0.3)",
                transition:
                  "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0 10px 20px rgba(255, 111, 97, 0.7)",
                },
              }}
            >
              <CardContent>
                <Typography variant="h6" sx={{ color: "#ff6f61" }}>
                  {item.label}
                </Typography>
                <Typography variant="h4">{item.value} ₹</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Grid
        container
        spacing={3}
        sx={{ marginBottom: 3, justifyContent: "center" }}
      >
        <Grid item xs={12} md={6}>
          <Card sx={{ background: "#222", color: "#EFEBE9" }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Financial Breakdown
              </Typography>
              <Pie data={pieChartData} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ background: "#222", color: "#EFEBE9" }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Income, Expense, and Budget Trend
              </Typography>
              <Line data={lineChartData} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>




      <Box
        component="footer"
        sx={{
          backgroundColor: "#111",
          color: "#aaa",
          padding: "2rem 1rem",
          marginTop: "2rem",
          textAlign: "center",
          borderTop: "1px solid #333",
        }}
      >
        <Typography
          variant="h6"
          sx={{ color: "#ff6f61", fontWeight: "bold", mb: 1 }}
        >
          Budget Buddy
        </Typography>

        {/* Navigation Links */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 3,
            flexWrap: "wrap",
            mb: 2,
          }}
        >
          <Typography
            component="a"
            href="#"
            sx={{
              color: "#aaa",
              textDecoration: "none",
              "&:hover": { color: "#ff6f61" },
            }}
          >
            Dashboard
          </Typography>
          <Typography
            component="a"
            href="#"
            sx={{
              color: "#aaa",
              textDecoration: "none",
              "&:hover": { color: "#ff6f61" },
            }}
          >
            Transactions
          </Typography>
          <Typography
            component="a"
            href="#"
            sx={{
              color: "#aaa",
              textDecoration: "none",
              "&:hover": { color: "#ff6f61" },
            }}
          >
            Budgets
          </Typography>
          <Typography
            component="a"
            href="#"
            sx={{
              color: "#aaa",
              textDecoration: "none",
              "&:hover": { color: "#ff6f61" },
            }}
          >
            Settings
          </Typography>
        </Box>

        {/* Social Media Icons */}
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 2 }}>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
              alt="Twitter"
              width="24"
            />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
              alt="Facebook"
              width="24"
            />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733558.png"
              alt="Instagram"
              width="24"
            />
          </a>
        </Box>

        {/* Copyright */}
        <Typography variant="body2">
          © {new Date().getFullYear()} Budget Buddy. All rights reserved.
        </Typography>
        <Typography variant="caption" display="block" sx={{ mt: 1 }}>
          <a href="#" style={{ color: "#aaa", textDecoration: "none" }}>
            Privacy Policy
          </a>{" "}
          |{" "}
          <a href="#" style={{ color: "#aaa", textDecoration: "none" }}>
            Terms of Service
          </a>
        </Typography>
      </Box>
    </Box>
  );
};

export default DashBoard;
