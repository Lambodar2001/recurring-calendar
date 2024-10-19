"use client";
import { useDatePickerStore } from "../features/store";
import React from "react";

export default function RecurrenceOptions() {
  const { recurrence, setRecurrence } = useDatePickerStore();

  return (
    <div className="flex space-x-2">
      {["Daily", "Weekly", "Monthly", "Yearly"].map((option) => (
        <button
          key={option}
          onClick={() => setRecurrence(option.toLowerCase())}
          className={`p-2 border rounded ${
            recurrence === option.toLowerCase() ? "bg-blue-500" : ""
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
