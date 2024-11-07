import CustomButton from "@/components/customButton";
import InputField from "@/components/inputField";
import Oauth from "@/components/oAuth";
import { icons, images } from "@/constants";
import { Link } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  Modal,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignUp = () => {
  const [form, setForm] = useState({
    userName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    userType: "",
    location: "",
    serviceProvided: "",
  });

  const [userTypeModalVisible, setUserTypeModalVisible] = useState(false);
  const [serviceModalVisible, setServiceModalVisible] = useState(false);

  const userTypes = ["Individual", "Entity"];
  const services = ["Plumbing", "Carpentry", "Electrical Work"];

  return (
    <SafeAreaView className="flex-1 justify-center bg-white p-4">
      <Image
        source={images.dextechLogo}
        className="w-full h-20 mt-8"
        resizeMode="contain"
      />
      <Text className="text-xl font-bold text-center">
        Create a new account
      </Text>
      <View>
        <Text className="mb-2">Are you an Individual or an Entity?</Text>
        <TouchableOpacity
          onPress={() => setUserTypeModalVisible(true)}
          className="p-2 bg-gray-200 rounded-lg mt-2 border border-blue-300"
        >
          <Text>{form.userType || "Select User Type"}</Text>
        </TouchableOpacity>
        <Modal transparent visible={userTypeModalVisible} animationType="fade">
          <View className="flex-1 justify-center items-center bg-black bg-opacity-20">
            <View className="bg-white w-3/4 rounded-lg p-4">
              {userTypes.map((type) => (
                <Pressable
                  key={type}
                  onPress={() => {
                    setForm((prevForm) => ({ ...prevForm, userType: type }));
                    setUserTypeModalVisible(false);
                  }}
                  className="py-2 border-b border-gray-300"
                >
                  <Text>{type}</Text>
                </Pressable>
              ))}
              <Pressable
                onPress={() => setUserTypeModalVisible(false)}
                className="py-2 items-center"
              >
                <Text className="text-blue-700 font-bold">Cancel</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
      <View>
        <Text className="mb-2">Select Services Provided</Text>
        <TouchableOpacity
          onPress={() => setServiceModalVisible(true)}
          className="p-2 bg-gray-200 rounded-lg border border-blue-300 mt-2"
        >
          <Text>{form.serviceProvided || "Select Service"}</Text>
        </TouchableOpacity>
        <Modal transparent visible={serviceModalVisible} animationType="fade">
          <View className="flex-1 justify-center items-center bg-black bg-opacity-20">
            <View className="bg-white w-3/4 rounded-lg p-4">
              {services.map((service) => (
                <Pressable
                  key={service}
                  onPress={() => {
                    setForm((prevForm) => ({
                      ...prevForm,
                      serviceProvided: service,
                    }));
                    setServiceModalVisible(false);
                  }}
                  className="py-2 border-b border-gray-300"
                >
                  <Text>{service}</Text>
                </Pressable>
              ))}
              <Pressable
                onPress={() => setServiceModalVisible(false)}
                className="py-2 items-center"
              >
                <Text className="text-blue-700 font-bold">Cancel</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
      <View>
        <InputField
          placeholder="Enter name"
          icon={icons.person}
          value={form.userName}
          onChangeText={(text) =>
            setForm((prevForm) => ({ ...prevForm, userName: text }))
          }
        />
        <InputField
          placeholder="Enter email"
          icon={icons.email}
          value={form.email}
          onChangeText={(text) =>
            setForm((prevForm) => ({ ...prevForm, email: text }))
          }
        />
        <InputField
          placeholder="Enter phone number"
          icon={icons.phone}
          value={form.phone}
          onChangeText={(text) =>
            setForm((prevForm) => ({ ...prevForm, phone: text }))
          }
        />
        <InputField
          placeholder="Town"
          icon={icons.point}
          value={form.location}
          onChangeText={(text) =>
            setForm((prevForm) => ({ ...prevForm, location: text }))
          }
        />
        <InputField
          placeholder="Confirm your password"
          icon={icons.lock}
          value={form.confirmPassword}
          onChangeText={(text) =>
            setForm((prevForm) => ({ ...prevForm, confirmPassword: text }))
          }
        />

        <CustomButton title="Sign Up" className="mt-2" />
        <Oauth />
        <Link
          href="/(auth)/sign-in"
          className="text-md text-center text-gray-500"
        >
          <Text className="text-black">Already Have an Account?</Text>
          <Text className="text-primary-500"> Sign In</Text>
        </Link>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
