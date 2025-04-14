'use client'

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
    <label>
      <input type="checkbox" onChange={onChange} checked={isChecked} disabled={isDisabled}/>
      <span>{labelText}</span>
    </label>
  )
}