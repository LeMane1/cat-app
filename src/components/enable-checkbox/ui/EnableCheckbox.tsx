'use client'

import {useAppDispatch, useAppSelector} from "@/lib/hooks";
import {changeGetCatsAbility} from "@/lib/catsSlice";
import CheckBoxWithLabel from "@/components/checkbox-with-label";

export default function EnableCheckbox(){
  const dispatch = useAppDispatch()
  const isGetCatsAbilityEnabled = useAppSelector(state => state.catsReducer.isGetCatsAbilityEnabled)
  
  const handleOnChange = () => dispatch(changeGetCatsAbility())
  
  return (
    <CheckBoxWithLabel
      labelText='Enabled'
      onChange={handleOnChange}
      isChecked={isGetCatsAbilityEnabled}
    />
  )
}