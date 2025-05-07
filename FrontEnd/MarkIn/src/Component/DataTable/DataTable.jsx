// components/DataTable.jsx
import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const DataTable = ({ headers, data, onEdit, onDelete }) => {
  return (
    <div className="w-full p-4">
      <table className="w-full border-collapse text-left">
        <thead>
          <tr className="bg-gray-200">
            <th className="border-b px-4 py-2">#</th>
            {headers.map((header) => (
              <th key={header.key} className="border-b px-4 py-2">
                {header.label}
              </th>
            ))}
            <th className="border-b px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {data?.length > 0 ? (
            data.map((row, index) => (
              <tr key={row._id || index}>
                <td className="border-b px-4 py-2">{index + 1}</td>
                {headers.map((header) => (
                  <td key={header.key} className="border-b px-4 py-2">
                    {row[header.key]}
                  </td>
                ))}
                <td className="border-b px-4 py-2">
                  <div className="flex space-x-2">
                    <FaEdit
                      className="text-blue-600 cursor-pointer"
                      onClick={() => onEdit(row)}
                    />
                    <FaTrash
                      className="text-red-600 cursor-pointer"
                      onClick={() => onDelete(row._id)}
                    />
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={headers.length + 2} className="text-center py-4">
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
