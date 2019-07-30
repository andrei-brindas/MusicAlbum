import React from 'react';
import {View, ScrollView} from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

export default class AlbumList extends React.Component {
    
    //aici am adaugat constructor props si super; si IP de la axios get
    constructor(props){
        super(props);
        this.state = {albums: [] };
    }

    componentWillMount(){
        axios.get('http://192.168.1.100:5526/api/data')
        .then(response => this.setState({albums: response.data }));
    }

    renderAlbums(){
        return this.state.albums.map(album => 
            <AlbumDetail key={album.title} album={album}/>
            );
    }

    render(){
        console.log(this.state);

        return(
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}