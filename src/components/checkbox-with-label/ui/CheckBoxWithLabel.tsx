'use client'

import './checkbox-with-label.sass'

interface ICheckBoxWithLabelProps {
  labelText: string;
  onChange: () => void;
  isChecked?: boolean;
  isDisabled?: boolean;
}

export default function CheckBoxWithLabel(
  {
    labelText,
    onChange,
    isChecked = true,
    isDisabled = false
  }: ICheckBoxWithLabelProps) {
  return (
    <label className='checkbox-wrapper'>
      <input
        type="checkbox"
        onChange={onChange}
        checked={isChecked}
        disabled={isDisabled}
        className='checkbox'
      />
      <span className='checkbox-label'>{labelText}</span>
    </label>
  )
}