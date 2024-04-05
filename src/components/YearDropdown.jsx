import React, { useState } from "react";

const YearDropdown = () => {
  // Generate an array of years (from current year to 100 years ago)
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 100 }, (_, index) => currentYear - index);

  // State to store selected year
  const [selectedYear, setSelectedYear] = useState("");

  // Function to handle change in select value
  const handleChange = (e) => {
    setSelectedYear(e.target.value);
  };

  return (
    <div>
      <select
        className="py-3 px-4 rounded-full bg-[#E4E4E4] font-urbanist"
        id="year"
        value={selectedYear}
        onChange={handleChange}
      >
        <option value="">Select Year</option>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
  );
};

export default YearDropdown;
