import { useHomePage } from "@/state/HomePageStore";
import { generateRandomRbnbs } from "@/utils/generateRandomRbnbs";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { RbnbCard } from "./RbnbCard";

type Props = {};

const MemoRbnbCard = React.memo(RbnbCard);

export function HomePage({}: Props) {
  const { allRbnbs, setAllRbnbs } = useHomePage();

  const observer = useRef<IntersectionObserver | null>(null);

  const lastElementRef = useRef<HTMLDivElement | null>(null);

  const [loadingNewCards, setLoadingNewCards] = useState(false);

  const observeLastElement = useCallback(
    (node: HTMLDivElement) => {
      if (observer.current) observer.current.disconnect();

      if (node) {
        observer.current = new IntersectionObserver((entries) => {
          if (entries[0].isIntersecting) {
            const newRbnbs = generateRandomRbnbs(10);
            setLoadingNewCards(true);
            setTimeout(() => {
              setAllRbnbs((prev) => [...prev, ...newRbnbs]);
              setLoadingNewCards(false);
            }, 500);
          }
        });

        observer.current.observe(node);
      }
    },
    [setAllRbnbs]
  );

  useEffect(() => {
    if (allRbnbs.length > 0 && lastElementRef.current) {
      observeLastElement(lastElementRef.current);
    }
  }, [observeLastElement, allRbnbs]);

  useEffect(() => {
    if (allRbnbs.length === 0) {
      console.log("Fetching initial rbnb's");
      const initialRbnbs = generateRandomRbnbs(10);

      setAllRbnbs(initialRbnbs);
    }
  }, [allRbnbs, setAllRbnbs]);

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-wrap justify-center">
        {allRbnbs.map((rbnb, rbnbIndex) => {
          const lastElement = rbnbIndex === allRbnbs.length - 1;

          return (
            <MemoRbnbCard
              key={rbnbIndex}
              ref={lastElement ? lastElementRef : null}
              rbnbDetails={rbnb}
              rbnbIndex={rbnbIndex}
            />
          );
        })}
      </div>
      {loadingNewCards && <h1 className="text-xl font-bold">loading...</h1>}
    </div>
  );
}
