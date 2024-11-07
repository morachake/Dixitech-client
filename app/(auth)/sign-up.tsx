import CustomButton from "@/components/customButton";
import InputField from "@/components/inputField";
import Oauth from "@/components/oAuth";
import { icons, images } from "@/constants";
import { Link } from "expo-router";
import React, { useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignUp = () => {
  const [form, setForm] = useState({
    userName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    userType: "",
  });
  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <SafeAreaView className="flex-1 flex  justify-center bg-white p-4">
      <Image
        source={images.dextechLogo}
        className="w-full h-[80px] mt-8"
        resizeMode="contain"
      />
      {/* <Text className="text-xl font-bold text-center">
        Create a new account
      </Text> */}
      <View className="justify-center items-center pt-2">
        <Text>Are you an Individual or an Entity?</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 10,
          }}
        >
          <Pressable
            onPress={() => setSelectedOption("Individual")}
            style={{
              padding: 10,
              backgroundColor:
                selectedOption === "Individual" ? "#26587A" : "#e0e0e0",
              borderRadius: 5,
              marginHorizontal: 10,
            }}
          >
            <Text
              style={{
                color: selectedOption === "Individual" ? "#fff" : "#000",
              }}
            >
              Individual
            </Text>
          </Pressable>

          <Pressable
            onPress={() => setSelectedOption("Entity")}
            style={{
              padding: 10,
              backgroundColor:
                selectedOption === "Entity" ? "#26587A" : "#e0e0e0",
              borderRadius: 5,
              marginHorizontal: 10,
            }}
          >
            <Text
              style={{ color: selectedOption === "Entity" ? "#fff" : "#000" }}
            >
              Entity
            </Text>
          </Pressable>
        </View>
      </View>
      <View className="">
        <InputField
          placeholder="Enter name"
          icon={icons.person}
          value={form.email}
        />
        <InputField placeholder="Enter email" icon={icons.email} />
        <InputField placeholder="Enter phone number" icon={icons.phone} />
        <InputField placeholder="town" icon={icons.lock} />
        <InputField placeholder="Services Provided" icon={icons.lock} />
        <InputField placeholder="Confirm your password" icon={icons.lock} />
        <CustomButton title="Sign Up" className="mt-4" />
        <Oauth />
        <Link
          href="/(auth)/sign-in"
          className="text-md text-center text-general-500 "
        >
          <Text className="text-black">Already Have an Account ? </Text>
          <Text className="text-primary-500">Sign In</Text>
        </Link>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
