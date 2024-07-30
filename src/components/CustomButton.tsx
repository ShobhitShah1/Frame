import React, { FC } from "react";
import { TouchableOpacity } from "react-native";
import AppSetting from "../config/Setting";
import { CustomButtonProps } from "../config/Interface";

const CustomButton: FC<CustomButtonProps> = ({
  children,
  ...touchableOpacityProps
}) => {
  return (
    <TouchableOpacity
      activeOpacity={AppSetting.activeOpacity}
      {...touchableOpacityProps}
    >
      {children}
    </TouchableOpacity>
  );
};

export default CustomButton;
