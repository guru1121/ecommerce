import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LoginSignup() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setFormData({ username: "", email: "", password: "" });
    setMessage("");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = isLogin
      ? "http://localhost:5000/api/users/login"
      : "https://ecommerce-u3uq.vercel.app/save-user";

    setLoading(true);
    try {
      const response = await axios.post(url, formData);

      if (response.data.token) {
        // Save token and user details to local storage
        const { token, user } = response.data;
        localStorage.setItem("authToken", token);
        localStorage.setItem("username", user?.username || "");
        localStorage.setItem("email", user?.email || "");

        setMessage("Success!");
        setLoading(false);

        // Redirect to the profile page
        navigate("/profile");
      } else {
        setMessage(response.data.message || "An error occurred");
        setLoading(false);
      }
    } catch (error) {
      setMessage(
        error.response && error.response.data.message
          ? error.response.data.message
          : "An error occurred"
      );
      setLoading(false);
    }
  };

  return (
    <div className="login_signup">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="login_signup_form">
              <form onSubmit={handleSubmit}>
                <h2>{isLogin ? "Login" : "Sign Up"}</h2>
                {!isLogin && (
                  <input
                    type="text"
                    placeholder="Your Name"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                  />
                )}
                <input
                  type="email"
                  placeholder="Email Address"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <button type="submit" disabled={loading}>
                  {loading ? "Processing..." : isLogin ? "Login" : "Sign Up"}
                </button>
                <p>
                  {message && <span>{message}</span>}
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
                      required
                    />
                    <p>
                      By continuing, I agree to the terms of use & privacy policy
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
