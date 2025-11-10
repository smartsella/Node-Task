export const authCotroller = (req, res) => {
  const { name } = req.body;
  if (name) {
    res.status(200).json({ message: name, msg: "done" });
  } else {
    res.status(404).json({ message: "error msg" });
  }
};

export const paramscontroller = (req, res) => {
  const { id } = req.params;
  if (id) {
    res.status(200).json({ data: id, msg: "done" });
  } else {
    res.status(404).json({ msg: "error msg" });
  }
};

export const querycontroller = (req, res) => {
  const user = req.query;

  if (user) {
    res.status(200).json({ name: user, msg: "donemsg" });
  } else {
    res.status(404).json({ msg: "error msg" });
  }
};

export const headercontroller = (req, res) => {
  const { user } = req.body;

  if (user) {
    res.status(200).json({ name: user, msg: "done msg" });
  } else {
    res.status(404).json({ msg: "error msg" });
  }
};
