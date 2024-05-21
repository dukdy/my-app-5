import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, TextInput, Button, TouchableOpacity } from 'react-native';
import axios from 'axios';


export default function Screen1({ navigation }) {

    const [student, setStudent] = useState([])
    const [search, setSearch] = useState('')
    const filteredProduct = student.filter(eachStudent => {
        return eachStudent.name.toLowerCase()
            .includes(search.toLowerCase())
    })
    
    useEffect(() => {
        getStudent()
    }, [])
    const getStudent = async () => {
        try {
          const response = await axios.get('https://664ae5a2a300e8795d4353f1.mockapi.io/students');
          setStudent(response.data);
        } catch (error) {
          console.error(error);
        }
      };
      const searchStudent = async () => {
        try {
          const response = await axios.get(`https://664ae5a2a300e8795d4353f1.mockapi.io/students/`);
          setStudent(response.data);
        } catch (error) {
          console.error(error);
        }
      };
    // const getStudent = () => {
    //     return fetch("https://664ae5a2a300e8795d4353f1.mockapi.io/students")
    //         .then((res) => res.json())
    //         .then((data) => setList(data))
    //         .catch(err => console.log(err))
    // }
    if (!student) return <Text style = {{marginTop: 200, padding: 150, fontSize: 20, fontWeight: 'bold'}}>Loading...</Text>;
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Danh sách ứng viên </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Screen3')}>
                    <Text style={{ fontSize: 25, fontWeight: 'bold' }}>+</Text>
                </TouchableOpacity>

            </View>
            <View style={styles.searchStu}>
                <TextInput style={styles.box}
                           placeholder=' Tìm kiếm...'
                           value={search}
                           onChangeText={(text) => setSearch(text)}
                />
                <Button title='Tìm kiếm' onPress={searchStudent} />
            </View>
            <FlatList
                data={filteredProduct}
                renderItem={({ item }) =>
                    <TouchableOpacity onPress={() => navigation.navigate('Screen2', { id: item.id })}>
                        <View style={styles.item}>
                            
                            <Text style={styles.name}>{item.name}</Text>
                            <Text>{item.code}</Text>
                            <Text>{item.email}</Text>
                        </View>
                    </TouchableOpacity>

                }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    header: {
        flexDirection: 'row',
        textAlign: 'center',
        justifyContent: 'space-between',
        marginTop: 40,
        marginBottom: 20,

    },
    item: {
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBlockColor: 'black'
    },
    name: {
        fontSize: 17,
        fontWeight: 'bold'
    },
    searchStu: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    box: {
        borderWidth: 1,
        width: 280,
        paddingHorizontal: 5,
    },
    btn: {
        color: 'black'
    }
});
