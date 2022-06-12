import { ReactElement, ReactNode } from "react"


export interface ButtonProps {
  type: 'primary' | 'secondary';
  children: ReactNode;
}

const colors = {
  primary: 'bg-brand-orange-500 font-semibold rounded-2xl p-3 flex flex-row items-center gap-1 hover:bg-brand-orange-400 transition:colors',
  secondary: 'bg-brand-blue-500 font-semibold rounded-2xl p-3 flex flex-row items-center gap-1 hover:bg-brand-blue-400 transition:colors'
}

export function Button({ children, type }: ButtonProps){
  return(
    <button className={colors[type]}>
      {children}
    </button>

  )
}