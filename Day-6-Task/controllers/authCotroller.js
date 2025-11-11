// BODY Controller
export const authController = (req, res) => {
  const { name } = req.body;
  if (name) {
    res.status(200).json({ message: name, msg: "done" });
  } else {
    res.status(400).json({ msg: "Name is required" });
  }
};

// PARAMS Controller
export const paramsController = (req, res) => {
  const { id } = req.params;
  if (id) {
    res.status(200).json({ data: id, msg: "done" });
  } else {
    res.status(400).json({ msg: "ID not found in params" });
  }
};

// QUERY Controller
export const queryController = (req, res) => {
  const { user } = req.query;
  if (user) {
    res.status(200).json({ name: user, msg: "done msg" });
  } else {
    res.status(400).json({ msg: "User query missing" });
  }
};

// HEADER Controller
export const headerController = (req, res) => {
  const user = req.headers["user"];
  if (user) {
    res.status(200).json({ name: user, msg: "done msg" });
  } else {
    res.status(400).json({ msg: "User header missing" });
  }
};
