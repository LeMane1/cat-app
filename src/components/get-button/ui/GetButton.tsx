'use client'

import './button.sass'
import Spinner from "@/components/get-button/ui/Spinner";

interface IGetButtonProps {
  onClick?: () => void;
  isLoading?: boolean;
  isDisabled?: boolean;
}

export default function GetButton({ onClick, isLoading, isDisabled = false }: IGetButtonProps) {
  return (
    <button onClick={onClick} disabled={isDisabled}>
      {
        isLoading ? <Spinner/> : <span>Get cat</span>
      }
    </button>
  )
}