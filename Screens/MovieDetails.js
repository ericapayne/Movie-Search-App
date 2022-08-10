import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, Text, StyleSheet, Button, TextInput, Image, FlatList, ScrollView} from 'react-native';




const MovieDetails = props => {

    
    const [imdbID, setimdbID] = useState('');
    const [details, setDetails] = useState('');

   

    useEffect(() => {
        const getMovie = async (movieSearch) => {
            const responseMovie = await fetch('http://www.omdbapi.com/?i='+ movieSearch + '&apikey=52697d8b');
            const result = await responseMovie.json();

           
            
            setDetails(result);

    };    
        getMovie(props.route.params.imdbID);
        
        
    }, []);

    

    return(
        
        <ScrollView style={styles.container}>
            
            
            
            <Image
                        style={
                           styles.images
                        }
                        source={{ uri: `${details.Poster}` }}
                    />
                <Text style={styles.title}>{details.Title}</Text>
            <Text style={styles.rating}>Rating: {details.Rated}</Text>
            <Text style={styles.runtime}>Runtime: {details.Runtime}</Text>
            <Text style={styles.genre}>Genre: {details.Genre}</Text>
            <Text style={styles.released}>Released: {details.Released}</Text>
            <Text style={styles.plot}>Plot: {details.Plot}</Text>
            
           
            
        </ScrollView>
        
    );
};

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#30336b',
    },
    title: {
        fontSize: 18,
        textAlign: 'left',
        margin: 10,
        fontWeight: 'bold',
        color: '#fff',
    },
    images: {
        height: 466,
        width: 300, 
        margin: 10,
        alignSelf: 'center',
        borderRadius: 10
    },
    rating: {
        margin: 5,
        marginLeft: 10,
        color: '#fff',
    },
    runtime: {
        margin: 5,
        marginLeft: 10,
        color: '#fff',
    },
    genre: {
        margin: 5,
        marginLeft: 10,
        color: '#fff',
    },
    released: {
        margin: 5,
        marginLeft: 10,
        color: '#fff',
    },
    plot: {
        margin: 5,
        marginLeft: 10,
        color: '#fff'
    },
   
});

export default MovieDetails;