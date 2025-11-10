export const authController = (req, res) => {
  const { name, place } = req.body;
  if ((name, place)) {
    res.status(200).json({
      message: "Avenger regster successfully!",
      data: { name, place },
    });
  } else {
    console.log("Error msg");
  }
};
