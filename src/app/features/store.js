import { create } from "zustand";

export const useDatePickerStore = create((set) => ({
  recurrence: "daily",
  customRecurrence: 1,
  startDate: null,
  endDate: null,
  setRecurrence: (recurrence) => set({ recurrence }),
  setCustomRecurrence: (customRecurrence) => set({ customRecurrence }),
  setStartDate: (date) => set({ startDate: date }),
  setEndDate: (date) => set({ endDate: date }),
}));
