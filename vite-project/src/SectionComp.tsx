import { ReactElement, ReactNode } from "react"

type SectionProps = {
    title?: string,
    children?: ReactNode
}

const SectionComp  = ({children, title} : SectionProps) : ReactElement => {
  return (
    <section>
      <h3>{title}</h3>
      <p>{children}</p>
    </section>
  )
}

export default SectionComp
