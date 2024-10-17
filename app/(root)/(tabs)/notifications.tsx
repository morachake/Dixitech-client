import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

const notifications = [
  {
    id: 1,
    type: "job",
    message: "New job request for plumbing service",
    action1: "Accept",
    action2: "Decline",
  },
  {
    id: 2,
    type: "payment",
    message: "Payment of $50 confirmed for electrical service",
  },
  {
    id: 3,
    type: "rating",
    message: "You received a new rating: 4.5 ★",
  },
  {
    id: 4,
    type: "job",
    message: "New job request for carpentry work",
    action1: "Accept",
    action2: "Decline",
  },
  {
    id: 5,
    type: "job",
    message: "New job request for carpentry work",
    action1: "Accept",
    action2: "Decline",
  },
];

const Notifications = () => {
  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <StatusBar style="auto" />
      <View className="bg-primary-500 py-4 px-6">
        <Text className="text-white text-2xl font-bold">Notifications</Text>
      </View>
      <ScrollView className="flex-1 px-4 py-4">
        {notifications.map((notification) => (
          <View
            key={notification.id}
            className="bg-white rounded-xl shadow-md p-4 mb-4"
          >
            <Text className="text-gray-800 mb-2">{notification.message}</Text>

            {notification.type === "job" && (
              <View className="flex-row justify-end space-x-2">
                <TouchableOpacity className="bg-primary-500 px-4 py-2 rounded-full">
                  <Text className="text-white">Accept</Text>
                </TouchableOpacity>
                <TouchableOpacity className="bg-red-500 px-4 py-2 rounded-full">
                  <Text className="text-white">Cancel</Text>
                </TouchableOpacity>
              </View>
            )}

            {notification.type === "payment" && (
              <View className="mt-2">
                <Text className="text-primary-500 font-semibold">
                  Payment Confirmed
                </Text>
              </View>
            )}

            {notification.type === "rating" && (
              <View className="mt-2">
                <Text className="text-yellow-500 font-semibold">
                  New Rating Received
                </Text>
              </View>
            )}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Notifications;
