import React, {useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';

import {connect} from 'react-redux';
import * as actions from '../redux/actions';

const Home = props => {
  // useEffect(() => {
  //   async () => {

  //   }
  // }, [])

  const onLogOut = () => {
    props.setUser({
      token: null,
      isLogged: false,
    });
  };

  console.log(props);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>My Photos</Text>
          <TouchableOpacity
            style={styles.logoutButton}
            onPress={() => onLogOut()}>
            <Text style={styles.logout}>Log out</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.list} />
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = state => state.reducer;
export default connect(mapStateToProps, actions)(Home);

const styles = StyleSheet.create({
  container: {
    //flex: 1,
  },
  header: {
    margin: '8%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: 'System',
    fontWeight: '400',
    fontStyle: 'normal',
    fontSize: 28,
    lineHeight: 33,
    color: '#373A4D',
  },
  logoutButton: {
    justifyContent: 'center',
    height: 33,
  },
  logoutText: {
    fontFamily: 'System',
    fontWeight: '400',
    fontStyle: 'normal',
    fontSize: 12,
    lineHeight: 15,
    textTransform: 'uppercase',
    color: '#373A4D',
  },
});
