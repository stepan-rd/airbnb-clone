export type RbnbType = {
  imgUrls: string[];
  name: string;
  hostedBy: string;
  pricePerNight: number;
  stars: number;
  location: string;
  rooms: { questCount: number; bedrooms: number; bedCont: number; bathrooms: number };
  maxDays: number;
  questsLimit: number;
  infantLimit: number;
  petLimit: number;
};
