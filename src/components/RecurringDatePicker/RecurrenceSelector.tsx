import { useRecurrenceStore } from "@/state/recurrenceStore";

const RecurrenceSelector = () => {
  const { recurrenceType, updateRecurrence } = useRecurrenceStore();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    updateRecurrence("recurrenceType", e.target.value);
  };

  return (
    <div>
      <label className="block font-medium mb-1">Recurrence:</label>
      <select
        className="w-full border px-3 py-2 rounded"
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
