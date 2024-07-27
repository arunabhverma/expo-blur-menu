import React from "react";
import { Pressable, StyleSheet, Text, useWindowDimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Animated, {
  FadeIn,
  FadeOut,
  LinearTransition,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { getMenuData } from "@/mock";
import IconView from "./IconView";

const Menu = ({
  visible,
  onToggle,
}: {
  visible: boolean;
  onToggle: () => void;
}) => {
  const theme = useTheme();
  const { bottom } = useSafeAreaInsets();
  const { width } = useWindowDimensions();

  const animatedIconWrapperStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: visible ? withTiming(1.5) : withTiming(1) }],
    };
  }, [visible]);

  const animatedItemStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { rotate: visible ? withTiming("45deg") : withTiming("0deg") },
      ],
    };
  }, [visible]);

  return (
    <Animated.View
      layout={LinearTransition}
      style={[
        styles.container,
        {
          bottom,
          margin: visible ? 50 : 30,
        },
      ]}
    >
      {visible && (
        <Animated.View
          layout={LinearTransition}
          entering={FadeIn}
          exiting={FadeOut}
          style={[
            styles.iconsContainer,
            {
              width: width,
              bottom: bottom + 32,
            },
          ]}
        >
          {getMenuData(theme).map((item) => (
            <IconView key={item.id} icon={item.icon} title={item.title} />
          ))}
        </Animated.View>
      )}
      <Animated.View
        layout={LinearTransition}
        style={[animatedIconWrapperStyle, styles.buttonWrapper]}
      >
        <Pressable onPress={onToggle} style={styles.buttonStyle} hitSlop={10}>
          <Animated.View style={animatedItemStyle}>
            <Ionicons
              name="add-circle-sharp"
              size={32}
              color={theme.colors.text}
            />
          </Animated.View>
          {!visible && (
            <Animated.View
              layout={LinearTransition}
              entering={FadeIn}
              exiting={FadeOut}
              style={styles.buttonTextWrapper}
            >
              <Text
                style={[
                  styles.buttonText,
                  {
                    color: theme.colors.text,
                  },
                ]}
              >
                Open Menu
              </Text>
            </Animated.View>
          )}
        </Pressable>
      </Animated.View>
    </Animated.View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  iconsContainer: {
    gap: 30,
    margin: -8,
    marginBottom: 30,
    position: "absolute",
  },
  buttonWrapper: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  buttonStyle: {
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
    gap: 15,
  },
  buttonTextWrapper: {
    position: "absolute",
    marginLeft: 50,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "500",
  },
});
