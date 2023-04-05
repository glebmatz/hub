import { BackIcon } from "@ui/icons";
import React from "react";
import { SafeAreaView, TouchableOpacity } from "react-native";
import Box from "../Box";
import Text from "../Text";
import { styles } from "./InfoHeaderStyles";

interface InfoHeaderProps {
  title: string;
  previousRouteName?: string;
  onBack?: () => void;
}

export const InfoHeader: React.FC<InfoHeaderProps> = (props) => {
  return (
    <Box paddingTop="xxl" paddingBottom="l" borderBottomWidth={1} borderBottomColor="delimiterColor" paddingHorizontal="l">
      <SafeAreaView style={styles.wrapper}>
        {props.onBack && (
          <TouchableOpacity style={styles.backButton} onPress={props.onBack}>
            <Box marginRight="s">
              <BackIcon />
            </Box>
            {props.previousRouteName && (
              <Text variant="h3" color="buttonPrimary" fontWeight="400">
                {props.previousRouteName}
              </Text>
            )}
          </TouchableOpacity>
        )}
        <Box>
          <Text variant="h0">{props.title}</Text>
        </Box>
      </SafeAreaView>
    </Box>
  );
};
