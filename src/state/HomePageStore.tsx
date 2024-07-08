import { RbnbType } from "@/types/types";
import { create } from "zustand";

type HomePageStoreType = {
  allRbnbs: RbnbType[];
  setAllRbnbs: (val: RbnbType[] | ((prev: RbnbType[]) => RbnbType[])) => void;
};
export const useHomePage = create<HomePageStoreType>((set) => ({
  allRbnbs: [],
  setAllRbnbs: (val) =>
    set((state) => ({
      allRbnbs: typeof val === "function" ? val(state.allRbnbs) : val,
    })),
}));
