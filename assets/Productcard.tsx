import { Avatar, Card, IconButton } from "react-native-paper";
import { Text } from "react-native-paper";
import { Image, TouchableWithoutFeedback, View } from "react-native";
export const Productcard = (
  title: string,
  category: string,
  image: string
): any => {
  return (
    <View
      style={{
        height: "15%",
        width: "80%",
        display: "flex",
        flexDirection: "row",
        shadowColor: "#171717",
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        gap: 10,
      }}
    >
      <Image
        style={{
          width: "40%",
          height: "90%",
          paddingLeft: 10,
          borderBottomRightRadius: 10,
          borderBottomLeftRadius: 10,
          borderTopRightRadius: 10,
          borderTopLeftRadius: 10,
        }}
        source={{ uri: image }}
      />
      <View>
        <Text variant="titleLarge">{title}</Text>
        <Text variant="labelSmall">{category}</Text>
      </View>
    </View>
  );
};
