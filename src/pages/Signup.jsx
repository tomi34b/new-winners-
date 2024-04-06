import React, { useContext, useState } from "react";
import Input from "../components/Input";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import { baseURL } from "../constants/url";

const Signup = () => {
  const navigate = useNavigate();
  const { setUser, login } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }

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

    if (!formData.confirmPassword.trim()) {
      errors.confirmPassword = "Confirm Password is required";
    } else if (formData.confirmPassword !== formData.password) {
      errors.confirmPassword = "Passwords do not match";
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
        const response = await fetch(baseURL + "/api/v1/user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fullname: formData.name,
            email: formData.email,
            password: formData.password,
            confirm_password: formData.confirmPassword,
          }),
        });

        if (!response.ok) {
          setIsLoading(false);
          const res = await response.json();
          alert(res.message);
          throw new Error("Failed to create user account");
        }

        setIsLoading(false);
        console.log("User account created successfully");
        const res = await response.json();
        console.log(res);
        login(res.data.accessToken);
        setUser(res.data.newUser);
        navigate("/dashboard");
        // Optionally, reset the form after successful submission
        setFormData({
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
      } catch (error) {
        setIsLoading(false);
        alert(error);
        console.error("Error creating user account:", error.message);
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
        <div className="max-w-[428px] mx-auto mt-5">
          <h2 className="font-semibold text-3xl text-center">Sign up</h2>
          <div className="p-5 bg-white mt-8">
            <form onSubmit={handleSubmit}>
              <Input
                label="Full name"
                type="text"
                name="name"
                handleChange={handleChange}
                value={formData.name}
                error={errors.name}
              />
              <Input
                label="Email"
                type="email"
                name="email"
                handleChange={handleChange}
                value={formData.email}
                error={errors.email}
              />
              <Input
                label="Password"
                type="password"
                name="password"
                handleChange={handleChange}
                value={formData.password}
                error={errors.password}
              />
              <Input
                label="Re-enter Password"
                type="password"
                name="confirmPassword"
                handleChange={handleChange}
                value={formData.confirmPassword}
                error={errors.confirmPassword}
              />
              <div className="flex justify-start mt-8">
                {errors.serverMessage && (
                  <p className="text-red-500 mb-3">{errors.serverMessage}</p>
                )}
                <button
                  disabled={isLoading}
                  className="w-[153px] h-[56px] bg-black text-white rounded-full"
                >
                  {isLoading ? "SIGNING UP" : "SIGN UP"}
                </button>
              </div>
            </form>
          </div>
          <div className="mt-8">
            <p className="text-center pb-6">
              <span className="text-gray-400">Already have an account? </span>
              <Link to={"/login"}>
                <span className="font-semibold underline decoration-black text-nowrap">
                  LOG IN
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
