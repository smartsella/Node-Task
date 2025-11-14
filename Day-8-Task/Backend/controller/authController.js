import finaluser from "../models/userdata.js";

export const Creatdata = async (req, res) => {
  try {
    const { name, email, address } = req.body;
    const conn = await finaluser.create({ name, email, address });

    res.status(200).json({ msg: "Success msg", user: conn });
  } catch (error) {
    console.log("Error msg", error);
  }
};

export const Getdata = async (req, res) => {
  try {
    const getdatas = await finaluser.find();

    res.status(200).json({ msg: "Success get msg", user: getdatas });
  } catch (error) {
    console.log("Error msg", error);
  }
};
