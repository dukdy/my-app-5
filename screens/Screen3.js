import React, { useState } from 'react';
import { View, TextInput, Button, Alert, Text, StyleSheet } from 'react-native';
import axios from 'axios';

export default function Screen3({ navigation }) {
    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [email, setEmail] = useState('');
    const [describe, setDescribe] = useState('');
    const [address, setAddress] = useState('');

    const validateInputs = () => {
        if (name.length < 10) return 'Tên ứng viên phải tối thiểu 10 ký tự';
        if (id.length < 8) return 'Mã số ứng viên tối thiểu 8 ký tự';
        if (!email.includes('@')) return 'Email phải có ký tự @';
        if (describe === '') return 'Mô tả kinh nghiệm không được bỏ trống';
        return null;
    };

    const saveCandidate = async () => {
        const validationError = validateInputs();
        if (validationError) {
            Alert.alert('Lỗi', validationError);
            return;
        }
        try {
            await axios.post('https://664ae5a2a300e8795d4353f1.mockapi.io/students', {
                name,
                id,
                email,
                describe,
                address,
            });
            Alert.alert('Thành công', 'Ứng viên đã được thêm', [
                { text: 'OK', onPress: () => navigation.navigate('Screen1') },
            ]);
        } catch (error) {
            console.error(error);
        }
    };

    const confirmCancel = () => {
        Alert.alert('Xác nhận', 'Bạn có chắc chắn muốn hủy bỏ thêm mới?', [
            { text: 'Không' },
            { text: 'Có', onPress: () => navigation.navigate('Screen1') },
        ]);
    };

    return (
        <View style={{ padding: 10, flex: 1 }}>
            <View style={styles.header}>
                <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Thêm ứng viên</Text>
            </View>
            <Text style={{ fontSize: 17, fontWeight: 'bold' }}>Tên ứng viên</Text>
            <TextInput
                placeholder="Tên ứng viên"
                value={name}
                onChangeText={setName}
                style={{ borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 5 }}
            />
            <Text style={{ fontSize: 17, fontWeight: 'bold' }}>Mã số ứng viên</Text>
            <TextInput
                placeholder="Mã số ứng viên"
                value={id}
                onChangeText={setId}
                style={{ borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 5 }}
            />
            <Text style={{ fontSize: 17, fontWeight: 'bold' }}>Email</Text>
            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                style={{ borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 5 }}
            />
            <Text style={{ fontSize: 17, fontWeight: 'bold' }}>Mô tả kinh nghiệm</Text>
            <TextInput
                placeholder="Mô tả kinh nghiệm"
                value={describe}
                onChangeText={setDescribe}
                multiline={true}
                style={{ borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 5, height: 150 }}
            />
            <Text style={{ fontSize: 17, fontWeight: 'bold' }}>Địa chỉ</Text>
            <TextInput
                placeholder="Địa chỉ"
                value={address}
                onChangeText={setAddress}
                multiline={true}
                style={{ borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 5, height: 100 }}
            />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View>
                    <Button title="Hủy bỏ" onPress={confirmCancel} />
                </View>
                <View>
                    <Button title="Lưu lại" onPress={saveCandidate} />
                </View>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({

    header: {
        flexDirection: 'row',
        textAlign: 'center',
        justifyContent: 'center',
        marginTop: 40,
        marginBottom: 20,
    },

})
