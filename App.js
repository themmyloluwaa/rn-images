import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  Image,
  ScrollView,
  ActivityIndicator,
} from "react-native";

import IMAGES from "./src/images";

const staticImage = require("./src/assets/static-image.png");

// TODO
/* 1- ADD FILES TO GIT
  2- REPLACE IMAGE IN STARTUP BRANCH
  3- PUSH CODE TO GITHUB
*/

export default function App() {
  const [loading, setLoading] = React.useState(false);
  return (
    <View style={styles.container}>
      <ImageBackground source={staticImage} style={styles.ImageBackground}>
        <StatusBar style="auto" />
        <ScrollView
          style={styles.ImageContainer}
          contentContainerStyle={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
          horizontal={false}
        >
          {IMAGES.map((image, i) => {
            return (
              <View
                style={{
                  padding: 5,
                }}
                key={i}
              >
                <Image
                  source={{ uri: image }}
                  style={[
                    styles.Image,
                    {
                      width: i % 2 === 1 ? 150 : 95,
                      height: i % 2 === 1 ? 150 : 95,
                    },
                  ]}
                  resizeMode="center"
                  onLoadStart={() => setLoading(true)}
                  onLoadEnd={() => setLoading(false)}
                />
                {loading && <ActivityIndicator color="green" size="large" />}
              </View>
            );
          })}
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  ImageBackground: {
    flex: 1,
    resizeMode: "cover",
    width: "100%",
    alignItems: "center",
  },
  ImageContainer: {
    marginHorizontal: 16,
    marginTop: 30,
    width: "100%",
  },
  Image: {
    shadowColor: "black",
    shadowOffset: {
      width: -10,
      height: 9,
    },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5,
  },
});
