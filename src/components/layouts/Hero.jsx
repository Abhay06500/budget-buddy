import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const HeroPage = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => navigate("/login");
  const handleSignUpClick = () => navigate("/signup");

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <header
      style={{
        background: "linear-gradient(to bottom, #222, #111)",
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        boxSizing: "border-box",
        overflowX: "hidden",
        color: "#EFEBE9",
        fontFamily: "system-ui"
      }}
    >
      {/* Hero Text */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ textAlign: "center", paddingTop: "50px" }}
      >
        <h1 style={{ fontSize: "70px", color: "#ff6f61", fontFamily: "fantasy" }}>
          BUDGET BUDDY
        </h1>
        <h2 style={{ fontSize: "36px", marginTop: "10px" }}>
          THE JOYFUL BUDGETING APP
        </h2>
        <p style={{ fontSize: "18px", marginTop: "20px" }}>
          Say hello to your new financial companion,<br />
          bringing you peace of mind today.
        </p>
      </motion.div>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        style={{ marginTop: "40px", display: "flex", gap: "20px" }}
      >
        <button
          onClick={handleSignUpClick}
          style={{
            width: "140px",
            backgroundColor: "#ff6f61",
            color: "#fff",
            height: "50px",
            fontSize: "18px",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            transition: "transform 0.3s ease"
          }}
          onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
        >
          Get Started
        </button>

        <button
          onClick={handleLoginClick}
          style={{
            width: "140px",
            backgroundColor: "#333",
            color: "#fff",
            height: "50px",
            fontSize: "18px",
            border: "1px solid #ff6f61",
            borderRadius: "10px",
            cursor: "pointer",
            transition: "transform 0.3s ease"
          }}
          onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
        >
          Login
        </button>
      </motion.div>

      {/* Image Cards Section */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "50px",
          marginTop: "60px",
          flexWrap: "wrap"
        }}
      >
        {/* Card 1 */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.03 }}
          style={{
            borderRadius: "16px",
            overflow: "hidden",
            padding: "20px",
            background: "#1c1c1c",
            boxShadow: "0 10px 30px rgba(255, 111, 97, 0.3)",
            maxWidth: "350px",
            textAlign: "center",
            color: "#EFEBE9"
          }}
        >
          <h2>Track all your savings</h2>
          <motion.img
            src="https://buddy.download/wp-content/themes/nyamost/new_assets/img/tilt.webp"
            alt="Budget App"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            style={{
              width: "100%",
              borderRadius: "12px",
              marginTop: "10px"
            }}
          />
        </motion.div>

        {/* Card 2 */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.03 }}
          style={{
            borderRadius: "16px",
            padding: "20px",
            background: "#1c1c1c",
            boxShadow: "0 10px 30px rgba(255, 111, 97, 0.3)",
            maxWidth: "350px",
            color: "#EFEBE9"
          }}
        >
          <h2 style={{ textAlign: "center" }}>Set up your budget</h2>
          <motion.img
            src="https://buddy.download/wp-content/themes/nyamost/new_assets/img/spend.webp"
            alt="Budget Tracker"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{
              height: "500px",
              width: "300px",
              display: "block",
              margin: "20px auto",
              borderRadius: "12px"
            }}
          />
        </motion.div>
      </div>
      <br />
      {/* Key Feature Cards Row (with icons) */}
      <div
        style={{
          marginTop: "80px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          flexWrap: "wrap"
        }}
      >
        {[
          {
            title:  <h2>  CREATE BUDGETS  </h2>,
            desc:   <h5>  Stop overspending and plan ahead with ease.</h5>,
            bg: "#6A1B9A",
            to: "/createbudget",
            img: "https://cdn-icons-png.flaticon.com/512/1149/1149168.png"
          },
          {
            title:    <h2>   TRACK EXPENSES </h2>,
            desc:  <h5> See where your money goes, instantly.</h5>,
            bg: "#00838F",
            to: "/trackexpenses",
            img: "https://cdn-icons-png.flaticon.com/512/1441/1441021.png"
          },
          {
            title: <h2> TRANSACTIONS</h2>,
            desc: <h5>  Log every penny with clean records.</h5>,
            bg: "#37474F",
            to: "/detailtransaction",
            img: "https://cdn-icons-png.flaticon.com/512/891/891462.png"
          }
        ].map((item, index) => (
          <Link to={item.to} key={index} style={{ textDecoration: "none" }}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
              style={{
                width: "300px",
                height: "350px",
                backgroundColor: item.bg,
                borderRadius: "20px",
                padding: "20px",
                color: "#fff",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)",
                cursor: "pointer",
                transition: "transform 0.3s ease"
              }}
            >
              <img
                src={item.img}
                alt={item.title}
                style={{
                  width: "80px",
                  height: "80px",
                  marginBottom: "20px",
                  filter: "brightness(95%)"
                }}
              />
              <h2 style={{ fontSize: "20px", marginBottom: "10px" }}>{item.title}</h2>
              <p style={{ fontSize: "16px" }}>{item.desc}</p>
            </motion.div>
          </Link>
        ))}
      </div>
      <br /><br />
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




    </header>






  );
};

export default HeroPage;

