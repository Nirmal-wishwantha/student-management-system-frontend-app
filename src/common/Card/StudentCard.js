import React, { useState } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { Card, Title, Paragraph, Button, Dialog, Portal, Text } from 'react-native-paper';

export default function StudentCard({ name, age, Address, Contact, no, id, onDelete, onUpdate, studentId }) {
  const [visible, setVisible] = useState(false);
  const [formData, setFormData] = useState({
    name,
    age,
    address: Address,
    contact: Contact,
  });

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  const handleInputChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleUpdate = () => {
    onUpdate(id, formData);
    hideDialog();
  };

  return (
    <View style={styles.cardContainer}>
      <Card style={styles.card}>
        <Card.Content>
          <View style={styles.header}>
            <Title style={styles.title}>Student Details</Title>
          </View>
          <View style={styles.infoContainer}>
            <Paragraph style={styles.text}>
              <Text style={styles.label}>No: </Text> {no}
            </Paragraph>
            <Paragraph style={styles.text}>
              <Text style={styles.label}>Student ID: </Text> {studentId}
            </Paragraph>
            <Paragraph style={styles.text}>
              <Text style={styles.label}>Name: </Text> {name}
            </Paragraph>
            <Paragraph style={styles.text}>
              <Text style={styles.label}>Age: </Text> {age}
            </Paragraph>
            <Paragraph style={styles.text}>
              <Text style={styles.label}>Address: </Text> {Address}
            </Paragraph>
            <Paragraph style={styles.text}>
              <Text style={styles.label}>Contact: </Text> {Contact}
            </Paragraph>
          </View>

          <View style={styles.btnContainer}>
            <Button
              mode="contained"
              icon="update"
              onPress={showDialog}
              buttonColor="#4CAF50"
              textColor="#ffffff"
              style={styles.button}
              labelStyle={styles.label}
            >
              Update
            </Button>
            <Button
              mode="contained"
              icon="delete"
              onPress={onDelete}
              buttonColor="#ff5252"
              textColor="#ffffff"
              style={styles.button}
              labelStyle={styles.label}
            >
              Delete
            </Button>
          </View>
        </Card.Content>
      </Card>

      {/* Update Dialog */}
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>Update Student</Dialog.Title>
          <Dialog.Content>
            <TextInput
              style={styles.input}
              placeholder="Name"
              value={formData.name}
              onChangeText={(text) => handleInputChange('name', text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Age"
              value={formData.age.toString()}
              keyboardType="numeric"
              onChangeText={(text) => handleInputChange('age', text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Address"
              value={formData.address}
              onChangeText={(text) => handleInputChange('address', text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Contact"
              value={formData.contact}
              keyboardType="phone-pad"
              onChangeText={(text) => handleInputChange('contact', text)}
            />
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={hideDialog}>Close</Button>
            <Button onPress={handleUpdate}>OK</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    margin: 10,
    alignItems: 'center',
  },
  card: {
    width: '90%',
    borderRadius: 16,
    elevation: 5,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
  },
  header: {
    backgroundColor: '#6200ee',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingVertical: 10,
  },
  title: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  infoContainer: {
    marginVertical: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 4,
  },
  label: {
    fontWeight: 'bold',
    color: '#6200ee',
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  button: {
    borderRadius: 20,
    width: '48%',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#f9f9f9',
  },
});
