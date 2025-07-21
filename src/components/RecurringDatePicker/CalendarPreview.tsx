import { useRecurrenceStore } from "@/state/recurrenceStore";

const CalendarPreview = () => {
  const { recurrenceType, interval, weekdays, dateRange } =
    useRecurrenceStore();

  return (
    <div className="mt-6 p-4 border rounded bg-gray-50">
      <p className="font-medium">Preview:</p>
      <ul className="mt-2 text-sm list-disc list-inside">
        <li>Type: {recurrenceType}</li>
        <li>
          Interval: Every {interval} {recurrenceType}
        </li>
        {weekdays.length > 0 && <li>Weekdays: {weekdays.join(", ")}</li>}
        <li>Start: {dateRange.start?.toLocaleDateString() || "N/A"}</li>
        <li>End: {dateRange.end?.toLocaleDateString() || "N/A"}</li>
      </ul>
    </div>
  );
};

export default CalendarPreview;
