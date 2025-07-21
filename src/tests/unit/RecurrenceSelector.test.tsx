import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import RecurrenceSelector from "@/components/RecurringDatePicker/RecurrenceSelector";
import { useRecurrenceStore } from "@/state/recurrenceStore";

describe("RecurrenceSelector", () => {
  it("renders the dropdown and changes value", async () => {
    render(<RecurrenceSelector />);

    const select = screen.getByRole("combobox") as HTMLSelectElement;
    expect(select.value).toBe("daily");

    await userEvent.selectOptions(select, "monthly");
    expect(select.value).toBe("monthly");

    expect(useRecurrenceStore.getState().recurrenceType).toBe("monthly");
  });
});
