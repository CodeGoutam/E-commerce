import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const url = process.env.REACT_APP_URL
const Signup = () => {
    let navigate = useNavigate();
    const [data, setData] = useState({
        name: "",
        number: "",
        email: "",
        password: "",
    });
    const onChange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    };
    const fetching = async (e) => {
        e.preventDefault();
        const response = await fetch(`https://e-commerce-s5ty.onrender.com/api/signup`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: data.name,
                number: data.number,
                email: data.email,
                password: data.password,
            }),
        });
        const output = await response.json();
        if (!output.success) {
            alert("enter valid details");
        } else {
            navigate("/login");
        }
    };
    return (
        <>
            <div
                className="bg-primary text-white"
                style={{
                    height: "auto",
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "space-around",
                    padding: "1%",
                }}
            >
                <Link to={"/"}>
                    <h4>
                        <i className="fa fa-arrow-left text-white" aria-hidden="true"></i>
                    </h4>
                </Link>

                <h3 style={{ textAlign: "center" }}>
                    <b>Sign-Up Page</b>
                </h3>
            </div>

            <section className="vh-90" style={{ padding: "5%", paddingTop: "2.5%" }}>
                <div className="container-fluid h-custom">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-md-9 col-lg-6 col-xl-5">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                className="img-fluid"
                                alt="Sample image"
                            />
                        </div>
                        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                            <form method="POST" onSubmit={fetching}>
                                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                                    <p className="lead fw-normal mb-0 me-3">Sign up with</p>
                                    <button
                                        type="button"
                                        className="btn btn-primary btn-floating mx-1"
                                    >
                                        <i className="fab fa-facebook-f"></i>
                                    </button>

                                    <button
                                        type="button"
                                        className="btn btn-primary btn-floating mx-1"
                                    >
                                        <i className="fab fa-twitter"></i>
                                    </button>

                                    <button
                                        type="button"
                                        className="btn btn-primary btn-floating mx-1"
                                    >
                                        <i className="fab fa-linkedin-in"></i>
                                    </button>
                                </div>
                                <div className="divider d-flex align-items-center my-4">
                                    <p className="text-center fw-bold mx-3 mb-0">Or</p>
                                </div>

                                {/* <!-- Name input
                 --> */}
                                <div className="form-outline mb-4">
                                    <input
                                        name="name"
                                        value={data.name}
                                        onChange={onChange}
                                        type="text"
                                        className="form-control form-control-lg"
                                        placeholder="Enter your name"
                                    />
                                    <label className="form-label" htmlFor="form3Example3">
                                        Name
                                    </label>
                                </div>
                                <div className="form-outline mb-4">
                                    <input
                                        name="number"
                                        value={data.number}
                                        onChange={onChange}
                                        type="text"
                                        className="form-control form-control-lg"
                                        placeholder="Enter valid mobile number"
                                    />
                                    <label className="form-label" htmlFor="form3Example3">
                                        Mobile Number
                                    </label>
                                </div>
                                <div className="form-outline mb-4">
                                    <input
                                        name="email"
                                        value={data.email}
                                        onChange={onChange}
                                        type="email"
                                        id="form3Example3"
                                        className="form-control form-control-lg"
                                        placeholder="Enter a valid email address"
                                    />
                                    <label className="form-label" htmlFor="form3Example3">
                                        Email address
                                    </label>
                                </div>

                                {/* <!-- Password input
                 --> */}
                                <div className="form-outline mb-3">
                                    <input
                                        name="password"
                                        value={data.password}
                                        onChange={onChange}
                                        type="password"
                                        id="form3Example4"
                                        className="form-control form-control-lg"
                                        placeholder="Enter password"
                                    />
                                    <label className="form-label" htmlFor="form3Example4">
                                        Password
                                    </label>
                                </div>

                                <div className="d-flex justify-content-between align-items-center">
                                    {/* <!-- Checkbox --> */}
                                    <div className="form-check mb-0">
                                        <input
                                            className="form-check-input
                       me-2"
                                            type="checkbox"
                                            value=""
                                            id="form2Example3"
                                        />
                                        <label className="form-check-label" htmlFor="form2Example3">
                                            Remember me
                                        </label>
                                    </div>
                                </div>

                                <div className="text-center text-lg-start mt-4 pt-2">
                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-lg"
                                        style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                                    >
                                        Register
                                    </button>
                                    <p className="small fw-bold mt-2 pt-1 mb-0">
                                        Have an account?{" "}
                                        <Link className="link-danger" to={"/login"}>
                                            Login
                                        </Link>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default Signup;
