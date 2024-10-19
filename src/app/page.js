import DatePickerComponent from "./components/DatePickerComponent";
import React from "react";

export default function Home() {
  return (
    <div className="w-full min-h-[100vh] flex justify-center items-center  text-2xl">
      <DatePickerComponent />
    </div>
  );
}
