import { useNavigation } from "@react-navigation/native";
import React from "react";
import Box from "../Box";
import { InfoHeader } from "../InfoHeader";

interface InfoScreenProps {
  title: string;
  previousRouteName?: string;
  onBack?: () => void;
}

export const InfoScreen: React.FC<InfoScreenProps> = (props) => {
  return (
    <Box backgroundColor="white" flex={1}>
      <Box>
        <InfoHeader title={props.title} onBack={props.onBack} previousRouteName={props.onBack ? props.previousRouteName : undefined} />
      </Box>
      <Box flex={1}>{props.children}</Box>
    </Box>
  );
};
