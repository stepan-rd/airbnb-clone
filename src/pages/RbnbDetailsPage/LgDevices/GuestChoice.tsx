import { useHomePage } from "@/state/HomePageStore";
import { useQuestsStore } from "@/state/QuestsStore";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";

type Props = {
  name: string;
  description: string;
};

export function GuestChoice({ name, description }: Props) {
  const {
    adultCount,
    setAdultCount,
    kidCount,
    setKidCount,
    infantCount,
    setInfantCount,
    petCount,
    setPetCount,
  } = useQuestsStore();

  const { allRbnbs } = useHomePage();

  const { rbnbId } = useParams();

  const questLimit = useMemo(
    () => allRbnbs[parseInt(rbnbId!)].questsLimit,
    [allRbnbs]
  );
  const infantLimit = useMemo(
    () => allRbnbs[parseInt(rbnbId!)].infantLimit,
    [allRbnbs]
  );
  const petLimit = useMemo(
    () => allRbnbs[parseInt(rbnbId!)].petLimit,
    [allRbnbs]
  );

  const [peopleAmount, setPeopleAmount] = useState(0);

  const handleIncrementClick = useCallback(() => {
    if (name === "Adults") {
      setAdultCount((prev) => {
        if (prev < questLimit) {
          return prev + 1;
        }

        return prev;
      });
    } else if (name === "Kids") {
      setKidCount((prev) => {
        if (prev < questLimit) {
          return prev + 1;
        }

        return prev;
      });
    } else if (name === "Infants") {
      setInfantCount((prev) => {
        if (prev < infantLimit) {
          return prev + 1;
        }

        return prev;
      });
    } else if (name === "Pets") {
      setPetCount((prev) => {
        if (prev < petLimit) {
          return prev + 1;
        }

        return prev;
      });
    }
  }, [setAdultCount, setKidCount, setInfantCount, setPetCount]);

  const handleDecrementClick = useCallback(() => {
    if (name === "Adults") {
      setAdultCount((prev) => {
        if (prev > 0) {
          return prev - 1;
        }

        return prev;
      });
    } else if (name === "Kids") {
      setKidCount((prev) => {
        if (prev > 0) {
          return prev - 1;
        }

        return prev;
      });
    } else if (name === "Infants") {
      setInfantCount((prev) => {
        if (prev > 0) {
          return prev - 1;
        }

        return prev;
      });
    } else if (name === "Pets") {
      setPetCount((prev) => {
        if (prev > 0) {
          return prev - 1;
        }

        return prev;
      });
    }
  }, [setAdultCount, setKidCount, setInfantCount, setPetCount]);

  const getAmount = useCallback(() => {
    if (name === "Adults") {
      return adultCount;
    } else if (name === "Kids") {
      return kidCount;
    } else if (name === "Infants") {
      return infantCount;
    } else if (name === "Pets") {
      return petCount;
    }

    return 0;
  }, [adultCount, kidCount, infantCount, petCount]);

  useEffect(() => {
    const peopleAmount = getAmount();
    setPeopleAmount(peopleAmount);
  }, [adultCount, kidCount, infantCount, petCount]);

  return (
    <div className="flex">
      <div className="w-48">
        <h1>{name}</h1>
        <h1 className="font-light">{description}</h1>
      </div>
      <div className="flex items-center">
        <button
          className="flex items-center justify-center w-8 h-8 p-2 mx-2 border border-black rounded-full hover:cursor-pointer"
          onClick={handleDecrementClick}
        >
          -
        </button>
        <h1>{peopleAmount}</h1>
        <button
          className="flex items-center justify-center w-8 h-8 p-2 mx-2 border border-black rounded-full hover:cursor-pointer"
          onClick={handleIncrementClick}
        >
          +
        </button>
      </div>
    </div>
  );
}
