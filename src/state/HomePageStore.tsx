import { RbnbType } from "@/types/types";
import { create } from "zustand";

type HomePageStoreType = {
  allRbnbs: RbnbType[];
  setAllRbnbs: (val: RbnbType[]) => void;
};
export const useHomePage = create<HomePageStoreType>((set) => ({
  allRbnbs: [],
  setAllRbnbs: (val) => set(() => ({ allRbnbs: val })),
}));
