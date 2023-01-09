import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform,
  ActivityIndicator,
  TextInput,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Header from '../components/Header';
import PostCard from '../components/PostCard';
import {COLORS} from '../assets/colors';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const PostScreen = ({navigation, route}) => {
  const post = route?.params?.post;
  const [commentData, setCommentData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/posts/${post?.id}/comments`)
      .then(response => response.json())
      .then(response => {
        setCommentData(response);
        setIsLoading(false);
      })
      .catch(error => {
        console.error(error);
        setIsLoading(false);
      });
  }, [post?.id]);

  const CommentCard = ({item}) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          paddingVertical: 15,
          borderBottomWidth: 1,
        }}>
        <TouchableOpacity style={[styles.profile, styles.shadowProp]}>
          <Entypo name="user" size={25} color={COLORS.skin} />
        </TouchableOpacity>
        <View style={{marginLeft: 15, width: '80%'}}>
          <Text style={styles.name}>{item?.name}</Text>
          <Text style={styles.email}>{item?.email}</Text>
          <Text style={styles.comment}>{item?.body}</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Header logo={false} navigation={navigation} />
      <ScrollView
        overScrollMode="never"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}>
        <PostCard bottom={false} title={post?.title} body={post?.body} />
        <View>
          {isLoading ? (
            <View style={{marginTop: '30%'}}>
              <ActivityIndicator size={40} color={COLORS.signInBtn} />
            </View>
          ) : (
            <>
              <Text style={styles.heading}>Comments</Text>
              {commentData?.map((item, key) => {
                return (
                  <View key={key}>
                    <CommentCard item={item} />
                  </View>
                );
              })}
            </>
          )}
        </View>
      </ScrollView>

      {/* currently static will update it later */}

      <View style={styles.inputTextbg}>
        <TextInput
          placeholder="Comment"
          style={{width: '90%', color: COLORS.black2, fontSize: 14}}
        />
        <TouchableOpacity>
          <FontAwesome name="send-o" size={25} color={COLORS.black} />
        </TouchableOpacity>
      </View>

      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
    </SafeAreaView>
  );
};

export default PostScreen;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: COLORS.background2,
  },
  scrollView: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingBottom: '20%',
  },
  heading: {
    color: COLORS.black2,
    fontSize: 17,
    fontWeight: '600',
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  profile: {
    backgroundColor: COLORS.lightBlue,
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: COLORS.red,
    marginTop: 13,
  },
  shadowProp: {
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
  name: {
    color: COLORS.black,
    fontSize: 13,
    fontWeight: '500',
    textTransform: 'capitalize',
  },
  email: {
    color: COLORS.placeholder,
    fontSize: 10,
    fontWeight: '500',
  },
  comment: {
    color: COLORS.text2,
    fontSize: 13,
    fontWeight: '500',
  },
  inputTextbg: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.skin,
    position: 'absolute',
    bottom: 0,
    width: '90%',
    marginBottom: 20,
    marginHorizontal: 20,
    borderRadius: 50,
    paddingHorizontal: 20,
  },
});
