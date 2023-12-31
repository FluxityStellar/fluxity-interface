import React from 'react';
import Image from 'next/image';
import cn from 'classnames';
import Select, { components } from 'react-select';

import { ReactSelectOnChangeType } from 'src/models';
import useCustomID from 'src/hooks/useCustomId';

import CLabel from '../CLabel';
import selectCustomStyles from './selectCustomStyles';

import arrowLogo from 'public/images/arrow.svg';

interface CSelectProps {
  placeholder?: string;
  label?: string;
  tooltipDetails?: string;
  className?: string;
  onChange?: ReactSelectOnChangeType;
}

const options = [
  { value: 'xlm', label: 'XLM', icon: 'xlm.png' },
  { value: 'xlm2', label: 'XLM2', icon: 'xlm.png' },
];

const Option = (props: any) => (
  <components.Option {...props}>
    <Image
      src={require('../../../public/images/assets/' + props.data.icon)}
      width={30}
      height={20}
      alt={props.data.label}
      className="mr-4"
    />
    {props.data.label}
  </components.Option>
);

const Control = ({ ...props }) => {
  return <components.Control {...props}></components.Control>;
};

const DropdownIndicator = () => {
  return (
    <div>
      <Image src={arrowLogo} alt="arrow" />
    </div>
  );
};

const CSelect = ({
  label,
  placeholder,
  className,
  tooltipDetails,
  onChange,
  ...props
}: CSelectProps) => {
  const id = useCustomID('CSelect');

  const handleChange = (e) => {
    onChange(e);
  };

  return (
    <div className={cn('w-full', className)}>
      <div className="w-full">
        <CLabel label={label} tooltipDetails={tooltipDetails} htmlFor={id} />
        <Select
          options={options}
          components={{ Option, DropdownIndicator, Control }}
          styles={selectCustomStyles()}
          placeholder={placeholder}
          isSearchable={false}
          id={id}
          onChange={handleChange}
          {...props}
        />
      </div>
    </div>
  );
};

export default CSelect;
