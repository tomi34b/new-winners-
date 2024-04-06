import React, { useContext, useState } from "react";
import Input from "../components/Input";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import { baseURL } from "../constants/url";

const Login = () => {
  const navigate = useNavigate();
  const { setUser, login } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = "Invalid email format";
    }

    if (!formData.password.trim()) {
      errors.password = "Password is required";
    } else if (formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
    }

    return errors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      // Form is valid, submit data
      // console.log("Form submitted successfully");
      try {
        setIsLoading(true);
        const response = await fetch(baseURL + "/api/v1/user/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: formData.email,
            password: formData.password,
          }),
        });

        if (!response.ok) {
          setIsLoading(false);
          const res = await response.json();
          alert(res.message);
          throw new Error("Failed to login user");
        }

        setIsLoading(false);
        // console.log("User login successful");
        const res = await response.json();
        console.log(res);
        login(res.data.accessToken);
        setUser(res.data.user);
        navigate("/dashboard");
        // Optionally, reset the form after successful submission
        setFormData({
          email: "",
          password: "",
        });
      } catch (error) {
        setIsLoading(false);
        alert(error);
        console.error("Error login user account:", error.message);
      }
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="flex-[0.4] bg-abstract bg-cover hidden sm:flex"></div>
      <div className="flex-1 sm:flex-[0.6] px-10">
        <div className="flex justify-end pt-10">
          <img src="/winners-logo.svg" />
        </div>
        <div className="max-w-[428px] mx-auto mt-20">
          <h2 className="font-semibold text-3xl text-center">Login</h2>
          <div className="p-5 bg-white mt-8">
            <form onSubmit={handleSubmit}>
              <Input
                label="Email"
                type="email"
                name="email"
                value={formData.email}
                handleChange={handleChange}
                error={errors.email}
              />
              <Input
                label="Password"
                type="password"
                name="password"
                value={formData.password}
                handleChange={handleChange}
                error={errors.password}
              />
              <div className="flex justify-start mt-8">
                <button
                  disabled={isLoading}
                  className="w-[153px] h-[56px] bg-black text-white rounded-full"
                >
                  {isLoading ? "LOGGING IN" : "LOGIN"}
                </button>
              </div>
            </form>
          </div>
          <div className="mt-8">
            <p className="text-center pb-6">
              <span className="text-gray-400">Don’t have an account? </span>
              <Link to={"/signup"}>
                <span className="font-semibold underline decoration-black text-nowrap">
                  SIGN UP
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
