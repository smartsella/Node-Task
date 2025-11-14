import dataa from "../models/mongoosedata.js";

//POST METHODS

export const authCreate1 = async (req, res) => {
  try {
    const data = await dataa.create(req.body);
    res.json({ msg: "Create1 Success", data });
  } catch (error) {
    res.status(500).json({ msg: "Create1 Error", error });
  }
};

export const authCreate2 = async (req, res) => {
  try {
    const data = await dataa.create(req.body);
    res.json({ msg: "Create2 Success", data });
  } catch (error) {
    res.status(500).json({ msg: "Create2 Error", error });
  }
};

export const authCreate3 = async (req, res) => {
  try {
    const data = await dataa.create(req.body);
    res.json({ msg: "Create3 Success", data });
  } catch (error) {
    res.status(500).json({ msg: "Create3 Error", error });
  }
};

export const authCreate4 = async (req, res) => {
  try {
    const data = await dataa.create(req.body);
    res.json({ msg: "Create4 Success", data });
  } catch (error) {
    res.status(500).json({ msg: "Create4 Error", error });
  }
};

//PARAMS METHODS

export const authGet1 = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await dataa.findById(id);
    res.json({ msg: "Link1 Get Success", data });
  } catch (error) {
    res.status(500).json({ msg: "Link1 Error", error });
  }
};

export const authGet2 = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await dataa.findById(id);
    res.json({ msg: "Link2 Get Success", data });
  } catch (error) {
    res.status(500).json({ msg: "Link2 Error", error });
  }
};

//FETCH (GET ALL)

export const authFetch1 = async (req, res) => {
  try {
    const data = await dataa.find();
    res.json({ msg: "Fetch1 Success", datasget: data });
  } catch (error) {
    res.status(500).json({ msg: "Fetch1 Error", error });
  }
};

export const authFetch2 = async (req, res) => {
  try {
    const data = await dataa.find();
    res.json({ msg: "Fetch2 Success", datasget: data });
  } catch (error) {
    res.status(500).json({ msg: "Fetch2 Error", error });
  }
};

export const authFetch3 = async (req, res) => {
  try {
    const data = await dataa.find();
    res.json({ msg: "Fetch3 Success", datasget: data });
  } catch (error) {
    res.status(500).json({ msg: "Fetch3 Error", error });
  }
};

export const authFetch4 = async (req, res) => {
  try {
    const data = await dataa.find();
    res.json({ msg: "Fetch4 Success", datasget: data });
  } catch (error) {
    res.status(500).json({ msg: "Fetch4 Error", error });
  }
};

// QUERY METHODS

export const authQuery1 = async (req, res) => {
  try {
    const { name } = req.query;
    const data = await dataa.find({ name });
    res.json({ msg: "Query1 Success", data });
  } catch (error) {
    res.status(500).json({ msg: "Query1 Error", error });
  }
};

export const authQuery2 = async (req, res) => {
  try {
    const { email } = req.query;
    const data = await dataa.find({ email });
    res.json({ msg: "Query2 Success", data });
  } catch (error) {
    res.status(500).json({ msg: "Query2 Error", error });
  }
};
