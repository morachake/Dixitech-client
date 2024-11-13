import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, useRouter } from "expo-router";
import DropDownPicker from "react-native-dropdown-picker";
import Oauth from "@/components/oAuth";
import { images } from "@/constants";
import { useAuth } from "@/context/Auth";
import { User } from "@/types/types";

const userTypes = [
  { label: "Individual", value: "Individual" },
  { label: "Entity", value: "Entity" },
];

const services = [
  { label: "Plumbing", value: 1 },
  { label: "Carpentry", value: 2 },
  { label: "Electrical Work", value: 3 },
];

export default function Component() {
  const { signUp, loading, error } = useAuth();
  const router = useRouter();

  const [form, setForm] = useState<User>({
    name: "",
    email: "",
    phone_number: "",
    password: "",
    provider_type: "",
    town: "",
    // service_types: [],
  });

  const [openProviderType, setOpenProviderType] = useState(false);
  const [openServices, setOpenServices] = useState(false);
  const [formErrors, setFormErrors] = useState<
    Partial<Record<keyof User, string>>
  >({});

  const updateForm = (key: keyof User, value: any) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setFormErrors((prev) => ({ ...prev, [key]: "" }));
  };

  const validateForm = () => {
    const errors: Partial<Record<keyof User, string>> = {};
    Object.entries(form).forEach(([key, value]) => {
      if (value === "" || (Array.isArray(value) && value.length === 0)) {
        errors[key as keyof User] = `${key.replace("_", " ")} is required`;
      }
    });
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSignUp = async () => {
    if (!validateForm()) return;

    try {
      await signUp({
        ...form,
        // service_types: form.service_types.map(Number),
      });
      router.replace("/home");
    } catch (error) {
      console.error("Sign Up Error:", error);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
      >
        <Image
          source={images.dextechLogo}
          className="w-4/5 h-16 mx-auto my-8"
          resizeMode="contain"
          accessibilityLabel="Dextech Logo"
        />
        <Text className="text-xl font-bold text-center mb-1">
          Create a new account
        </Text>
        <ScrollView
          className="flex-1 px-4"
          showsVerticalScrollIndicator={false}
        >
          <View className="mb-1 z-20">
            <Text className="mb-1">Are you an Individual or an Entity?</Text>
            <DropDownPicker
              open={openProviderType}
              value={form.provider_type}
              items={userTypes}
              setOpen={setOpenProviderType}
              setValue={(callback) => {
                const value = callback(form.provider_type);
                updateForm("provider_type", value);
                setOpenProviderType(false);
              }}
              placeholder={formErrors.provider_type || "Select Provider Type"}
              className={`border ${formErrors.provider_type ? "border-red-500" : "border-gray-300"} rounded-lg`}
              containerStyle={{ zIndex: 3000 }}
              dropDownContainerStyle={{ borderColor: "#ccc" }}
            />
          </View>

          <View className="mb-4 z-10">
            <Text className="mb-2">Select Services Provided</Text>
            <DropDownPicker
              open={openServices}
              value={form.service_types}
              items={services}
              setOpen={setOpenServices}
              setValue={(callback) => {
                const value = callback(form.service_types);
                updateForm("service_types", value);
                setOpenServices(false);
              }}
              multiple={true}
              min={0}
              max={3}
              placeholder={formErrors.service_types || "Select Services"}
              className={`border ${formErrors.service_types ? "border-red-500" : "border-gray-300"} rounded-lg`}
              containerStyle={{ zIndex: 2000 }}
              dropDownContainerStyle={{ borderColor: "#ccc" }}
            />
          </View>

          <View className="mb-4">
            <TextInput
              placeholder={formErrors.name || "Enter name"}
              value={form.name}
              onChangeText={(text) => updateForm("name", text)}
              className={`border p-3 rounded-lg ${
                formErrors.name
                  ? "border-red-500 placeholder-red-500"
                  : "border-gray-300"
              }`}
            />
          </View>

          <View className="mb-4">
            <TextInput
              placeholder={formErrors.email || "Enter email"}
              value={form.email}
              onChangeText={(text) => updateForm("email", text)}
              keyboardType="email-address"
              autoCapitalize="none"
              className={`border p-3 rounded-lg ${
                formErrors.email
                  ? "border-red-500 placeholder-red-500"
                  : "border-gray-300"
              }`}
            />
          </View>

          <View className="mb-4">
            <TextInput
              placeholder={formErrors.phone_number || "Enter phone number"}
              value={form.phone_number}
              onChangeText={(text) => updateForm("phone_number", text)}
              keyboardType="phone-pad"
              className={`border p-3 rounded-lg ${
                formErrors.phone_number
                  ? "border-red-500 placeholder-red-500"
                  : "border-gray-300"
              }`}
            />
          </View>

          <View className="mb-4">
            <TextInput
              placeholder={formErrors.town || "Enter town"}
              value={form.town}
              onChangeText={(text) => updateForm("town", text)}
              className={`border p-3 rounded-lg ${
                formErrors.town
                  ? "border-red-500 placeholder-red-500"
                  : "border-gray-300"
              }`}
            />
          </View>

          <View className="mb-4">
            <TextInput
              placeholder={formErrors.password || "Enter password"}
              value={form.password}
              onChangeText={(text) => updateForm("password", text)}
              secureTextEntry
              className={`border p-3 rounded-lg ${
                formErrors.password
                  ? "border-red-500 placeholder-red-500"
                  : "border-gray-300"
              }`}
            />
          </View>

          {error && (
            <Text className="text-red-500 text-center mb-4">{error}</Text>
          )}

          <TouchableOpacity
            onPress={handleSignUp}
            disabled={loading}
            className={`w-full h-12 rounded-lg justify-center items-center mb-6 ${
              loading ? "bg-gray-400" : "bg-primary-700"
            }`}
          >
            <Text className="text-white text-lg font-semibold">
              {loading ? "Signing Up..." : "Sign Up"}
            </Text>
          </TouchableOpacity>

          <Oauth />
          <Link
            href="/(auth)/sign-in"
            className="text-md text-center text-gray-500 mt-4 mb-8"
          >
            <Text className="text-black">Already Have an Account?</Text>
            <Text className="text-primary-500"> Sign In</Text>
          </Link>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
