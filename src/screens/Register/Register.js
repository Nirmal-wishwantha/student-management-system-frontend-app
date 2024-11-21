import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { TextInput, Button, useTheme } from 'react-native-paper';

const RegisterPage = () => {
    const navigation = useNavigation();
    const theme = useTheme();

    
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

   


    return (
        <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
            <Text style={styles.title}>Create Account</Text>
            <Text style={styles.subtitle}>Sign up to get started</Text>

            <TextInput
                label="Username"
                mode="outlined"
                style={styles.input}
            />

            <TextInput
                label="Email"
                mode="outlined"
                style={styles.input}
                keyboardType="email-address"
                autoCapitalize="none"
            />

            <TextInput
                label="Password"
                mode="outlined"
                style={styles.input}
                secureTextEntry
            />

            <TextInput
                label="Confirm Password"
                mode="outlined"
                style={styles.input}
                secureTextEntry
            />

            <Button
                mode="contained"
                style={styles.registerButton}
                labelStyle={styles.registerButtonLabel}
            >
                Register
            </Button>

            <View style={styles.loginSection}>
                <Text style={styles.loginText}>Already have an account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.loginLink}> Login here</Text>
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
    subtitle: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 30,
        color: '#555',
    },
    input: {
        marginBottom: 20,
        fontSize: 16,
    },
    registerButton: {
        marginVertical: 10,
        paddingVertical: 5,
        borderRadius: 5,
        backgroundColor: '#6200ee',
    },
    registerButtonLabel: {
        fontSize: 16,
    },
    loginSection: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    loginText: {
        fontSize: 14,
        color: '#555',
    },
    loginLink: {
        fontSize: 14,
        color: '#6200ee',
        fontWeight: 'bold',
    },
});

export default RegisterPage;
