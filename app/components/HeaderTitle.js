import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function HeaderTitle() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Photos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 20,
    height: 50,
  },
  title: {
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontStyle: 'normal',
    fontSize: 28,
    lineHeight: 33,
    color: '#373A4D',
  },
});
