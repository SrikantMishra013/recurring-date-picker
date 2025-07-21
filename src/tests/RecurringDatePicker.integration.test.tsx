import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import RecurringDatePicker from "../components/RecurringDatePicker/DateRangePicker";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

describe("RecurringDatePicker Integration Test", () => {
  test('should allow user to select "Weekly" and choose Monday and Friday', async () => {
    render(<RecurringDatePicker />);

    // Select "Weekly" from recurrence options
    const recurrenceSelect = screen.getByLabelText(
      /recurrence/i
    ) as HTMLSelectElement;
    await userEvent.selectOptions(recurrenceSelect, ["weekly"]);
    expect(recurrenceSelect.value).toBe("weekly");

    // Check weekday checkboxes
    const mondayCheckbox = screen.getByLabelText(/monday/i) as HTMLInputElement;
    const fridayCheckbox = screen.getByLabelText(/friday/i) as HTMLInputElement;

    expect(mondayCheckbox).toBeInTheDocument();
    expect(fridayCheckbox).toBeInTheDocument();

    // Select Monday and Friday
    await userEvent.click(mondayCheckbox);
    await userEvent.click(fridayCheckbox);

    expect(mondayCheckbox.checked).toBe(true);
    expect(fridayCheckbox.checked).toBe(true);

    // Enter start date
    const startDateInput = screen.getByLabelText(
      /start date/i
    ) as HTMLInputElement;
    fireEvent.change(startDateInput, { target: { value: "2025-07-21" } });
    expect(startDateInput.value).toBe("2025-07-21");

    // Check if preview section appears (ensure this exists in your JSX with test id)
    const preview = await screen.findByTestId("calendar-preview");
    expect(preview).toBeInTheDocument();
  });
});
