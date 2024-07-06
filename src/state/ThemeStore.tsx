import { create } from "zustand";

type themeType = {
  textMain: string;
  textSecondary: string;
  iconicColor: string;
  borderColor: string
};

type ThemeStoreType = {
  theme: themeType;
  setTheme: (val: themeType) => void;
};
export const useThemeStore = create<ThemeStoreType>((set) => ({
  theme: {
    textMain: "text-black",
    textSecondary: "text-stone-500",
    iconicColor: "#e81948",
    borderColor: "border-stone-400"
  },
  setTheme: (val) => set(() => ({ theme: val })),
}));
