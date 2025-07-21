import { create } from "zustand";

export type RecurrenceType = "daily" | "weekly" | "monthly" | "yearly";

interface DateRange {
  start: Date | null;
  end: Date | null;
}

interface RecurrenceState {
  recurrenceType: RecurrenceType;
  interval: string;
  weekdays: string[];
  monthlyPattern: string;
  dateRange: DateRange;
  updateRecurrence: (key: keyof RecurrenceState, value: any) => void;
}

export const useRecurrenceStore = create<RecurrenceState>((set) => ({
  recurrenceType: "daily",
  interval: "1",
  weekdays: [],
  monthlyPattern: "",
  dateRange: { start: null, end: null },
  updateRecurrence: (key, value) =>
    set((state) => ({ ...state, [key]: value })),
}));
