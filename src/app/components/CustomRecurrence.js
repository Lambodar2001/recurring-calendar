"use client";

import React from "react";
import { useDatePickerStore } from "../features/store";

export default function CustomRecurrence() {
  const { customRecurrence, setCustomRecurrence } = useDatePickerStore();

  return (
    <div className="my-2">
      <label>Repeat Every:</label>
      <input
        type="number"
        min="1"
        className="p-2 bg-gray-300 m-2 rounded-md "
        onChange={(e) => setCustomRecurrence(e.target.value)}
        value={customRecurrence}
      />
    </div>
  );
}
