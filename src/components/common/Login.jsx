import { useForm } from 'react-hook-form';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import backgroundImage from "../../assets/image/background .jpg"


export const Login = () => {
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm();

  const submithandler = async (data) => {
    try {
      data.roleId = "67c535d2b65483905e3b3eb3";
      const res = await axios.post("/user/login", data);
      console.log(res);
      if (res.status === 200) {
        toast.success("Login Successful", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",
          transition: Bounce,
        });

       // localStorage.clear();
        localStorage.setItem("id", res.data.data._id);
        localStorage.setItem("role", res.data.data.roleId?.name);

        setTimeout(() => navigate("/user/dashboard"), 1500);
      }
    } catch (error) {
      toast.error("Login Failed. Please check your credentials.", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        theme: "dark",
      });
      console.error("Login Error:", error);
    }
  };

  const validationSchema = {
    usernamevalidator: {
      required: {
        value: true,
        message: "Username is required",
      },
    },
    Passwordvalidator: {
      required: {
        value: true,
        message: "Password is required",
      },
    },
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition:"center",

        // background: "linear-gradient(to bottom, #0f0c29, #302b63, #24243e)",
      }}
    >
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          width: "430px",
          padding: "20px",
          backgroundColor: "black",
          borderRadius: "8px",
          textAlign: "center",
          height: "400px",
        }}
        onSubmit={handleSubmit(submithandler)}
      >
        <h1 style={{ color: "white" }}>LOGIN</h1>
        <div>
          <input
            type='text'
            placeholder='Username'
            style={{ width: "100%", padding: "10px", borderRadius: "5px" }}
            {...register("email", validationSchema.usernamevalidator)}
          />
          <span style={{ color: "red", display: "block" }}>{errors.email?.message}</span>
        </div>
        <br />
        <div>
          <input
            type='password'
            placeholder='Password'
            style={{ width: "100%", padding: "10px", borderRadius: "5px" }}
            {...register("password", validationSchema.Passwordvalidator)}
          />
          <span style={{ color: "red", display: "block" }}>{errors.password?.message}</span>
        </div>
        <br />
        <div>
          <a href='/' style={{ color: "white", marginRight: "30px" }}>Forgot Password</a>
          <a href='/signup' style={{ color: "white", fontSize: "larger" }}>Signup</a>
        </div>
        <br />
        <br />

        <div>
          <input
            type="submit"
            value="LOGIN"
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
              backgroundColor: "blue",
            }}
          />
        </div>
      </form>
      <ToastContainer limit={3} newestOnTop pauseOnFocusLoss />
    </div>
  );
};
