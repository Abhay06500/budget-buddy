
// import axios from "axios";
// import { useEffect, useState } from "react";
// import { format } from "date-fns";
// import { Link } from "react-router-dom";

// export const ViewMyScreens = () => {
//     const [screens, setScreens] = useState([]);
//     const userId = localStorage.getItem("id");

//     const getAllMyScreens = async () => {
//         const res = await axios.get(`/transaction/gettransactionbyuserid/${userId}`);
//         setScreens(res.data.data);
//     };

//     useEffect(() => {
//         getAllMyScreens();
//     }, []);

//     return (
//         <div style={{ maxWidth: "1200px", margin: "auto", padding: "20px", textAlign: "center" }}>
//             <h2 style={{ fontSize: "28px", color: "#ff6f61", fontWeight: "bold", marginBottom: "20px" }}>
//                 View Transactions
//             </h2>

//             <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
//                 {screens.map((screen, index) => (
//                     <div
//                         key={index}
//                         style={{
//                             background: "#222",
//                             color: "white",
//                             padding: "20px",
//                             width: "280px",
//                             borderRadius: "12px",
//                             boxShadow: "0 5px 15px rgba(255, 111, 97, 0.3)",
//                             transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
//                         }}
//                         onMouseEnter={(e) => {
//                             e.currentTarget.style.transform = "translateY(-5px)";
//                             e.currentTarget.style.boxShadow = "0 10px 20px rgba(255, 111, 97, 0.5)";
//                         }}
//                         onMouseLeave={(e) => {
//                             e.currentTarget.style.transform = "translateY(0)";
//                             e.currentTarget.style.boxShadow = "0 5px 15px rgba(255, 111, 97, 0.3)";
//                         }}
//                     >
//                         <img
//                             src={screen.imageURL || "https://via.placeholder.com/280"}
//                             alt="Transaction"
//                             style={{
//                                 width: "100%",
//                                 height: "150px",
//                                 objectFit: "cover",
//                                 borderRadius: "10px",
//                                 marginBottom: "10px",
//                             }}
//                         />
//                         <h3 style={{ fontSize: "22px", color: "#ff6f61", fontWeight: "bold" }}>{screen.date}</h3>
//                         <p style={{ fontSize: "16px", margin: "10px 0" }}>💰 Amount : {screen.amount} ₹</p>
//                         <p style={{ fontSize: "16px", margin: "10px 0" }}>📂 Category : {screen.category}</p>
//             <p style={{ fontSize: "16px", margin: "10px 0" }}>📅 date: {format(new Date(screen.period), "dd / MM /yyyy")}  </p>
                       
//                         <p style={{ fontSize: "16px", margin: "10px 0" }}>🔹 Type : {screen.type}</p>
//                     </div>
//                 ))}
//             </div>
//             {/* Footer with both side curvy and a lightly upward curve */}
//             <footer style={{
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
//                 marginBottom: "25px"
//             }}>
//                 <button
//                     // onClick={handleAddIncome}
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
//                     <Link to="/transaction " style={{ textDecoration: "none", color: "black" }}>
//                         ➕ Add New Transaction
//                     </Link>
//                 </button>
//             </footer>
//         </div>
//         );
// };





















import  { useEffect, useState } from "react";
import axios from "axios";
// import { format } from "date-fns";
import { Link } from "react-router-dom";

export const ViewMyScreens = () => {
    const [screens, setScreens] = useState([]);
    const userId = localStorage.getItem("id");

    const getAllMyScreens = async () => {
        const res = await axios.get(`/transaction/gettransactionbyuserid/${userId}`);
        setScreens(res.data.data);
    };

    useEffect(() => {
        getAllMyScreens();
    }, []);

    return (
        <div style={{
            paddingRight: "250px",
            paddingTop:"25px",
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
                View Transactions
            </h2>

            <div style={{ flexGrow: 1, display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center", padding: "20px" }}>
                {screens.map((screen, index) => (
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
                        <img
                            src={screen.imageURL || "https://via.placeholder.com/300"}
                            alt="Transaction"
                            style={{
                                width: "100%",
                                height: "150px",
                                objectFit: "cover",
                                borderRadius: "10px",
                                marginBottom: "10px",
                            }}
                        />
                        <h3 style={{ fontSize: "22px", color: "#ff6f61", fontWeight: "bold" }}>{screen.date}</h3>
                        <p style={{ fontSize: "16px", margin: "10px 0" }}>💰 Amount : {screen.amount} ₹</p>
                        <p style={{ fontSize: "16px", margin: "10px 0" }}>📂 Category : {screen.category}</p>
                        <p style={{ fontSize: "16px", margin: "10px 0" }}>🔹 Type : {screen.type}</p>
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
                    <Link to="/user/transaction" style={{ textDecoration: "none", color: "white" }}>
                        ➕ Add New Transaction
                    </Link>
                </button>
            </footer>
        </div>
 );
};
