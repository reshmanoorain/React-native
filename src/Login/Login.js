import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'

const Login = () => {
    return (
        <View style={styles.LoginContainer}>
            <ImageBackground source={require('../images/background.png')} style={styles.loginImg}>
                <View style={styles.inputMain}>
                    <View style={styles.loginMain}>
                        <Text style={styles.texts}>
                            LOG IN
                        </Text>
                        <TextInput placeholder='Email' keyboardType='alphabet' style={styles.input} />
                        <TextInput placeholder='Password' keyboardType='alphabet' style={styles.input} />
                        <Text style={styles.text}>Forgot Password?</Text>
                        <TouchableOpacity>
                            <View style={styles.loginBtn}>
                                <Text style={styles.textBtn}>Log In</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.loginfg}>
                            <TouchableOpacity>
                                <View style={styles.btngoogle}>
                                    <Text style={styles.textBtn}>
                                        Login With
                                    </Text>
                                    <Image style={styles.facebooklogo} source={require('../images/facebook.png')} />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={styles.btngoogle}>
                                    <Text style={styles.textBtn}>
                                        Login With
                                    </Text>
                                    <Image style={styles.facebooklogo} source={require('../images/google.png')}/>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    loginImg: {
        width: '100%',
        height: '100%',
        justifyContent: 'center'
    },
    inputMain: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginMain: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '88%',
        width: '90%',
        paddingVertical: 25,
        paddingHorizontal: 20,
        borderRadius: 65,
        backgroundColor: 'rgba(255,255,255, 0.1)',

    },
    texts: {
        color: '#ffffff',
        fontWeight: '700',
        marginBottom: 25,
        fontSize: 25,
    },
    text: {
        fontSize: 16,
        textAlign: 'left',
        alignItems: 'flex-end',
        color: '#ffffff',
        marginBottom: 16,
    },
    input: {
        width: '100%',
        height: 40,
        paddingLeft: 15,
        backgroundColor: '#ffffff',
        borderRadius: 20,
        marginBottom: 23,
    },
    loginBtn: {
        width: 220,
        height: 40,
        backgroundColor: '#ffffff',
        borderRadius: 20,
        padding: 10,
        marginBottom: 90,
    },
    textBtn: {
        color: '#057c82',
        fontSize: 15,
        fontWeight: '800',
        textAlign: 'center'
    },
    loginfg: {
        width: '90%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    btngoogle: {
        width: 120,
        backgroundColor: '#ffffff',
        padding: 10,
        borderRadius: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    facebooklogo: {
        width: 20,
        height: 20,
    }

})