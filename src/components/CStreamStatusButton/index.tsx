import cn from 'classnames';

import capitalizeFirstLetter from 'src/utils/capitalizeFirstLetter';

export type StatusType = 'ongoing' | 'expired' | 'pending';
interface CStreamStatusButtonProps {
  type: StatusType;
}

const CStreamStatusButton = ({ type }: CStreamStatusButtonProps) => {
  let statusStyle = 'bg-brightYellow border-burntOrange text-burntOrange';
  if (type === 'ongoing') {
    statusStyle = 'border-forestGreen bg-paleMint text-forestGreen';
  } else if (type === 'expired') {
    statusStyle = 'bg-lightGrayishBlue border-darkGrayishTeal text-darkGrayishTeal';
  }

  return (
    <div className={cn('border rounded-[63px] px-4 py-2', statusStyle)}>
      {capitalizeFirstLetter(type)}
    </div>
  );
};

export default CStreamStatusButton;
