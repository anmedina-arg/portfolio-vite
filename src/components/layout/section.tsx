import { ReactElement } from "react";
import "./section.css";

type SectionProps = {
  children: ReactElement
}

export function Section({ children }: SectionProps) {
  return <div className="container__layout">{children}</div>;
}
