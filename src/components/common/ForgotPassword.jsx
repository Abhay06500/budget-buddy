// //create forgot password component using useform hook
// import axios from 'axios';
// import { useState } from 'react';
// import { useForm } from 'react-hook-form';
// // import { useNavigate } from 'react-router-dom';
// // import { useNavigate } from 'react-router-dom';

// const ForgotPassword = () => {

//   // const navigate = useNavigate();
//   const [email, setEmail] = useState('');
//   // const navigate = useNavigate();
//   const { handleSubmit } = useForm();

//   const onSubmit = async (data) => {
//       console.log(data);
//       console.log(email);

//       try {
//           const res = await axios.post("/user/forgotpassword", null, {
//               params: { email },
//           });
//           console.log(res.data);
//       } catch (error) {
//           console.error("Error resetting password:", error);
//       }

//       // Add your logic to navigate or show a success message here
//       // navigate('/login');
//   };







//   return (
//     <div className="forgot-password-container">
//       <h2>Forgot Password</h2>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <input
//           type="email"
//           // onChange={(event) => {setemail(event.target.value)}}
//           placeholder="Enter your email"
//           value={email}
//           onChange={(e) => { setEmail(e.target.value) }}
//         />
//         <button type="sumbit" onClick={() => { onsubmit }}>Reset Password</button>
//       </form>
//     </div>
//   );


// }
//         <button type="submit">Reset Password</button>
// export default ForgotPassword;















// import { useState } from 'react';
// // import { useForm } from 'react-hook-form';
// import { Link,  } from 'react-router-dom';
// // import headerBackground from "../../assets/img/backgroundForLogin.jpg";
// // import background from "../../assets/img/backgroundForLogin2.jpg";
// import axios from 'axios';
// import { Bounce, ToastContainer } from 'react-toastify';
// // import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

// export const ForgotPassword = () => {
//   // const navigate = useNavigate()

//   const [email, setEmail] = useState("");

//   const forgotPasswordHandler =async()=>{
//     alert(`Password reset link sent to ${email}`);
//     console.log(email)
//     const res = await axios.post("/user/forgotpassword", { email });

//     // const res = await axios.post("api/forgotpassword?email=" + email)
//     console.log(res.data)
//   }

//   return (
    
//     <div style={{ 
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       minHeight: '100vh',
//       // backgroundImage: `url(${background})`,
//       backgroundSize: 'cover',
//       backgroundPosition: 'center',
//       position: 'relative'
//     }}>
      
//       {/* Dark overlay */}
//       <div style={{
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         width: '100%',
//         height: '100%',
//         background: 'rgba(0, 0, 0, 0.6)',
//         backdropFilter: 'blur(5px)'
//       }}></div>
  
//       <div style={{
//         width: '470px',
//         maxWidth: '90%',
//         backgroundColor: 'white',
//         borderRadius: '15px',
//         overflow: 'hidden',
//         boxShadow: '0 15px 35px rgba(0, 0, 0, 0.3)',
//         position: 'relative',
//         zIndex: 1
//       }}>
//         {/* Header section */}
//         <div style={{
//           height: '160px',
//           // backgroundImage: `url(${headerBackground})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           position: 'relative'
//         }}>
//           <div style={{
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             width: '100%',
//             height: '100%',
//             background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 85, 85, 0.7))'
//           }}></div>
          
//           {/* Logo */}
//           <div style={{ position: 'absolute', bottom: '-25px', left: '50%', transform: 'translateX(-50%)', width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
//           }}>
//             <div style={{
//               fontSize: '18px',
//               fontWeight: '700',
//               color: '#34495e'
//             }}>
//               RE<span style={{ color: '#3498db' }}>F</span>
//             </div>
//           </div>
//         </div>
  
//         {/* Form section */}
//         <div style={{ padding: '40px 30px 30px' }}>
//           <ToastContainer
//                     position="top-left"
//                     autoClose={5000}
//                     hideProgressBar={false}
//                     newestOnTop={false}
//                     closeOnClick={false}
//                     rtl={false}
//                     pauseOnFocusLoss
//                     draggable
//                     pauseOnHover
//                     theme="light"
//                     transition={Bounce}
//                     />
        
