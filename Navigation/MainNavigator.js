import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';


//screen imports

import SearchScreen from '../Screens/SearchScreen';
import SearchInfo from '../Screens/SearchInfo';
import MovieDetails from '../Screens/MovieDetails';

const Stack = createStackNavigator();

function HomeScreenStack() {
    return(
        <Stack.Navigator screenOptions={{headerStyle: {backgroundColor: '#30336b'}, headerTintColor: '#fff', headerTitleStyle:{fontWeight: 'bold'}}}>           
            <Stack.Screen name="Search" component={SearchScreen} />
            <Stack.Screen name="Search Results" component={SearchInfo} />
            <Stack.Screen name= "Movie Details" component={MovieDetails}/>
        </Stack.Navigator>
    );
}

export {HomeScreenStack};