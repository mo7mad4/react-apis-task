import React, { Component } from "react";
import inputsArray from "../../mock/StoreForm";
import "./style.css";

class StoresForm extends Component {
  state = {
    name: "",
    cities: "",
    isGetFirstTimeData: true,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: this.state.name,
      cities: this.state.cities,
    };

    this.props.handleSubmit(data);
  };

  static getDerivedStateFromProps(props, state) {
    if (props.store && state.isGetFirstTimeData) {
      return {
        name: props.store.name,
        cities: props.store.cities,
        isGetFirstTimeData: false,
      };
    }
    return null;
  }

  handleChangeInput = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {inputsArray.map((input) => (
          <div className="inputForm" key={input.id}>
            <label htmlFor={input.id}>{input.label}</label>
            {input.type === "textarea" ? (
              <textarea
                id={input.id}
                name={input.name}
                value={this.state[input.id]}
                onChange={this.handleChangeInput}
                style={{
                  padding: 10,
                  width: 400,
                  height:200
                }}
              />
            ) : (
              <input
                type={input.type}
                id={input.id}
                name={input.name}
                value={this.state[input.id]}
                onChange={this.handleChangeInput}
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
            {this.props.isLoading ? "Loading..." : "Submit"}
          </button>
        </div>
      </form>
    );
  }
}

export default StoresForm;
