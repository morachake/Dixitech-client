import React from 'react';
import { Tabs } from 'expo-router';
import { Image, ImageSourcePropType, View } from 'react-native';
import { icons } from '@/constants';

const TabIcon = ({
  source,
  focused
}: {
  source: ImageSourcePropType;
  focused: boolean;
}) => {
  return (
    <View className={`flex flex-row justify-center items-center rounded-full ${focused ? 'bg-primary-500' : ''}`}>
      <View className={`rounded-full w-12 h-12 items-center justify-center ${focused ? 'bg-primary-500' : ''}`}>
        <Image
          source={source}
          tintColor={focused ? '#FFFFFF' : '#8E8E8E'} 
          resizeMode="contain"
          className="h-7 w-7"
        />
      </View>
    </View>
  );
};

export default function Layout() {
  return (
    <Tabs
      initialRouteName="home"
      screenOptions={{
        tabBarActiveTintColor: "#FFFFFF", 
        tabBarInactiveTintColor: "#111111", 
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#FFFFFF", 
          paddingBottom: 0,
          overflow: "hidden",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ focused }) => <TabIcon source={icons.home} focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="jobs"
        options={{
          title: 'Jobs',
          headerShown: false,
          tabBarIcon: ({ focused }) => <TabIcon source={icons.history} focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          headerShown: false,
          tabBarIcon: ({ focused }) => <TabIcon source={icons.profile} focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          title: 'Notifications',
          headerShown: false,
          tabBarIcon: ({ focused }) => <TabIcon source={icons.notifications} focused={focused} />,
        }}
      />
    </Tabs>
  );
}
