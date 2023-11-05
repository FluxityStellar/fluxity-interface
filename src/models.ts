import { GroupBase, StylesConfig, MultiValue, SingleValue, ActionMeta } from 'react-select';

import { rates } from './constants/rates';

export interface ISelectItem<T> {
  label: string;
  value: T;
}

export type ISelectItemString = ISelectItem<string>;

export type Rates = keyof typeof rates;
export type RateValue = ISelectItem<keyof typeof rates>;

export interface SelectTokenType extends ISelectItemString {
  icon: string;
}

export type ReactSelectType = StylesConfig<
  ISelectItemString,
  boolean,
  GroupBase<ISelectItemString>
>;

export type ReactSelectOnChangeType = (
  newValue: MultiValue<ISelectItemString> | SingleValue<ISelectItemString>,
  actionMeta: ActionMeta<ISelectItemString>,
) => void;

export type RateSelectOnChangeType = (
  newValue: MultiValue<Rates> | SingleValue<Rates>,
  actionMeta: ActionMeta<Rates>,
) => void;

export type SvgProps = {
  fill?: string;
};

export type CustomError = {
  type: 'error';
  message: string;
};
