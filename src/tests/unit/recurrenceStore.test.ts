import { act } from "react";
import { useRecurrenceStore } from "@/state/recurrenceStore";

describe("recurrenceStore", () => {
  it("should update recurrence type", () => {
    act(() => {
      useRecurrenceStore
        .getState()
        .updateRecurrence("recurrenceType", "weekly");
    });
    expect(useRecurrenceStore.getState().recurrenceType).toBe("weekly");
  });

  it("should toggle weekdays", () => {
    act(() => {
      useRecurrenceStore
        .getState()
        .updateRecurrence("weekdays", ["Mon", "Tue"]);
    });
    expect(useRecurrenceStore.getState().weekdays).toEqual(["Mon", "Tue"]);
  });
});
