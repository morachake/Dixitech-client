import React from "react";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { icons } from "@/constants"; // Replace with the path to your icons

const Home = () => {
  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <StatusBar style="auto" />
      <ScrollView className="px-4 py-6">
        {/* Header Section (Styled like Profile Screen) */}
        <View className="bg-white rounded-xl py-5 px-4 flex-row justify-between items-center mb-6 shadow-lg">
          <View className="flex-1">
            <Text className="text-gray-900 text-2xl font-bold">
              Welcome, Salim!
            </Text>
            <Text className="text-gray-500 text-sm mt-1">
              Here’s what’s happening today.
            </Text>
          </View>
          <Image
            source={icons.person}
            className="w-14 h-14 rounded-full border-2 border-primary-500"
          />
        </View>

        {/* Summary Cards */}
        <View className="flex-row justify-between mb-6 space-x-4">
          <TouchableOpacity className="bg-primary-500 flex-1 rounded-xl p-5 shadow-md">
            <Text className="text-white text-lg font-semibold">
              New Requests
            </Text>
            <Text className="text-white text-3xl mt-2 font-bold">5</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-green-500 flex-1 rounded-xl p-5 shadow-md">
            <Text className="text-white text-lg font-semibold">Earnings</Text>
            <Text className="text-white text-3xl mt-2 font-bold">
              KSh 15,000
            </Text>
          </TouchableOpacity>
        </View>

        <View className="flex-row justify-between mb-6 space-x-4">
          <TouchableOpacity className="bg-yellow-500 flex-1 rounded-xl p-5 shadow-md">
            <Text className="text-white text-lg font-semibold">
              In Progress
            </Text>
            <Text className="text-white text-3xl mt-2 font-bold">3</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-red-500 flex-1 rounded-xl p-5 shadow-md">
            <Text className="text-white text-lg font-semibold">
              Pending Payment
            </Text>
            <Text className="text-white text-3xl mt-2 font-bold">2</Text>
          </TouchableOpacity>
        </View>

        {/* Quick Actions */}
        <View className="bg-white rounded-xl shadow-lg p-2 mb-6">
          <Text className="text-lg font-semibold mb-4">Quick Actions</Text>
          <View className="flex-row space-x-4">
            <TouchableOpacity className="bg-primary-500 rounded-md p-3 flex-1 items-center shadow-sm">
              <Text className="text-white font-semibold">View Requests</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-primary-500 rounded-md p-3 flex-1 items-center shadow-sm">
              <Text className="text-white font-semibold">Check Earnings</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-primary-500 rounded-md p-3 flex-1 items-center shadow-sm">
              <Text className="text-white font-semibold">Profile</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Recent Activity */}
        <View className="bg-white rounded-xl shadow-lg p-5 mb-6">
          <Text className="text-lg font-semibold mb-4">Recent Activity</Text>
          {[
            {
              id: 1,
              text: "Accepted a plumbing job request.",
              time: "2 hours ago",
            },
            {
              id: 2,
              text: "Completed an electrical service.",
              time: "Yesterday",
            },
            {
              id: 3,
              text: "Received payment for carpentry work.",
              time: "2 days ago",
            },
          ].map((activity) => (
            <View
              key={activity.id}
              className="flex-row justify-between items-center mb-3"
            >
              <Text className="text-gray-800">{activity.text}</Text>
              <Text className="text-gray-500 text-sm">{activity.time}</Text>
            </View>
          ))}
        </View>

        {/* Available Jobs */}
        <View className="bg-white rounded-xl shadow-lg p-5 mb-6">
          <Text className="text-lg font-semibold mb-4">Available Jobs</Text>
          {[
            {
              id: 1,
              title: "Kitchen Plumbing",
              location: "Nairobi",
              date: "Oct 18, 2024",
            },
            {
              id: 2,
              title: "Living Room Electrical Fix",
              location: "Mombasa",
              date: "Oct 20, 2024",
            },
          ].map((job) => (
            <TouchableOpacity
              key={job.id}
              className="bg-gray-100 p-4 rounded-lg mb-3 shadow-sm"
            >
              <Text className="text-gray-800 font-semibold">{job.title}</Text>
              <Text className="text-gray-600 mt-1">
                {job.location} - {job.date}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
