import { useRecurrenceStore } from "@/state/recurrenceStore";

const CalendarPreview = () => {
  const { recurrenceType, interval, weekdays, dateRange, monthlyPattern } =
    useRecurrenceStore();

  return (
    <div className="mt-6 p-4 border rounded bg-gray-50">
      <p className="font-medium">Preview:</p>
      <ul className="mt-2 text-sm list-disc list-inside">
        <li>Type: {recurrenceType}</li>
        <li>
          Interval:
          {interval && (
            <span>
              {" "}
              Every {interval} {recurrenceType}
            </span>
          )}
        </li>
        {weekdays.length > 0 && <li>Weekdays: {weekdays.join(", ")}</li>}
        {recurrenceType === "monthly" && monthlyPattern && (
          <li>Pattern: {monthlyPattern.replace("-", " ")}</li>
        )}
        <li>Start: {dateRange.start?.toLocaleDateString() || ""}</li>
        <li>End: {dateRange.end?.toLocaleDateString() || ""}</li>
      </ul>
    </div>
  );
};

export default CalendarPreview;
