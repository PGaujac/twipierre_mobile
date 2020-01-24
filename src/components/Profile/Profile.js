import React, {useState} from 'react';
import {View, SafeAreaView, Text} from 'react-native';

export default function Profile() {
  return (
    <SafeAreaView>
      <View>
        <Text>Welcome {props.navigation.getParam('myUser')}</Text>
      </View>
    </SafeAreaView>
  );
}
