import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useTheme } from "@react-navigation/native";

const IconView = ({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) => {
  const theme = useTheme();
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.iconWrapper,
          {
            backgroundColor: theme.colors.border,
          },
        ]}
      >
        {icon}
      </View>
      <Text style={[styles.iconText, { color: theme.colors.subText }]}>
        {title}
      </Text>
    </View>
  );
};

export default IconView;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  iconWrapper: {
    padding: 12,
    borderRadius: 100,
  },
  iconText: {
    fontSize: 22,
    fontWeight: "500",
  },
});
