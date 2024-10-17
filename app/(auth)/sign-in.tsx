import CustomButton from "@/components/customButton";
import InputField from "@/components/inputField";
import Oauth from "@/components/oAuth";
import { icons, images } from "@/constants";
import { Link, router } from "expo-router";
import React, { useState } from "react";
import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const  SignIn = ()=>{
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
                placeholder="Enter email"
                icon={icons.email}
            />
           
             <InputField
                placeholder="Enter your password"
                icon={icons.lock}
            />
             
            <CustomButton
                title="Sign In"
                className="mt-6"
                onPress={() =>router.replace("/(root)/(tabs)/home")}
            />
            
            <Oauth/>
            <Link href="/(auth)/sign-up" className="text-md text-center text-general-500 mt-7">
                <Text className="text-black">Don't Have an Account ? </Text>
                <Text className="text-primary-500">Sign Up</Text>
            </Link>
            </View>
        </SafeAreaView>
    )
}

export default SignIn