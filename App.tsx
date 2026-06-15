import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import LandingScreen from "./src/screens/LandingScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <LandingScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1b6b6",
    alignItems: "center",
    justifyContent: "center",
  },
});
