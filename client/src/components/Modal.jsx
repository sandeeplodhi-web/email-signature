import React, { useEffect } from "react";

export default function Modal({ isOpen, onClose, children }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    if (isOpen) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl p-5 relative">
        <button onClick={onClose} className="absolute right-3 top-3 text-gray-500 hover:text-black text-xl">&times;</button>
        {children}
      </div>
    </div>
  );
}
