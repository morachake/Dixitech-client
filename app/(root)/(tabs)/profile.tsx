import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { icons } from "@/constants";

const Profile = () => {
  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <StatusBar style="auto" />
      <ScrollView className="flex-1">
        {/* Header Section */}
        <View className="bg-primary-500 pt-10 pb-24 rounded-b-3xl">
          <View className="flex-row justify-center items-center">
            {/* Profile Image */}
            <View className="relative">
              <Image
                source={icons.userPlaceholder}
                className="w-32 h-32 rounded-full border-4 border-white"
              />
              {/* Rating Badge */}
              <View className="absolute -bottom-2 -right-2 bg-yellow-400 rounded-full px-3 py-1">
                <Text className="text-white text-sm font-bold">4.8 ★</Text>
              </View>
            </View>
            {/* Profile Info */}
            <View className="ml-4">
              <Text className="text-white text-2xl font-bold">
                Salim Swaleh
              </Text>
              <Text className="text-white text-sm">Service Provider</Text>
            </View>
          </View>
        </View>

        {/* Biography Section */}
        <View className="bg-white mx-4 -mt-16 rounded-xl shadow-md p-6">
          <Text className="text-gray-500 text-sm mb-2">Biography</Text>
          <Text className="text-gray-800 mb-6">
            Experienced professional providing quality services in various fields such as plumbing, electrical work, and carpentry. Committed to ensuring customer satisfaction.
          </Text>

          <View className="mb-6">
            <Text className="text-gray-500 text-sm mb-1">Email</Text>
            <View className="flex-row items-center">
              <Image source={icons.email} className="w-5 h-5 mr-2" />
              <Text className="text-gray-800">user@gmail.com</Text>
            </View>
          </View>

          <View className="mb-6">
            <Text className="text-gray-500 text-sm mb-1">Phone</Text>
            <View className="flex-row items-center">
              <Image source={icons.phone} className="w-5 h-5 mr-2" />
              <Text className="text-gray-800">+2547912345678</Text>
            </View>
          </View>

          <View className="mb-6">
            <Text className="text-gray-500 text-sm mb-1">Location</Text>
            <View className="flex-row items-center">
              <Image source={icons.location} className="w-5 h-5 mr-2" />
              <Text className="text-gray-800">Nairobi, Kenya</Text>
            </View>
          </View>
        </View>

        {/* Services Offered Section */}
        <View className="bg-white mx-4 mt-6 rounded-xl shadow-md p-6">
          <Text className="text-lg font-semibold mb-4">Services Offered</Text>
          <View className="flex-row flex-wrap">
            {["Plumbing", "Electrical Work", "Carpentry", "Painting", "Landscaping"].map((service, index) => (
              <View
                key={index}
                className="bg-gray-200 rounded-full px-3 py-1 mr-2 mb-2"
              >
                <Text className="text-gray-800">{service}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Recent Activity Section */}
        <View className="bg-white mx-4 mt-6 rounded-xl shadow-md p-6">
          <Text className="text-lg font-semibold mb-4">Recent Activity</Text>
          {[
            "Completed plumbing job for Mr. Kamau",
            "Installed new lighting system for a client",
            "Custom-built a bookshelf",
          ].map((activity, index) => (
            <View key={index} className="flex-row items-center mb-3">
              <View className="w-2 h-2 rounded-full bg-primary-500 mr-3" />
              <Text className="text-gray-700">{activity}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
