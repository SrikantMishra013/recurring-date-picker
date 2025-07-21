import { useRecurrenceStore } from "@/state/recurrenceStore";

const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const CustomOptions = () => {
  const {
    interval,
    recurrenceType,
    weekdays: selectedDays,
    updateRecurrence,
  } = useRecurrenceStore();

  const handleIntervalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateRecurrence("interval", parseInt(e.target.value));
  };

  const toggleWeekday = (day: string) => {
    if (selectedDays.includes(day)) {
      updateRecurrence(
        "weekdays",
        selectedDays.filter((d) => d !== day)
      );
    } else {
      updateRecurrence("weekdays", [...selectedDays, day]);
    }
  };

  return (
    <div>
      <label className="block font-medium mb-1">Every:</label>
      <input
        type="number"
        min={1}
        className="border px-3 py-1 rounded w-24 mb-3"
        value={interval}
        onChange={handleIntervalChange}
      />
      <span className="ml-2">{recurrenceType}</span>

      {recurrenceType === "weekly" && (
        <div className="mt-4 flex flex-wrap gap-2">
          {weekdays.map((day) => (
            <button
              key={day}
              type="button"
              className={`px-3 py-1 border rounded ${
                selectedDays.includes(day)
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100"
              }`}
              onClick={() => toggleWeekday(day)}
            >
              {day}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomOptions;
