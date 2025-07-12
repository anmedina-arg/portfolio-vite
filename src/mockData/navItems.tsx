import { HiOutlineHome } from 'react-icons/hi';
import { AiOutlineUser } from 'react-icons/ai';
import { BiMessageRoundedEdit } from 'react-icons/bi';
import { GiSkills } from 'react-icons/gi';
import { ImFolderOpen } from 'react-icons/im';
import { ReactElement } from 'react';

export type ItemsNavProps = {
  title: string;
  path: string;
  icon?: ReactElement;
};

export const itemsNav: ItemsNavProps[] = [
  {
    title: 'home',
    path: '#home',
    icon: <HiOutlineHome />,
    // className: 'active === "#home" ? "active" : ""'
  },
  {
    title: 'experience',
    path: '#experience',
    icon: <AiOutlineUser />,
    // className: 'active === "#experience" ? "active" : ""'
  },
  {
    title: 'portfolio',
    path: '#portfolio',
    icon: <ImFolderOpen />,
    // className: 'active === "#portfolio" ? "active" : ""'
  },
  {
    title: 'recomendations',
    path: '#recomendations',
    icon: <GiSkills />,
    // className: 'active === "#recomendations" ? "active" : ""'
  },
  {
    title: 'contact',
    path: '#contact',
    icon: <BiMessageRoundedEdit />,
    // className: 'active === "#contact" ? "active" : ""'
  },
];
