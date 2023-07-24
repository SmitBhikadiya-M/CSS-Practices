import React, { ReactElement } from 'react';
import Button, { ButtonPropsVariantOverrides } from '@mui/material/Button';
import { OverridableStringUnion} from '@mui/types'

type Icon= {
  startIcon: JSX.Element
  endIcon: JSX.Element
}
type Props = {
  varient?: OverridableStringUnion<"text" | "outlined" | "contained", ButtonPropsVariantOverrides> | undefined,
  icon?: { startIcon: JSX.Element } | { endIcon: JSX.Element } | undefined,
  children: JSX.Element | React.ReactElement | string | null
}

const MYButton = (props: Props) => {
  return (
    <div>
      <Button variant={props.varient} { ...props.icon }>{props.children}</Button>
    </div>
  );
}

export default MYButton;
