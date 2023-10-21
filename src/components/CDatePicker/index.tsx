import React, { forwardRef, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import cn from 'classnames';

import CLabel from '../CLabel';
import { Wrapper } from './datePickerStyles';
import useCustomID from '../../hooks/useCustomId';

interface CDatePickerProps {
  label?: string;
  details?: string;
  onChange: (value: Date) => void;
  className?: string;
  minDate: Date;
  maxDate: Date;
}

const CDatePicker = ({
  label,
  details,
  onChange,
  className,
  minDate,
  maxDate,
}: CDatePickerProps) => {
  const id = useCustomID('CDatePicker');
  const [selectedDate, setSelectedDate] = useState(minDate || new Date());
  const [isDatePickerUsed, setIsDatePickerUsed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (value: Date) => {
    setIsOpen(!isOpen);
    setSelectedDate(value);
    onChange(value);

    if (!isDatePickerUsed) {
      setIsDatePickerUsed(true);
    }
  };

  const filterPassedTime = (time: Date) => {
    if (!maxDate) {
      return minDate.getTime() < time.getTime();
    }
    return minDate.getTime() < time.getTime() && maxDate.getTime() > time.getTime();
  };

  const CustomInput = forwardRef<HTMLInputElement>(({ value, onClick }, ref) => (
    <div className={cn('relative', className)}>
      <button
        className="text-left rounded-[12px] h-14 px-[16px] outline-none  text-[18px] placeholder-[#7D7B9B] text-[#7D7B9B] leading-[18.78px] w-full bg-neutral-100"
        onClick={onClick}
        ref={ref}
      >
        <span className={`${!isDatePickerUsed ? '' : 'text-[14px] text-midnightblue'} `}>
          {!isDatePickerUsed ? 'Choose date' : value}
        </span>
        <div
          className={`
        absolute
        right-4
        bottom-[-22px]
        w-[100px]
        h-[100px]
        bg-[url('public/images/calendar.svg')]
        bg-no-repeat
        bg-right`}
        />
      </button>
    </div>
  ));

  CustomInput.displayName = 'datepickerCustomInput';

  return (
    <div>
      <CLabel label={label} details={details} htmlFor={id} />

      <div>
        <Wrapper>
          <DatePicker
            selected={selectedDate}
            onChange={handleChange}
            customInput={<CustomInput />}
            minDate={minDate}
            maxDate={maxDate}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={60}
            filterTime={filterPassedTime}
            timeCaption="Time"
            dateFormat="MMM dd, yyyy HH:mm"
            className="bg-[url('https://avatars.githubusercontent.com/u/67109815?s=48&v=4')] bg-no-repeat bg-right"
          />
        </Wrapper>
      </div>
    </div>
  );
};
export default CDatePicker;
