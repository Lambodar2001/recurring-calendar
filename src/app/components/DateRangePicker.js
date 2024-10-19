"use client";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDatePickerStore } from "../features/store";
import React from "react";

export default function DateRangePicker() {
  const { startDate, endDate, setStartDate, setEndDate } = useDatePickerStore();

  return (
    <div className="flex space-x-2">
      <DatePicker
        selected={startDate}
        onChange={setStartDate}
        placeholderText="Start Date"
        className="p-2 rounded-md bg-gray-200"
      />
      <DatePicker
        selected={endDate}
        onChange={setEndDate}
        placeholderText="End Date"
        isClearable
        className="p-2 rounded-md bg-gray-200"
      />
    </div>
  );
}
