import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [form, setForm] = useState({
    planetname: "",
    planetage: "",
    planetplace: "",
    planetcolour: "",
  });

  const [planetdata, setPlanetData] = useState([]);
  const [editId, setEditId] = useState(null);

  // input handle
  const inputhandle = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // FETCH all planets
  const getplanetdata = async () => {
    const res = await axios.get("http://localhost:3000/api/galaxy/get");
    setPlanetData(res.data.data); // backend returns { data: [...] }
  };

  useEffect(() => {
    (() => {
      getplanetdata();
    })();
  }, []);

  // SUBMIT (Create)
  const submithandle = async (e) => {
    e.preventDefault();

    if (editId === null) {
      // CREATE
      await axios.post("http://localhost:3000/api/galaxy/moon", form);
      alert("Planet Added!");
    } else {
      // UPDATE
      await axios.put(
        `http://localhost:3000/api/galaxy/update/${editId}`,
        form
      );
      alert("Planet Updated!");
      setEditId(null);
    }

    setForm({
      planetname: "",
      planetage: "",
      planetplace: "",
      planetcolour: "",
    });

    getplanetdata();
  };

  // EDIT (Get single)
  const editplanetdata = async (id) => {
    const res = await axios.get(`http://localhost:3000/api/galaxy/edit/${id}`);

    setForm(res.data.data);
    setEditId(id);
  };

  // DELETE
  const deleteplanet = async (id) => {
    await axios.delete(`http://localhost:3000/api/galaxy/delete/${id}`);
    alert("Deleted!");
    getplanetdata();
  };

  return (
    <>
      <div>
        <form onSubmit={submithandle}>
          <input
            type="text"
            name="planetname"
            value={form.planetname}
            placeholder="Planet Name"
            onChange={inputhandle}
          />

          <input
            type="text"
            name="planetage"
            value={form.planetage}
            placeholder="Planet Age"
            onChange={inputhandle}
          />

          <input
            type="text"
            name="planetplace"
            value={form.planetplace}
            placeholder="Planet Place"
            onChange={inputhandle}
          />

          <input
            type="text"
            name="planetcolour"
            value={form.planetcolour}
            placeholder="Planet Colour"
            onChange={inputhandle}
          />

          <button>{editId ? "Update" : "Register"}</button>
        </form>

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Place</th>
              <th>Colour</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {planetdata.map((p) => (
              <tr key={p._id}>
                <td>{p._id}</td>
                <td>{p.planetname}</td>
                <td>{p.planetage}</td>
                <td>{p.planetplace}</td>
                <td>{p.planetcolour}</td>

                <td>
                  <button onClick={() => editplanetdata(p._id)}>Edit</button>
                  <button onClick={() => deleteplanet(p._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default App;
