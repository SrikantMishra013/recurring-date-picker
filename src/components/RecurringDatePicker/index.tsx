"use client";

import RecurrenceSelector from "./RecurrenceSelector";
import CustomOptions from "./CustomOptions";
import DateRangePicker from "./DateRangePicker";
import CalendarPreview from "./CalendarPreview";

const RecurringDatePicker = () => {
  return (
    <div className="p-6 bg-white rounded shadow-md space-y-6 max-w-[80rem]">
      <h2 className="text-xl font-bold text-center mb-4">
        Recurring Date Picker
      </h2>
      <hr />

      <div className="w-full flex gap-8">
        <div>
          <RecurrenceSelector />
          <CustomOptions />
        </div>

        <DateRangePicker />
      </div>
      <CalendarPreview />
    </div>
  );
};

export default RecurringDatePicker;
