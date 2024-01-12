import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen, ProductScreen } from "./screens";
import { NavigationContainer } from "@react-navigation/native";
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ProductDetail" component={ProductScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
