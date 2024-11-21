import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Using Material Icons
import Home from '../../screens/Home/Home';
import ViewStudent from '../../screens/ViewStudent/Account';
import Account from '../../screens/ViewStudent/Account';
import AddStudent from '../../screens/AddStudent/AddStudent';

const Tab = createBottomTabNavigator();

export default function BottomTab() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = 'home';
                    } else if (route.name === 'Add Student') {
                        iconName = 'person-add';
                    } else if (route.name === 'Account') {
                        iconName = 'person';
                    }

                    const iconSize = focused ? 28 : 24;

                    return <Icon name={iconName} size={iconSize} color={color} />;
                },
                tabBarActiveTintColor: '#6200ee',
                tabBarInactiveTintColor: 'gray', 
                tabBarLabelStyle: {
                    fontSize: 14,
                    fontWeight: '600',
                },
                tabBarStyle: {
                    backgroundColor: '#f8f9fa', 
                    borderTopWidth: 0,
                    elevation: 10,
                },


                headerStyle: {
                    backgroundColor: '#6200ee',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: 18,
                },
                headerTitleAlign: 'center',
                
            })}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    headerTitle: 'Student Dashboard',
                }}
            />
            <Tab.Screen
                name="Add Student"
                component={AddStudent}
                options={{
                    headerTitle: 'Add New Student', // Custom title
                }}
            />
            <Tab.Screen
                name="Account"
                component={Account}
                options={{
                    headerTitle: 'Your Profile',
                }}
            />
        </Tab.Navigator>
    );
}
