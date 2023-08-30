import React from 'react';
import Link from 'next/link';

import { CLinkProps as Type } from 'src/constants/types';

const CustomLink = ({ title, url }: Type) => {
  return (
    <Link
      href={url}
      className="text-darkNavyBlue text-lg mx-2 hover:text-transparentmidnightblue transition-all duration-700"
    >
      {title}
    </Link>
  );
};

export default CustomLink;
