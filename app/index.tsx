import React, { useState } from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useHeaderHeight } from "@react-navigation/elements";
import { useTheme } from "@react-navigation/native";
import BlurBg from "@/components/BlurBG";
import Menu from "@/components/Menu";

const Main = () => {
  const theme = useTheme();
  const { top } = useSafeAreaInsets();
  const headerHeight = useHeaderHeight();
  const topPadding = headerHeight + Platform.select({ android: 0, ios: top });

  const [isVisible, setIsVisible] = useState<boolean>(false);
  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={[
          styles.contentContainer,
          {
            paddingTop: topPadding + 20,
          },
        ]}
        automaticallyAdjustContentInsets
      >
        <Text
          style={[
            styles.creditText,
            {
              color: theme.colors.text,
            },
          ]}
        >
          Image by wirestock on Freepik
        </Text>
        <Image
          source={{
            uri: "https://img.freepik.com/free-photo/low-angle-shot-small-river-full-rocks-middle-forest_181624-5528.jpg",
          }}
          style={styles.banner}
        />

        <Text
          style={[
            styles.paraText,
            {
              color: theme.colors.subText,
            },
          ]}
        >
          {`In the heart of nature lies a lush green forest, a haven of tranquility and beauty. The canopy overhead is a tapestry of vibrant greens, where sunlight filters through, casting dappled patterns on the forest floor.

The air is fresh and crisp, filled with the scent of pine and earth, mingling with the sweet aroma of wildflowers in bloom. Birds chirp melodiously, their songs harmonizing with the gentle rustle of leaves swayed by a light breeze.`}
        </Text>
      </ScrollView>
      <>
        <BlurBg isBlur={isVisible} />
        <Menu
          visible={isVisible}
          onToggle={() => setIsVisible((prev) => !prev)}
        />
      </>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: 20,
  },
  creditText: {
    fontSize: 15,
    marginLeft: 15,
    marginBottom: 10,
  },
  banner: {
    width: "100%",
    height: 250,
    borderRadius: 20,
    resizeMode: "cover",
    marginBottom: 20,
  },
  paraText: {
    fontSize: 18,
    fontWeight: "300",
  },
});
