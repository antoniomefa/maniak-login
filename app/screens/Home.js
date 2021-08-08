import React, {useEffect} from 'react';
import {
  SafeAreaView,
  Alert,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';

import {connect} from 'react-redux';
import * as actions from '../redux/actions';
import {service} from '../services/service';
import {deleteToken} from '../services/storage';
import {IMAGES} from '../utils/routes';

import PhoneItem from '../components/PhotoItem';

const Home = props => {
  useEffect(() => {
    (async () => {
      const response = await service('GET', IMAGES);
      if (response) {
        props.setPhotos(response.body);
      } else {
        Alert.alert('Session closed');
        onLogOut();
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onLogOut = () => {
    deleteToken(); // Borra el token antes de cerrar la sesión
    props.setUser({
      token: null,
      isLogged: false,
    });
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.header}>
          <Text style={styles.title}>My Photos</Text>
          <TouchableOpacity
            style={styles.logoutButton}
            onPress={() => onLogOut()}>
            <Text style={styles.logoutText}>Log out</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      {props.fotos && (
        <FlatList
          data={props.fotos}
          renderItem={({item}) => {
            return <PhoneItem props={item} />;
          }}
          keyExtractor={item => item.id}
        />
      )}
    </View>
  );
};

const mapStateToProps = state => state.reducer;
export default connect(mapStateToProps, actions)(Home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginVertical: '8%',
    marginHorizontal: '6%',
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
