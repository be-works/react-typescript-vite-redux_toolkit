import DatePicker from "react-datepicker";
import React from "react";
import { Controller } from "react-hook-form";
import "react-datepicker/dist/react-datepicker.css";

interface IDatePicker {
  datepickerProps: any;
  name: string;
  control: any;
  rules: any;
  defaultValue: any;
  handleChange: Function;
}

const DatePickerDefault = (props: IDatePicker) => {
  const {
    datepickerProps = {},
    name,
    control,
    rules,
    defaultValue = null,
    handleChange = () => {},
  } = props;

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      defaultValue={defaultValue}
      render={({ onChange, value }: any, ...rest: any[]) => (
        <DatePicker
          {...rest}
          {...datepickerProps}
          dateFormat={"dd/MM/yyyy"}
          onChange={(date: any) => {
            onChange(date);
            handleChange && handleChange(date);
          }}
          selected={value}
          placeholder=""
        />
      )}
    />
  );
};

export default DatePickerDefault;
