/* eslint-disable @typescript-eslint/no-explicit-any */
import "./paragraph.css";

type ParagraphProps = {
  children: any
  color?: "default" | "primary",
  size?: "small" | "medium" | "large"
}

export function Paragraph({ children, color = "default", size = "medium" }: ParagraphProps) {
  return <p className={`"paragraph" ${size} ${color}`}>{children}</p>;
}

// export default Paragraph;
