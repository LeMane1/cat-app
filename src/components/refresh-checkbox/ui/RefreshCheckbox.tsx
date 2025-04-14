'use client'

import CheckBoxWithLabel from "@/components/checkbox-with-label";
import {changeAutoRefresh} from "@/lib/catsSlice";
import {useAppDispatch, useAppSelector} from "@/lib/hooks";

export default function RefreshCheckbox() {
  const dispatch = useAppDispatch()
  const {isAutoRefreshEnabled, isGetCatsAbilityEnabled} = useAppSelector(state => state.catsReducer)

  const handleOnChange = () => dispatch(changeAutoRefresh())
  
  return (
    <CheckBoxWithLabel
      labelText='Auto refresh every 5 seconds'
      onChange={handleOnChange}
      isChecked={isAutoRefreshEnabled}
      isDisabled={!isGetCatsAbilityEnabled}
    />
  )
}