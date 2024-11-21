import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { Button, List, Dialog, Portal, Provider, Divider } from 'react-native-paper';
import instance from '../../service/Axios/Axios';

export default function Account() {
  const [visible, setVisible] = useState(false);
  const navigation = useNavigation(); // Use navigation hook

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  const logout = async () => {
    try {
      await instance.get('/logout'); // Call API to log out
      await AsyncStorage.removeItem('acpt-student'); // Remove token from storage
     
            navigation.replace('Login'); // Navigate to login page
         
    } catch (error) {
      console.error('Failed to log out', error);
      Alert.alert('Error', 'Failed to log out. Please try again.');
    }
  };

  return (
    <Provider>
      <View style={styles.container}>
        <Text style={styles.title}>Account Settings</Text>

        <View style={styles.listContainer}>
          <List.Item
            title="Profile"
            description="View and edit your profile"
            left={(props) => <List.Icon {...props} icon="account-circle" />}
            style={styles.listItem}
          />
          <Divider style={styles.divider} />
          <List.Item
            title="Log Out"
            description="Click here to log out"
            left={(props) => <List.Icon {...props} icon="logout" />}
            onPress={showDialog}
            style={styles.listItem}
          />
        </View>

        <Portal>
          <Dialog visible={visible} onDismiss={hideDialog} style={styles.dialog}>
            <Dialog.Title style={styles.dialogTitle}>Confirm Log Out</Dialog.Title>
            <Dialog.Content>
              <Text style={styles.dialogText}>Are you sure you want to log out?</Text>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={hideDialog} mode="outlined" style={styles.dialogButton}>
                Cancel
              </Button>
              <Button onPress={logout} mode="contained" style={styles.dialogButton}>
                OK
              </Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 20,
    textAlign: 'center',
  },
  listContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    elevation: 4,
    padding: 8,
  },
  listItem: {
    paddingVertical: 8,
  },
  divider: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginVertical: 8,
  },
  dialog: {
    borderRadius: 12,
  },
  dialogTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  dialogText: {
    fontSize: 16,
    color: '#555',
  },
  dialogButton: {
    marginHorizontal: 8,
  },
});
