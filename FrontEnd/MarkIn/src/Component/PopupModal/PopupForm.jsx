// components/PopupForm.jsx
import React from "react";
import { Button } from "@mui/material";
import { FaTimes } from "react-icons/fa";

const PopupForm = ({
  title = "Form",
  fields = [],
  values ={},
  onChange,
  onSubmit,
  onClose,
  isOpen,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-96 rounded-lg bg-white p-6 shadow-lg">
        <div className="flex items-center justify-between">
          <h2 className="mb-4 text-xl font-bold text-blue-900">{title}</h2>
          <Button
            onClick={onClose}
            sx={{ minWidth: "auto", padding: "8px" }}
            className="absolute -top-3 right-3 text-gray-600 hover:text-gray-900"
          >
            <FaTimes />
          </Button>
        </div>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          {fields.map((field) => (
            <input
              key={field.name}
              type={field.type || "text"}
              name={field.name}
              placeholder={field.placeholder}
              value={values[field.name]}
              onChange={onChange}
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
            />
          ))}

          <div className="mt-4 flex justify-end space-x-3">
            <Button
              variant="contained"
              sx={{ backgroundColor: "#3393ff", color: "white" }}
              onClick={onSubmit}
            >
              {values._id ? "Update" : "Add"}
            </Button>
            <Button
              variant="contained"
              sx={{ backgroundColor: "#ff3342", color: "white" }}
              onClick={onClose}
            >
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PopupForm;
