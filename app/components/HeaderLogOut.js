import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function HeaderLogOut() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Log out</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  title: {
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontStyle: 'normal',
    fontSize: 12,
    lineHeight: 15,
    textTransform: 'uppercase',
    color: '#373A4D',
  },
});
