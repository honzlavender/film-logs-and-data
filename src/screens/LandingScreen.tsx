import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";

function LandingScreen() {
  const onButtonPress = () => {
    Alert.alert("yay you saw a movie!");
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onLongPress={onButtonPress}
        style={styles.logButton}
      >
        <Text style={styles.logButtonIcon}>🎥</Text>
      </TouchableOpacity>
      <Text>I saw a movie today!</Text>
    </View>
  );
}

export default LandingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logButton: {
    backgroundColor: "#eb8989",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    borderRadius: 50,
    shadowColor: "rgba(119, 16, 16, 0.87)", // IOS
    shadowOffset: { height: 3, width: 3 }, // IOS
    shadowOpacity: 0.8, // IOS
    shadowRadius: 1, //IOS
    elevation: 2, // Android
    height: 100,
    width: 100,
    margin: 24,
  },
  logButtonIcon: {
    fontSize: 40,
  },
});
