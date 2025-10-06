// src/App.jsx
import React, { useEffect, useState } from "react";
import API from "./api";
import AdminForm from "./components/AdminForm";
import SignaturePreview from "./components/SignaturePreview";
import UserList from "./components/UserList";
import sampleUser from "./sampleUser";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  const [users, setUsers] = useState([]);
  const [selected, setSelected] = useState(null);
  const [editUser, setEditUser] = useState(null);

  const fetchUsers = async () => {
    try {
      const res = await API.get("/users");
      setUsers(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleSaved = () => {
    fetchUsers();
    setEditUser(null);
  };

  const buildFullHTML = (user) => {
    if (!user) return "";
    const esc = (s) => (s ? String(s) : "");

    // Social icon map (SVG + color)
    const socialIcons = {
      facebook: {
        color: "#1877F2",
        svg: `<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" style="position: relative; top: 5.4px; width: 16.2px;">
        <path d="M1024 512.329c0-282.951-229.23-512.329-512-512.329s-512 229.378-512 512.329c0 255.715 187.23 467.671 432 506.101v-358.005h-130v-148.096h130v-112.872c0-128.403 76.44-199.328 193.39-199.328 56 0 114.61 10.006 114.61 10.006v126.081h-64.56c-63.6 0-83.44 39.496-83.44 80.052v96.061h142l-22.7 148.096h-119.3v358.005c244.77-38.43 432-250.386 432-506.101z" fill="#1877f2"></path>
      </svg>`,
      },
      instagram: {
        color: "#E1306C",
        svg: `<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" style="position: relative; top: 5.4px; width: 16.2px;">
        <path d="M682.653 512c0-93.991-76.659-170.654-170.654-170.654s-170.654 76.659-170.654 170.654c0 93.995 76.659 170.654 170.654 170.654s170.654-76.659 170.654-170.654zM774.646 512c0 145.323-117.325 262.645-262.645 262.645s-262.645-117.325-262.645-262.645c0-145.32 117.325-262.645 262.645-262.645s262.645 117.325 262.645 262.645zM846.641 238.688c0 33.997-27.331 61.328-61.328 61.328s-61.328-27.331-61.328-61.328c0-33.996 27.331-61.328 61.328-61.328s61.328 27.331 61.328 61.328v0zM512 92.033c-74.66 0-234.647-5.999-301.975 20.666-23.331 9.332-40.662 20.666-58.661 38.662s-29.33 35.33-38.662 58.661c-26.666 67.328-20.666 227.315-20.666 301.975s-5.999 234.647 20.666 301.975c9.332 23.331 20.666 40.662 38.662 58.661s35.33 29.33 58.661 38.662c67.328 26.666 227.315 20.666 301.975 20.666s234.647 5.999 301.975-20.666c23.331-9.332 40.662-20.666 58.661-38.662s29.33-35.33 38.662-58.661c26.666-67.328 20.666-227.315 20.666-301.975s5.999-234.647-20.666-301.975c-9.332-23.331-20.666-40.662-38.662-58.661s-35.33-29.33-58.661-38.662c-67.328-26.666-227.315-20.666-301.975-20.666zM1023.958 512c0 70.66 0.667 140.655-3.332 211.316-4 81.995-22.666 154.655-82.66 214.651s-132.656 78.66-214.651 82.66c-70.66 4-140.655 3.332-211.316 3.332s-140.655 0.667-211.316-3.332c-81.995-4-154.655-22.666-214.651-82.66s-78.66-132.656-82.66-214.651c-4-70.66-3.332-140.655-3.332-211.316s-0.667-140.655 3.332-211.316c4-81.995 22.666-154.655 82.66-214.651s132.656-78.66 214.651-82.66c70.66-4 140.655-3.332 211.316-3.332s140.655-0.667 211.316 3.332c81.995 4 154.655 22.666 214.651 82.66s78.66 132.656 82.66 214.651c4 70.66 3.332 140.655 3.332 211.316z" fill="#E1306C"></path>
      </svg>`,
      },
      linkedin: {
        color: "#0A66C2",
        svg: `<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" style="position: relative; top: 5.4px; width: 16.2px;">
        <path d="M365.714 327.385h202.407v104.748h2.894c28.16-50.993 97.095-104.748 199.819-104.748 213.653 0 253.166 134.28 253.166 308.924v355.692h-210.983v-315.321c0-75.212-1.525-171.953-109.746-171.953-109.883 0-126.651 81.907-126.651 166.491v320.783h-210.905v-664.615zM0 327.385h219.429v664.615h-219.429v-664.615zM219.429 142.769c0 61.176-49.121 110.769-109.714 110.769s-109.714-49.593-109.714-110.769c0-61.176 49.121-110.769 109.714-110.769s109.714 49.593 109.714 110.769z" fill="#0A66C2"></path>
      </svg>`,
      },
    };

    // Helper to build badges HTML dynamically with new styles
    const buildBadgesHTML = () => {
      if (!user.badges || Object.values(user.badges).length === 0) return "";
      return `
      <div style="
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 5px;
        max-width: 240px;
        justify-content: start;
      ">
        ${Object.values(user.badges)
          .map(
            (src) => `
          <a href="#" target="_blank" rel="noopener noreferrer" style="display: block;">
            <div style="
              width: 120px;
              height: 40px;
              display: flex;
              align-items: center;
              justify-content: center;
              border-radius: 8px;
              transition: all 0.3s ease;
            ">
              <img src="${esc(src)}" alt="Badge" style="
                max-width: 90px;
                max-height: 45px;
                object-fit: contain;
              " />
            </div>
          </a>
        `
          )
          .join("")}
      </div>
    `;
    };

    // Helper to build social icons HTML dynamically with new styles
    const buildSocialsHTML = () => {
      if (!user.socials) return "";
      const entries = Object.entries(user.socials).filter(
        ([k]) => socialIcons[k.toLowerCase()]
      );
      return `
    <table cellpadding="0" style="border-collapse: collapse;">
      <tr>
        ${entries
          .map(([key, url], i) => {
            const icon = socialIcons[key.toLowerCase()];
            if (!icon) return "";
            // Add padding-right except for last icon
            const paddingRight = i === entries.length - 1 ? "0" : "8px";
            return `
              <td style="padding-right: ${paddingRight}; padding-left: 0; font: 12.5px / 15.9px serif; color: rgb(0, 0, 1); cursor: pointer;">
                <a href="${esc(url)}" target="_blank" style="
                  border-radius: 50%;
                  width: 27px;
                  height: 27px;
                  display: block;
                  text-align: center;
                  border: 1px solid ${icon.color};
                  font-size: 12px;
                  font-family: initial;
                  line-height: 1;
                ">
                  ${icon.svg}
                </a>
              </td>
            `;
          })
          .join("")}
      </tr>
    </table>
  `;
    };

    return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Email Signature</title>
  </head>
  <body style="background-color: white">
    <div class="o-editor-preview__sign">
      <div>
        <div>
          <table cellpadding="0" width="600" style="border-collapse: collapse; font-size: 13.8px;">
            <tr>
              <td style="margin: 0.1px; padding: 0px;">
                <table cellpadding="0" style="border-collapse: collapse;">
                  <tr>
                    <td valign="middle" style="margin: 0.1px; padding: 0px 20px 0px 0px; border-right: 2px solid rgb(30, 120, 156);">
                      <table cellpadding="0" style="border-collapse: collapse;">
                        <tr>
                          <td align="center" style="margin: 0.1px; padding: 0px 0px 10px; cursor: pointer;">
                            <img src="${esc(
                              user.logo
                            )}" width="96" style="display: block; min-width: 200px; margin: 0px auto;" />
                          </td>
                        </tr>
                        <tr>
                          <td align="center" style="margin: 0.1px; padding: 0px; font: 19.3px / 24.5px 'Palatino Linotype', 'Book Antiqua', Palatino, serif; color: rgb(0, 0, 1);">
                            <span style="color: rgb(30, 120, 156); font-weight: 600; cursor: pointer;">${esc(
                              user.name
                            )}</span>
                          </td>
                        </tr>
                        <tr>
                          <td align="center" style="margin: 0.1px; padding: 0; font: 200 13.8px / 17.5px serif; color: rgb(0, 0, 1);">
                            <span style="cursor: pointer; font: 200 13.8px / 17.5px serif; display: block; margin-bottom: 5px;">(${esc(
                              user.role
                            )})</span>
                            <span style="cursor: pointer; display: block; margin-bottom: 5px;">${esc(
                              user.company
                            )}</span>
                            <span style="cursor: pointer; display: block; margin-top: 5px;">${esc(
                              user.address
                            )}</span>
                          </td>
                        </tr>
                      </table>
                    </td>
                    <td valign="middle" style="margin: 0.1px; padding: 0px 0px 0px 20px;">
                      <table cellpadding="0" style="border-collapse: collapse;">
                        <tr style="cursor: pointer;">
                          <td style="margin: 0.1px; padding-top: 10px; font: 13.8px / 17.5px serif; color: rgb(0, 0, 1); white-space: nowrap;">
                            <span style="color: rgb(30, 120, 156); font-weight: 600;">Email: &nbsp;&nbsp;</span>
                            <a href="mailto:${esc(
                              user.email
                            )}" target="_blank" style="color: rgb(0, 0, 1); text-decoration: none; font-family: serif; margin-left: 25px;">${esc(
      user.email
    )}</a>
                          </td>
                        </tr>
                        <tr style="cursor: pointer;">
                          <td style="margin: 0.1px; padding: 0px 0px 0px; padding-top: 10px; font: 13.8px / 17.5px serif; color: rgb(0, 0, 1); white-space: nowrap;">
                            <span style="color: rgb(30, 120, 156); font-weight: 600;">Website:&nbsp;&nbsp;</span>
                            <a href="${esc(
                              user.website
                            )}" target="_blank" style="color: rgb(0, 0, 1); text-decoration: none; font-family: serif; margin-left: 20px;">www.wishgeekstechserve.com</a>
                          </td>
                        </tr>
                        <tr style="cursor: pointer;">
                          <td style="margin: 0.1px; padding: 0px 0px 0px; padding-top: 10px; font: 13.8px / 17.5px serif; color: rgb(0, 0, 1); white-space: nowrap;">
                            <span style="color: rgb(30, 120, 156); font-weight: 600;">Contact Us:</span>
                            <a href="tel:${esc(
                              user.phone
                            )}" target="_blank" style="color: rgb(0, 0, 1); text-decoration: none; font-family: serif; margin-left: 10px;">${esc(
      user.phone
    )}</a>
                          </td>
                        </tr>
                        <tr>
                          <td style="margin: 0.1px; padding: 0px 0px 0px; padding-top: 10px;">
                            ${buildBadgesHTML()}
                          </td>
                        </tr>
                        <tr>
                          <td style="margin: 0.1px; padding: 0px 0px 5px; font: 13.8px / 17.5px serif; color: rgb(0, 0, 1); padding-top: 20px;">
                            Find us here:
                          </td>
                        </tr>
                        <tr>
                          <td style="margin: 0.1px; padding: 0px; font: 13.8px / 17.5px serif; color: rgb(0, 0, 1);">
                            ${buildSocialsHTML()}
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </body>
</html>`;
  };

  const handleCopy = () => {
    if (!selected) return;
    const fullHTML = buildFullHTML(selected);
    const el = document.createElement("textarea");
    el.value = fullHTML;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    alert("Copied full HTML!");
  };

  // ✅ Download full HTML
  const handleDownload = () => {
    if (!selected) return;
    const fullHTML = buildFullHTML(selected);
    const blob = new Blob([fullHTML], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "signature.html";
    a.click();
    URL.revokeObjectURL(url);
  };

  useEffect(() => {
    // 👇 preload form with sampleUser on first visit
    setEditUser(sampleUser);
  }, []);

  return (
    <>
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Email Signature Manager
        </h1>

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow p-4">
            <h2 className="text-lg font-semibold mb-3 text-gray-700">
              {editUser ? "Edit User" : "Add User"}
            </h2>
            <AdminForm onSaved={handleSaved} editUser={editUser} />
          </div>
          <div className="bg-white rounded-xl shadow p-4">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-lg font-semibold text-gray-700">Users</h2>
              <button
                onClick={fetchUsers}
                className="px-3 py-1 bg-gray-200 hover:bg-gray-300 text-sm rounded"
              >
                Refresh
              </button>
            </div>
            <UserList
              users={users}
              onSelect={setSelected}
              selectedId={selected?._id}
              onEdit={setEditUser}
            />
          </div>
        </div>

        {/* Preview */}
        <div className="bg-white rounded-xl shadow p-6 max-w-4xl mx-auto">
          <h2 className="text-lg font-semibold text-gray-700 mb-4 text-center">
            Preview (table-based email layout)
          </h2>
          <div id="signature-html" className="border p-4 flex justify-center">
            <SignaturePreview user={selected} />
          </div>
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={handleCopy}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
            >
              Copy HTML
            </button>
            <button
              onClick={handleDownload}
              className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg"
            >
              Download .html
            </button>
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={2500} />
    </>
  );
}
