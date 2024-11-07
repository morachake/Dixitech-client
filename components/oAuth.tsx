import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import CustomButton from "./customButton";
import { icons, images } from "@/constants";

const Oauth = () => {
  const handleGoogleAuth = () => {};
  const handlefacebookAuth = () => {};

  return (
    <View className="m-4">
      {/* <View className="flex flex-row justify-center items-center mt-4 gap-x-3">
        <View className="flex-1 h-[1px]  bg-primary-500" />
        <Text className="text-lg">OR</Text>
        <View className="flex-1 h-[1px]  bg-primary-500" />
      </View> */}
      <View className="flex flex-row justify-center items-center">
        <TouchableOpacity>
          <Image
            source={icons.google}
            resizeMode="contain"
            className="w-8 h-8 mx-2"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={icons.facebook}
            resizeMode="contain"
            className="w-8 h-8 mx-2"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Oauth;
