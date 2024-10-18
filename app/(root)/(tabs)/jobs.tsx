import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

const jobData = {
  incoming: [
    {
      id: 1,
      description: "Plumbing service for kitchen sink",
      location: "Nairobi, Kenya",
      date: "2024-10-18",
      type: "plumbing",
      paid: false,
    },
    {
      id: 2,
      description: "Electrical service for living room lights",
      location: "Mombasa, Kenya",
      date: "2024-10-20",
      type: "electrical",
      paid: false,
    },
  ],
  inProgress: [
    {
      id: 3,
      description: "Carpentry work for bedroom closet",
      location: "Kisumu, Kenya",
      date: "2024-10-15",
      type: "carpentry",
      paid: false,
    },
  ],
  completed: [
    {
      id: 4,
      description: "Painting service for home office",
      location: "Nakuru, Kenya",
      date: "2024-10-10",
      type: "painting",
      paid: true,
    },
    {
      id: 5,
      description: "General cleaning service",
      location: "Eldoret, Kenya",
      date: "2024-09-25",
      type: "cleaning",
      paid: true,
    },
  ],
  canceled: [
    {
      id: 6,
      description: "Repair service for garage door",
      location: "Thika, Kenya",
      date: "2024-10-12",
      type: "repair",
      paid: false,
    },
  ],
};

const Jobs = () => {
  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <StatusBar style="auto" />
      <View className="bg-primary-500 py-6 px-6 rounded-b-3xl">
        <Text className="text-white text-2xl font-bold">Job History</Text>
      </View>
      <ScrollView
        className="flex-1 px-4 py-4"
        showsHorizontalScrollIndicator={false}
      >
        {/* Incoming Job Requests */}
        <View className="bg-white rounded-xl shadow-md p-4 mb-4">
          <Text className="text-lg font-semibold mb-3">Incoming Requests</Text>
          {jobData.incoming.map((job) => (
            <View key={job.id} className="mb-4 p-3 bg-gray-100 rounded-lg">
              <Text className="text-gray-800">{job.description}</Text>
              <Text className="text-gray-600">Location: {job.location}</Text>
              <Text className="text-gray-600">Date: {job.date}</Text>
              <Text className="text-gray-600">
                Payment Status: {job.paid ? "Paid" : "Not Paid"}
              </Text>
              <View className="flex-row justify-end space-x-2 mt-2">
                <TouchableOpacity className="bg-primary-500 px-4 py-2 rounded-full">
                  <Text className="text-white">Accept</Text>
                </TouchableOpacity>
                <TouchableOpacity className="bg-red-500 px-4 py-2 rounded-full">
                  <Text className="text-white">Decline</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>

        {/* In Progress Jobs */}
        <View className="bg-white rounded-xl shadow-md p-4 mb-4">
          <Text className="text-lg font-semibold mb-3">In Progress</Text>
          {jobData.inProgress.map((job) => (
            <View key={job.id} className="mb-4 p-3 bg-gray-100 rounded-lg">
              <Text className="text-gray-800">{job.description}</Text>
              <Text className="text-gray-600">Location: {job.location}</Text>
              <Text className="text-gray-600">Date: {job.date}</Text>
              <Text className="text-gray-600">
                Payment Status: {job.paid ? "Paid" : "Not Paid"}
              </Text>
            </View>
          ))}
        </View>

        {/* Completed Jobs */}
        <View className="bg-white rounded-xl shadow-md p-4 mb-4">
          <Text className="text-lg font-semibold mb-3">Completed</Text>
          {jobData.completed.map((job) => (
            <View key={job.id} className="mb-4 p-3 bg-gray-100 rounded-lg">
              <Text className="text-gray-800">{job.description}</Text>
              <Text className="text-gray-600">Location: {job.location}</Text>
              <Text className="text-gray-600">Date: {job.date}</Text>
              <Text className="text-gray-600">Payment Status: Paid</Text>
            </View>
          ))}
        </View>

        {/* Canceled Jobs */}
        <View className="bg-white rounded-xl shadow-md p-4 mb-4">
          <Text className="text-lg font-semibold mb-3">Canceled</Text>
          {jobData.canceled.map((job) => (
            <View key={job.id} className="mb-4 p-3 bg-gray-100 rounded-lg">
              <Text className="text-gray-800">{job.description}</Text>
              <Text className="text-gray-600">Location: {job.location}</Text>
              <Text className="text-gray-600">Date: {job.date}</Text>
              <Text className="text-gray-600">
                Payment Status: {job.paid ? "Paid" : "Not Paid"}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Jobs;
