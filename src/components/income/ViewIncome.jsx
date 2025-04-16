// // // import axios from "axios";
// // // import { useEffect, useState } from "react";
// // // import { format } from "date-fns";
// // // import { useNavigate } from "react-router-dom";

// // // export const ViewIncome = () => {
// // //     const [income, setIncome] = useState([]);
// // //     const userId = localStorage.getItem("id");

// // //     const getIncome = async () => {
// // //         const res = await axios.get(`/income/getincomeByUserId/${userId}`);
// // //         setIncome(res.data.data);
// // //     };
// // //     const navigate = useNavigate();

// // //     const handleclick = () => {
// // //         navigate('/income');
// // //     }

// // //     useEffect(() => {
// // //         getIncome();
// // //     }, []);

// // //     return (
// // //         <div style={{ width: "100%", maxWidth: "700px", margin: "auto", padding: "20px" }}>
// // //             {income.map((item, index) => (
// // //                 <div
// // //                     key={index}
// // //                     style={{
// // //                         background: "linear-gradient(135deg, #1e1e1e, #444)",
// // //                         color: "#fff",
// // //                         padding: "20px",
// // //                         textAlign: 'center',
// // //                         borderRadius: "10px",
// // //                         marginBottom: "15px",
// // //                         boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)",
// // //                         border: "1px solid rgba(255, 255, 255, 0.2)",
// // //                         transition: "transform 0.2s ease-in-out",
// // //                     }}
// // //                     onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
// // //                     onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
// // //                 >
// // //                     <h2 style={{ color: "#ffcc00", marginBottom: "10px" }}>Amount: {item.amount}</h2>
// // //                     <h3 style={{ fontWeight: "bold" }}>Source: {item.source}</h3>
// // //                     <h5 style={{ fontStyle: "italic", color:"darkgrey"  }}>Date: {format(new Date(item.period), "dd / MM /yyyy")}</h5>
// // //                     <h5 style={{ marginTop: "5px", lineHeight: "1.5" , color:"grey" }}>Description: {item.description}</h5>
// // //                 </div>
// // //             ))}


// // //             <button onClick={handleclick}><h3>Add New Income</h3></button>
// // //         </div>
// // //     );
// // // };






// // import axios from "axios";
// // import { useEffect, useState } from "react";
// // import { format } from "date-fns";
// // import { useNavigate } from "react-router-dom";

// // export const ViewIncome = () => {
// //     const [income, setIncome] = useState([]);
// //     const userId = localStorage.getItem("id");

// //     const getIncome = async () => {
// //         const res = await axios.get(`/income/getincomeByUserId/${userId}`);
// //         setIncome(res.data.data);
// //     };


// //     const navigate = useNavigate();

// //     const handleclick = () => {
// //         navigate('/income');
// //     }
// //     useEffect(() => {
// //         getIncome();
// //     }, []);

// //     return (
// //         <div style={{ maxWidth: "1200px", margin: "auto", padding: "20px", textAlign: "center" }}>
// //             <h2 style={{ fontSize: "28px", color: "#ffcc00", fontWeight: "bold", marginBottom: "20px" }}>
// //                 Income Overview
// //             </h2>

// //             <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
// //                 {income.map((item, index) => (
// //                     <div
// //                         key={index}
// //                         style={{
// //                             background: "#222",
// //                             color: "white",
// //                             padding: "20px",
// //                             width: "280px",
// //                             borderRadius: "12px",
// //                             boxShadow: "0 5px 15px rgba(255, 204, 0, 0.3)",
// //                             transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
// //                             animation: "fadeIn 0.5s ease-in-out",
// //                         }}
// //                         onMouseEnter={(e) => {
// //                             e.currentTarget.style.transform = "translateY(-5px)";
// //                             e.currentTarget.style.boxShadow = "0 10px 20px rgba(255, 204, 0, 0.5)";
// //                         }}
// //                         onMouseLeave={(e) => {
// //                             e.currentTarget.style.transform = "translateY(0)";
// //                             e.currentTarget.style.boxShadow = "0 5px 15px rgba(255, 204, 0, 0.3)";
// //                         }}
// //                     >
// //                         <h3 style={{ fontSize: "22px", color: "#ffcc00", fontWeight: "bold" }}>
// //                             💰 Amount: {item.amount}
// //                         </h3>
// //                         <p style={{ fontSize: "16px", margin: "10px 0" }}>🔹 Source: {item.source}</p>
// //                         <p style={{ fontSize: "16px", margin: "10px 0" }}>
// //                             📅 Date: {format(new Date(item.period), "dd/MM/yyyy")}
// //                         </p>
// //                         <p style={{ fontSize: "14px", color: "#ccc" }}>📝 Description : {item.description}</p>
// //                     </div>
// //                 ))}
// //             </div>
// //             <br />
// //             <button style={{ backgroundColor: "rgb(34, 34, 34)", color: "rgb(255, 204, 0)" }} onClick={handleclick}><h4 >Add New Income</h4></button>

