import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const DataTable = ({ headers, data, onEdit, onDelete }) => {
  // Utility: Map column prop to Tailwind alignment class
  const getColumnClass = (column) => {
    switch (column) {
      case "center":
        return "text-center";
      case "right":
        return "text-right";
      case "left":
      default:
        return "text-left";
    }
  };

  return (
    <div className="w-full p-4 bg-[#1e1e1e] text-white rounded-md shadow-lg">
      <table className="w-full border-collapse text-left">
        <thead>
          <tr className="bg-[#2a2a2a]">
            <th className="border-b border-gray-600 px-4 py-2">#</th>
            {headers.map((header) => (
              <th
                key={header.key}
                className={`border-b border-gray-600 px-4 py-2 ${getColumnClass(
                  header.column
                )}`}
              >
                {header.label}
              </th>
            ))}
            <th className="border-b border-gray-600 px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {data?.length > 0 ? (
            data.map((row, index) => (
              <tr
                key={row._id || index}
                className={index % 2 === 0 ? "bg-[#2b2b2b]" : "bg-[#1f1f1f]"}
              >
                <td className="border-b border-gray-700 px-4 py-2">
                  {index + 1}
                </td>
                {headers.map((header) => (
                  <td
                    key={header.key}
                    className={`border-b border-gray-700 px-4 py-2 ${getColumnClass(
                      header.column
                    )}`}
                  >
                    {row[header.key]}
                  </td>
                ))}
                <td className="border-b border-gray-700 px-4 py-2">
                  <div className="flex space-x-2">
                    <FaEdit
                      className="text-blue-400 hover:text-blue-500 cursor-pointer"
                      onClick={() => onEdit(row)}
                    />
                    <FaTrash
                      className="text-red-400 hover:text-red-500 cursor-pointer"
                      onClick={() => onDelete(row._id)}
                    />
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={headers.length + 2}
                className="text-center py-4 text-gray-400"
              >
                No data available.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
