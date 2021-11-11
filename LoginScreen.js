import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, AppRegistry, } from 'react-native';
import 'react-native-gesture-handler';


export default class LoginScreen extends Component {
    state = {
        email: "",
        emailerror: "",
        password: "",
        passworderror: ""
    }
    Validater() {
        if (this.state.email == "") {
            this.setState({ emailerror: "Please enter your Email" })
        }
        else if (this.state.password == "") {
            this.setState({ passworderror: "Please enter your Password" })
        }
        else {

            this.props.navigation.navigate('BottomTabStack')
        }
    }
    render() {

        return (

            <View style={styles.container}>
                <Text style={styles.logo}>Beast App</Text>
                <View style={styles.inputView} >
                    <TextInput
                        style={styles.inputText}
                        keyboardType="email-address"
                        placeholder="User Name"
                        placeholderTextColor="#003f5c"
                        onChangeText={text => this.setState({ email: text })}
                        onBlur={() => this.Validater()} />
                </View>
                <View>
                    <Text style={{ color: "red", marginBottom: 15 }}>{this.state.email == "" ? this.state.emailerror : ""}</Text>
                </View>
                <View style={styles.inputView} >
                    <TextInput
                        secureTextEntry
                        keyboardType="numbers-and-punctuation"
                        maxLength={6}
                        style={styles.inputText}
                        placeholder="Password"
                        placeholderTextColor="#003f5c"
                        onChangeText={text => this.setState({ password: text })} />
                </View>
                <View>
                    <Text style={{ color: "red", marginBottom: 15 }}>{this.state.password == "" ? this.state.passworderror : ""}</Text>
                </View>
                <TouchableOpacity>
                    <Text style={styles.forgot}>Forgot Password?</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.loginBtn}
                    onPress={() => { this.Validater() }}>
                    <Text>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.loginText}>Signup</Text>
                </TouchableOpacity>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#003f5c',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        fontWeight: "bold",
        fontSize: 50,
        color: "#fb5b5a",
        marginBottom: 40
    },
    inputView: {
        width: "80%",
        backgroundColor: "#465881",
        borderRadius: 25,
        height: 50,
        marginBottom: 20,
        justifyContent: "center",
        padding: 20
    },
    inputText: {
        height: 50,
        color: "white"
    },
    forgot: {
        color: "white",
        fontSize: 11
    },
    loginBtn: {
        width: "80%",
        backgroundColor: "#fb5b5a",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        marginBottom: 10
    },
    loginText: {
        color: "white"
    }
});