import axios from 'axios';
// import React from 'react'
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ClipLoader } from 'react-spinners';
import { toast, ToastContainer } from 'react-toastify';


export const SignUp1 = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loading, setLoading] = useState(false);

    const submithandler = async (data) => {
        setLoading(true); // Show loader when submitting

        // Set the default roleId here
        data.roleId = "67bf1b76da17f50afc0c33f0";

        try {
            const res = await axios.post("http://localhost:3000/user", data,);

            console.log('res', res);
            console.log('data', res.data);

            if (res.status === 201) {
                // Success
                toast.success("User successfully created!");
            } else {
                toast.error("Failed to create user. Please try again.");
            }
        } catch (error) {
            toast.error("An error occurred! Please try again.");
            console.log(error);
        } finally {
            setLoading(false); // Hide loader after request completion
        }
    };

    const validationSchema = {
        passwordvalidator: {
            required: {
                value: true,
                message: "Password is required",
            }
        }
    }

    return (
        <div style={{ textAlign: "center" }}>
            <form
                style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "150px",
                }}
                onSubmit={handleSubmit(submithandler)}
            >
                <div style={{ width: "400px", height: "470px", backgroundColor: "green" }}>
                    <h1>Sign Up</h1>
                    <br />

                    <div style={{ display: "flex", justifyContent: "space-between", gap: "10px" }}>
                        <div style={{ flex: 1 }}>
                            <input
                                type="text"
                                placeholder="First name"
                                style={{ marginRight: "10px" }}
                                {...register("firstName", validationSchema.firstNamevalidator)}
                            />
                            <span style={{ color: "red", display: "block" }}>{errors.firstName?.message}</span>
                        </div>
                        <div style={{ flex: 1 }}>
                            <input
                                type="text"
                                placeholder="Last name"
                                {...register("lastName", validationSchema.lastNamevalidator)}
                            />
                            <span style={{ color: "red", display: "block" }}>{errors.lastName?.message}</span>
                        </div>
                    </div>

                    <br />
                    <div>
                        <input
                            type="text"
                            placeholder="Email"
                            {...register("email", validationSchema.emailvalidator)}
                        />
                        <span style={{ color: "red", display: "block" }}>{errors.email?.message}</span>
                    </div>
                    <br />
                    <div>
                        <input
                            type="number"
                            placeholder="Mobile number"
                            {...register("mobileno", validationSchema.mobilevalidator)}
                        />
                        <span style={{ color: "red", display: "block" }}>{errors.mobileno?.message}</span>
                    </div>
                    <br />
                    <div>
                        <input
                            type="password"
                            placeholder="Password"
                            {...register("password", validationSchema.passwordvalidator)}
                        />
                        <span style={{ color: "red", display: "block" }}>{errors.password?.message}</span>
                    </div>
                    <br />
                    <div>
                        <input type="password" placeholder="Confirm password" {...register("confirmPassword")} />
                    </div>
                    <br />
                    <div>
                        <input
                            type="submit"
                            value="Sign Up"
                            style={{
                                height: "45px",
                                width: "120px",
                                fontSize: "17px",
                                backgroundColor: "black",
                                color: "white",
                            }}
                        />
                    </div>
                    <br />
                    <div style={{ color: "white" }}>
                        Already have an account?{" "}
                        <a href="/login" style={{ color: "black", fontSize: "larger" }}>
                            Login
                        </a>
                    </div>

                    {/* Display loader while submitting */}
                    {loading && (
                        <div style={{ marginTop: "20px" }}>
                            <ClipLoader color="#fff" loading={loading} size={50} />
                        </div>
                    )}
                </div>
            </form>

            {/* Toast notifications container */}
            <ToastContainer />
        </div>


    )
}
