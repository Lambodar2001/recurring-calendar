"use client";

import dayjs from "dayjs";
import { useDatePickerStore } from "../features/store";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import React from "react";

export default function RecurrencePreview() {
  const { recurrence, startDate, endDate, customRecurrence } =
    useDatePickerStore();

  console.log("customRecurrence = ", customRecurrence);

  let dates = [];

  let currentDate = dayjs(startDate);

  // Set the default end date to 1 year from start date if end date is not provided
  const finalEndDate = endDate
    ? dayjs(endDate)
    : dayjs(startDate).add(10, "year");

  // Generate dates based on the recurrence type
  while (
    currentDate.isBefore(finalEndDate) ||
    currentDate.isSame(finalEndDate)
  ) {
    dates.push(new Date(currentDate.format("YYYY-MM-DD")));

    // Adjust currentDate based on customRecurrence pattern
    if (recurrence === "daily") {
      currentDate = currentDate.add(customRecurrence, "day");
    } else if (recurrence === "weekly") {
      currentDate = currentDate.add(customRecurrence, "week");
    } else if (recurrence === "monthly") {
      currentDate = currentDate.add(customRecurrence, "month");
    } else if (recurrence === "yearly") {
      currentDate = currentDate.add(customRecurrence, "year");
    }
  }

  return (
    <div className="p-4 w-full flex flex-col justify-center items-center">
      <DayPicker
        mode="range"
        modifiers={{
          booked: dates,
        }}
        modifiersClassNames={{
          booked: "bg-red-500 text-white rounded-full",
        }}
      />
    </div>
  );
}
