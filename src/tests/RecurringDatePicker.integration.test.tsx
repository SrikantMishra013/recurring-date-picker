import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import RecurringDatePicker from "@/components/RecurringDatePicker";
import { useRecurrenceStore } from "@/state/recurrenceStore";

// Mock the store
jest.mock("@/state/recurrenceStore", () => {
  const actual = jest.requireActual("@/state/recurrenceStore");
  return {
    ...actual,
    useRecurrenceStore: jest.fn(),
  };
});

const mockUpdate = jest.fn();

const setupStore = (overrides = {}) => {
  (useRecurrenceStore as unknown as jest.Mock).mockReturnValue({
    recurrenceType: "daily",
    interval: 1,
    weekdays: [],
    dateRange: { start: new Date("2025-07-01"), end: new Date("2025-07-31") },
    monthlyPattern: "",
    updateRecurrence: mockUpdate,
    ...overrides,
  });
};

describe("RecurringDatePicker Integration", () => {
  beforeEach(() => {
    mockUpdate.mockClear();
  });

  test("should render recurrence type selector and change type", async () => {
    setupStore();
    render(<RecurringDatePicker />);

    const select = screen.getByLabelText(/Recurrence/i);
    expect(select).toBeInTheDocument();

    await userEvent.selectOptions(select, "weekly");
    expect(mockUpdate).toHaveBeenCalledWith("recurrenceType", "weekly");
  });

  test("should update interval input", async () => {
    setupStore();
    render(<RecurringDatePicker />);

    const input = screen.getByLabelText(/Every:/i);
    expect(input).toBeInTheDocument();

    await userEvent.clear(input);
    await userEvent.type(input, "5");

    const intervalCalls = mockUpdate.mock.calls.filter(
      ([key]) => key === "interval"
    );
    const lastValue = intervalCalls[intervalCalls.length - 1][1];
    expect(lastValue).toBe("15");
  });

  test("should toggle weekday buttons on weekly type", async () => {
    setupStore({ recurrenceType: "weekly", weekdays: ["Mon"] });
    render(<RecurringDatePicker />);

    const tueButton = screen.getByRole("button", { name: "Tue" });
    expect(tueButton).toBeInTheDocument();

    await userEvent.click(tueButton);
    expect(mockUpdate).toHaveBeenCalledWith("weekdays", ["Mon", "Tue"]);
  });

  test("should select monthly pattern", async () => {
    setupStore({ recurrenceType: "monthly", monthlyPattern: "" });
    render(<RecurringDatePicker />);

    const select = screen.getByLabelText(/Pattern/i);
    await userEvent.selectOptions(select, "first-monday");

    expect(mockUpdate).toHaveBeenCalledWith("monthlyPattern", "first-monday");
  });

  test("should display start and end dates in preview", () => {
    const start = new Date("2025-07-01");
    const end = new Date("2025-07-31");

    setupStore({ dateRange: { start, end } });
    render(<RecurringDatePicker />);

    expect(screen.getByText(/Start:/)).toHaveTextContent("7/1/2025");
    expect(screen.getByText(/End:/)).toHaveTextContent("7/31/2025");
  });
});
