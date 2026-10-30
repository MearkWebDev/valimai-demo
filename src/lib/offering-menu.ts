export type MenuEvent = "enter" | "leave" | "navigate" | "escape";

export function offeringMenuState(_open: boolean, event: MenuEvent): boolean {
  return event === "enter";
}