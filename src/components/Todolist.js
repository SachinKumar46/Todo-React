import React from "react";
import { useState } from "react";

const Todolist = () => {
  const [todo, setTodo] = useState({
    title: "",
    description: "",
  });
  // const [id, setId] = useState(1);
  const [record, setRecord] = useState([{ id: "" }]);

  const handleChange = (e) => {
    const nam = e.target.name;
    const val = e.target.value;
    console.log(nam, val);
    setTodo({ ...todo, [nam]: val });
  };

  const submitTodo = (e) => {
    // setId(id + 1);
    e.preventDefault();
    console.log("I am submit");
    const newRecord = { ...todo, id: new Date().getTime().toString() };
    console.log(record, "new record");

    setRecord([...record, newRecord]);
    console.log(record);

    setTodo({
      title: "",
      description: "",
    });
  };
  return (
    <>
      <div className="my-5" style={{ margin: "200px" }}>
        <form action="">
          <label htmlFor="title" className="form-label">
            Todo Title
          </label>
          <br />
          <input
            className="form-control"
            type="text"
            name="title"
            id="title"
            autoComplete="off"
            style={{ width: "100%" }}
            onChange={handleChange}
            placeholder="Enter the todo name"
            value={todo.title}
          />
          <br />
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <br />
          <input
            className="form-control"
            type="text"
            name="description"
            id="description"
            autoComplete="off"
            style={{ width: "100%" }}
            onChange={handleChange}
            placeholder="Enter the description name"
            value={todo.description}
          />
          <br />
          <button
            // type="submit"
            onClick={submitTodo}
            className="btn btn-primary btn-sm"
          >
            Submit
          </button>
        </form>
        {record.map((curdata) => {
          return (
            <div>
              {/* <p>{curdata.id}</p> */}
              <h4>{curdata.title}</h4>
              <p>{curdata.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Todolist;
