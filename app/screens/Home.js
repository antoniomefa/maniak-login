import React from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';

export default function Home() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>My Photos</Text>
          <Text style={styles.logout}>Log out</Text>
        </View>

        {/* <View style={styles.list}>
          {

          }
        </View> */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
  },
  header: {
    margin: '8%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'System',
    fontWeight: '400',
    fontStyle: 'normal',
    fontSize: 28,
    lineHeight: 33,
    color: '#373A4D',
  },
  logout: {
    fontFamily: 'System',
    fontWeight: '400',
    fontStyle: 'normal',
    fontSize: 12,
    lineHeight: 15,
    textTransform: 'uppercase',
    color: '#373A4D',
  },
});
