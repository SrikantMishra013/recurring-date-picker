import { render, screen, fireEvent } from "@testing-library/react";
import CustomOptions from "@/components/RecurringDatePicker/CustomOptions";
import { useRecurrenceStore } from "@/state/recurrenceStore";

describe("CustomOptions", () => {
  beforeEach(() => {
    useRecurrenceStore.setState({
      recurrenceType: "weekly",
      interval: "2",
      weekdays: [],
    });
  });

  it("renders interval input and updates it", () => {
    render(<CustomOptions />);
    const input = screen.getByRole("spinbutton") as HTMLInputElement;

    expect(input.value).toBe("2");
    fireEvent.change(input, { target: { value: "5" } });

    expect(useRecurrenceStore.getState().interval).toBe("5");
  });

  it("toggles weekday selection", () => {
    render(<CustomOptions />);
    const mondayButton = screen.getByText("Mon");

    fireEvent.click(mondayButton);
    expect(useRecurrenceStore.getState().weekdays).toContain("Mon");

    fireEvent.click(mondayButton);
    expect(useRecurrenceStore.getState().weekdays).not.toContain("Mon");
  });
});
