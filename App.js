import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import Login from './app/screens/Login';
import MyPhotos from './app/screens/MyPhotos';
import HeaderTitle from './app/components/HeaderTitle';
import HeaderLogOut from './app/components/HeaderLogOut';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <Login />
        {/* <Tab.Navigator>
          <Tab.Screen
            name="My Photos"
            component={MyPhotos}
            options={{
              tabBarLabel: 'Home',
              headerTitle: '',
              headerLeft: props => <HeaderTitle {...props} />,
              headerRight: props => <HeaderLogOut {...props} />,
              tabBarIcon: ({color, size}) => (
                <Icon name="home" color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator> */}
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default App;
