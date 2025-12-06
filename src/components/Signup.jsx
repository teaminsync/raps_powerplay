// src/pages/signup.jsx
"use client";

import { useState, useRef, useEffect } from "react";
import "../components/Signup.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { api } from "../lib/api";

const SignUp = ({ onSwitchToLogin }) => {
  const canvasRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState({
    score: 0,
    text: "",
    color: "",
    feedback: "",
  });

  const navigate = useNavigate();

  /* ==========================================
     RIPPLES — SAME ENGINE AS LOGIN
  ========================================== */
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    let waves = [];

    function render() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      waves = waves.filter((w) => w.radius < w.max);

      waves.forEach((w) => {
        w.radius += w.speed;
        w.opacity -= w.fade;

        ctx.beginPath();
        ctx.arc(w.x, w.y, w.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(255,120,40,${w.opacity})`;
        ctx.lineWidth = 2;
        ctx.shadowBlur = 30;
        ctx.shadowColor = "rgba(255,120,40,0.5)";
        ctx.stroke();
      });

      requestAnimationFrame(render);
    }

    render();

    const createRipple = (x, y) => {
      waves.push({
        x,
        y,
        radius: 2,
        speed: 4,
        opacity: 0.45,
        fade: 0.002,
        max: Math.max(canvas.width, canvas.height) * 1.4,
      });
    };

    const click = (e) => createRipple(e.clientX, e.clientY);
    window.addEventListener("click", click);

    return () => window.removeEventListener("click", click);
  }, []);

  /* ==========================================
     TYPING RIPPLE
  ========================================== */
  const typeRipple = () => {
    const event = new Event("click");
    event.clientX = window.innerWidth / 2;
    event.clientY = window.innerHeight / 2 + 120;
    window.dispatchEvent(event);
  };

  /* ==========================================
     PASSWORD STRENGTH CHECK
  ========================================== */
  const checkPasswordStrength = (password) => {
    let score = 0;
    const feedback = [];

    if (password.length >= 8) score++;
    else feedback.push("8+ characters");

    if (/[a-z]/.test(password)) score++;
    else feedback.push("lowercase");

    if (/[A-Z]/.test(password)) score++;
    else feedback.push("uppercase");

    if (/[0-9]/.test(password)) score++;
    else feedback.push("numbers");

    if (/[^A-Za-z0-9]/.test(password)) score++;
    else feedback.push("symbols");

    const levels = [
      { text: "Very Weak", color: "#ef4444" },
      { text: "Weak", color: "#f97316" },
      { text: "Fair", color: "#eab308" },
      { text: "Good", color: "#22c55e" },
      { text: "Strong", color: "#10b981" },
    ];

    return {
      score,
      text: levels[score]?.text || "Strong",
      color: levels[score]?.color || "#10b981",
      feedback: feedback.length ? `Add: ${feedback.join(", ")}` : "Password looks great!",
    };
  };

  /* ==========================================
      INPUT HANDLER
  ========================================== */
  const handleChange = (e) => {
    typeRipple();

    const { name, value } = e.target;
    let formatted = value;

    if (name === "name") formatted = formatted.replace(/[^a-zA-Z\s]/g, "");
    if (name === "phone") formatted = formatted.replace(/[^0-9]/g, "").slice(0, 10);
    if (name === "email") formatted = formatted.replace(/[^a-zA-Z0-9@._-]/g, "");

    if (name === "password") {
      setPasswordStrength(checkPasswordStrength(formatted));
    }

    setFormData((prev) => ({ ...prev, [name]: formatted }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  /* ==========================================
     VALIDATION
  ========================================== */
  const validate = () => {
    const e = {};

    if (!formData.name.trim()) e.name = "Name required";
    if (!formData.email) e.email = "Email required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      e.email = "Invalid email format";

    if (!formData.phone || formData.phone.length !== 10)
      e.phone = "Phone must be 10 digits";

    if (!formData.password) e.password = "Password required";
    else if (passwordStrength.score < 3)
      e.password = "Password too weak";

    if (!formData.confirmPassword)
      e.confirmPassword = "Confirm password";
    else if (formData.password !== formData.confirmPassword)
      e.confirmPassword = "Passwords do not match";

    return e;
  };

  /* ==========================================
     API CHECK
  ========================================== */
  const checkUserExists = async (email) => {
    try {
      const { data } = await api.get(`/user/UserExistOrNot/${encodeURIComponent(email)}`);
      return Array.isArray(data) && data.length > 0;
    } catch {
      return false;
    }
  };

  /* ==========================================
     SUBMIT
  ========================================== */
  const handleSubmit = async (e) => {
    e.preventDefault();

    const v = validate();
    if (Object.keys(v).length) return setErrors(v);

    try {
      const exists = await checkUserExists(formData.email);
      if (exists) return toast.error("User already exists");

      const { data } = await api.post("/user/register", formData);
      if (data.success) {
        toast.success("Account created! Login now.");
        navigate("/login");
      }
    } catch {
      toast.error("Signup failed");
    }
  };

  return (
    <div className="signup-wrapper">
      
      {/* RIPPLE BACKGROUND */}
      <canvas ref={canvasRef} id="signupRipple"></canvas>

      <div className="signup-card">

        <h1 className="signup-brand">RAPS POWERPLAY</h1>
        <h2 className="signup-title">Create Account</h2>
        <p className="signup-subtitle">Start your gaming journey</p>

        <form onSubmit={handleSubmit} className="signup-form">

          {/* NAME */}
          <div className="signup-field">
            <label>Name</label>
            <input
              name="name"
              className="signup-input"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className="signup-error">{errors.name}</p>}
          </div>

          {/* EMAIL */}
          <div className="signup-field">
            <label>Email</label>
            <input
              name="email"
              className="signup-input"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="signup-error">{errors.email}</p>}
          </div>

          {/* PHONE */}
          <div className="signup-field">
            <label>Phone</label>
            <input
              name="phone"
              className="signup-input"
              placeholder="10-digit number"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && <p className="signup-error">{errors.phone}</p>}
          </div>

          {/* PASSWORD */}
          <div className="signup-field">
            <label>Password</label>

            <div className="password-wrap">
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                className="signup-input"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
              />
              <button type="button" className="toggle" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            {/* Password Strength */}
            {formData.password && (
              <div className="signup-strength-box">
                <div className="signup-strength-bar">
                  <div
                    className="signup-strength-fill"
                    style={{
                      width: `${(passwordStrength.score / 5) * 100}%`,
                      backgroundColor: passwordStrength.color,
                    }}
                  ></div>
                </div>
                <p className="signup-strength-text" style={{ color: passwordStrength.color }}>
                  {passwordStrength.text}
                </p>
                <p className="signup-strength-feedback">{passwordStrength.feedback}</p>
              </div>
            )}

            {errors.password && <p className="signup-error">{errors.password}</p>}
          </div>

          {/* CONFIRM PASSWORD */}
          <div className="signup-field">
            <label>Confirm Password</label>

            <div className="password-wrap">
              <input
                name="confirmPassword"
                type={showConfirm ? "text" : "password"}
                className="signup-input"
                placeholder="••••••••"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              <button type="button" className="toggle" onClick={() => setShowConfirm(!showConfirm)}>
                {showConfirm ? "Hide" : "Show"}
              </button>
            </div>

            {errors.confirmPassword && <p className="signup-error">{errors.confirmPassword}</p>}
          </div>

          <button className="signup-btn" type="submit">Create Account</button>
        </form>

        <p className="signup-footer">
          Already have an account?
          <button onClick={onSwitchToLogin} className="signup-link">Sign In</button>
        </p>

      </div>
    </div>
  );
};

export default SignUp;
