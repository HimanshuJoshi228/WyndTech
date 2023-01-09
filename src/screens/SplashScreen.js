import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {COLORS} from '../assets/colors';

const SplashScreen = ({navigation}) => {
  const timeoutHelper = action => {
    const timer = setTimeout(() => {
      action();
    }, 100);
    return () => clearTimeout(timer);
  };

  useEffect(() => {
    timeoutHelper(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(response => {
          navigation.replace('HomeScreen', {data: response});
        })
        .catch(error => {
          console.error(error);
        });
    });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <Image
          source={require('../assets/img/wind.png')}
          resizeMode={'contain'}
          style={styles.image}
        />
        <Text style={styles.text}>
          Wynd Technologies{'\n'}helps you and{'\n'}grow your StartUp
        </Text>
      </View>

      <StatusBar backgroundColor={COLORS.black} barStyle="default" />
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 150,
  },
  text: {
    fontSize: 20,
    color: COLORS.white,
    marginTop: 25,
    fontWeight: '700',
    letterSpacing: 4,
    textAlign: 'center',
    lineHeight: 40,
  },
});
