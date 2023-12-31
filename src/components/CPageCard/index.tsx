import React from 'react';
import cn from 'classnames';

import CCard from '../CCard';

interface CPageCard {
  divider?: boolean;
  title?: JSX.Element | React.ReactNode;
  children: JSX.Element | React.ReactNode;
  className?: string;
  scroll?: boolean;
  childrenClassName?: string;
}

const CPageCard = ({
  divider,
  title,
  children,
  className,
  scroll = false,
  childrenClassName,
  ...props
}: CPageCard) => {
  let dividerStyle = '';
  let padding = '';

  if (divider) {
    dividerStyle = 'border-b border-[rgba(5, 1, 66, 0.10)] mb-4';
    padding = 'pl-2';
  } else {
    dividerStyle = 'border-none mb-0';
    padding = 'p-0';
  }
  return (
    <CCard
      className={cn('flex flex-col w-full h-full ', className)}
      bgColor="#fff"
      borderColor="rgba(5, 1, 66, 0.10)"
      {...props}
    >
      {title && <div className="w-full font-medium">{title}</div>}
      {divider && <div className={dividerStyle} />}
      <div className={`${cn(padding, childrenClassName)} ${scroll && 'overflow-y-scroll h-full'}`}>
        {children}
      </div>
    </CCard>
  );
};

export default CPageCard;
