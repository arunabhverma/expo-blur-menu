import { Ionicons } from "@expo/vector-icons";
import { ExtendedTheme } from "@react-navigation/native";

export const getMenuData = (theme: ExtendedTheme) => {
  return [
    {
      id: "1",
      icon: <Ionicons name="map" size={24} color={theme.colors.subText} />,
      title: "Maps",
    },
    {
      id: "2",
      icon: <Ionicons name="images" size={24} color={theme.colors.subText} />,
      title: "Photo Album",
    },
    {
      id: "3",
      icon: <Ionicons name="camera" size={24} color={theme.colors.subText} />,
      title: "Camera",
    },
    {
      id: "4",
      icon: <Ionicons name="walk" size={24} color={theme.colors.subText} />,
      title: "Health & Fitness",
    },
    {
      id: "5",
      icon: <Ionicons name="film" size={24} color={theme.colors.subText} />,
      title: "Shows & Movies",
    },
    {
      id: "6",
      icon: <Ionicons name="book" size={24} color={theme.colors.subText} />,
      title: "Books",
    },
  ];
};