//           <h2 style={{ color: '#34495e', textAlign: 'center', marginBottom: '30px', fontSize: '22px', fontWeight: '600'
//           }}>
//             Good to See You Again!
//           </h2>
          
          
//           <div
//           style={{
//             marginTop: "10px",
//             padding: "15px",
//             border: "1px solid #ddd",
//             borderRadius: "6px",
//             backgroundColor: "#f7f9fa",
//             textAlign: "left",
//           }}
//         >
//           <label
//             style={{
//               display: "block",
//               fontSize: "14px",
//               color: "#34495e",
//               marginBottom: "5px",
//             }}
//           >
//             Enter Email
//           </label>
//           <input
//             type="email"
//             placeholder="Enter your email"
//             value={email}
//             onChange={(event) => setEmail(event.target.value)}
//             style={{
//               width: "100%",
//               padding: "8px",
//               border: "1px solid #ccc",
//               borderRadius: "4px",
//               marginBottom: "10px",
//               fontSize: "14px",
//             }}
//           />
//           <button
//             onClick={forgotPasswordHandler}
//             style={{
//               width: "100%",
//               padding: "10px",
//               border: "none",
//               borderRadius: "4px",
//               backgroundColor: "#005555",
//               color: "white",
//               fontSize: "14px",
//               fontWeight: "600",
//               cursor: "pointer",
//               transition: "all 0.3s",
//             }}
//           >
//             Send
//           </button>
//         </div>
      
  
  
//            <div style={{
//              textAlign: 'center',
//              marginTop: '20px',
//              color: '#7f8c8d',
//              fontSize: '14px'
//            }}>
//              <p>Don&apos;t have an account?{' '}
//                <Link to="/login" style={{
//                 color: '#005555',
//                 textDecoration: 'none',
//                 fontWeight: '600'
//               }}>
//                 Login
//               </Link>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };


// export default ForgotPassword;
















// import { useForm } from "react-hook-form";
import { ToastContainer,  } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import backgroundImage from "../../assets/image/background .jpg";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";

export const ForgotPassword = () => {
  // const navigate = useNavigate();
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm();

   const [email, setEmail] = useState("");


  // const forgotPasswordHandler = async (data) => {
  //   try {
  //     const email = data.email.trim();
  //     const res = await axios.post("/user/forgotpassword", { email });
  //     if (res.status === 200) {
  //       toast.success("Reset link sent to your email!", {
  //         position: "top-center",
  //         autoClose: 3000,
  //         hideProgressBar: false,
  //         theme: "dark",
  //         transition: Bounce,
  //       });
  //     }
  //   } catch (error) {
  //     toast.error(
  //       error.response?.data?.message || "Failed to send reset link.",
  //       {
  //         position: "top-center",
  //         autoClose: 3000,
  //         hideProgressBar: false,
  //         theme: "dark",
  //       }
  //     );
  //     console.error("Forgot Password Error:", error);
  //   }
  // };




  const forgotPasswordHandler =async()=>{
        alert(`Password reset link sent to ${email}`);
        console.log(email)
        const res = await axios.post("/user/forgotpassword", { email });

        // const res = await axios.post("api/forgotpassword?email=" + email)
        console.log(res.data)
      }

  return (
    <div
      style={{
        width: "1600px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        // onSubmit={handleSubmit(forgotPasswordHandler)}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "430px",
          padding: "20px",
          backgroundColor: "black",
          borderRadius: "8px",
          textAlign: "center",
          height: "350px",
        }}
      >
        <h1 style={{ color: "white", marginBottom: "20px" }}>
          Forgot Password
        </h1>
        <div>
          <input
            type="email"
            placeholder="Enter your email"
         onChange={(event) => {setEmail(event.target.value)}}

            style={{ width: "100%", padding: "10px", borderRadius: "5px" }}
          />
          <span style={{ color: "red", display: "block" }}>
            {/* {errors.email?.message} */}
          </span>
        </div>

        <br />
        <input
          type="submit"
          value="Send Reset Link"
          onClick={forgotPasswordHandler}
          style={{
            height: "45px",
            width: "100%",
            borderRadius: "5px",
            background: "linear-gradient(to right, #b08d57, #e0c084)",
            color: "white",
            fontWeight: "bold",
            border: "none",
            boxShadow: "0 4px 6px rgba(0,0,0,0.3)",
            fontSize: "17px",
          }}
        />

        <br />
        <div>
          <a
            href="/login"
            style={{ color: "white", marginRight: "30px" }}
          >
            Back to Login
          </a>
          <a href="/signup" style={{ color: "white", fontSize: "larger" }}>
            Signup
          </a>
        </div>
      </div>
      <ToastContainer limit={3} newestOnTop pauseOnFocusLoss />
    </div>
  );
};

export default ForgotPassword;
