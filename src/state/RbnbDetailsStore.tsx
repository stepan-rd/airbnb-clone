import { create } from "zustand";

type RbnbDetailsPageType = {
  morePicturesDisplaying: boolean;
  setMorePicturesDisplaying: (val: boolean) => void;
};
export const useRbnbDetailsPage = create<RbnbDetailsPageType>((set) => ({
  morePicturesDisplaying: false,
  setMorePicturesDisplaying: (val) => set(() => ({ morePicturesDisplaying: val })),
}));
