import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function Login() {
    return (
        <View style={styles.container}>
            <View style={styles.loginContainer}>
                <View style={styles.header}>
                    <Image source={require('../assets/images/login.png')} style={{width: 100, height: 100}} />
                <Text style={styles.title}>Login</Text>
                </View>
                <View style={styles.inputContainer}>
                    <View style={styles.inputWrapper}>
                        <MaterialIcons name="email" size={24} color="black" />
                        <TextInput placeholder="Email" style={styles.input} />
                    </View>
                    <View style={styles.inputWrapper}>
                        <MaterialIcons name="lock" size={24} color="black" />
                        <TextInput placeholder="Password" secureTextEntry style={styles.input} />
                        <MaterialIcons name="visibility" size={24} color="black" />
                    </View>
                </View>
                <View style={styles.footer}>
                    <View style={styles.buttonContainer}>
                        <Text style={styles.button}>Login</Text>
                    </View>
                    <View style={styles.signUpContainer}>
                        <Text>Don't have an account? </Text>
                        <Text style={styles.signUpText}>Sign Up</Text>
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
    loginContainer: {
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
    signUpContainer: {
        flexDirection: 'row',
        marginTop: 10,
    },
    signUpText: {
        color: '#1a9e5c', 
        fontWeight: 'bold'
    },
    
});