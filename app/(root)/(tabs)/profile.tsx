import CustomButton from '@/components/customButton';
import { icons } from '@/constants';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, Platform, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Profile = () => {
  return (
    <SafeAreaView className="flex-1 bg-secondary-200">
      <StatusBar style='auto' />
      
      {/* Header */}
      <View className="bg-primary-500 w-full h-[200px] items-center justify-center">
        <View className="bg-white rounded-full p-2 shadow-lg">
          <Image 
            source={icons.person}
            className="w-24 h-24 rounded-full"
          />
        </View>
        <Text className="text-white font-JakartaSemiBold mt-4 text-xl">Salim Swaleh</Text>
      </View>
      
      {/* Info Section */}
      <View className="mt-6 mx-4 p-4 bg-white rounded-lg shadow-md space-y-5">
        <View className="border-b border-gray-200 pb-4 mb-4">
          <Text className="text-black text-sm font-JakartaBold">Email : </Text>
          <Text className="text-gray-900 font-JakartaSemiBold mt-1">user@gmail.com</Text>
        </View>
        
        <View className="border-b border-gray-200 pb-4 mb-4">
          <Text className="text-black text-sm font-JakartaBold">Phone : </Text>
          <Text className="text-gray-900 font-JakartaSemiBold mt-1">+2547912345678</Text>
        </View>
        
        <View>
          <Text className="text-black text-sm font-JakartaBold">Location :</Text>
          <Text className="text-gray-900 font-JakartaSemiBold mt-1">Nairobi, Kenya</Text>
        </View>
        <View>
          <CustomButton
            title='LogOut'
          />
        </View>
       
      </View>
      
    </SafeAreaView>
  );
};

export default Profile;
