import React, { useEffect, useState } from "react";
import API from "../api";
import { toast } from "react-toastify"; // ✅ Toastify import

export default function AdminForm({ onSaved, editUser }) {
  const initial = editUser || {
    name: "",
    role: "",
    company: "",
    address: "",
    email: "",
    website: "",
    phone: "",
    logo: "",
    badges: { goodfirms: "", trustpilot: "", dmca: "", clutch: "" },
    socials: { facebook: "", instagram: "", linkedin: "" },
  };

  const [form, setForm] = useState(initial);

  useEffect(() => {
    setForm(
      editUser
        ? {
            ...initial,
            ...editUser,
            badges: { ...(editUser.badges || initial.badges) },
            socials: { ...(editUser.socials || initial.socials) },
          }
        : initial
    );
    // eslint-disable-next-line
  }, [editUser]);

  const handleChange = (k) => (e) =>
    setForm({ ...form, [k]: e.target.value });

  const handleNested = (group, k) => (e) =>
    setForm({
      ...form,
      [group]: { ...(form[group] || {}), [k]: e.target.value },
    });

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      let res;

      if (editUser && editUser._id) {
        // ✅ Update existing user
        res = await API.put(`/users/${editUser._id}`, form);
        toast.success("User updated successfully!");
      } else {
        // ✅ Create new user
        res = await API.post("/users", form);
        toast.success("User created successfully!");
      }

      // ✅ Reset form and notify parent
      setForm(initial);
      onSaved(res.data);
    } catch (err) {
      console.error(err);

      // ⚠️ Handle duplicate email validation
      if (err.response?.data?.message === "User already exists") {
        toast.warning("User already exists with this email!");
      } else {
        toast.error("Failed to save user. Please try again.");
      }
    }
  };

  return (
    <form onSubmit={handleSave} className="space-y-3">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <input
          placeholder="Name"
          value={form.name}
          onChange={handleChange("name")}
          className="border p-2 rounded"
          required
        />
        <input
          placeholder="Role"
          value={form.role}
          onChange={handleChange("role")}
          className="border p-2 rounded"
        />
      </div>

      <input
        placeholder="Company"
        value={form.company}
        onChange={handleChange("company")}
        className="border p-2 rounded w-full"
      />
      <input
        placeholder="Address"
        value={form.address}
        onChange={handleChange("address")}
        className="border p-2 rounded w-full"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <input
          placeholder="Email"
          value={form.email}
          onChange={handleChange("email")}
          className="border p-2 rounded"
          required
        />
        <input
          placeholder="Phone"
          value={form.phone}
          onChange={handleChange("phone")}
          className="border p-2 rounded"
        />
      </div>

      <input
        placeholder="Website"
        value={form.website}
        onChange={handleChange("website")}
        className="border p-2 rounded w-full"
      />
      <input
        placeholder="Logo URL"
        value={form.logo}
        onChange={handleChange("logo")}
        className="border p-2 rounded w-full"
      />

      <div className="grid grid-cols-2 gap-2">
        <input
          placeholder="Goodfirms badge URL"
          value={form.badges.goodfirms}
          onChange={handleNested("badges", "goodfirms")}
          className="border p-2 rounded"
        />
        <input
          placeholder="Trustpilot badge URL"
          value={form.badges.trustpilot}
          onChange={handleNested("badges", "trustpilot")}
          className="border p-2 rounded"
        />
        <input
          placeholder="DMCA badge URL"
          value={form.badges.dmca}
          onChange={handleNested("badges", "dmca")}
          className="border p-2 rounded"
        />
        <input
          placeholder="Clutch badge URL"
          value={form.badges.clutch}
          onChange={handleNested("badges", "clutch")}
          className="border p-2 rounded"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        <input
          placeholder="Facebook URL"
          value={form.socials.facebook}
          onChange={handleNested("socials", "facebook")}
          className="border p-2 rounded"
        />
        <input
          placeholder="Instagram URL"
          value={form.socials.instagram}
          onChange={handleNested("socials", "instagram")}
          className="border p-2 rounded"
        />
        <input
          placeholder="LinkedIn URL"
          value={form.socials.linkedin}
          onChange={handleNested("socials", "linkedin")}
          className="border p-2 rounded"
        />
      </div>

      <div className="flex items-center gap-3">
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Save
        </button>
      </div>
    </form>
  );
}
