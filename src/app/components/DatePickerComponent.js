import CustomRecurrence from "./CustomRecurrence";
import DateRangePicker from "./DateRangePicker";
import RecurrenceOptions from "./RecurrenceOptions";
import RecurrencePreview from "./RecurrencePreview";
import React from "react";

export default function DatePickerComponent() {
  return (
    <div className="w-[60%] mx-auto border-2 border-emerald-600 flex flex-col justify-center items-center gap-4 p-4 rounded-lg bg-gray-100">
      <RecurrenceOptions />
      <CustomRecurrence />
      <DateRangePicker />
      <RecurrencePreview />
    </div>
  );
}
