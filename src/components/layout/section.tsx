import { ReactElement } from "react";
import "./section.css";

type SectionProps = {
  children: ReactElement | ReactElement[],
  id?: string
}

export function Section({ children, id }: SectionProps) {
  return <section className="section" id={id}>{children}</section>;
}
