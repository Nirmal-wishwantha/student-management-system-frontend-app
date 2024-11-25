import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Login from './src/screens/Login/Login';
import Home from './src/screens/Home/Home';
import BottomTab from './src/common/BottomTab/BottomTab';
import Register from './src/screens/Register/Register';

const Stack = createStackNavigator();

function App() {
  const [login, setLogin] = useState(false);

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const token = await AsyncStorage.getItem('acpt-student');
        if (token) {
          setLogin(true);
        }
      } catch (error) {
        console.error('Error reading token from AsyncStorage', error);
      }
    };

    checkLoginStatus();
  }, []);

  return (
    <NavigationContainer>
       <Stack.Navigator>
                {!login && (
                    <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                )}

                <Stack.Screen name="BottomTab" component={BottomTab} options={{ headerShown: false }} />
                <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
            </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
