import axios from "axios";
import "./assets/css/adminlte.css";
import "./assets/css/adminlte.min.css";
import { Login } from "./components/common/Login";
import { Signup } from "./components/common/Signup";
import { SignUp1 } from "./components/common/SignUp1";
import { Home } from "./components/layouts/Home";
import { UserSidebar } from "./components/layouts/UserSidebar";
import { Route, Routes, useLocation } from "react-router-dom";

import { useEffect } from "react";
import PrivateRoutes from "./hooks/PrivateRoutes";
import { Expense } from "./components/expenses/Expense";
import Hero from "./components/layouts/Hero";
import { Income } from "./components/income/Income";
import { Transaction } from "./components/transaction/Transaction";
import { ViewMyScreens } from "./components/common/ViewMyScreen";
import { UpdateMyScreen } from "./components/common/UpdateMyScreen";
import DashBoard from "./components/common/DashBoard";
import { CreateBudget } from "./components/budget/CreateBudget";
import { TrackExpenses } from "./components/expenses/TrackExpenses";
import { TransactionDetails } from "./components/transaction/TransactionDetails";
import UserList from "./components/user/UserList";
import { ResetPassword } from "./components/common/ResetPassword";
import { AdminSidebar } from "./components/admin/AdminSidebar";
import { AdminNavbar } from "./components/admin/AdminNavbar";
import { AdminIncome } from "./components/admin/AdminIncome";
import { AdminBudget } from "./components/admin/AdminBudget";
import { AdminExpense } from "./components/admin/AdminExpense";
import { AdminTransaction } from "./components/admin/AdminTransaction";
import { AdminLandingPage } from "./components/admin/AdminLandingPage";
import { ViewIncome } from "./components/income/ViewIncome";
import { ViewExpense } from "./components/expenses/ViewExpense";
import { ViewBudget } from "./components/budget/ViewBudget";
import BudgetPlanner from "./components/budget/BudgetPlanner";
import ExpenseBreakdown from "./components/expenses/ExpenseBreakdown ";
import ForgotPassword from "./components/common/ForgotPassword";
// import { UserNavbar } from "./components/layouts/UserNavbar"

function App() {
  axios.defaults.baseURL = "http://localhost:3000";

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/login" || location.pathname === "/signup") {
      document.body.className = ""; // Remove the unwanted class for login and signup
    } else {
      document.body.className =
        "layout-fixed sidebar-expand-lg bg-body-tertiary sidebar-open app-loaded";
    }
  }, [location.pathname]);

  return (
    <div
      className={
        location.pathname === "/login" || location.pathname === "/signup"
          ? ""
          : "app-wrapper"
      }
    >
      <Routes>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="" element={<Hero></Hero>}></Route>
        <Route path="/signup1" element={<SignUp1></SignUp1>}></Route>
        <Route path="forgotpassword" element={<ForgotPassword></ForgotPassword>}></Route>

        <Route path="/resetpassword/:token" element={<ResetPassword></ResetPassword>}></Route>
        <Route path="createbudget" element={<CreateBudget></CreateBudget>}></Route>
        <Route path="adminincome" element={<AdminIncome></AdminIncome>}></Route>
        <Route path="adminbudget" element={<AdminBudget></AdminBudget>}></Route>
        <Route path="adminexpenes" element={<AdminExpense></AdminExpense>}></Route>
        <Route path="admintransaction" element={<AdminTransaction></AdminTransaction>}></Route>
        <Route path="trackexpenses" element={<TrackExpenses></TrackExpenses>}></Route>
        <Route path="detailtransaction" element={<TransactionDetails></TransactionDetails>}></Route>
        <Route path="/userlist" element={<UserList></UserList>}></Route>

        <Route path="/budgetplanner" element={<BudgetPlanner></BudgetPlanner>}></Route>
        <Route path="/expensebreakdown" element={<ExpenseBreakdown></ExpenseBreakdown>}></Route>
        <Route path="" element={<PrivateRoutes></PrivateRoutes>}>
          <Route path="/user" element={<UserSidebar></UserSidebar>}>
            <Route path="updatescreen/:id" element={<UpdateMyScreen></UpdateMyScreen>}></Route>
            <Route path="dashboard" element={<DashBoard></DashBoard>}></Route>
            <Route path="income" element={<Income></Income>}></Route>
            <Route path="budget" element={<Home></Home>}></Route>
            <Route path="expense" element={<Expense></Expense>}></Route>
            <Route path="transaction" element={<Transaction></Transaction>}></Route>
            <Route path="viewscreen" element={<ViewMyScreens></ViewMyScreens>}></Route>
            <Route path="viewincome" element={<ViewIncome></ViewIncome>}></Route>
            <Route path="viewexpense" element={<ViewExpense></ViewExpense>}></Route>
            <Route path="viewbudget" element={<ViewBudget></ViewBudget>}></Route>

          </Route>
        </Route>
        <Route path="/sidebar" element={<AdminSidebar></AdminSidebar>}>
          <Route path="landingpage" element={<AdminLandingPage></AdminLandingPage>}></Route>
        </Route>
        <Route path="/navbar" element={<AdminNavbar></AdminNavbar>}></Route>
      </Routes>
    </div>
  );
}

export default App;
