import React from "react";

export default function SignaturePreview({ user }) {
  if (!user)
    return <div className="text-gray-500">Select a user to preview</div>;

  return (
    <div>
      <div className="overflow-auto">
        <table
          cellPadding="0"
          width="100%"
          className="max-w-[680px] border-collapse text-[13.8px]"
        >
          <tbody>
            <tr>
              <td className="p-0 m-[0.1px]">
                <table cellPadding="0" className="border-collapse w-full">
                  <tbody>
                    <tr>
                      {/* left */}
                      <td className="pr-5 border-r-2 border-[#1e789c] align-bottom">
                        <table className="border-collapse w-full">
                          <tbody>
                            <tr>
                              <td className="pb-2 text-center">
                                <img
                                  src={user.logo}
                                  alt={user.name}
                                  width="96"
                                  className="block min-w-[280px] mx-auto"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td className="text-[19.3px] leading-[24.5px] font-serif text-black text-center">
                                <span className="text-[#1e789c] font-semibold">
                                  {user.name}
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="text-[13.8px] leading-[17.5px] font-serif text-black text-center">
                                <span className="block mb-1">
                                  ({user.role})
                                </span>
                                <span className="block mb-1">
                                  {user.company}
                                </span>
                                <span className="block mt-1">
                                  Headquartered In: {user.address}
                                </span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>

                      {/* right */}
                      <td className="pl-5 align-top">
                        <table className="border-collapse">
                          <tbody>
                            <tr>
                              <td className="pt-2 text-[13.8px] font-serif text-black whitespace-nowrap">
                                <span className="text-[#1e789c] font-semibold">
                                  Email:&nbsp;&nbsp;
                                </span>
                                <a
                                  href={`mailto:${user.email}`}
                                  className="text-black no-underline ml-6"
                                >
                                  {user.email}
                                </a>
                              </td>
                            </tr>

                            <tr>
                              <td className="pt-2 text-[13.8px] font-serif text-black whitespace-nowrap">
                                <span className="text-[#1e789c] font-semibold">
                                  Website:&nbsp;&nbsp;
                                </span>
                                <a
                                  href={user.website}
                                  className="text-black no-underline ml-5"
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  {user.website}
                                </a>
                              </td>
                            </tr>

                            <tr>
                              <td className="pt-2 text-[13.8px] font-serif text-black whitespace-nowrap">
                                <span className="text-[#1e789c] font-semibold">
                                  Contact Us:
                                </span>
                                <a
                                  href={`tel:${user.phone}`}
                                  className="text-black no-underline ml-2"
                                >
                                  {user.phone}
                                </a>
                              </td>
                            </tr>

                            <tr>
                              <td className="pt-4">
                                <div className="grid grid-cols-2 gap-2 max-w-[240px]">
                                  {user.badges &&
                                    Object.values(user.badges).map((src, i) => (
                                      <a
                                        key={i}
                                        href="#"
                                        className="flex items-center justify-start"
                                        target="_blank"
                                        rel="noreferrer"
                                      >
                                        <img
                                          src={src}
                                          alt={`badge-${i}`}
                                          className="max-w-[90px] max-h-[45px] object-contain"
                                        />
                                      </a>
                                    ))}
                                </div>
                              </td>
                            </tr>

                            <tr>
                              <td className="pt-5 text-[16px] font-serif text-black">
                                Find us here:
                              </td>
                            </tr>

                            <tr>
                              <td className="pt-3">
                                <div className="flex gap-5">
                                  {user.socials?.facebook && (
                                    <a
                                      href={user.socials.facebook}
                                      target="_blank"
                                      rel="noreferrer"
                                      className="w-10 h-10 flex items-center justify-center rounded-full border border-[#1877f2]"
                                    >
                                      <i className="fa-brands fa-facebook-f text-[#1877f2] text-xl" />
                                    </a>
                                  )}
                                  {user.socials?.instagram && (
                                    <a
                                      href={user.socials.instagram}
                                      target="_blank"
                                      rel="noreferrer"
                                      className="w-10 h-10 flex items-center justify-center rounded-full border border-[#e1306c]"
                                    >
                                      <i className="fa-brands fa-instagram text-[#e1306c] text-xl" />
                                    </a>
                                  )}
                                  {user.socials?.linkedin && (
                                    <a
                                      href={user.socials.linkedin}
                                      target="_blank"
                                      rel="noreferrer"
                                      className="w-10 h-10 flex items-center justify-center rounded-full border border-[#0a66c2]"
                                    >
                                      <i className="fa-brands fa-linkedin-in text-[#0a66c2] text-xl" />
                                    </a>
                                  )}
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
