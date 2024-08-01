import "./paragraph.css";

type ParagraphProps = {
  children: React.ReactNode
  color?: "default" | "primary",
  size?: "small" | "medium" | "large"
}

const Paragraph: React.FC<ParagraphProps> = ({ children, color = "default", size = "medium" }: ParagraphProps) => {
  return <p className={`"paragraph" ${size} ${color}`}>{children}</p>;
}

export default Paragraph;
