import { create } from "zustand";

type HouseTypeSelectStoreType = {
  hoveredIndex: number | null;
  setHoveredIndex: (val: number | null) => void;

  activeIndex: number | null;
  setActiveIndex: (val: number | null) => void;
}
export const useHouseTypeSelect = create<HouseTypeSelectStoreType>((set) => ({
  hoveredIndex: null,
  setHoveredIndex: (val) => set(() => ({ hoveredIndex: val })),

  activeIndex: null,
  setActiveIndex: (val) => set(() => ({ activeIndex: val })),
}));

