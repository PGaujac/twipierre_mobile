import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import {Image} from 'react-native-elements';

export default class Loading extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('App');
    }, 3000);
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Image
            source={require('../../assets/img/TWIPIERRE.png')}
            style={styles.img}
            PlaceholderContent={<ActivityIndicator />}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#141d26',
    paddingVertical: 30,
  },

  splashText: {
    color: 'white',
    fontSize: 50,
    fontFamily: 'IowanOldStyle-Bold',
    letterSpacing: 5,
  },
  img: {
    height: 200,
    width: 200,
  },
});
