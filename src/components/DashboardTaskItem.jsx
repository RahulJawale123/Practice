import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
const DashboardTaskItem = ({ title, now, started, icon, iconColor }) => {
  return (
    <View style={style.taskItem}>
      <View
        style={{
          height: 60,
          width: 60,
          flexDirection: "row",
        }}
      >
        <Icon
          name={icon}
          size={30}
          color={"white"}
          style={{
            backgroundColor: iconColor,
            height: 60,
            width: 60,
            borderRadius: 30,
            padding: 15,
          }}
        ></Icon>
      </View>
      <View style={style.titleAndSubTitle}>
        <Text style={style.title}>{title}</Text>
        <Text style={style.subTitle}>
          {now} tasks now. {started} started
        </Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  taskItem: {
    flexDirection: "row",
    height: Dimensions.get("window").height / 3,
    marginHorizontal: 15,
    marginVertical: 5,
    height: 60,
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
    fontFamily: "normal",
  },
  subTitle: {
    fontSize: 16,
    opacity: 0.5,
    fontWeight: "400",
  },
  titleAndSubTitle: {
    marginHorizontal: 10,
    alignSelf: "center",
  },
});

export default DashboardTaskItem;
