import React from "react";

const Table = (props) => {
  // Sample data
  const data = [
    {
      name: "John Doe",
      number: "1234567890",
      email: "john@example.com",
      address: "123 Main St",
      baptised: true,
    },
    {
      name: "Jane Smith",
      number: "0987654321",
      email: "jane@example.com",
      address: "456 Elm St",
      baptised: false,
    },
    // Add more data as needed
  ];

  return props.data !== null ? (
    <table className="w-full min-w-[720px] table-auto rounded-lg">
      <thead className="rounded">
        <tr className="bg-[#F3F5FF] font-urbanist">
          <th className="text-start py-3 pl-3">Name</th>
          <th className="text-start py-3 pl-3">Number</th>
          <th className="text-start py-3 pl-3">Email</th>
          <th className="text-start py-3 pl-3">Address</th>
          <th className="text-start py-3 pl-3">Baptised</th>
        </tr>
      </thead>
      <tbody className="font-urbanist">
        {props?.data.firstTimers?.map((row, index) => (
          <tr className="hover:bg-gray-100" key={index}>
            <td className="py-3 pl-3">{row.fullname ?? "----------"}</td>
            <td className="py-3 pl-3">
              {row.mobile_number ? String(row.mobile_number) : "----------"}
            </td>
            <td className="py-3 pl-3">{row?.email ?? "----------"}</td>
            <td className="py-3 pl-3">{row.address ?? "----------"}</td>
            <td className="py-3 pl-3">{row.baptised ? "Yes" : "No"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  ) : null;
};

export default Table;
