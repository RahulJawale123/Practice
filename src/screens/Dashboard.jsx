import React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Dimensions,
  FlatList,
} from "react-native";
import DashboardHeader from "../components/DashboardHeader";
import DashboardProjects from "../components/DashboardProjects";
import DashboardTasks from "../components/DashboardTasks";
import UserProfileDashboard from "../components/UserProfileDashboard";

const Dashboard = () => {
  const dashboard = [
    {
      component: (
        <ImageBackground
          source={require("../../assets/backgroundOrange.jpg")}
          style={{
            height: Dimensions.get("window").height / 3,
          }}
          imageStyle={style.imageStyle}
        >
          <DashboardHeader />
          <UserProfileDashboard />
        </ImageBackground>
      ),
      index: 1,
    },
    { component: <DashboardTasks />, index: 2 },
    { component: <DashboardProjects />, index: 3 },
  ];
  return (
    <View>
      <FlatList
        data={dashboard}
        keyExtractor={(item) => {
          return item.index;
        }}
        renderItem={(item) => {
          return <>{dashboard[item.index].component}</>;
        }}
      />
    </View>
  );
};

const style = StyleSheet.create({
  imageStyle: {
    borderBottomRightRadius: Dimensions.get("window").width / 7,
    borderBottomLeftRadius: Dimensions.get("window").width / 7,
  },
});
export default Dashboard;
