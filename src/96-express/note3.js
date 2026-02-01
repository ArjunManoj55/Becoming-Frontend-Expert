//auth

// hashing 1 way cant de crypt

// encryt 2 way with a key

//json web tokens - token consists a big string (anyone has can access data) can be decode
//but only the roiginal server can verify -> stored in local storage

/* =========================================================
   JSON Web Token (JWT) – Frontend Example
   ---------------------------------------------------------
   - JWT is a long encoded string
   - Anyone can DECODE a JWT
   - Only the original server can VERIFY it (using secret)
   - Frontend commonly stores JWT in localStorage
   ========================================================= */

/* ---------------- LOGIN ---------------- */
async function loginUser() {
  // Send login credentials to backend
  const response = await fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: "test@example.com",
      password: "secret123",
    }),
  });

  const data = await response.json();

  // Backend returns a JWT token
  // Example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
  const token = data.token;

  // Store JWT in localStorage
  // NOTE: localStorage persists even after page refresh
  localStorage.setItem("token", token);
}

/* ---------------- CHECK AUTH ---------------- */
function isUserLoggedIn() {
  // Get token from localStorage
  const token = localStorage.getItem("token");

  // If token exists → user is considered logged in
  return !!token;
}

/* ---------------- AUTHENTICATED REQUEST ---------------- */
async function getUserProfile() {
  const token = localStorage.getItem("token");

  // Send JWT to backend using Authorization header
  const response = await fetch("/profile", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.json();
}

/* ---------------- LOGOUT ---------------- */
function logoutUser() {
  // Remove token from localStorage
  // User is now logged out
  localStorage.removeItem("token");
}

/* ---------------- SECURITY NOTE ---------------- */
/*
  ⚠️ IMPORTANT:
  - JWT stored in localStorage is vulnerable to XSS attacks
  - JavaScript can access localStorage
  - More secure approach: HTTP-only cookies

  WHY STILL USED?
  - Simple
  - Common in small apps & demos
  - Easy to explain in interviews
*/
