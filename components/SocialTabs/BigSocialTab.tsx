import React, { useMemo } from "react";
import { Theme } from "@ui/theme/theme";
import { ColorProps, createBox, ResponsiveValue, useTheme } from "@shopify/restyle";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import {
  InstagramSmallIcon,
  OKSmallIcon,
  TelegramSmallIcon,
  TiktokSmallIcon,
  TwitterSmallIcon,
  VKSmallIcon,
  YoutubeSmallIcon,
} from "@ui/icons/Socials";
import Text from "../Text";
import Box from "../Box";

const BigSocialButton = createBox<Theme, TouchableOpacityProps>(TouchableOpacity);

type BigSocialTabProps = React.ComponentProps<typeof BigSocialButton> &
  ColorProps<Theme> & {
    onPress?: () => void;
    isActive: boolean;
    type: "vk" | "instagram" | "telegram" | "twitter" | "tiktok" | "ok" | "youtube";
    label: string;
  };

export const BigSocialTab: React.FC<BigSocialTabProps> = ({ onPress, isActive, type, label }) => {
  const theme = useTheme<Theme>();

  const icon = useMemo(() => {
    const inactiveColor = theme.colors.iconMuted;
    if (type === "vk") {
      return <VKSmallIcon color={isActive ? theme.colors.socialVK : inactiveColor} />;
    } else if (type === "instagram") {
      return <InstagramSmallIcon color={isActive ? theme.colors.socialInstagram : inactiveColor} />;
    } else if (type === "ok") {
      return <OKSmallIcon color={isActive ? theme.colors.socialOK : inactiveColor} />;
    } else if (type === "telegram") {
      return <TelegramSmallIcon color={isActive ? theme.colors.socialTelegram : inactiveColor} />;
    } else if (type === "twitter") {
      return <TwitterSmallIcon color={isActive ? theme.colors.socialTwitter : inactiveColor} />;
    } else if (type === "tiktok") {
      return <TiktokSmallIcon color={isActive ? theme.colors.socialTiktok : inactiveColor} />;
    } else if (type === "youtube") {
      return <YoutubeSmallIcon color={isActive ? theme.colors.socialYT : inactiveColor} />;
    }
  }, [type, isActive]);

  const shadowStyle = isActive
    ? {
        elevation: 2,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        shadowColor: "shadowColor" as ResponsiveValue<"shadowColor", Theme>,
        shadowOpacity: 1,
        borderWidth: 1,
        borderColor: "shadowColor" as ResponsiveValue<"shadowColor", Theme>,
      }
    : {};

  return (
    <BigSocialButton
      borderRadius={6}
      paddingVertical="s"
      paddingHorizontal="l"
      flexDirection="row"
      alignItems="center"
      onPress={onPress}
      height={35}
      backgroundColor={isActive ? "white" : "shadowColor"}
      marginRight="m"
      {...shadowStyle}
    >
      <Box marginRight="s" justifyContent="center" alignItems="center">
        {icon}
      </Box>
      <Text variant={isActive ? "buttonSActive" : "buttonSInactive"}>{label}</Text>
    </BigSocialButton>
  );
};
