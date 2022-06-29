import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Dashboard } from '../../screens/dashboard';
import { Activity } from '../../screens/activity';

const Tab = createBottomTabNavigator();

export const DashboardScreen = () => {
  return (
    <Tab.Navigator initialRouteName="Dashboard">
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen
        name="Activity"
        component={Activity}
        options={{
          tabBarLabel: 'Activity',
          tabBarAllowFontScaling: true,
        }}
      />
    </Tab.Navigator>
  );
};
