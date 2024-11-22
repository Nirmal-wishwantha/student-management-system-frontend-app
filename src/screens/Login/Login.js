import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';
import { TextInput, Button, useTheme } from 'react-native-paper';
import instance from '../../service/Axios/Axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {
  const navigation = useNavigation();
  const theme = useTheme();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const LoginPage =() => {
    const data = {
      email: email,
      password: password
    }

    instance.post('/login', data)

    .then(async(res)=>{
      // console.log(res.data.token);
      console.log('login success');
      const token= res.data.token;
     await AsyncStorage.setItem('acpt-student',token);
      
     setTimeout(() => {
      navigation.navigate('BottomTab');
  }, 1000);
      
    })
    .catch((err)=>{
      // console.log(err);
      console.log('login faild ');
      
      
    })
  

      
  };


return (
  <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
    <Text style={styles.title}>Login</Text>

    <TextInput
      label="Email"
      mode="outlined"
      style={styles.input}
      keyboardType="email-address"
      autoCapitalize="none"
      onChangeText={(text) => setEmail(text)}
      
    />

    <TextInput
      label="Password"
      mode="outlined"
      style={styles.input}
      secureTextEntry
      onChangeText={(text) => setPassword(text)}
      
    />

    <Button
      mode="contained"
      style={styles.loginButton}
      labelStyle={styles.loginButtonLabel}
      onPress={LoginPage}
      
    >
      Login
    </Button>

    <View style={styles.registerSection}>
      <Text style={styles.registerText}>Don't have an account?</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.registerLink}> Register here</Text>
      </TouchableOpacity>
    </View>
  </View>
);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#6200ee',
  },
  input: {
    marginBottom: 20,
    fontSize: 16,
  },
  loginButton: {
    marginVertical: 10,
    paddingVertical: 5,
    borderRadius: 5,
    backgroundColor: '#6200ee',
  },
  loginButtonLabel: {
    fontSize: 16,
  },
  registerSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  registerText: {
    fontSize: 14,
    color: '#555',
  },
  registerLink: {
    fontSize: 14,
    color: '#6200ee',
    fontWeight: 'bold',
  },
});

export default Login;
