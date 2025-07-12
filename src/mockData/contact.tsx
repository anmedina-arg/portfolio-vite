import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { TfiEmail } from 'react-icons/tfi';

export type contactDetailsProps = {
  title: string;
  href: string;
  icon: React.ReactElement;
};

export const contactDetails: contactDetailsProps[] = [
  {
    title: 'Email',
    href: 'mailto:andres.medina.arg@gmail.com',
    icon: <TfiEmail />,
  },
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/andres-medina-arg/',
    icon: <BsLinkedin />,
  },
  {
    title: 'Github',
    href: 'https://github.com/anmedina-arg',
    icon: <BsGithub />,
  },
  // {
  //   title: "WhatsApp",
  //   href: "https://wa.me/5493816713512?text=Hola,%20¿cómo%20estás?",
  //   icon: <BsGithub />
  // },
];
