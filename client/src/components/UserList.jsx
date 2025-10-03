import React from "react";
import API from "../api";
import { Pencil, Trash2 } from "lucide-react";

export default function UserList({ users = [], onSelect, selectedId, onEdit }) {
  const handleDelete = async (id) => {
    if (!confirm("Delete this user?")) return;
    try {
      await API.delete(`/users/${id}`);
      window.location.reload();
    } catch (err) {
      console.error(err);
      alert("Delete failed");
    }
  };

  return (
    <div className="h-full max-h-[540px] overflow-y-auto">
      <ul className="divide-y divide-gray-200">
        {users.map((u) => (
          <li
            key={u._id}
            onClick={() => onSelect(u)}
            className={`p-3 flex justify-between items-center cursor-pointer hover:bg-gray-50 ${
              selectedId === u._id ? "bg-gray-100" : ""
            }`}
          >
            {/* User Info */}
            <div>
              <p className="font-medium text-gray-800">{u.name}</p>
              <p className="text-sm text-gray-500">{u.role}</p>
            </div>

            {/* Actions */}
            <div className="flex gap-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onEdit(u);
                }}
                className="p-1 rounded hover:bg-blue-50 text-blue-600"
                title="Edit User"
              >
                <Pencil size={18} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleDelete(u._id);
                }}
                className="p-1 rounded hover:bg-red-50 text-red-600"
                title="Delete User"
              >
                <Trash2 size={18} />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
