import { useRecurrenceStore } from "@/state/recurrenceStore";

const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const CustomOptions = () => {
  const {
    interval,
    recurrenceType,
    weekdays: selectedDays,
    monthlyPattern,
    updateRecurrence,
  } = useRecurrenceStore();

  const handleIntervalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (parseInt(e.target.value) > 10000) return;
    updateRecurrence("interval", e.target.value);
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
      <label htmlFor="interval-input" className="mt-4 block font-medium mb-1">
        Every:
      </label>
      <input
        id="interval-input"
        type="number"
        min={1}
        maxLength={10000}
        className="border px-3 py-1 rounded w-88 mb-3"
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
      {recurrenceType === "monthly" && (
        <div className="mt-4">
          <label htmlFor="pattern-select" className="block font-medium mb-1">
            Pattern:
          </label>
          <select
            id="pattern-select"
            className="border px-3 py-1 rounded w-full"
            value={monthlyPattern}
            onChange={(e) => updateRecurrence("monthlyPattern", e.target.value)}
          >
            <option value="">-- Select Pattern --</option>
            <option value="first-monday">First Monday</option>
            <option value="second-tuesday">Second Tuesday</option>
            <option value="third-wednesday">Third Wednesday</option>
            <option value="fourth-thursday">Fourth Thursday</option>
            <option value="last-friday">Last Friday</option>
          </select>
        </div>
      )}
    </div>
  );
};

export default CustomOptions;
