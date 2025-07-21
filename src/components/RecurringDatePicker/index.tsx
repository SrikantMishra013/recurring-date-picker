"use client";

import RecurrenceSelector from "./RecurrenceSelector";
import CustomOptions from "./CustomOptions";
import DateRangePicker from "./DateRangePicker";
import CalendarPreview from "./CalendarPreview";

const RecurringDatePicker = () => {
  return (
    <div className="p-6 bg-white rounded shadow-md space-y-6 max-w-xl mx-auto">
      <h2 className="text-xl font-bold">Recurring Date Picker</h2>
      <RecurrenceSelector />
      <CustomOptions />
      <DateRangePicker />
      <CalendarPreview />
    </div>
  );
};

export default RecurringDatePicker;
