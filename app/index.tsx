import React, { useState } from "react";
import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import BlurBg from "@/components/BlurBG";

const Main = () => {
  const { top } = useSafeAreaInsets();
  const headerHeight = useHeaderHeight();
  const topPadding = headerHeight + top;

  const [isVisible, setIsVisible] = useState(false);
  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={{ paddingTop: topPadding }}
        automaticallyAdjustContentInsets
      >
        <Text style={{ color: "white" }}>{topPadding}</Text>
        <Text style={{ color: "white" }}>{topPadding}</Text>
        <Text style={{ color: "white" }}>{topPadding}</Text>
        <Text style={{ color: "white" }}>{topPadding}</Text>
        <Button title="open" onPress={() => setIsVisible((prev) => !prev)} />
      </ScrollView>
      <BlurBg isBlur={isVisible} />
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({});
