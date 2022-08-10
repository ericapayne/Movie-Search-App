import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, Text, StyleSheet, Button, TextInput, ScrollView, Image, FlatList, TouchableOpacity} from 'react-native';
import { useSelector, Provider } from 'react-redux';



const SearchInfo = props => {
    
    const [movies, setMovies] = useState([]);
    const [index, setIndex] = useState('');
    
    const [imdbID, setimdbID] = useState('');

    useEffect(() => {
        const getMovie = async (movieSearch) => {
            const responseMovie = await fetch('http://www.omdbapi.com/?s='+ movieSearch + '&apikey=52697d8b');

            const search = await responseMovie.json();

            setMovies(search.Search);
            setimdbID(search.imdbID);
                      
    };    
        getMovie(props.route.params.movieSearch);
        console.log(imdbID);
    }, []);

    

    const renderMovies = listItem =>{
        return(
            <View style={styles.listItem}>
                
                    <View style={styles.top}>
                    <Image style={styles.images}
                source={{uri: `${listItem.item.Poster}`}}/>
                <View style={styles.column}>
                <Text style={styles.listText}>{listItem.item.Title}</Text>
                
                
                <TouchableOpacity style={styles.button} onPress={() =>{
                props.navigation.navigate('Movie Details', {imdbID: listItem.item.imdbID});
            }} ><Text style={styles.moreDetails}>More Details</Text></TouchableOpacity>
                
                </View>
                
                </View>
                
                
            
            </View>
        );
    }


    return(
    
        
            <SafeAreaView style={styles.container}>
                
                <FlatList
                    data = {movies}
                    renderItem= {renderMovies}
                    keyExtractor = {(item, index) => item.imdbID.toString()}
                    />
                
            </SafeAreaView>
        
    
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#30336b',
        padding: 10
    },
    top: {
        flexDirection: 'row',
        flex: 1
    },
    row: {
        
        flexDirection: 'row',
    },
    column: {
        flex: 1,
        flexDirection: 'column'
    },
    images: {
        flex: .75,
        height: 233,
        width:150, 
        margin: 10,
        borderRadius: 10,
        
    },
    listItem: {
        marginTop: 15,
        
        
        borderRadius: 10,
    },
    listText: {
        flex: .5,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        textAlignVertical: 'center',
        color: 'white',
        margin: 5
    },
    yearText: {
        
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#D6A2E8',
        width: '60%',
        alignSelf: 'center',
        marginBottom: 15,
        marginRight: 15,
        justifyContent: 'center',
        margin: 10,
        borderRadius: 10,
        padding: 7
    },
    moreDetails: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
        
    },
});

export default SearchInfo;