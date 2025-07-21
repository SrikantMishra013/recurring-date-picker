import { useRecurrenceStore } from "@/state/recurrenceStore";

const RecurrenceSelector = () => {
  const { recurrenceType, updateRecurrence } = useRecurrenceStore();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    updateRecurrence("recurrenceType", e.target.value);
  };

  return (
    <div>
      <label htmlFor="recurrence-select" className="block font-medium mb-1">
        Recurrence:
      </label>
      <select
        id="recurrence-select"
        className=" border px-3 w-104 py-1 rounded"
        value={recurrenceType}
        onChange={handleChange}
      >
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
        <option value="yearly">Yearly</option>
      </select>
    </div>
  );
};

export default RecurrenceSelector;
