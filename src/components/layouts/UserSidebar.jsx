import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { UserNavbar } from "./UserNavbar";

export const UserSidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation(); // Get current route

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <UserNavbar toggleSidebar={toggleSidebar} />
      <aside
        className={`app-sidebar shadow ${isSidebarOpen ? "open" : "d-none"}`}
        style={{
          backgroundColor: "black",
          color: "#f5f5f5",
          minHeight: "100vh",
          width: "260px",
          maxHeight: "100%",
          padding: "20px 10px",
          transition: "all 0.3s ease-in-out",
          position: "relative",
          zIndex: 1000,
        }}
      >
        <div className="sidebar-brand" style={{ marginBottom: "20px", marginLeft: "10px" }}>
          <Link to="/" className="brand-link" style={{ textDecoration: "none", color: "#ff6f61" }}>
            <h4 style={{ margin: 0 }}>Budget Buddy</h4>
          </Link>
        </div>

        <nav className="mt-2">
          <ul className="nav sidebar-menu flex-column" style={{ listStyle: "none", padding: 0 }}>
            {[
              { name: "Dashboard", path: "/user/dashboard" },
              { name: "Income", path: "/user/income" },
              { name: "Add New Budget", path: "/user/budget" },
              { name: "Expense", path: "/user/expense" },
              { name: "Transaction", path: "/user/transaction" },
              { name: "View Transaction", path: "/user/viewscreen" },
              { name: "View Income", path: "/user/viewincome" },
              { name: "View Expense", path: "/user/viewexpense" },
              { name: "View Budget", path: "/user/viewbudget" },
              // { name: "Expense Breakdown", path: "/expensebreakdown" },
              // { name: "Budget Planner", path: "/budgetplanner" },
            ].map((item) => (
              <li key={item.path} className="nav-item">
                <Link
                  to={item.path}
                  className={`nav-link ${
                    location.pathname === item.path ? "active" : ""
                  }`}
                  style={{
                    color: location.pathname === item.path ? "#fff" : "#c5c5c5",
                    backgroundColor: location.pathname === item.path ? "#ff6f61" : "transparent",
                    padding: "10px",
                    display: "block",
                    textDecoration: "none",
                    borderRadius: "8px",
                  }}
                >
                  <i className="nav-icon bi bi-circle" />
                  <p style={{ margin: 0 }}>{item.name}</p>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      <main className="app-main">
        <Outlet />
      </main>
    </>
  );
};
