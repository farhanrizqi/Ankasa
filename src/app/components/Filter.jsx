"use client";
import { useState } from "react";
import Slider from "./Slider";

function FilterDropdown({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-lg text-left font-semibold flex items-center justify-between w-full py-2 px-4 bg-transparent rounded-lg  focus:outline-none focus:ring focus:border-blue-500"
      >
        {title}
        <span className="ml-2">
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3.293 4.293a1 1 0 011.414 0L10 9.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M2.293 4.293a1 1 0 011.414 0L10 10.586l6.293-6.293a1 1 0 111.414 1.414l-7 7a1 1 0 01-1.414 0l-7-7a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </span>
      </button>
      {isOpen && <div className="mt-2">{children}</div>}
    </div>
  );
}

function FilterSection({
  title,
  options,
  selectedOptions,
  setSelectedOptions,
}) {
  const handleCheckboxChange = (option) => {
    setSelectedOptions((prevSelectedOptions) => ({
      ...prevSelectedOptions,
      [option]: !prevSelectedOptions[option],
    }));
  };
  return (
    <div>
      <h2 className="text-lg text-left font-semibold">{title}</h2>
      <div className="space-y-2 px-2">
        {options.map((option) => (
          <label
            key={option}
            className="flex items-center justify-between pr-3"
          >
            <span className="ml-2">{option}</span>
            <input
              type="checkbox"
              className="form-checkbox"
              checked={selectedOptions[option]}
              onChange={() => handleCheckboxChange(option)}
            />
          </label>
        ))}
      </div>
    </div>
  );
}

function Filter() {
  const [transitFilters, setTransitFilters] = useState({
    Direct: false,
    Transit: false,
    "Transit 2+": false,
  });

  const [facilitiesFilters, setFacilitiesFilters] = useState({
    Luggage: false,
    "In-Flight Meal": false,
    Wifi: false,
  });
  const [departureFilters, setDepartureFilters] = useState({
    "00:00 - 06:00": false,
    "06:00 - 12:00": false,
    "12:00 - 18:00": false,
    "18:00 - 24:00": false,
  });
  const [arriveFilters, setArriveFilters] = useState({
    "00:00 - 06:00": false,
    "06:00 - 12:00": false,
    "12:00 - 18:00": false,
    "18:00 - 24:00": false,
  });
  const [airlineFilters, setAirlineFilters] = useState({
    "Garuda Indonesia": false,
    "Air Asia": false,
    "Lion Air": false,
    "Singapore Airlines": false,
    Citilink: false,
  });

  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });

  return (
    <div className="p-4 mt-1 rounded-3xl bg-white">
      <FilterDropdown title="Transit">
        <FilterSection
          title=""
          options={["Direct", "Transit", "Transit 2+"]}
          selectedOptions={transitFilters}
          setSelectedOptions={setTransitFilters}
        />
      </FilterDropdown>

      <FilterDropdown title="Facilities">
        <FilterSection
          title=""
          options={["Luggage", "In-Flight Meal", "Wifi"]}
          selectedOptions={transitFilters}
          setSelectedOptions={setTransitFilters}
        />
      </FilterDropdown>

      <FilterDropdown title="Departure Time">
        <FilterSection
          title=""
          options={[
            "00:00 - 06:00",
            "06:00 - 12:00",
            "12:00 - 18:00",
            "18:00 - 24:00",
          ]}
          selectedOptions={transitFilters}
          setSelectedOptions={setTransitFilters}
        />
      </FilterDropdown>

      <FilterDropdown title="Time Arrived">
        <FilterSection
          title=""
          options={[
            "00:00 - 06:00",
            "06:00 - 12:00",
            "12:00 - 18:00",
            "18:00 - 24:00",
          ]}
          selectedOptions={transitFilters}
          setSelectedOptions={setTransitFilters}
        />
      </FilterDropdown>

      <FilterDropdown title="Airlines">
        <FilterSection
          title=""
          options={[
            "Garuda Indonesia",
            "Air Asia",
            "Lion Air",
            "Singapore Airlines",
            "Citilink",
          ]}
          selectedOptions={transitFilters}
          setSelectedOptions={setTransitFilters}
        />
      </FilterDropdown>

      <FilterDropdown title="Ticket Price">
        <div className="flex justify-between">
          <span>Lowest</span>
          <span>Highest</span>
        </div>
        <div>
          {/* Slider Price Lowest to Highest */}
          <Slider
            min={0}
            max={1000}
            onChange={({ min, max }) => setPriceRange({ min, max })}
          />
        </div>
      </FilterDropdown>
    </div>
  );
}

export default Filter;
