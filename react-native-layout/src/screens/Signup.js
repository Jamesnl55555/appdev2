import { StyleSheet, Text, View, TextInput } from 'react-native';
import {MaterialIcons, Feather} from '@expo/vector-icons';

export default function Signup() {
    return (
        <View style={styles.container}>
            <View style={styles.signUpContainer}>
                <View style={styles.header}>
                    <MaterialIcons name="account-circle" size={100} color="black" />
                    <Text style={styles.title}>Sign Up</Text>
                </View>
                <View style={styles.inputContainer}>
                    <View style={styles.inputContainer}>
                        <View style={styles.inputWrapper}>
                            <Feather name="user" size={24} color="black" />
                            <TextInput placeholder="Name" style={styles.input} />
                        </View>
                        <View style={styles.inputWrapper}>
                            <MaterialIcons name="email" size={24} color="black" />
                            <TextInput placeholder="Email" style={styles.input} />
                        </View>
                        <View style={styles.inputWrapper}>
                            <MaterialIcons name="lock" size={24} color="black" />
                            <TextInput placeholder="Password" secureTextEntry style={styles.input} />
                            <MaterialIcons name="visibility" size={24} color="black" />
                        </View>
                        <View style={styles.inputWrapper}>
                            <MaterialIcons name="lock" size={24} color="black" />
                            <TextInput placeholder="ConfirmPassword" secureTextEntry style={styles.input} />
                            <MaterialIcons name="visibility" size={24} color="black" />
                        </View>
                    </View>
                </View>
                <View style={styles.footer}>
                    <View style={styles.buttonContainer}>
                        <Text style={styles.button}>Sign Up</Text>
                    </View>
                    <View style={styles.signUpLinkContainer}>
                        <Text>Already have an account? </Text>
                        <Text style={styles.signUpText}>Sign In</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#574949',
        alignItems: 'center',
        justifyContent: 'center',
    },
    signUpContainer: {
        width: '80%',
        padding: 20,
        borderRadius: 10,
        backgroundColor: '#f5eeee',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 1,
    },
    header: {
        alignItems: 'center',
    },
    input:{
        flex: 1,
        marginVertical: 10,
        marginHorizontal: 10,
    },
    inputContainer: {
        width: '100%',
        marginTop: 20,
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#a7a2a2',
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 5,
        padding: 5,
        marginVertical: 10,
    },
    footer: {
        width: '100%',
        alignItems: 'center',
        marginTop: 10,
    },
    buttonContainer: {
        width: '100%',
        marginTop: 20,
    },
    button: {
        backgroundColor: '#1a9e5c',
        color: '#fff',
        paddingVertical: 10,
        borderRadius: 45,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
    },
    signUpLinkContainer: {
        flexDirection: 'row',
        marginTop: 10,
    },
    signUpText: {
        color: '#1a9e5c', 
        fontWeight: 'bold'
    },
});