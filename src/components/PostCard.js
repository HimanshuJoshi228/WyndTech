import {StyleSheet, Text, View, Platform, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../assets/colors';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const PostCard = ({title, body, onPress, bottom = true, user}) => {
  const [like, setLike] = useState(false);
  const [save, setSave] = useState(false);

  return (
    <View style={[styles.card, styles.shadowProp]}>
      <View style={[styles.container, {borderBottomWidth: 1}]}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity style={[styles.profile, styles.shadowProp]}>
            <Entypo name="user" size={25} color={COLORS.skin} />
          </TouchableOpacity>
          <Text style={styles.text}>Instapost_user{user}</Text>
        </View>
        <TouchableOpacity>
          <Entypo name="dots-three-vertical" size={17} color={COLORS.black} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={onPress}
        style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.body}>{body}</Text>
      </TouchableOpacity>
      <View>
        {bottom && (
          <View style={[styles.container, {borderTopWidth: 1}]}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              {like ? (
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => setLike(false)}
                  style={{alignItems: 'center', marginRight: 10}}>
                  <Entypo name="heart" size={25} color={COLORS.red} />
                  <Text style={[styles.text, {marginLeft: 0, marginTop: 5}]}>
                    Like
                  </Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => setLike(true)}
                  style={{alignItems: 'center', marginRight: 10}}>
                  <Entypo
                    name="heart-outlined"
                    size={25}
                    color={COLORS.black}
                  />
                  <Text style={[styles.text, {marginLeft: 0, marginTop: 5}]}>
                    Like
                  </Text>
                </TouchableOpacity>
              )}
              <TouchableOpacity
                onPress={onPress}
                style={{alignItems: 'center', marginRight: 10}}>
                <FontAwesome name="comment-o" size={25} color={COLORS.black} />
                <Text style={[styles.text, {marginLeft: 0, marginTop: 5}]}>
                  Comment
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={{alignItems: 'center'}}>
                <FontAwesome name="send-o" size={25} color={COLORS.black} />
                <Text style={[styles.text, {marginLeft: 0, marginTop: 5}]}>
                  Share
                </Text>
              </TouchableOpacity>
            </View>
            {save ? (
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => setSave(false)}>
                <FontAwesome name="bookmark" size={25} color={COLORS.blue} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => setSave(true)}>
                <FontAwesome name="bookmark-o" size={25} color={COLORS.black} />
              </TouchableOpacity>
            )}
          </View>
        )}
      </View>
    </View>
  );
};

export default PostCard;

const styles = StyleSheet.create({
  card: {
    marginVertical: 20,
    borderRadius: 10,
    backgroundColor: COLORS.white,
  },
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 7,
    justifyContent: 'space-between',
    backgroundColor: COLORS.white,
    borderRadius: 10,
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
  text: {
    marginLeft: 20,
    color: COLORS.black2,
    fontSize: 12,
    fontWeight: '400',
  },
  textContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  title: {
    color: COLORS.text1,
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
    textTransform: 'capitalize',
  },
  body: {
    color: COLORS.text2,
    fontSize: 14,
    fontWeight: '400',
  },
});
