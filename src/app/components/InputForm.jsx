import React from "react";

export default function InputForm({ label, name, type, value, onChange }) {
  return (
    <div className="mb-4 ">
      <input
        className="w-80 border-b border-gray-200 appearance-none py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={label}
      />
    </div>
  );
}
