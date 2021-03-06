import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {connect} from 'react-redux';
import * as actions from '../redux/actions';
import {service} from '../services/service';
import {getToken} from '../services/storage';
import {LOGIN} from '../utils/routes';
import {validateEmail} from '../utils/validation';

const Login = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    (async () => {
      // Valida si existe un token guardado para reanudar la sesión
      const currentToken = await getToken();
      if (currentToken) {
        props.setUser({
          token: currentToken,
          isLogged: true,
        });
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Enter email and password');
    } else if (!validateEmail(email)) {
      Alert.alert('Wrong email format');
    } else {
      onLogin();
    }
  };

  async function onLogin() {
    const payload = {
      username: email,
      password,
    };
    const response = await service('POST', LOGIN, payload, true);
    if (response) {
      props.setUser({
        token: response.body.token,
        isLogged: true,
      });
    } else {
      Alert.alert('Incorrect username or password');
    }
  }

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Log In</Text>
          <Text style={styles.legend}>Welcome back</Text>
        </View>

        <View style={styles.form}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => setEmail(text)}
            value={email}
            autoCompleteType="email"
            textContentType="emailAddress"
            keyboardType="email-address"
            placeholder="email"
            placeholderTextColor="#8F92A9"
            selectionColor="#373A4D"
            color="#373A4D"
          />

          <Text style={styles.label}>Password</Text>
          <View style={styles.rowPassword}>
            <TextInput
              style={styles.inputPassword}
              onChangeText={text => setPassword(text)}
              value={password}
              autoCompleteType="password"
              textContentType="password"
              placeholder="password"
              secureTextEntry={!showPassword}
              placeholderTextColor="#8F92A9"
              selectionColor="#373A4D"
              color="#373A4D"
            />
            <Icon.Button
              style={styles.iconButtonPassword}
              name={showPassword ? 'eye' : 'eye-slash'}
              size={24}
              borderRadius={2}
              backgroundColor="#F5F5FA"
              color="#373A4D"
              onPress={() => setShowPassword(!showPassword)}
            />
          </View>

          <Text style={[styles.legend, {alignSelf: 'flex-end'}]}>
            Forgot Password
          </Text>

          <TouchableOpacity style={styles.button} onPress={() => handleLogin()}>
            <Text style={styles.buttonText}>LOG IN</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerLabel}>Don't have an account?</Text>
          <Text style={styles.footerBoldLabel}>Sign up here</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = state => state.reducer.usuario;
export default connect(mapStateToProps, actions)(Login);

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: '6%',
    backgroundColor: '#FFFF',
  },
  header: {
    marginTop: '30%',
  },
  title: {
    fontFamily: 'System',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 28,
    lineHeight: 33,
    color: '#373A4D',
  },
  legend: {
    fontFamily: 'System',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 16,
    color: '#373A4D',
  },
  form: {},
  label: {
    fontFamily: 'System',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 12,
    lineHeight: 14,
    letterSpacing: 1,
    textTransform: 'uppercase',
    marginBottom: '2%',
    color: '#373A4D',
  },
  input: {
    borderRadius: 2,
    height: 48,
    paddingHorizontal: 24,
    marginBottom: '6%',
    backgroundColor: '#F5F5FA',
  },
  rowPassword: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 48,
    borderRadius: 2,
    marginBottom: '2%',
    backgroundColor: '#F5F5FA',
  },
  inputPassword: {
    width: '84%',
    height: 48,
    paddingHorizontal: 24,
  },
  iconButtonPassword: {
    height: 48,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,
    borderRadius: 2,
    marginVertical: '8%',
    backgroundColor: '#373A4D',
  },
  buttonText: {
    fontFamily: 'System',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 17,
    letterSpacing: 2,
    textTransform: 'uppercase',
    color: '#FFFFFF',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: '16%',
  },
  footerLabel: {
    fontFamily: 'System',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 18.75,
    color: '#373A4D',
  },
  footerBoldLabel: {
    fontFamily: 'System',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 18.75,
    marginLeft: '2%',
    color: '#373A4D',
  },
});
