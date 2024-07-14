import { create } from "zustand";

type QuestsStoreType = {
  adultCount: number;
  setAdultCount: (val: number | ((prev: number) => number)) => void;

  kidCount: number;
  setKidCount: (val: number | ((prev: number) => number)) => void;

  infantCount: number;
  setInfantCount: (val: number | ((prev: number) => number)) => void;

  petCount: number;
  setPetCount: (val: number | ((prev: number) => number)) => void;

};
export const useQuestsStore = create<QuestsStoreType>((set) => ({
  adultCount: 0,
  setAdultCount: (val) =>
    set((state) => ({
      adultCount: typeof val === "function" ? val(state.adultCount) : val,
    })),

  kidCount: 0,
  setKidCount: (val) =>
    set((state) => ({
      kidCount: typeof val === "function" ? val(state.kidCount) : val,
    })),

  infantCount: 0,
  setInfantCount: (val) =>
    set((state) => ({
      infantCount: typeof val === "function" ? val(state.infantCount) : val,
    })),

  petCount: 0,
  setPetCount: (val) =>
    set((state) => ({
      petCount: typeof val === "function" ? val(state.petCount) : val,
    })),
}));
