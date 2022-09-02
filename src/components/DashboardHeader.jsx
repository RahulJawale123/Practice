import { Dimensions, StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/Octicons";
import React from "react";

const DashboardHeader = () => {
  return (
    <View style={style.iconStyle}>
      <Icon
        name="three-bars"
        //style={style.menuIconStyle}
        size={25}
        color="black"
      />
      <Icon
        name="search"
        //style={style.searchIconStyle}
        size={25}
        color="black"
      />
    </View>
  );
};

const style = StyleSheet.create({
  iconStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    top: Dimensions.get("window").height / 15,
    marginHorizontal: 20,
  },
  //   menuIconStyle: {
  //     position: "absolute",
  //     top: Dimensions.get("window").height / 15,
  //     left: 20,
  //   },
  //   searchIconStyle: {
  //     position: "absolute",
  //     top: Dimensions.get("window").height / 15,
  //     right: 20,
  //   },
});

export default DashboardHeader;
