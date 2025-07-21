import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useRecurrenceStore } from "@/state/recurrenceStore";

const DateRangePicker = () => {
  const { dateRange, updateRecurrence } = useRecurrenceStore();

  return (
    <div className="space-y-2">
      <div>
        <label className="block font-medium mb-1">Start Date:</label>
        <DatePicker
          selected={dateRange.start}
          onChange={(date) =>
            updateRecurrence("dateRange", { ...dateRange, start: date })
          }
          className="border px-3 py-1 rounded"
        />
      </div>
      <div>
        <label className="mt-4 block font-medium mb-1">
          End Date (optional):
        </label>
        <DatePicker
          selected={dateRange.end}
          onChange={(date) =>
            updateRecurrence("dateRange", { ...dateRange, end: date })
          }
          className="border px-3 py-1 rounded"
        />
      </div>
    </div>
  );
};

export default DateRangePicker;
