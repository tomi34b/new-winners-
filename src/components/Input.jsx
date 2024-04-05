import React from "react";

const Input = (props) => {
  return (
    <div className="mt-6">
      <label className="text-gray-500">{props.label}</label>
      <input
        type={props.type}
        className="block w-full border-b border-black py-2 text-lg"
        value={props.value}
        onChange={props.handleChange}
        name={props.name}
      />
      {props.error && <p className="text-sm text-red-500">{props.error}</p>}
    </div>
  );
};

export default Input;
