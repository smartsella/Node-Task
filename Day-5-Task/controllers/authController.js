export const authController = (req, res) => {
  const user = req.body;
  if (!user) {
    res.status(200).json({ name: user, msg: "success msg" });
  } else {
    console.log("Error msg");
  }
};
