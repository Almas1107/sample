import Constants from "expo-constants";
import { View, StyleSheet, Image } from "react-native";
import { useRoute } from "@react-navigation/native";
import { PaperProvider, Title } from "react-native-paper";
import { Text, Button } from "react-native-paper";
import { ProductType } from "./types";

export const ProductScreen = () => {
  const route = useRoute();
  const { detail }: any = route.params;
  return (
    <PaperProvider>
      <View style={styles.container}>
        <Image
          style={{ height: "40%", width: "80%", objectFit: "contain" }}
          source={{ uri: detail.image }}
        />
        <View
          style={{
            width: "90%",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ width: "60%" }} variant="titleMedium">
            {detail.title}
          </Text>
          <Text style={{ color: "green" }} variant="titleLarge">
            {detail.price}$
          </Text>
        </View>
        <View
          style={{
            width: "90%",
            flexDirection: "row",
            gap: 10,
            alignItems: "center",
          }}
        >
          <Text style={{ color: "gray" }} variant="titleMedium">
            category :
          </Text>
          <View
            style={{
              backgroundColor: "#fcae1e",
              padding: 5,
              borderBottomRightRadius: 5,
              borderBottomLeftRadius: 5,
              borderTopRightRadius: 5,
              borderTopLeftRadius: 5,
            }}
          >
            <Text style={{ color: "white" }} variant="titleMedium">
              {detail.category}
            </Text>
          </View>
        </View>
        <Text variant="bodyLarge" style={{ width: "90%" }}>
          {detail.description}
        </Text>
      </View>
    </PaperProvider>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    rowGap: 30,
  },
});
