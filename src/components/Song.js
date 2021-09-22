import React from 'react';

const Song = ({currentSong}) => {
    const {name, artist, cover} = currentSong
    return (
        <div className={'song-container'}>
            <h1>Picture</h1>
            <img src={cover} alt=""/>
            <h2>{name}</h2>
            <h3>{artist}</h3>

        </div>
    );
};

export default Song;
