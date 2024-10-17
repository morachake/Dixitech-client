import React from 'react';
import { StyleSheet, Image, Platform, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
const  Notifications = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Notifications</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});

export default Notifications