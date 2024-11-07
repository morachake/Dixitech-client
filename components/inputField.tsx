import { InputFieldProps } from "@/types/types";
import React from "react";
import {
  TextInput,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from "react-native";

const InputField = ({
  label,
  icon,
  secureTextEntry = false,
  labelStyle,
  containerStyle,
  inputStyle,
  iconStyle,
  className,
  ...props
}: InputFieldProps) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View className="my-2 w-full">
          <Text className={`text-md font-JakartaSemiBold mb-1 ${labelStyle}`}>
            {label}
          </Text>
          <View
            className={`flex flex-row justify-start shadow-sm items-center relative bg-neutral-100 rounded-full border border-primary-300 focus:border-primary-500  ${containerStyle}`}
          >
            {icon && (
              <Image source={icon} className={`w-4 h-4 ml-4 ${iconStyle}`} />
            )}
            <TextInput
              className={`rounded-full p-3 font-JakartaSemiBold text-[10px] text-black flex-1 ${inputStyle} text-left`}
              secureTextEntry={secureTextEntry}
              {...props}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default InputField;
