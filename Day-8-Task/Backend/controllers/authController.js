import mySelfmodel from "../models/mySelf.js";

export const authController = async (req, res) => {
  try {
    const { name, age, role, native } = req.body;
    const connectdata = await mySelfmodel.create({ name, age, role, native });

    res.status(201).json({
      msg: "Succfully done controle",
      data: connectdata,
    });
  } catch (error) {
    res.status(400).json({ msg: `Something went wrong ${erro}` });
    console.log("Error msg", error);
  }
};

export const getdatas = async (req, res) => {
  try {
    const getdatas = await mySelfmodel.find();
    res.status(200).json({ data: getdata });
  } catch (error) {
    console.log("Error msg", error);
  }
};
