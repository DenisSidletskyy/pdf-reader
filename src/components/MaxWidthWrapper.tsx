import {cn} from "@/library/utils"
import {ReactNode} from "react"

type Props = {
  children: ReactNode
  className?: string
}

export default function MaxWidthWrapper({children, className}: Props) {
  return <div className={cn("mx-auto w-full max-w-screen-xl px-2.5 md:px-20 ", className)}>{children}</div>
}
