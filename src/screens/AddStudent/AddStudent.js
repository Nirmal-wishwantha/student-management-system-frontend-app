import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { TextInput, Button, Title, Card } from 'react-native-paper';
import instance from '../../service/Axios/Axios';

const AddStudent = () => {
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');
  const [contact, setContact] = useState('');

  const AddStudentForm = () => {
    const data = {
      student_name: name,
      student_age: age,
      student_address: address,
      student_contact: contact,
    };

    instance
      .post('/student/save', data)
      .then(() => {
        console.log('Student added');
      })
      .catch((err) => {
        console.log('Failed to add student', err);
      });

    Alert.alert(
      'Student Added Successfully!',
      `Name: ${name}\nAge: ${age}\nAddress: ${address}\nContact: ${contact}`
    );
    setName('');
    setAge('');
    setAddress('');
    setContact('');
  };

  const handleCancel = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.title}>Add Student</Title>

          <TextInput
            label="Name"
            value={name}
            onChangeText={setName}
            mode="outlined"
            style={styles.input}
            theme={{ colors: { primary: '#4CAF50' } }}
          />

          <TextInput
            label="Age"
            value={age}
            onChangeText={setAge}
            mode="outlined"
            keyboardType="numeric"
            style={styles.input}
            theme={{ colors: { primary: '#4CAF50' } }}
          />

          <TextInput
            label="Address"
            value={address}
            onChangeText={setAddress}
            mode="outlined"
            style={styles.input}
            theme={{ colors: { primary: '#4CAF50' } }}
          />

          <TextInput
            label="Contact"
            value={contact}
            onChangeText={setContact}
            mode="outlined"
            keyboardType="phone-pad"
            style={styles.input}
            theme={{ colors: { primary: '#4CAF50' } }}
          />

          <View style={styles.buttonContainer}>
            <Button
              mode="contained"
              onPress={AddStudentForm}
              style={styles.addButton}
              labelStyle={styles.buttonLabel}
              icon="check"
            >
              Add
            </Button>
            <Button
              mode="outlined"
              onPress={handleCancel}
              style={styles.cancelButton}
              labelStyle={styles.buttonLabel}
              icon="close"
            >
              Cancel
            </Button>
          </View>
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f9f9f9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: '90%',
    padding: 16,
    borderRadius: 12,
    elevation: 4,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    marginBottom: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 16,
  },
  addButton: {
    flex: 1,
    marginHorizontal: 8,
    backgroundColor: '#4CAF50',
  },
  cancelButton: {
    flex: 1,
    marginHorizontal: 8,
    borderColor: '#ff5252',
    borderWidth: 1,
  },
  buttonLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AddStudent;
