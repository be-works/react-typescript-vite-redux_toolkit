import RS from "react-select";
import styled from "styled-components";
import React from "react";
import { Controller } from "react-hook-form";

interface ISelect {
  selectProps: any;
  name: string;
  control: any;
  rules: any;
  defaultValue?: any;
  afterChange?: Function;
}

export function DefaultSelect({
  isMultiple = false,
  wrapperClassName = "",
  placeholder = "",
  ...rest
}) {
  return (
    <SSelect className={wrapperClassName}>
      <RS
        classNamePrefix="rs"
        placeholder={placeholder || "Chọn ..."}
        components={{
          IndicatorSeparator: () => null,
        }}
        {...rest}
      />
    </SSelect>
  );
}

export default function Select(props: ISelect) {
  const {
    selectProps,
    name,
    control,
    rules,
    defaultValue = null,
    afterChange = null,
  } = props;

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { ref, onChange, value }, ...rest }) => (
        <DefaultSelect
          defaultValue={undefined}
          placeholder=""
          openMenuOnFocus
          {...rest}
          {...selectProps}
          value={value}
          onChange={(selected: any) => {
            onChange(selected);
            afterChange && afterChange(selected);
          }}
        />
      )}
      defaultValue={defaultValue}
    />
  );
}

const SSelect = styled.div`
  width: 100%;
  height: 40px;
  .rs {
    &__control {
      border: 1px solid #dfe9f5;
      height: 40px !important;
      font-size: 14px;
      flex-grow: 1;
      box-shadow: none;
      min-height: 0;
      background-color: #ffffff;
    }
    &__input {
      color: #333b6a;
    }
    &__menu {
      font-size: 14px;
    }
    &__single-value {
      color: #333b6a;
    }
    &__value-container {
      padding-left: 16px;
    }
    &__placeholder {
      font-family: "Roboto";
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 20px;
      color: #333b6a;
    }
  }
`;
