import { HiCube, HiNewspaper, HiPhoneArrowUpRight } from 'react-icons/hi2';
import { IconType } from 'react-icons/lib';

export type navigationLink = {
  title: string;
  link: string;
  icon: IconType;
};

export const navigationLinks: Array<navigationLink> = [
  // { title: 'Properties', link: '/properties', icon: HiCube },
  // { title: 'Contact', link: '/contact', icon: HiNewspaper },
  {
    title: '+1 (206) 841-6765',
    link: 'tel:+1 (206) 841-6765',
    icon: HiPhoneArrowUpRight,
  },
];
