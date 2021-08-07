import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

import Login from '../screens/Login';
import Home from '../screens/Home';

const Tab = createBottomTabNavigator();

const Navigation = props => {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        {props.isLogged ? (
          <Tab.Navigator
            screenOptions={{
              headerShown: false,
            }}>
            <Tab.Screen
              name="Home"
              component={Home}
              options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({color, size}) => (
                  <Icon name="home" color={color} size={size} />
                ),
              }}
            />
          </Tab.Navigator>
        ) : (
          <Login />
        )}
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

const mapStateToProps = state => state.reducer.usuario;

export default connect(mapStateToProps, {})(Navigation);
