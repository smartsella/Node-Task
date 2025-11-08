export const registerUser = (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields required!" });
  }

  console.log("🧾 New User Registered:", { name, email });
  res.status(201).json({ message: "User registered successfully!" });
};

export const loginUser = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password required!" });
  }

  console.log("🔐 Login Attempt:", { email });
  res.status(200).json({ message: "Login successful!" });
};
