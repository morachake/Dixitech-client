import CustomButton from "@/components/customButton";
import { onboarding } from "@/constants";
import { router } from "expo-router";
import React, { useRef, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Swiper from 'react-native-swiper';

const  Welcome =() => {
    const swiperRef = useRef<Swiper>(null);
    const [activeIndex, setActiveIndex] = useState(0)
    const isLastSlide = activeIndex === onboarding.length-1
    return(
        <SafeAreaView className="flex-1 h-full items-center justify-between bg-white">
             <TouchableOpacity 
                onPress={() =>{
                    router.replace("/(auth)/sign-up")
                }}
                className="w-full flex justify-end items-end p-8"
             >
                <Text className="text-black text-md font-JakartaBold">Skip</Text>
            </TouchableOpacity>
            <Swiper
                ref={swiperRef}
                loop={false}
                onIndexChanged={(index) => setActiveIndex(index)}
                dot={<View className="w-[32px] h-[4px] mx-1 bg-[#E2E8F0] rounded-full"/>}
                activeDot={<View className="w-[32px] h-[4px] mx-1 bg-[#2E6B93] rounded-full"/>}
            >
                {onboarding.map((item)=>(
                        <View key={item.id} className="flex items-center justify-center p-5">
                            <Image
                                source={item.image}
                                className="w-full h-[300px]"
                                resizeMode="contain"
                            />
                            <View className="flex flex-row items-center justify-center w-full mt-10">
                                <Text className="text-black text-3xl font-bold text-center">{item.title}</Text>
                            </View>
                            <Text className="text-md font-JakartaSemiBold text-center text-[#858585] mx-10 mt-3">
                                {item.description}
                            </Text>
                        </View>
                ))}
            </Swiper>
            <CustomButton 
                title={isLastSlide ? " Get Started " : "Next"}
                className="w-11/12 mt-10"
                onPress={()=>
                    isLastSlide ? router.replace("/(auth)/sign-up") : swiperRef.current?.scrollBy(1)
                }
            />
        </SafeAreaView>
    )
}
export default Welcome