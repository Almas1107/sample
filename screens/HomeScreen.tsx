import { StatusBar } from "expo-status-bar";
import {
  Button,
  FlatList,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Text, ActivityIndicator, MD2Colors } from "react-native-paper";
import { PaperProvider } from "react-native-paper";
import { useEffect, useState } from "react";
import Constants from "expo-constants";
import axios from "axios";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ProductType } from "./types";

export const HomeScreen = () => {
  const [isloading, setIsloading] = useState<boolean>(true);
  const [products, setProducts] = useState<ProductType[] | null>(null);
  const DataCall = async () => {
    const result = await axios.get("https://fakestoreapi.com/products");
    setProducts([{}, ...result.data]);
    setIsloading(false);
  };
  const navigation = useNavigation<any>();
  const route = useRoute();
  const params = route.params;
  useEffect(() => {
    DataCall();
  }, []);
  return (
    <PaperProvider>
      <View style={styles.container}>
        {isloading === true ? (
          <View>
            <Text variant="titleLarge">Loading...</Text>
            <ActivityIndicator animating={true} color={MD2Colors.red800} />
          </View>
        ) : (
          <FlatList
            style={{ width: "100%" }}
            data={products}
            renderItem={({ item, index }) =>
              index === 0 ? (
                <Image
                  style={{
                    height: 300,
                    width: "100%",
                    marginBottom: 30,
                  }}
                  source={{
                    uri: "https://i.pinimg.com/originals/ab/90/cd/ab90cd665a40678eb76c3b80a2d5a83f.gif",
                  }}
                />
              ) : (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("ProductDetail", {
                      detail: item,
                    })
                  }
                >
                  <View
                    style={{
                      height: "auto",
                      width: "100%",
                      justifyContent: "center",
                      display: "flex",
                      flexDirection: "row",
                      gap: 10,
                      marginBottom: 20,
                    }}
                  >
                    <Image
                      style={{
                        width: 120,
                        height: 120,
                        paddingLeft: 10,
                        borderBottomRightRadius: 10,
                        borderBottomLeftRadius: 10,
                        borderTopRightRadius: 10,
                        borderTopLeftRadius: 10,
                        objectFit: "contain",
                      }}
                      source={{ uri: item.image }}
                    />
                    <View style={{ rowGap: 5 }}>
                      <Text style={{ width: 220 }} variant="titleSmall">
                        {item.title}
                      </Text>
                      <Text variant="labelSmall">{item.category}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              )
            }
          />
        )}
        <View
          style={{
            flexDirection: "row",
            borderWidth: 1,
            height: 80,
            width: "100%",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <View
            style={{
              borderWidth: 1,
              height: "60%",
              width: "20%",
            }}
          ></View>
          <View
            style={{
              borderWidth: 1,
              height: "60%",
              width: "20%",
            }}
          ></View>
          <View
            style={{
              borderWidth: 1,
              height: "60%",
              width: "20%",
            }}
          ></View>
          <View
            style={{
              borderWidth: 1,
              height: "60%",
              width: "20%",
            }}
          ></View>
        </View>
        <StatusBar style="auto" />
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
    justifyContent: "space-between",
  },
});
