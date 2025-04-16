import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { ClipLoader } from "react-spinners";
import { Bounce, toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import backgroundImage from "../../assets/image/background .jpg"
// import {} from "../../assets/image/DALL·E 2025-03-19 19.58.26 - A sleek and professional background image for a financial budgeting app signup page. The design includes a smooth gradient of blue and teal, evoking t.webp"

export const Signup = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const submithandler = async (data) => {
    console.log(data);

    data.roleId = "67c535d2b65483905e3b3eb3";
    setLoading(true);

    try {
      const res = await axios.post("/signup", data);

      if (res.status === 201) {
        toast.success('User created successfully!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "light",
          transition: Bounce,
        });

        setTimeout(() => navigate("/login"), 2000);
      } else {
        toast.error("Failed to create user. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred! Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const validationSchema = {
    firstName: {
      required: "First name is required",
    },
    lastName: {
      required: "Last name is required",
    },
    email: {
      required: "Email is required",
    },
    mobileNumber: {
      required: "Number is required",
      pattern: {
        value: /^(?:\+91|0)?[6-9]\d{9}$/,
        message: "Mobile number is not valid",
      },
    },
    password: {
      required: "Password is required",
    },
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(${backgroundImage})`,
        // background: "linear-gradient(to bottom, #0f0c29, #302b63, #24243e)",
      }}
    >
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />

      <form
        style={{
          display: "flex",
          flexDirection: "column",
          width: "400px",
          padding: "20px",
          backgroundColor: "black",
          borderRadius: "8px",
        }}
        onSubmit={handleSubmit(submithandler)}
      >
        <h1 style={{ color: "white", textAlign: "center" }}>Sign Up</h1>

        <div style={{ display: "flex", justifyContent: "space-between", gap: "10px" }}>
          <div style={{ flex: 1 }}>
            <input
              type="text"
              placeholder="First name"
              style={{ width: "100%", padding: "10px", borderRadius: "5px" }}
              {...register("firstName", validationSchema.firstName)}
            />
            <span style={{ color: "red" }}>{errors.firstName?.message}</span>
          </div>

          <div style={{ flex: 1 }}>
            <input
              type="text"
              placeholder="Last name"
              style={{ width: "100%", padding: "10px", borderRadius: "5px" }}
              {...register("lastName", validationSchema.lastName)}
            />
            <span style={{ color: "red" }}>{errors.lastName?.message}</span>
          </div>
        </div>

        <br />
        <div>
          <input
            type="text"
            placeholder="Email"
            style={{ width: "100%", padding: "10px", borderRadius: "5px" }}
            {...register("email", validationSchema.email)}
          />
          <span style={{ color: "red" }}>{errors.email?.message}</span>
        </div>

        <br />
        <div>
          <input
            type="tel"
            placeholder="Mobile number"
            style={{ width: "100%", padding: "10px", borderRadius: "5px" }}
            {...register("mobileNumber", validationSchema.mobileNumber)}
          />
          <span style={{ color: "red" }}>{errors.mobileNumber?.message}</span>
        </div>

        <br />
        <div>
          <input
            type="password"
            placeholder="Password"
            style={{ width: "100%", padding: "10px", borderRadius: "5px" }}
            {...register("password", validationSchema.password)}
          />
          <span style={{ color: "red" }}>{errors.password?.message}</span>
        </div>

        <br />
        <div>
          <input
            type="submit"
            value="Sign Up"
            style={{
              height: "45px",
              width: "100%",
              fontSize: "17px",
              borderRadius: "5px",
              background: "linear-gradient(to right, #b08d57, #e0c084)",
              color: "white",
              fontWeight: "bold",
              border: "none",
              boxShadow: "0 4px 6px rgba(0,0,0,0.3)",
            }}
          />
        </div>

        <br />
        <div style={{ color: "white", textAlign: "center" }}>
          Already have an account? <a href="/login" style={{ color: "white", fontSize: "larger" }}>Login</a>
        </div>

        {loading && (
          <div style={{ marginTop: "20px", display: "flex", justifyContent: "center" }}>
            <ClipLoader color="#fff" loading={loading} size={50} />
          </div>
        )}
      </form>
    </div>
  );
};
