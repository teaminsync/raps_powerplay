// src/pages/login.jsx
"use client";

import { useState, useRef, useEffect, useContext } from "react";
import "../components/Login.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../context/AuthContext";
import { api } from "../lib/api";

const Login = ({ onSwitchToSignUp }) => {
  const canvasRef = useRef(null);
  const [ctx, setCtx] = useState(null);

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  /* ==========================================================
     RIPPLE ENGINE — WATER DROPLET EFFECT CANVAS
  ========================================================== */
/* ==========================================================
   FULL-SCREEN RIPPLE ENGINE — WAVES SPREAD ACROSS VIEWPORT
========================================================== */
useEffect(() => {
  const canvas = canvasRef.current;
  const context = canvas.getContext("2d");

  const resize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };

  resize();
  window.addEventListener("resize", resize);

  let ripples = [];

  function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    ripples = ripples.filter((r) => r.radius < r.maxRadius);

    ripples.forEach((r) => {
      r.radius += r.speed;
      r.opacity -= r.fade;

      context.beginPath();
      context.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
      context.strokeStyle = `rgba(255,120,40,${r.opacity})`;
      context.lineWidth = 2;
      context.shadowBlur = 35;
      context.shadowColor = "rgba(255,120,40,0.5)";
      context.stroke();
    });

    requestAnimationFrame(draw);
  }

  draw();

  const createRipple = (x, y) => {
    ripples.push({
      x,
      y,
      radius: 2,
      speed: 4.2,              // Faster wave expansion
      opacity: 0.45,           // Stronger glow
      fade: 0.0022,            // Slower fade → waves last longer
      maxRadius: Math.max(canvas.width, canvas.height) * 1.4  // FULL SCREEN
    });
  };

  const handleClick = (e) => createRipple(e.clientX, e.clientY);

  window.addEventListener("click", handleClick);

  return () => {
    window.removeEventListener("click", handleClick);
    window.removeEventListener("resize", resize);
  };
}, []);


  /* ==========================================================
     TYPE RIPPLE (each letter creates ripple)
  ========================================================== */
  const triggerTypeRipple = () => {
    if (!ctx) return;
    const x = window.innerWidth / 2;
    const y = window.innerHeight / 2 + 100;

    const rippleEvent = new Event("click");
    rippleEvent.clientX = x;
    rippleEvent.clientY = y;
    window.dispatchEvent(rippleEvent);
  };

  /* ==========================================================
     FORM HANDLERS
  ========================================================== */
  const handleChange = (e) => {
    triggerTypeRipple();
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await api.post("/user/login", formData);
      login(data);
      if (data.success) {
        toast.success("Logged in!");
        navigate("/booking");
      } else toast.error(data.message);
    } catch {
      toast.error("Login failed");
    }
  };

  return (
    <div className="auth-page">
      {/* RIPPLE BACKGROUND */}
      <canvas id="rippleCanvas" ref={canvasRef}></canvas>

      {/* LOGIN CARD */}
      <div className="auth-card">

        <h1 className="auth-brand">RAPS POWERPLAY</h1>
        <h2 className="auth-title">Welcome Back</h2>
        <p className="auth-subtitle">Access your gaming realm</p>

        <form className="auth-form" onSubmit={handleSubmit}>
          {/* EMAIL */}
          <div className="auth-input-group">
            <label>Email</label>
            <input
              name="email"
              type="email"
              placeholder="you@example.com"
              className="input"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          {/* PASSWORD */}
          <div className="auth-input-group">
            <label>Password</label>
            <div className="password-wrapper">
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="input"
                value={formData.password}
                onChange={handleChange}
              />
              <button
                type="button"
                className="toggle-pass"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {/* FORGOT PASSWORD */}
          <Link to="/forgotPassEmail" className="auth-link small">
            Forgot password?
          </Link>

          <button className="auth-btn" type="submit">
            Login
          </button>
        </form>

        <p className="auth-footer">
          Don’t have an account?
          <button className="auth-link" onClick={onSwitchToSignUp}>
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
