import React from 'react';
import { Image, View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '@/constants';
import { StatusBar } from 'expo-status-bar';

const ServiceCard = ({ image, title }) => (
  <View className="w-[45%] bg-primary-500 rounded-lg shadow-md mb-4 overflow-hidden">
    <Image 
      source={image} 
      className="w-full h-[100px] object-cover"
    />
    <View className="p-2">
      <Text className="text-center font-semibold text-gray-800">{title}</Text>
    </View>
  </View>
);

const Home = () => {
  const services = [
    { title: 'Plumber', image: images.plumber },
    { title: 'Carpenter', image: images.capenter },
    { title: 'Electrician', image: images.electrician },
    { title: 'Welder', image: images.welder },
    { title: 'Painter', image: images.painter },
    { title: 'Other', image: images.welding },
  ];

  return (
    <SafeAreaView className="flex-1 bg-secondary-200 ">
      <StatusBar style='dark' />
      <ScrollView className="flex-1">
        <View className="relative w-full h-[250px] bg-primary-500">
          <View className="absolute inset-0 bg-primary-500/50 backdrop-blur-lg" />
          <Image 
            source={images.capenter}
            className="absolute z-0 w-full h-[250px] object-cover"
          />
          <Text className="text-2xl text-white font-semibold absolute bottom-5 left-5 z-10">
            Welcome 👋
          </Text>
        </View>
        
        <View className="p-4 bg-secondary-200">
          <Text className="text-xl font-semibold mb-4">Our Services</Text>
          <View className="flex-row flex-wrap justify-between">
            {services.map((service, index) => (
              <ServiceCard key={index} image={service.image} title={service.title} />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;