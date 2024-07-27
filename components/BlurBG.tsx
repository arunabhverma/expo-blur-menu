import React from "react";
import { StyleSheet, useColorScheme } from "react-native";
import { BlurView } from "expo-blur";
import Animated, {
  useAnimatedProps,
  withTiming,
} from "react-native-reanimated";

const BlurBg = ({ isBlur }: { isBlur: boolean }) => {
  const colorScheme = useColorScheme();
  const AnimatedBlurView = Animated.createAnimatedComponent(BlurView);

  const animatedProps = useAnimatedProps(() => {
    const intensity = isBlur
      ? withTiming(100, { duration: 500 })
      : withTiming(0, { duration: 500 });

    return {
      intensity,
    };
  }, [isBlur, colorScheme]);

  return (
    <AnimatedBlurView
      pointerEvents={!isBlur ? "none" : "auto"}
      tint={colorScheme}
      animatedProps={animatedProps}
      style={styles.container}
    />
  );
};

export default BlurBg;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...StyleSheet.absoluteFillObject,
  },
});
