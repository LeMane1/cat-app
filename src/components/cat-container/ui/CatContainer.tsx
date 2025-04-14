'use client'

import GetButton from "@/components/get-button";
import CatPicture from "@/components/cat-picture";
import {useLazyGetCatsQuery} from "@/lib/api";
import {useAppSelector} from "@/lib/hooks";
import {useEffect} from "react";

export default function CatContainer(){
  const [refetch, {data, isLoading, isFetching}] = useLazyGetCatsQuery()
  const {isGetCatsAbilityEnabled, isAutoRefreshEnabled} = useAppSelector(state => state.catsReducer)
  
  useEffect(() => {
    let intervalId: ReturnType<typeof setInterval> | null = null
    
    if (isAutoRefreshEnabled){
      intervalId = setInterval(() => {
        refetch()
      }, 5000)
    }
    
    return () => {
      if (intervalId) clearInterval(intervalId)
    }
  }, [refetch, isAutoRefreshEnabled]);
  
  const handleOnClick = () => {
    refetch()
  }
  
  return (
    <>
      <GetButton
        onClick={handleOnClick}
        isLoading={isLoading || isFetching}
        isDisabled={!isGetCatsAbilityEnabled}
      />
      
      <CatPicture catPictureUrl={data ? data[0].url : null}/>
    </>
  )
}