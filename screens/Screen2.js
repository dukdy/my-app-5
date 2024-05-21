import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity } from 'react-native';
import axios from 'axios';


export default function Screen2({ route, navigation }) {


    const { id } = route.params;
    const [candidate, setCandidate] = useState(null);

    useEffect(() => {
        loadCandidate();
    }, []);

    const loadCandidate = async () => {
        try {
            const response = await axios.get(`https://664ae5a2a300e8795d4353f1.mockapi.io/students/${id}`);
            setCandidate(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const deleteCandidate = async () => {
        Alert.alert('Xác nhận', 'Bạn có chắc chắn muốn xóa ứng viên này?', [
            { text: 'Không' },
            {
                text: 'Có', onPress: async () => {
                    try {
                        await axios.delete(`https://664ae5a2a300e8795d4353f1.mockapi.io/students/${id}`);
                        navigation.navigate('Screen1');
                    } catch (error) {
                        console.error(error);
                    }
                }
            }
        ]);
    };

    if (!candidate) return <Text style = {{marginTop: 200, padding: 150, fontSize: 20, fontWeight: 'bold'}}>Loading...</Text>;

    return (

        <>
            <View style={styles.header}>
                <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Thông tin chi tiết ứng viên</Text>
            </View>
            <View style={styles.container}>
                <View style={{ marginVertical: 10 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Tên ứng viên: </Text>
                    <View style={styles.details}>
                        <Text>{candidate.name}</Text>
                    </View>
                </View>
                <View style={{ marginVertical: 10 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Tên ứng viên: </Text>
                    <View style={styles.details}>
                        <Text>{candidate.name}</Text>
                    </View>
                </View>
                <View style={{ marginVertical: 10 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Kinh nghiệm: </Text>
                    <View style={{ borderBottomWidth: 1, borderBlockColor: 'black', height: 80, marginTop: 5 }}>
                        <Text>{candidate.describe}</Text>
                    </View>
                </View>
                <View style={{ marginVertical: 10 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Email: </Text>
                    <View style={styles.details}>
                        <Text>{candidate.email}</Text>
                    </View>
                </View>
                <View style={{ marginVertical: 10 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Địa chỉ: </Text>
                    <View style={styles.details}>
                        <Text>{candidate.address}</Text>
                    </View>
                </View>
                {/* <TouchableOpacity onPress={deleteCandidate}>
                    <View style = {{borderWidth: 1, width: 85}}>
                        <Text style = {{alignItems:'center', justifyContent: 'center'}}>Xoá ứng viên</Text>
                    </View>
                </TouchableOpacity> */}
                <Button title="Xóa ứng viên" onPress={deleteCandidate} />
            </View>
        </>




    );
};





const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,

    },
    header: {
        marginTop: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    details: {
        borderBottomWidth: 1,
        borderBlockColor: 'black',
        height: 30,
        marginTop: 5
    }
})

