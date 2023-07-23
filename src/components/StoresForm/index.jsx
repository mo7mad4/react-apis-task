import React, { useState, useEffect } from "react";
import inputsArray from "../../mock/StoreForm";
import "./style.css";

const StoresForm = (props) => {
  const [name, setName] = useState("");
  const [cities, setCities] = useState("");
  const [isGetFirstTimeData, setIsGetFirstTimeData] = useState(true);

  useEffect(() => {
    if (props.store && isGetFirstTimeData) {
      setName(props.store.name);
      setCities(props.store.cities);
      setIsGetFirstTimeData(false);
    }
  }, [props.store, isGetFirstTimeData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name,
      cities,
    };
    props.handleSubmit(data);
  };

  const handleChangeInput = (e) => {
    const { value, name } = e.target;
    if (name === "name") {
      setName(value);
    } else if (name === "cities") {
      setCities(value);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {inputsArray.map((input) => (
        <div className="inputForm" key={input.id}>
          <label htmlFor={input.id}>{input.label}</label>
          {input.type === "textarea" ? (
            <textarea
              id={input.id}
              name={input.name}
              value={input.name === "name" ? name : cities}
              onChange={handleChangeInput}
              style={{
                padding: 10,
                width: 400,
                height: 200
              }}
            />
          ) : (
            <input
              type={input.type}
              id={input.id}
              name={input.name}
              value={input.name === "name" ? name : cities}
              onChange={handleChangeInput}
              style={{
                padding: 10,
                width: 300,
              }}
            />
          )}
        </div>
      ))}
      <div className="buttonAction">
        <button type="submit">
          {props.isLoading ? "Loading..." : "Submit"}
        </button>
      </div>
    </form>
  );
};
export default StoresForm;