import React, {useState} from 'react';
import {StatusBar} from 'expo-status-bar';
import {SafeAreaView, View, Text, StyleSheet, Button, TextInput, TouchableOpacity} from 'react-native';



const SearchScreen = props => {

    const [movieSearch, setMovieSearch] = useState('');
    
    return(
    <SafeAreaView style={styles.container}>
        <View >
            <Text style={styles.heading}>Search For a Movie</Text>
            <TextInput style={styles.textInput} placeholder="Type Movie Here" value = {movieSearch} onChangeText={(text) => setMovieSearch(text)} />
            <TouchableOpacity  style={styles.button}  onPress={() =>{
                props.navigation.navigate('Search Results', {movieSearch: movieSearch});
            }}><Text style={styles.buttonText}>Search</Text></TouchableOpacity>
            <StatusBar style="light"/>
        </View>
    </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#30336b',
    },
    heading: {
        textAlign: 'center',
        fontSize: 40,
        marginTop: 30,
        color: '#fff',
    },
    textInput: {
        height: 60,
        borderWidth: 2,
        borderColor: 'lightgray',
        textAlign: 'center',
        backgroundColor: 'lightgray',
        borderRadius: 10,
        fontSize: 18,
        marginTop: 30,
        width: '80%',
        alignSelf: 'center',
    },
    button: {
        backgroundColor: '#D6A2E8',
        color: 'white',
        height: 60,
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        borderRadius: 30,
        marginTop: 30,
        alignSelf: 'center',
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        
        fontSize: 22,
    },
});

export default SearchScreen;