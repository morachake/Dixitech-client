import React from "react"
import { View, Text, Image} from "react-native"
import CustomButton from "./customButton"
import { icons, images } from "@/constants"

const Oauth = () => {
    const handleGoogleAuth = () =>{}
    return (
        <View>
            <View className="flex flex-row justify-center items-center mt-4 gap-x-3">
                <View className="flex-1 h-[1px]  bg-primary-500"/>
                    <Text className="text-lg">OR</Text>
                <View className="flex-1 h-[1px]  bg-primary-500"/>
            </View>
            <CustomButton
                title="Sign Up With Google"
                className="mt-5 w-full shadow-none"
                IconLeft={() =>(
                    <Image 
                        source={icons.google}
                        resizeMode="contain"
                        className="w-5 h-5 mx-2"
                    />
                )}
                bgVariant="outline"
                textVariant="primary"
                onPress={handleGoogleAuth}
            />
        </View>
    )
}

export default Oauth