import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
export default class App extends Component {
    render() {
        return (<View style={styles.container}>
                <Text style={styles.text}>
                    Welcome to React Native!
                </Text>
            </View>);
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF",
    },
    text: {
        fontSize: 20,
        textAlign: "center",
        margin: 10,
    }
});

//# sourceMappingURL=root.js.map
