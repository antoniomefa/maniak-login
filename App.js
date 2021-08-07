import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import Login from './app/screens/Login';
import Home from './app/screens/MyPhotos';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        {/* <Login /> */}
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
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default App;
