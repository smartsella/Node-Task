import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
  // state
  const [form, setForm] = useState({ name: "", email: "", address: "" });
  const [datastore, setDatastore] = useState([]);

  // input change handler
  const inputhandle = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // submit handler
  const submitHandle = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/api/route/control",
        form
      );

      alert(response.data.msg);

      // reset form fields
      setForm({ name: "", email: "", address: "" });

      // refresh data list
      datafetch();
    } catch (error) {
      console.log("Submit Error:", error);
      alert("Something went wrong");
    }
  };

  // fetch data function
  const datafetch = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/route/getdata"
      );

      console.log("API Data =>", response.data);

      // safe assignment: IF datasget exists, use it, otherwise use empty array
      const data = response.data.user || [];

      setDatastore(Array.isArray(data) ? data : []);
    } catch (error) {
      console.log("Fetch Error:", error);
      setDatastore([]); // avoid crash
    }
  };

  // load on first render
  useEffect(() => {
    datafetch();
  }, []);

  return (
    <>
      <div>
        <form onSubmit={submitHandle}>
          <label>Name : </label>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            value={form.name}
            onChange={inputhandle}
          />

          <label>Email : </label>
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            value={form.email}
            onChange={inputhandle}
          />

          <label>Address : </label>
          <input
            type="text"
            name="address"
            placeholder="Enter Your Address"
            value={form.address}
            onChange={inputhandle}
          />

          <input type="submit" value="Register" />
        </form>

        <div>
          {datastore.length === 0 ? (
            <h2>No Data Found</h2>
          ) : (
            datastore.map((item, index) => (
              <div key={index}>
                <h1>{item._id}</h1>
                <h1>{item.name}</h1>
                <h1>{item.email}</h1>
                <h1>{item.address}</h1>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default App;
