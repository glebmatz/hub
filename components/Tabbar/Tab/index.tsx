import { ColorProps, createBox, useTheme } from "@shopify/restyle";
import Box from "@ui/components/Box";
import Text from "@ui/components/Text";
import {
  FiltersIcon,
  InstagramSmallIcon,
  OKSmallIcon,
  TelegramSmallIcon,
  TiktokSmallIcon,
  TwitterSmallIcon,
  VKSmallIcon,
  YoutubeSmallIcon,
} from "@ui/icons/Socials";
import { palette, Theme } from "@ui/theme/theme";
import React from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

const TabBox = createBox<Theme, TouchableOpacityProps>(TouchableOpacity);

type TabProps = React.ComponentProps<typeof TabBox> &
  ColorProps<Theme> & {
    onPress?: () => void;
    isActive: boolean;
    type: number;
    label: string;
  };

export const Tab: React.FC<TabProps> = ({ type, label, onPress, isActive }) => {
  const theme = useTheme<Theme>();

  const icon = React.useMemo(() => {
    const inactiveColor = theme.colors.iconMuted;
    if (type === 3) {
      return <VKSmallIcon color={isActive ? theme.colors.socialVK : inactiveColor} />;
    } else if (type === 1) {
      return <InstagramSmallIcon color={isActive ? theme.colors.socialInstagram : inactiveColor} />;
    } else if (type === 7) {
      return <TelegramSmallIcon color={isActive ? theme.colors.socialTelegram : inactiveColor} />;
    } else if (type === 4) {
      return <TwitterSmallIcon color={isActive ? theme.colors.socialTwitter : inactiveColor} />;
    } else if (type === 8) {
      return <TiktokSmallIcon color={isActive ? theme.colors.socialTiktok : inactiveColor} />;
    } else if (type === 6) {
      return <OKSmallIcon color={isActive ? theme.colors.socialOK : inactiveColor} />;
    } else if (type === 5) {
      return <YoutubeSmallIcon color={isActive ? theme.colors.socialYT : inactiveColor} />;
    } else if (type === -1) {
      return <FiltersIcon />;
    }
  }, [type, isActive]);

  return (
    <TabBox
      paddingVertical="m"
      flexDirection="row"
      alignItems="center"
      onPress={onPress}
      backgroundColor={"white"}
      position="relative"
      paddingHorizontal="m"
      borderBottomWidth={isActive ? 2 : 0}
      borderBottomColor="tabBorder"
    >
      {icon && <Box marginRight={label ? "s" : "none"}>{icon}</Box>}
      <Text variant={isActive ? "buttonSActive" : "buttonSInactive"}>{label}</Text>
    </TabBox>
  );
};
