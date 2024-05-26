
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import Mirta from './Home';
import Home from './Home';

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState('');
const navigation = useNavigation()
  const addTodo = () => {
    if (todoText.trim() !== '') {
      setTodos([...todos, todoText]);
      setTodoText('');
    }
  };

  const removeTodo = (index) => {
    Alert.alert(
      'Delete Todo',
      'Are you sure you want to delete this todo?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: () => {
            const newTodos = [...todos];
            newTodos.splice(index, 1);
            setTodos(newTodos);
          },
        },
      ],
      { cancelable: false }
    );
  };

  const editTodo = (index) => {
    setEditIndex(index);
    setEditText(todos[index]);
  };

  const saveEdit = () => {
    if (editText.trim() !== '') {
      const newTodos = [...todos];
      newTodos[editIndex] = editText;
      setTodos(newTodos);
      setEditIndex(null);
      setEditText('');
    }
  };
const gotomirta  = () => {
  navigation.navigate(Home)
}
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo List <TouchableOpacity style={styles.addButton} onPress={gotomirta}>
          <Text style={styles.addButtonText}>go to mirta</Text>
        </TouchableOpacity></Text>
      <ScrollView style={styles.scrollView}>
        {todos.map((todo, index) => (
          <View key={index} style={styles.todoContainer}>
            {editIndex === index ? (
              <TextInput
                style={styles.editInput}
                value={editText}
                onChangeText={setEditText}
                autoFocus
                onBlur={saveEdit}
              />
            ) : (
              <TouchableOpacity onPress={() => editTodo(index)}>
                <Text style={styles.todo}>{todo}</Text>
              </TouchableOpacity>
            )}
            <TouchableOpacity style={styles.deleteButton} onPress={() => removeTodo(index)}>
              <Text style={styles.deleteButtonText}>Delete</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add a todo..."
          value={todoText}
          onChangeText={setTodoText}
        />
        <TouchableOpacity style={styles.addButton} onPress={addTodo}>
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  scrollView: {
    marginBottom: 20,
    maxHeight: '60%',
    width: '80%',
  },
  todoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 10,
  },
  todo: {
    fontSize: 18,
    flex: 1,
   
  },
  editInput: {
    fontSize: 18,
    flex: 1,
  },
  deleteButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: 'white',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  addButton: {
    marginLeft: 10,
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

