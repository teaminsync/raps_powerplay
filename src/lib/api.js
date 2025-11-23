// src/lib/api.js
import axios from "axios";

/**
 * Normalize base URL:
 * - Removes trailing slashes
 * - Falls back to localhost in dev
 * - Handles Render / Vercel correctly
 */
const cleanBaseURL = () => {
  let url = import.meta.env.VITE_API_URL || "http://localhost:5000";

  // Remove trailing slash
  url = url.replace(/\/+$/, "");

  return url;
};

export const API_URL = cleanBaseURL();

/**
 * Axios instance to use across the project
 */
export const api = axios.create({
  baseURL: API_URL,
  withCredentials: true, // Keep for JWT cookies if needed
});

/**
 * Build absolute asset URL from relative paths
 * Example:
 *   assetURL("Images/Aadhaar/file.png")
 */
export const assetURL = (path) => {
  if (!path) return "";

  const p = String(path).trim();

  // If already absolute (Cloudinary, S3, Google Storage, etc.)
  if (/^https?:\/\//i.test(p)) return p;

  return `${API_URL}/${p.replace(/^\//, "")}`;
};

export default api;
