import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {COLORS} from '../assets/colors';

const Header = ({logo = true, navigation}) => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        {logo ? (
          <Image
            source={require('../assets/img/wind.png')}
            style={styles.img}
          />
        ) : (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              navigation.goBack();
            }}
            style={[styles.backBtn, styles.shadowProp]}>
            <Ionicons name="ios-chevron-back" size={30} color={COLORS.blue} />
          </TouchableOpacity>
        )}
        <Text style={styles.text}>Instapost</Text>
      </View>
      <TouchableOpacity>
        <Fontisto name="messenger" size={30} color={COLORS.lightBlue} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    justifyContent: 'space-between',
    backgroundColor: COLORS.white,
  },
  img: {
    width: 45,
    height: 45,
  },
  backBtn: {
    backgroundColor: COLORS.background,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  shadowProp: {
    backgroundColor: COLORS.white,
    ...Platform.select({
      android: {
        elevation: 10,
        shadowOpacity: 1,
        shadowColor: COLORS.shadowProps,
      },
      ios: {
        shadowColor: COLORS.shadowProps,
        shadowOffset: {width: 3, height: 5},
        shadowOpacity: 0.8,
        shadowRadius: 12,
      },
    }),
  },
  text: {
    marginLeft: 20,
    color: COLORS.date,
    fontSize: 17,
    fontWeight: '600',
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
});
