


// import axios from "axios";
// import { useEffect } from "react";
// import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";

// export const Expense = () => {
//   const getExpense = async () => {
//     const res = await axios.get("/expense/getexpense");
//     console.log(res.data);
//   };

//   const navigate = useNavigate();

//   const handleclick = () => {
//     navigate("/user/dashboard");
//   };

//   useEffect(() => {
//     getExpense();
//   }, []);

//   const { register, handleSubmit } = useForm();

//   const submitHandler = async (data) => {
//     alert("Submitted...");
//     console.log("Data:", data);
//     const userId = localStorage.getItem("id");
//     data.userId = userId;
//     const res = await axios.post("/expense/addexpense", data);
//     console.log(res.data.data.Category);
//     const response = await axios.post("/category/addcategory", {
//       name: res.data.data.Category,
//       userId: userId,
//     });
//     console.log(res.data);
//     console.log(response);
//   };

//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         textAlign: "center",
//         alignItems: "center",
//         minHeight: "100vh",
//         background: "#222",
//         padding: "20px",
//         width: "1650px",
//       }}
//     >
//       <form
//         onSubmit={handleSubmit(submitHandler)}
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           width: "450px",
//           maxWidth: "1000px",
//           padding: "30px",
//           backgroundColor: "#222",
//           borderRadius: "12px",
//           boxShadow: "0 5px 15px rgba(255, 204, 0, 0.3)",
//           color: "white",
//           textAlign: "center",
//           fontFamily: "'Poppins', sans-serif",
//         }}
//       >
//         <h2
//           style={{ marginBottom: "20px", color: "#ffcc00", fontWeight: "bold" }}
//         >
//           Add Expense
//         </h2>

//         <input
//           type="date"
//           {...register("period")}
//           style={{
//             width: "100%",
//             padding: "12px",
//             borderRadius: "8px",
//             border: "1px solid #ffcc00",
//             marginBottom: "15px",
//             fontSize: "15px",
//           }}
//         />

//         <input
//           type="text"
//           placeholder="Category"
//           {...register("Category")}
//           style={{
//             width: "100%",
//             padding: "12px",
//             borderRadius: "8px",
//             border: "1px solid #ffcc00",
//             marginBottom: "15px",
//             fontSize: "15px",
//           }}
//         />

//         <input
//           type="number"
//           placeholder="Amount"
//           {...register("amount")}
//           style={{
//             width: "100%",
//             padding: "12px",
//             borderRadius: "8px",
//             border: "1px solid #ffcc00",
//             marginBottom: "15px",
//             fontSize: "15px",
//           }}
//         />

//         <select
//           {...register("payment_method")}
//           style={{
//             width: "100%",
//             padding: "12px",
//             borderRadius: "8px",
//             border: "1px solid #ffcc00",
//             marginBottom: "20px",
//             fontSize: "15px",
//             background: "#fff",
//             color: "#222",
//           }}
//         >
//           <option value="cash">Cash</option>
//           <option value="card">Card</option>
//         </select>

//         <button
//           onClick={handleclick}
//           style={{
//             height: "50px",
//             fontSize: "17px",
//             background: "#ffcc00",
//             color: "black",
//             borderRadius: "8px",
//             border: "none",
//             cursor: "pointer",
//             boxShadow: "0 4px 8px rgba(255, 204, 0, 0.5)",
//             fontWeight: "bold",
//             transition: "background-color 0.3s ease",
//           }}
//           onMouseEnter={(e) => {
//             e.currentTarget.style.backgroundColor = "#e6b800";
//           }}
//           onMouseLeave={(e) => {
//             e.currentTarget.style.backgroundColor = "#ffcc00";
//           }}
//         >
//           Save Expense
//         </button>
//       </form>
//     </div>
//   );
// };







// import React from 'react'
import axios from "axios";
import { useEffect } from "react";
import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom';

export const Expense = () => {

    const getExpense = async () => {
        const res = await axios.get("/expense/getexpense")
        console.log(res.data);
    };

    useEffect(() => {
        getExpense();
    }, []);

    const navigate = useNavigate();

    const handleclick = () => {
        navigate('/user/dashboard');
    }

    const { register, handleSubmit } = useForm();

    const submitHandler = async (data) => {
        alert("Submitted...");
        console.log("Data:", data);
        const userId = localStorage.getItem("id")
        console.log(userId);
        data.userId = userId;
        const res = await axios.post("/expense/addexpense", data);
        console.log(res.data.data.Category);
        const response = await axios.post("/category/addcategory", {
            name: res.data.data.Category,
            userId: userId
        });
        console.log(res.data);
        console.log(response);
    };

    return (
        <div style={{
            paddingRight: "250px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            width: "100vw",
            background: "linear-gradient(to bottom, #222, #111)", // Dark gradient
            textAlign: "center"
        }}>
            <form
                onSubmit={handleSubmit(submitHandler)}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "420px",
                    padding: "30px",
                    backgroundColor: "#222",
                    borderRadius: "14px",
                    boxShadow: "0 10px 30px rgba(255, 111, 97, 0.3)",
                    color: "#EFEBE9",
                    fontFamily: "'Poppins', sans-serif"
                }}
            >
                <h2 style={{
                    marginBottom: "20px",
                    color: "#ff6f61",
                    fontWeight: "bold"
                }}>
                    Add Expense
                </h2>

                <input
                    type="date"
                    {...register("period")}
                    style={{
                        width: "100%",
                        padding: "12px",
                        borderRadius: "8px",
                        border: "2px solid #ff6f61",
                        marginBottom: "15px",
                        fontSize: "16px",
                        background: "#333",
                        color: "#EFEBE9",
                    }}
                />

                <input
                    type="text"
                    placeholder="Category"
                    {...register("Category")}
                    style={{
                        width: "100%",
                        padding: "12px",
                        borderRadius: "8px",
                        border: "1px solid #ff6f61",
                        marginBottom: "15px",
                        fontSize: "16px",
                        background: "#333",
                        color: "#F1F1F1"
                    }}
                />

                <input
                    type="number"
                    placeholder="Amount"
                    {...register("amount")}
                    style={{
                        width: "100%",
                        padding: "12px",
                        borderRadius: "8px",
                        border: "1px solid #ff6f61",
                        marginBottom: "15px",
                        fontSize: "16px",
                        background: "#333",
                        color: "#F1F1F1"
                    }}
                />

                <select
                    {...register("payment_method")}
                    style={{
                        width: "100%",
                        padding: "12px",
                        borderRadius: "8px",
                        border: "1px solid #ff6f61",
                        marginBottom: "20px",
                        fontSize: "16px",
                        background: "#333",
                        color: "#F1F1F1"
                    }}
                >
                    <option value="cash">Cash</option>
                    <option value="card">Card</option>
                    <option value="bank transfer">Bank Transfer</option>
                </select>

                <button onClick={handleclick}
                    style={{
                        height: "50px",
                        fontSize: "18px",
                        background: "linear-gradient(to right, #ff6f61, #e63946)",
                        color: "white",
                        borderRadius: "10px",
                        border: "none",
                        cursor: "pointer",
                        boxShadow: "0 4px 15px rgba(255, 111, 97, 0.5)",
                        fontWeight: "bold",
                        transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out"
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-5px)";
                        e.currentTarget.style.boxShadow = "0 10px 20px rgba(255, 111, 97, 0.7)";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = "0 4px 15px rgba(255, 111, 97, 0.5)";
                    }}
                >
                    Save Expense
                </button>
            </form>
      </div>
 )
}





