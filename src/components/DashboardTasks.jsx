import React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import DashboardTaskItem from "./DashboardTaskItem";

const DashboardTasks = () => {
  return (
    <View>
      <View style={style.header}>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>My Tasks</Text>
        <View
          style={{
            backgroundColor: "#2ca0a3",
            borderRadius: 30,
            height: 60,
            width: 60,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon name="calendar" size={25} color="white"></Icon>
        </View>
      </View>
      <DashboardTaskItem
        title={"To Do"}
        now={1}
        started={3}
        icon="alarm"
        iconColor={"#e94e67"}
      />
      <DashboardTaskItem
        title={"In Progress"}
        now={7}
        started={10}
        iconColor="#fac375"
        icon="add-circle-outline"
      />
      <DashboardTaskItem
        title={"Done"}
        now={2}
        started={5}
        icon="done"
        iconColor={"#7663e7"}
      />
    </View>
  );
};

const style = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: 10,
    alignItems: "center",
  },
});

export default DashboardTasks;
