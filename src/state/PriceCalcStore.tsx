import { create } from "zustand";

type PriceCalcStoreType = {
  daysInWeek: string[];
  months: string[];

  dateSelectionVisible: boolean;
  setDateSelectionVisible: (val: boolean) => void;

  questsSelectionVisible: boolean;
  setQuestsSelectionVisible: (val: boolean) => void;

  currSelecting: "" | "arrival" | "leaving";
  setCurrSelecting: (val: "arrival" | "leaving") => void;

  currDaysSelected: number;
  setCurrDaysSelected: (val: number) => void;

  arrivalDate: string;
  setArrivalDate: (val: string) => void;

  leavingDate: string;
  setLeavingDate: (val: string) => void;

  currMonth: number;
  setCurrMonth: (val: number) => void;
};


export const usePriceCalcStore = create<PriceCalcStoreType>((set) => ({
  daysInWeek: ["MON", "TUE", "WEN", "THU", "FRI", "SAT", "SUN"],
  months: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],

  dateSelectionVisible: false,
  setDateSelectionVisible: (val) =>
    set((state) => ({ dateSelectionVisible: val })),

  questsSelectionVisible: false,
  setQuestsSelectionVisible: (val) =>
    set((state) => ({ questsSelectionVisible: val })),

  currSelecting: "",
  setCurrSelecting: (val) => set((state) => ({ currSelecting: val })),

  currDaysSelected: 1,
  setCurrDaysSelected: (val: number) =>
    set((state) => ({ currDaysSelected: val })),

  arrivalDate: "",
  setArrivalDate: (val: string) => set((state) => ({ arrivalDate: val })),

  leavingDate: "",
  setLeavingDate: (val: string) => set((state) => ({ leavingDate: val })),

  currMonth: 7,
  setCurrMonth: (val: number) =>
    set((state) => ({ currMonth: val })),
}));
