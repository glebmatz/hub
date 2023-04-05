import React from "react";
import Box from "../Box";
import { ButtonBase } from "../Button";
import Text from "../Text";

interface IInfoCardProps {
  onAction?: () => void;
  actionLabel?: string;
  title: string;
  description: string;
}

export const InfoCard: React.FC<IInfoCardProps> = ({ onAction, actionLabel, title, description }) => {
  return (
    <Box
      padding="xl"
      backgroundColor="white"
      justifyContent="center"
      alignItems="center"
      borderWidth={1}
      borderColor="shadowColor"
      borderRadius={12}
      shadowColor="shadowColor"
      elevation={2}
      shadowOffset={{ width: 0, height: 2 }}
      shadowOpacity={1}
      shadowRadius={6}
    >
      <Text variant="headlineBold" textAlign="center" marginBottom="s">
        {title}
      </Text>
      <Text variant="regular" textAlign="center">
        {description}
      </Text>
      {actionLabel && (
        <Box marginTop="ll" flexDirection="row">
          <ButtonBase onPress={onAction} size="l" type="primary">
            <Text variant="buttonSLight">{actionLabel}</Text>
          </ButtonBase>
        </Box>
      )}
    </Box>
  );
};
