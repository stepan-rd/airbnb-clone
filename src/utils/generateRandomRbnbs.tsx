import { RbnbType } from "@/types/types";

export function generateRandomRbnbs(amount: number): RbnbType[] {
  const results: RbnbType[] = [];

  for (let i = 0; i < amount; i++) {
    results.push({
      imgUrls: ["https://placehold.co/376x357"],
      name: "Lorem Ipsum",
      hostedBy: "Lorem Ipsum",
      pricePerNight: Math.random() * 1200 + 60,
      stars: Math.random() * 1.3 + 3.7,
      location: "Lorem Ipsum",
      rooms: {
        questCount: Math.random() * 10,
        bedrooms: Math.random() * 5,
        bedCont: Math.random() * 10,
        bathrooms: Math.random() * 4,
      },
      maxDays: Math.random() * 3 + 4,
      questsLimit: Math.random() * 8 + 2,
      infantLimit: Math.random() * 5 + 2,
      petLimit: Math.random() * 10,
    });
  }

  return results;
}
