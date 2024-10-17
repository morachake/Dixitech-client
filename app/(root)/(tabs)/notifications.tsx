import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

const notifications = [
  {
    id: 1,
    type: "payment",
    message: "Payment of $50 confirmed for electrical service",
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
    type: "rating",
    message: "You received a new rating: 4.5 ★",
  },
  {
    id: 5,
    type: "rating",
    message: "You received a new rating: 4.5 ★",
  },
  {
    id: 6,
    type: "rating",
    message: "You received a new rating: 4.5 ★",
  },
  {
    id: 7,
    type: "payment",
    message: "Payment of $50 confirmed for electrical service",
  },
  {
    id: 8,
    type: "payment",
    message: "Payment of $50 confirmed for electrical service",
  },
];

const Notifications = () => {
  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <StatusBar style="auto" />
      <View className="bg-primary-500 py-6 px-6 rounded-b-3xl">
        <Text className="text-white text-2xl font-bold">Notifications</Text>
      </View>
      <ScrollView className="flex-1 px-4 py-4">
        {notifications.map((notification) => (
          <View
            key={notification.id}
            className="bg-white rounded-xl shadow-md p-4 mb-4"
          >
            <Text className="text-gray-800 mb-2">{notification.message}</Text>

            {notification.type === "payment" && (
              <Text className="text-primary-500 font-semibold">
                Payment Confirmed
              </Text>
            )}

            {notification.type === "rating" && (
              <Text className="text-yellow-500 font-semibold">
                New Rating Received
              </Text>
            )}

            {/* Placeholder for job notifications if needed in the future */}
            {notification.type === "job" && (
              <View className="flex-row justify-end space-x-2 mt-2">
                <TouchableOpacity className="bg-primary-500 px-4 py-2 rounded-full">
                  <Text className="text-white">Accept</Text>
                </TouchableOpacity>
                <TouchableOpacity className="bg-red-500 px-4 py-2 rounded-full">
                  <Text className="text-white">Cancel</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Notifications;
