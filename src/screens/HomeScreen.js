import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {COLORS} from '../assets/colors';
import Header from '../components/Header';
import PostCard from '../components/PostCard';

const HomeScreen = ({navigation, route}) => {
  const data = route?.params?.data;

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Header />
      <ScrollView
        overScrollMode="never"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}>
        {data.map((item, key) => {
          return (
            <View key={key}>
              <PostCard
                onPress={() => {
                  navigation.navigate('PostScreen', {post: data[key]});
                }}
                user={item?.userId}
                title={item?.title}
                body={item?.body}
              />
            </View>
          );
        })}
      </ScrollView>

      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: COLORS.background2,
  },
  scrollView: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingBottom: '10%',
  },
});
