import React from "react";
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import CircularProgress from "react-native-circular-progress-indicator";

const UserProfileDashboard = () => {
  return (
    <View style={style.userProfile}>
      <View
        style={{
          height: 100,
          width: 100,
        }}
      >
        <CircularProgress
          radius={50}
          value={60}
          progressValueColor={"white"}
          valueSuffix="%"
          activeStrokeColor="#e94e67"
          inActiveStrokeColor="white"
          inActiveStrokeOpacity={0.3}
          inActiveStrokeWidth={7}
          activeStrokeWidth={7}
        />
        <ImageBackground
          style={{ position: "absolute", top: 10, left: 10 }}
          imageStyle={{
            height: 80,
            width: 80,
            borderRadius: 40,
          }}
          source={require("../../assets/avatar.jpg")}
        ></ImageBackground>
      </View>
      <View style={style.userNameAndDes}>
        <Text style={style.userName}>Rahul Jawale</Text>
        <Text style={style.designation}>App Developer</Text>
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  imageStyle: {
    borderBottomRightRadius: Dimensions.get("window").width / 7,
    borderBottomLeftRadius: Dimensions.get("window").width / 7,
  },

  userProfile: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: Dimensions.get("window").height / 3,
  },
  userName: {
    fontWeight: "bold",
    fontSize: 30,
    fontFamily: "normal",
  },
  designation: {
    fontSize: 20,
    opacity: 0.5,
    fontWeight: "400",
  },
  userNameAndDes: {
    alignItems: "center",
    margin: 10,
  },
});

export default UserProfileDashboard;
