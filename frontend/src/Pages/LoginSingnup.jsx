import React, { useState } from "react";

function LoginSignup() {
    const [isLogin, setIsLogin] = useState(true);
    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    return (
        <div className="login_signup">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="login_signup_form">
                            <form action="" method="get">
                                <h2>{isLogin ? "Login" : "Sign Up"}</h2>
                                {!isLogin && (
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        id="your_name"
                                        name="your_name"
                                    />
                                )}
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    id="your_email"
                                    name="your_email"
                                />
                                <input
                                    type="password"
                                    placeholder="Password"
                                    id="password"
                                    name="Password"
                                />
                                <button>{isLogin ? "Login" : "Continue"}</button>
                                <p>
                                    {isLogin ? (
                                        <>
                                            Don't have an account?{" "}
                                            <span
                                                style={{ cursor: "pointer", color: "blue" }}
                                                onClick={toggleForm}
                                            >
                                                Sign Up here
                                            </span>
                                        </>
                                    ) : (
                                        <>
                                            Already have an account?{" "}
                                            <span
                                                style={{ cursor: "pointer", color: "blue" }}
                                                onClick={toggleForm}
                                            >
                                                Login here
                                            </span>
                                        </>
                                    )}
                                </p>

                                {!isLogin && (
                                    <div className="check_box_div">
                                        <input
                                            type="checkbox"
                                            name="checkbox"
                                            id="checkbox"
                                        />
                                        <p>
                                            By Continuing, I agree to the terms of use & privacy policy
                                        </p>
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginSignup;
