import React, { useState } from "react";

export default function Table() {
  const [Tables, setTables] = useState([
    {
      Dno: "1",
      Street: "A Street",
      Area: "M AREA",
      District: "CBE",
      pincode: 625007,
    },
    {
      Dno: "2",
      Street: "B Street",
      Area: "N AREA",
      District: "CBE",
      pincode: 625008,
    },
    {
      Dno: "3",
      Street: "C Street",
      Area: "M AREA",
      District: "CBE",
      pincode: 625009,
    },
  ]);
  const [Dno, setDno] = useState("");
  const [Street, setstreet] = useState("");
  const [District, setDistrict] = useState("");
  const [Area, setArea] = useState("");
  const [pincode, setpincode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRow = {
      Dno,
      Street,
      Area,
      District,
      pincode,
    };
    setTables([...Tables, newRow]);

    setFormData({
      Dno: "",
      Street: "",
      Area: "",
      District: "",
      pincode: "",
    });
  };
  const addRow = () => {
    const newRow = {
      Dno: (Tables.length + 1).toString(),
      Street: `New Street ${Tables.length + 1}`,
      Area: `New Area ${Tables.length + 1}`,
      District: `New District ${Tables.length + 1}`,
      pincode: 625000 + Tables.length + 1,
    };
    setTables([...Tables, newRow]);
  };

  const deleteRow = (index) => {
    const updatedTables = [...Tables];
    updatedTables.splice(index, 1);
    setTables(updatedTables);
  };

  const deleteSelectedRows = () => {
    deleteRow(1);
  };

  return (
    <>
      <div className="flex justify-center items-center">
        <div className="flex flex-col gap-2">
          <h1>Table</h1>
          <table className="border-black border-2 p-1">
            <thead className="border-black border-2">
              <tr>
                <th className="border-2 border-black">Dno</th>
                <th>Street</th>
                <th className="border-2 border-black">Area</th>
                <th className="border-2 border-black p-1">District</th>
                <th>pincode</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {Tables.map((Table, index) => (
                <tr key={index} className="border-black border-2">
                  <td className="border-black border-2">{Table.Dno}</td>
                  <td className="border-black border-2">{Table.Street}</td>
                  <td className="border-black border-2">{Table.Area}</td>
                  <td className="border-black border-2">{Table.District}</td>
                  <td className="border-black border-2">{Table.pincode}</td>
                  <td>
                    <input
                      type="radio"
                      id={`row-${index}`}
                      name="selectedRow"
                      value={index}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-2">
            <button
              onClick={addRow}
              className="bg-green-400 text-sm text-white p-1 w-fit hover:bg-blue-400 mr-2"
            >
              Add +
            </button>
            <button
              onClick={deleteSelectedRows}
              className="bg-red-500 text-sm text-white p-1 w-fit hover:bg-red-600"
            >
              Delete Selected
            </button>
          </div>
        </div>
      </div>
      <div className="flex p-4 justify-center ">
        <form
          className="border-black border-2 flex flex-col p-12 gap-5 items-center"
          onSubmit={handleSubmit}
        >
          <h1>FILL ADDRESS</h1>
          <input
            type="text"
            placeholder="Doornumber"
            required
            className="p-3 border-black border-2 rounded-xl w-80 "
            value={Dno}
            onChange={(e) => setDno(e.target.value)}
          />
          <input
            type="text"
            placeholder="street"
            required
            className="p-3 border-black border-2 rounded-xl  w-80"
            value={Street}
            onChange={(e) => setstreet(e.target.value)}
          />
          <input
            type="text"
            placeholder="Area"
            required
            className="p-3 border-black border-2 rounded-xl  w-80"
            value={Area}
            onChange={(e) => setArea(e.target.value)}
          />
          <input
            type="text"
            placeholder="District"
            required
            className="p-3 border-black border-2 rounded-xl  w-80"
            value={District}
            onChange={(e) => setDistrict(e.target.value)}
          />
          <input
            type="text"
            placeholder="pincode"
            required
            className="p-3 border-black border-2 rounded-xl  w-80"
            value={pincode}
            onChange={(e) => setpincode(e.target.value)}
          />
          <button className="bg-green-300 w-fit p-2 rounded hover:bg-blue-400">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
