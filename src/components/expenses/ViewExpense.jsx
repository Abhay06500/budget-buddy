// import axios from "axios";
// import { useEffect, useState } from "react";
// import { format } from "date-fns";
// import { Link } from "react-router-dom";

// export const ViewExpense = () => {
//   const [Expense, setExpense] = useState([]);
//   const userId = localStorage.getItem("id");

//   const getExpense = async () => {
//     const res = await axios.get(`/expense/getexpenseUserId/${userId}`);
//     setExpense(res.data.data);
//   };

//   useEffect(() => {
//     getExpense();
//   }, []);

//   return (
//     <div style={{ maxWidth: "1200px", margin: "auto", padding: "20px", textAlign: "center" }}>
//       <h2 style={{ fontSize: "28px", color: "#ffcc00", fontWeight: "bold", marginBottom: "20px" }}>
//         Expense Overview
//       </h2>

//       <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
//         {Expense.map((item, index) => (
//           <div
//             key={index}
//             style={{
//               background: "#222",
//               color: "white",
//               padding: "20px",
//               width: "280px",
//               borderRadius: "12px",
//               boxShadow: "0 5px 15px rgba(255, 204, 0, 0.3)",
//               transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
//               animation: "fadeIn 0.5s ease-in-out",
//             }}
//             onMouseEnter={(e) => {
//               e.currentTarget.style.transform = "translateY(-5px)";
//               e.currentTarget.style.boxShadow = "0 10px 20px rgba(255, 204, 0, 0.5)";
//             }}
//             onMouseLeave={(e) => {
//               e.currentTarget.style.transform = "translateY(0)";
//               e.currentTarget.style.boxShadow = "0 5px 15px rgba(255, 204, 0, 0.3)";
//             }}
//           >
//             <h3 style={{ fontSize: "22px", color: "#ffcc00", fontWeight: "bold" }}>{item.Category}</h3>
//             <p style={{ fontSize: "16px", margin: "10px 0" }}>💰 Amount: {item.amount}</p>
//             <p style={{ fontSize: "16px", margin: "10px 0" }}>📅 date: {format(new Date(item.period), "dd / MM /yyyy")}  </p>
//             <p style={{ fontSize: "14px", color: "#ccc" }}>💳 Payment Method: {item.payment_method}</p>
//           </div>
//         ))}
//       </div>
//                   {/* Footer with both side curvy and a lightly upward curve */}
//                   <footer style={{
//                 padding: "20px", 
//                 backgroundColor: "#222", 
//                 textAlign: "center", 
//                 width: "100%", 
//                 position: "fixed", 
//                 bottom: "0", 
//                 left: "0", 
//                 display: "flex", 
//                 justifyContent: "center",
//                 alignItems: "center",
//                 borderTopLeftRadius: "30px",
//                 borderTopRightRadius: "30px",
//                 borderBottomLeftRadius: "30px",
//                 borderBottomRightRadius: "30px",
//                 boxShadow: "0 -5px 15px rgba(255, 204, 0, 0.5)",
//                 transform: "translateY(5px)", // Lightly upward curve effect
//                 marginBottom:"25px"
//             }}>
//                 <button
                    
//                     style={{
//                         backgroundColor: "#ffcc00",
//                         color: "black",
//                         padding: "12px 24px",
//                         fontSize: "16px",
//                         fontWeight: "bold",
//                         border: "none",
//                         borderRadius: "8px",
//                         cursor: "pointer",
//                         transition: "background-color 0.3s ease",
//                     }}
//                     onMouseEnter={(e) => {
//                         e.currentTarget.style.backgroundColor = "#e6b800";
//                     }}
//                     onMouseLeave={(e) => {
//                         e.currentTarget.style.backgroundColor = "#ffcc00";
//                     }}
//                 >
//                     <Link to="/expense" style={{textDecoration:"none", color:"black"}}>
//                     ➕ Add New Expense
//                     </Link>
//                 </button>
//             </footer>
//    </div>
//  );
// };












import  { useEffect, useState } from "react";
import axios from "axios";
import { format } from "date-fns";
import { Link } from "react-router-dom";

export const ViewExpense = () => {
    const [expense, setExpense] = useState([]);
    const userId = localStorage.getItem("id");

    const getExpense = async () => {
        const res = await axios.get(`/expense/getexpenseUserId/${userId}`);
        setExpense(res.data.data);
    };

    useEffect(() => {
        getExpense();
    }, []);

    return (
        <div style={{
            paddingRight: "250px",
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
            background: "linear-gradient(to bottom, #222, #111)",
            textAlign: "center",
            color: "#EFEBE9",
            width: "100vw",
            overflowX: "hidden"
        }}>
            <h2 style={{
                fontSize: "28px",
                color: "#ff6f61",
                fontWeight: "bold",
                marginBottom: "20px"
            }}>
                Expense Overview
            </h2>

            <div style={{ flexGrow: 1, display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center", padding: "20px" }}>
                {expense.map((item, index) => (
                    <div
                        key={index}
                        style={{
                            background: "#222",
                            color: "#EFEBE9",
                            padding: "20px",
                            width: "300px",
                            height: "fit-content",
                            borderRadius: "14px",
                            boxShadow: "0 10px 30px rgba(255, 111, 97, 0.3)",
                            transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "translateY(-5px)";
                            e.currentTarget.style.boxShadow = "0 10px 20px rgba(255, 111, 97, 0.7)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "translateY(0)";
                            e.currentTarget.style.boxShadow = "0 10px 30px rgba(255, 111, 97, 0.3)";
                        }}
                    >
                        <h3 style={{ fontSize: "22px", color: "#ff6f61", fontWeight: "bold" }}>
                        Category : {item.Category} 
                        </h3>
                        <p style={{ fontSize: "16px", margin: "10px 0" }}>💰 Amount: {item.amount}</p>
                        <p style={{ fontSize: "16px", margin: "10px 0" }}>
                            📅 Date: {format(new Date(item.period), "dd/MM/yyyy")}
                        </p>
                        <p style={{ fontSize: "14px", color: "#ccc" }}>💳 Payment Method: {item.payment_method}</p>
                    </div>
                ))}
            </div>

            <footer style={{
                padding: "20px",
                backgroundColor: "#222",
                textAlign: "center",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderTopLeftRadius: "30px",
                borderTopRightRadius: "30px",
                boxShadow: "0 -5px 15px rgba(255, 111, 97, 0.5)",
                position: "sticky",
                bottom: "0"
            }}>
                <button
                    style={{
                        backgroundColor: "#ff6f61",
                        color: "white",
                        padding: "12px 24px",
                        fontSize: "16px",
                        fontWeight: "bold",
                        border: "none",
                        borderRadius: "8px",
                        cursor: "pointer",
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
                    <Link to="/user/expense" style={{ textDecoration: "none", color: "white" }}>
                        ➕ Add New Expense
                    </Link>
                </button>
            </footer>
        </div>
 );
}
