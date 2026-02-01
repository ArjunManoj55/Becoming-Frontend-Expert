import express from "express";
import { z } from "zod";

const app = express();
app.use(express.json());

/* ---------------- ZOD SCHEMA ---------------- */
const userSchema = z.object({
  email: z.string().email("Invalid email format"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

/* ---------------- API ENDPOINT ---------------- */
app.post("/register", (req, res) => {
  const result = userSchema.safeParse(req.body);

  // ❌ Validation failed
  if (!result.success) {
    return res.status(400).json({
      message: "Validation failed",
      errors: result.error.errors,
    });
  }

  // ✅ Validation passed (clean data)
  const { email } = result.data;

  res.status(200).json({
    message: "User registered successfully",
    email,
  });
});

/* ---------------- SERVER START ---------------- */
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
