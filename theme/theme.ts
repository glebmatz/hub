import { createTheme } from "@shopify/restyle";

export const palette = {
  transparent: "#00000000",
  background: "#FAFAFA",
  white: "#FFFFFF",
  black: "#000000",
  gray1: "#191919",
  gray2: "#5E5E5E",
  gray3: "#828282",
  gray4: "#999999",
  gray5: "#AAAAAA",
  gray6: "#F7F7F7",

  muted: "#CCCCCC",

  gradient100: "#A05295",
  gradient80: "#8052A8",
  gradient60: "#6758B5",
  gradient40: "#5971BD",
  gradient20: "#4C8BC9",

  success: "#5CB85C",
  success2: "#6CBF6C",

  action: "#0F85E9",
  action2: "#198CFF",
  action3: "#4CA6FE",

  info: "#4C8BC9",

  primary: "#2B96F1",

  warning: "#F15B3E",

  socialVK: "#2787F5",
  socialInstagram: "#F56040",
  socialTwitter: "#00ACEE",
  socialFacebook: "#166CF0",
  socialTelegram: "#2EA2DB",
  socialTiktok: "#000000",
  socialOK: "#EE8208",
  socialYT: "#FF0004",
};

const theme = createTheme({
  colors: {
    transparent: palette.transparent,
    white: palette.white,

    shadowColor: palette.black + "0F",

    delimiterColor: palette.black + "12",

    tabBorder: palette.action2,

    backgroundGradientStart: palette.white,
    backgroundGradientEnd: palette.gray6,
    backgroundDark: palette.background,

    textTitle: palette.gray1,
    textRegular: palette.gray2,
    textSecondary: palette.gray4,
    textButtonInactive: palette.gray3,
    textButtonActive: palette.gray2,
    textLabel: palette.gray5,
    textWarning: palette.warning,
    textTabActive: palette.action,
    textTabInactive: palette.gray5,
    textSuccess: palette.success,

    iconAction3: palette.action3,
    iconMuted: palette.muted,

    socialVK: palette.socialVK,
    socialInstagram: palette.socialInstagram,
    socialTwitter: palette.socialTwitter,
    socialFacebook: palette.socialFacebook,
    socialTelegram: palette.socialTelegram,
    socialTiktok: palette.socialTiktok,
    socialOK: palette.socialOK,
    socialYT: palette.socialYT,

    buttonNormal: palette.black + "0F",
    buttonPrimary: palette.primary,
    buttonSuccess: palette.success2,
    buttonError: palette.warning,

    cardTitle: palette.gradient40,
    cardSubitile: palette.gradient100,

    cartCaption: palette.gradient20,
  },
  spacing: {
    none: 0,
    s: 5,
    m: 10,
    l: 15,
    ll: 20,
    xl: 25,
    xxl: 35,
    xxxl: 50,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  textVariants: {
    h0: {
      fontSize: 34,
      lineHeight: 38,
      fontWeight: "700",
      color: "textTitle",
    },
    h1: {
      fontSize: 24,
      lineHeight: 28,
      fontWeight: "700",
      color: "textTitle",
    },
    h2: {
      fontSize: 20,
      lineHeight: 24,
      fontWeight: "700",
      color: "textTitle",
    },
    h3: {
      fontSize: 17,
      lineHeight: 22,
      fontWeight: "700",
      color: "textTitle",
    },
    primary1: {
      fontSize: 13,
      lineHeight: 19,
      color: "textRegular",
    },
    regular: {
      fontSize: 14,
      lineHeight: 21,
      color: "textRegular",
    },
    regularMedium: {
      fontSize: 14,
      lineHeight: 21,
      color: "textRegular",
      fontWeight: "500",
    },
    headlineMedium: {
      fontSize: 16,
      lineHeight: 22,
      fontWeight: "500",
      color: "textRegular",
    },
    headlineSemibold: {
      fontSize: 16,
      lineHeight: 22,
      fontWeight: "600",
      color: "textRegular",
    },
    headlineBold: {
      fontSize: 16,
      lineHeight: 22,
      fontWeight: "700",
      color: "textTitle",
    },
    subheadSemibold: {
      fontSize: 14,
      lineHeight: 18,
      fontWeight: "600",
      color: "textLabel",
    },
    subheadBold: {
      fontSize: 14,
      lineHeight: 18,
      fontWeight: "700",
      color: "textTitle",
    },
    balanceBig: {
      fontSize: 16,
      lineHeight: 16,
      fontWeight: "500",
      color: "textSuccess",
    },
    balanceSmall: {
      fontSize: 14,
      lineHeight: 14,
      fontWeight: "500",
      color: "textSuccess",
    },
    balanceLargeBig: {
      fontSize: 24,
      lineHeight: 24,
      fontWeight: "500",
      color: "textSuccess",
    },
    balanceLargeSmall: {
      fontSize: 21,
      lineHeight: 21,
      fontWeight: "500",
      color: "textSuccess",
    },
    caption1: {
      fontSize: 13,
      lineHeight: 19,
      fontWeight: "500",
      color: "textRegular",
    },
    caption2: {
      fontSize: 12,
      lineHeight: 14,
      fontWeight: "500",
      color: "textSecondary",
    },
    caption3: {
      fontSize: 11,
      lineHeight: 14,
      fontWeight: "500",
      color: "white",
    },
    buttonSLight: {
      fontSize: 13,
      lineHeight: 16,
      fontWeight: "700",
      color: "white",
    },
    buttonSActive: {
      fontSize: 13,
      lineHeight: 16,
      fontWeight: "700",
      color: "textButtonActive",
    },
    buttonSInactive: {
      fontSize: 13,
      lineHeight: 16,
      fontWeight: "700",
      color: "textButtonInactive",
    },
    buttonM: {
      fontSize: 14,
      lineHeight: 18,
      fontWeight: "500",
      color: "textButtonActive",
    },
    buttonL: {
      fontSize: 15,
      lineHeight: 17,
      fontWeight: "500",
      color: "textButtonActive",
    },
    warning40: {
      fontSize: 13,
      lineHeight: 19,
      fontWeight: "400",
      color: "textWarning",
    },
    PRegular: {
      fontSize: 15,
      lineHeight: 20,
      fontWeight: "400",
      color: "textRegular",
    },
    PMedium: {
      fontSize: 15,
      lineHeight: 20,
      fontWeight: "500",
      color: "textRegular",
    },
    PSemibold: {
      fontSize: 15,
      lineHeight: 20,
      fontWeight: "600",
      color: "textRegular",
    },
  },
});

export type Theme = typeof theme;
export default theme;
