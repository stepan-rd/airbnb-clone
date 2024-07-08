import React, { useEffect, useRef, useState } from "react";
import "@/styles.css";

import houseTypes from "@/data/houseTypes.json";
import { HouseType } from "./HouseType";
import { useHouseTypeSelect } from "@/state/HouseTypeSelectStore";
import { ArrowLeftBtn } from "./ArrowLeftBtn";
import { ArrowRightBtn } from "./ArrowRightBtn";

type Props = {};

const MemoHouseType = React.memo(HouseType);

export function HouseTypes({}: Props) {
  const { hoveredIndex, activeIndex } = useHouseTypeSelect();
  const [scrollIndex, setScrollIndex] = useState(0);
  const [currScreenWidth, setCurrScreenWidth] = useState(0);
  const [houseTypesContainerWidth, setHouseTypesContainerWidth] = useState(0)

  const houseTypesContainerRef = useRef<HTMLDivElement | null>(null);
  const houseTypesWrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (houseTypesContainerRef.current) {
      setCurrScreenWidth(houseTypesContainerRef.current.offsetWidth);
    }
  }, [houseTypesContainerRef.current?.offsetWidth]);

  useEffect(() => {
    if (houseTypesWrapperRef.current) {
      setHouseTypesContainerWidth(houseTypesWrapperRef.current.offsetWidth);
    }
  }, [houseTypesWrapperRef.current?.offsetWidth])

  useEffect(() => {
    console.log(scrollIndex);
  }, [scrollIndex]);

  return (
    <div
      className="relative px-5 mt-5 ml-5 overflow-hidden h-14"
      ref={houseTypesContainerRef}
    >
      <div
        className="absolute flex transition-all duration-700"
        ref={houseTypesWrapperRef}
        style={{ left: `${scrollIndex * (currScreenWidth * 0.7)}px` }}
      >
        {houseTypes.map((house, index) => (
          <MemoHouseType
            key={index}
            house={house}
            isHovered={hoveredIndex === index}
            isActive={activeIndex === index}
            index={index}
          />
        ))}
      </div>
      {scrollIndex !== 0 && (
        <ArrowLeftBtn onClick={() => setScrollIndex((prev) => prev + 1)} />
      )}

      {currScreenWidth && Math.abs(scrollIndex) * currScreenWidth < (houseTypesContainerWidth + currScreenWidth / 5) && (
        <ArrowRightBtn onClick={() => setScrollIndex((prev) => prev - 1)} />
      )}
    </div>
  );
}
