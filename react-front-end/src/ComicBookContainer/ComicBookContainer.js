import React, { Component } from 'react';
import ComicBookList from '../ComicBookList/ComicBookList';


export default class ComicBookContainer extends Component {
    constructor(){
        super();
        this.state = {
            parsedComicInfo: []
        }

    }
    getComicInfo = async () => {
        console.log(this.props);
        const cors_api_host = 'https://cors-anywhere.herokuapp.com';
        const ComicVineAPIKey = 'd299d3d5b4ea77b33accbf7ced3140fabc545199';
        const fetchURL = cors_api_host + '/' + 'https://comicvine.gamespot.com/api/characters/?api_key=' + ComicVineAPIKey + '&format=json';
        console.log(fetchURL);
        try {
            const comicInfo = await fetch(fetchURL);
            const parsedComicInfo = await comicInfo.json();
            console.log(parsedComicInfo)
            console.log(parsedComicInfo.results[0])
            return parsedComicInfo
        } catch(err){
            console.log(err)
        }
        
    }
    componentDidMount(){
        this.getComicInfo().then((parsedComicInfo) => {
            this.setState({parsedComicInfo: parsedComicInfo.results})
            console.log(parsedComicInfo)
        }).catch((err) => {
            console.log(err)
        });
    }
    render(){
        return (
            <div>
                <ComicBookList comics={this.state.parsedComicInfo}/>
            </div>
        )
    }
}