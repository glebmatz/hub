import { BottomArrow } from "@ui/icons";
import React, { FC, ReactElement } from "react";
import Box from "../Box";
import Text from "../Text";

interface ISelectField {
  placeholder?: string;
  value?: string | ReactElement;
  onPress?: () => void;
  title?: string;
}

export const SelectField: FC<ISelectField> = ({ placeholder, value, onPress, title }) => {
  return (
    <Box>
      <Box marginBottom="s">
        <Text variant="caption2">{title}</Text>
      </Box>
      <Box
        padding="m"
        borderRadius={6}
        borderWidth={1}
        borderColor="delimiterColor"
        height={40}
        width="100%"
        flexDirection={"row"}
        alignItems="center"
        justifyContent="space-between"
      >
        <Box />
        <Box>
          <BottomArrow />
        </Box>
      </Box>
    </Box>
  );
};
