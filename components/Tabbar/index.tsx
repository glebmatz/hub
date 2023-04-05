import { IAPIServiceOption } from "@api/apiTypes";
import { palette } from "@ui/theme/theme";
import React from "react";
import { FlatList, StyleSheet } from "react-native";

type TabbarProps = {
  scrollable?: boolean;
  activeIndex?: number;
  items: IAPIServiceOption[];
  renderItem: ({ item, index }: { item: IAPIServiceOption; index: number }) => React.ReactElement;
};

export const Tabbar = React.forwardRef<FlatList, TabbarProps>(({ scrollable = true, items, renderItem }, ref) => {
  return (
    <FlatList
      horizontal
      ref={ref}
      data={items}
      renderItem={renderItem}
      scrollEnabled={scrollable}
      initialNumToRender={5}
      showsHorizontalScrollIndicator={false}
      style={styles.outer}
      contentContainerStyle={styles.wrapper}
    />
  );
});

const styles = StyleSheet.create({
  outer: {
    backgroundColor: palette.white,
    borderBottomColor: palette.black + "12",
    borderBottomWidth: 1,
    width: "100%",
  },
  wrapper: {
    paddingHorizontal: 10,
    paddingRight: 30,
  },
});
