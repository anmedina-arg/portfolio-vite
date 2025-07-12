import './section.css';
import { ReactElement } from 'react';

type SectionProps = {
  children: ReactElement | ReactElement[];
  id?: string;
};

export function Section({ children, id }: SectionProps) {
  return (
    <section className="section" id={id}>
      {children}
    </section>
  );
}

export default Section;
