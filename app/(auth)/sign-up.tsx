import CustomButton from "@/components/customButton";
import InputField from "@/components/inputField";
import Oauth from "@/components/oAuth";
import { icons, images } from "@/constants";
import { Link } from "expo-router";
import React, { useState } from "react";
import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const  SignUp = ()=>{
    const [form,setForm] = useState({
        userName:'',
        email:'',
        phone:'',
        password:'',
        confirmPassword:'',
        userType:''
    })
    return(
        <SafeAreaView className="flex-1 flex  justify-center bg-white">
            <Image 
                source={images.dextechLogo}
                className="w-full h-[100px] mt-5"
                resizeMode="contain"
            />
            <View className="p-5">
            <InputField
                placeholder="Enter name"
                icon={icons.person}
                value={form.email}
            />
             <InputField
                placeholder="Enter email"
                icon={icons.email}
            />
             <InputField
                placeholder="Enter phone number"
                icon={icons.phone}
            />
             <InputField
                placeholder="Enter your password"
                icon={icons.lock}
            />
             <InputField
                placeholder="Confirm your password"
                icon={icons.lock}
            />
            <CustomButton
                title="Sign Up"
                className="mt-6"
            />
            
            <Oauth/>
            <Link href="/(auth)/sign-in" className="text-md text-center text-general-500 mt-7">
                <Text className="text-black">Already Have an Account ? </Text>
                <Text className="text-primary-500">Sign In</Text>
            </Link>
            </View>
        </SafeAreaView>
    )
}

export default SignUp