import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export default function PhoneItem({props}) {
  return (
    <>
      <View style={styles.separator} />
      <View style={styles.card}>
        <Image
          style={styles.preview}
          source={{
            uri: props.image,
          }}
        />
        <View style={styles.side}>
          <Text style={styles.title}>{props.title}</Text>
          <Text
            style={styles.description}
            numberOfLines={1}
            ellipsizeMode="tail">
            {props.description}
          </Text>
        </View>
      </View>
      <View style={styles.separator} />
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    paddingHorizontal: '2%',
    paddingVertical: '2%',
    backgroundColor: '#E5E5E5',
  },
  preview: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  side: {
    width: '80%',
    justifyContent: 'center',
    marginHorizontal: '2%',
  },
  title: {
    fontFamily: 'System',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19,
    paddingVertical: '1%',
    color: '#373A4D',
  },
  description: {
    fontFamily: 'System',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 16,
    paddingVertical: '1%',
    color: '#8F92A9',
  },
  separator: {
    height: 1,
    backgroundColor: '#ECEDF2',
  },
});
