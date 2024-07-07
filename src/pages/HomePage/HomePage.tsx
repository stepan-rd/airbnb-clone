import { useHomePage } from '@/state/HomePageStore'
import { generateRandomRbnbs } from '@/utils/generateRandomRbnbs'
import React, { useEffect } from 'react'
import { RbnbCard } from './RbnbCard';

type Props = {}

export function HomePage({}: Props) {

  const { allRbnbs, setAllRbnbs } = useHomePage();


  useEffect(() => {

    const initialRbnbs = generateRandomRbnbs(500);

    setAllRbnbs(initialRbnbs)
  }, [])

  return (
    <div className='flex flex-wrap'>
      {allRbnbs.map((rbnb, rbnbIndex) => (
        <RbnbCard key={rbnbIndex} rbnbDetails={rbnb}/>
      ))}
    </div>
  )
}