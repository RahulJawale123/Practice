import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import CircularProgress from "react-native-circular-progress-indicator";

const ActiveProjectItemDashboard = ({ item }) => {
  const { backgroundColor, percentage, title, progess } = item;
  return (
    <View style={{ ...style.projectCard, backgroundColor: backgroundColor }}>
      <View
        style={{
          justifyContent: "space-between",
          marginHorizontal: 17,
          height: Dimensions.get("screen").height * 0.23,
        }}
      >
        <View
          style={{
            height: Dimensions.get("screen").height * 0.11,
            marginTop: Dimensions.get("screen").height * 0.03,
          }}
        >
          <CircularProgress
            radius={Dimensions.get("screen").width * 0.11}
            value={percentage}
            progressValueColor={"white"}
            valueSuffix="%"
            activeStrokeColor="white"
            inActiveStrokeColor="white"
            inActiveStrokeOpacity={0.3}
            inActiveStrokeWidth={7}
            activeStrokeWidth={7}
          />
        </View>
        <View
          style={{
            height: Dimensions.get("screen").height * 0.11,
            justifyContent: "flex-end",
            paddingBottom: Dimensions.get("screen").height * 0.04,
          }}
        >
          <Text style={style.projectTitle}>{title}</Text>
          <Text style={style.projectHours}>{progess} hours progress</Text>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  projectCard: {
    height: Dimensions.get("screen").height * 0.23,
    width: Dimensions.get("screen").width * 0.4,
    margin: 10,
    borderRadius: Dimensions.get("screen").width * 0.12,
  },
  projectTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  projectHours: {
    color: "white",
    fontSize: 13,
    opacity: 0.5,
    fontWeight: "bold",
  },
});

export default ActiveProjectItemDashboard;
