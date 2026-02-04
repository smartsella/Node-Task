import Planet from "../models/planetmodule.js";

// CREATE
export const addPlanet = async (req, res) => {
  try {
    const data = await Planet.create(req.body);
    res.json({ msg: "Planet Added!", data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// READ ALL
export const getPlanets = async (req, res) => {
  try {
    const data = await Planet.find();
    res.json({ data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET ONE (for editing)
export const getPlanetById = async (req, res) => {
  try {
    const data = await Planet.findById(req.params.id);
    res.json({ data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE
export const updatePlanet = async (req, res) => {
  try {
    const data = await Planet.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json({ msg: "Updated!", data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE
export const deletePlanet = async (req, res) => {
  try {
    await Planet.findByIdAndDelete(req.params.id);
    res.json({ msg: "Deleted!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
