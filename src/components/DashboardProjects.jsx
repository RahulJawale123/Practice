import React from "react";
import { View, StyleSheet, Text, FlatList, SafeAreaView } from "react-native";
import ActiveProjectItemDashboard from "./ActiveProjectItemDashboard";

const DashboardProjects = () => {
  const itemData = [
    {
      id: 1,
      percentage: 70,
      title: "Medical App",
      progess: 9,
      backgroundColor: "#2ca0a3",
    },
    {
      id: 2,
      percentage: 50,
      title: "Making history Notes",
      progess: 20,
      backgroundColor: "#fac375",
    },
    {
      id: 3,
      percentage: 20,
      title: "Sketch practice",
      progess: 3,
      backgroundColor: "#e94e67",
    },
    {
      id: 4,
      percentage: 70,
      title: "Medical App",
      progess: 9,
      backgroundColor: "#7663e7",
    },
  ];
  return (
    <View style={style.header}>
      <Text style={{ fontSize: 28, fontWeight: "bold" }}>Active Projects</Text>
      <View style={style.app}>
        <FlatList
          data={itemData}
          numColumns={2}
          renderItem={({ item }) => {
            return <ActiveProjectItemDashboard item={item} />;
          }}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  header: {
    marginHorizontal: 20,
    marginVertical: 15,
  },
});

export default DashboardProjects;