// //         </div>
// //     );
// // };
 














// import axios from "axios";
// import { useEffect, useState } from "react";
// import { format } from "date-fns";
// import { Link } from "react-router-dom";

// export const ViewIncome = () => {
//     const [income, setIncome] = useState([]);
//     const userId = localStorage.getItem("id");

//     const getIncome = async () => {
//         const res = await axios.get(`/income/getincomeByUserId/${userId}`);
//         setIncome(res.data.data);
//     };

//     useEffect(() => {
//         getIncome();
//     }, []);

//     const handleAddIncome = () => {
//         // Logic to handle adding new income
//         console.log("Add new income");
//     };

//     return (
//         <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", justifyContent: "space-between" }}>
//             <div style={{ padding: "20px", textAlign: "center", flex: 1 }}>
//                 <h2 style={{ fontSize: "28px", color: "#ffcc00", fontWeight: "bold", marginBottom: "20px" }}>
//                     Income Overview
//                 </h2>

//                 <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
//                     {income.map((item, index) => (
//                         <div
//                             key={index}
//                             style={{
//                                 background: "#222",
//                                 color: "white",
//                                 padding: "20px",
//                                 width: "280px",
//                                 borderRadius: "12px",
//                                 boxShadow: "0 5px 15px rgba(255, 204, 0, 0.3)",
//                                 transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
//                                 animation: "fadeIn 0.5s ease-in-out",
//                             }}
//                             onMouseEnter={(e) => {
//                                 e.currentTarget.style.transform = "translateY(-5px)";
//                                 e.currentTarget.style.boxShadow = "0 10px 20px rgba(255, 204, 0, 0.5)";
//                             }}
//                             onMouseLeave={(e) => {
//                                 e.currentTarget.style.transform = "translateY(0)";
//                                 e.currentTarget.style.boxShadow = "0 5px 15px rgba(255, 204, 0, 0.3)";
//                             }}
//                         >
//                             <h3 style={{ fontSize: "22px", color: "#ffcc00", fontWeight: "bold" }}>
//                                 💰 Amount: {item.amount}
//                             </h3>
//                             <p style={{ fontSize: "16px", margin: "10px 0" }}>🔹 Source: {item.source}</p>
//                             <p style={{ fontSize: "16px", margin: "10px 0" }}>
//                                 📅 Date: {format(new Date(item.period), "dd/MM/yyyy")}
//                             </p>
//                             <p style={{ fontSize: "14px", color: "#ccc" }}>📝 {item.description}</p>
//                         </div>
//                     ))}
//                 </div>
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
//                 marginBottom:"25px"
//             }}>
//                 <button
//                     onClick={handleAddIncome}
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
//                     <Link to="/income" style={{textDecoration:"none", color:"black"}}>
//                     ➕ Add New Income
//                     </Link>
//                 </button>
//             </footer>
//         </div>
//  );
// };
























import  { useEffect, useState } from "react";
import axios from "axios";
import { format } from "date-fns";
import { Link } from "react-router-dom";

export const ViewIncome = () => {
    const [income, setIncome] = useState([]);
    const userId = localStorage.getItem("id");

    const getIncome = async () => {
        const res = await axios.get(`/income/getincomeByUserId/${userId}`);
        setIncome(res.data.data);
    };

    useEffect(() => {
        getIncome();
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
                Income Overview
            </h2>

            <div style={{ flexGrow: 1, display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center", padding: "20px" }}>
                {income.map((item, index) => (
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
                            💰 Amount: {item.amount}
                        </h3>
                        <p style={{ fontSize: "16px", margin: "10px 0" }}>🔹 Source: {item.source}</p>
                        <p style={{ fontSize: "16px", margin: "10px 0" }}>
                            📅 Date: {format(new Date(item.period), "dd/MM/yyyy")}
                        </p>
                        <p style={{ fontSize: "14px", color: "#ccc" }}>📝 {item.description}</p>
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
                    <Link to="/user/income" style={{ textDecoration: "none", color: "white" }}>
                        ➕ Add New Income
                    </Link>
                </button>
            </footer>
        </div>
 );
}
