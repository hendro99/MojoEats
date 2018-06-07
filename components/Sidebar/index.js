import React, { Component } from "react";
import HomeScreen from "../Home/index.js";
import EventScreen from "./Event";
import KuponScreen from "./Kupon";
import AboutScreen from "./About.js";
import Sidebar from "./Sidebar.js";
import { DrawerNavigator } from "react-navigation";
const SidebarRouter = DrawerNavigator(
  {
    Home: { screen: HomeScreen },
    Event: { screen: EventScreen },
    Kupon: { screen: KuponScreen },
    About: { screen: AboutScreen },
  },
  {
    contentComponent: props => <Sidebar {...props} />
  }
);

export default SidebarRouter;