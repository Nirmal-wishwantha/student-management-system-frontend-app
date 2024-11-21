import { View, StyleSheet } from 'react-native';
import React, { useState, useCallback } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { useFocusEffect } from '@react-navigation/native'; // Import useFocusEffect
import StudentCard from '../../common/Card/StudentCard';
import instance from '../../service/Axios/Axios';

export default function Home() {
  const [student, setStudent] = useState([]);
  const [loading, setLoading] = useState(false); // To track loading state

  const lordStudent = () => {
    setLoading(true); // Start loading
    instance
      .get('/student/getAll')
      .then((res) => {
        setStudent(res.data);
      })
      .catch((err) => {
        console.error('Error fetching students:', err.response || err);
      })
      .finally(() => {
        setLoading(false); // End loading
      });
  };

  const deleteStudent = (id) => {
    instance
      .delete(`/student/delete/${id}`)
      .then((res) => {
        lordStudent();
        console.log('Delete success');
      })
      .catch((err) => {
        console.log(err);
        console.log('Delete failed');
      });
  };

  const updateStudent = (id, updatedData) => {
    instance
      .put(`/student/update/${id}`, updatedData)
      .then((res) => {
        console.log('Update success');
        lordStudent();
      })
      .catch((err) => {
        console.log('Update failed');
      });
  };

  
  useFocusEffect(
    useCallback(() => {
      lordStudent();
    }, [])
  );

  return (
    <View style={styles.container}>
      <ScrollView>
        {student.map((val, index) => (
          <StudentCard
            key={index}
            no={index + 1}
            studentId={val.id}
            name={val.student_name}
            age={val.student_age}
            Address={val.student_address}
            Contact={val.student_contact}
            id={val.user_id}
            onDelete={() => deleteStudent(val.id)}
            onUpdate={(id, formData) => updateStudent(id, formData)}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
});
