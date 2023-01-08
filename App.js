import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import Root from "./navigation/Root";

export default function App() {
  return (
    <NavigationContainer>
      <Root />
    </NavigationContainer>
  );
}
