import clsx from 'clsx';
import * as React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import { FieldWrapper, FieldWrapperPassThroughProps } from './FieldWrapper';

type Option = {
  label: React.ReactNode;
  value: string | number | string[];
};

type SelectFieldProps = FieldWrapperPassThroughProps & {
  options: Option[];
  className?: string;
  defaultValue?: string;
  placeholder?: string;
  disabled?: boolean;
  registration: Partial<UseFormRegisterReturn>;
};

export const SelectField = (props: SelectFieldProps) => {
  const { label, options, error, className, defaultValue, disabled, registration, placeholder } = props;
  return (
    <FieldWrapper label={label} error={error}>
      <select
        name="location"
        className={clsx(
          'mt-1 block w-full pl-3 pr-10 py-2 text-base border-background-light bg-background-dark focus:outline-none focus:ring-accent-light focus:border-accent-light sm:text-sm rounded-md',
          className,
        )}
        defaultValue={defaultValue}
        disabled={disabled}
        {...registration}
      >
        {options.map(({ label, value }) => (
          <option key={label?.toString()} value={value}>
            {label}
          </option>
        ))}
      </select>
    </FieldWrapper>
  );
};
