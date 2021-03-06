import React from 'react';

const Song = ({currentSong}) => {
    const {name, artist, cover} = currentSong
    return (
        <div className={'song-container'}>

            <img src={cover} alt="img"/>
            <h2>{name}</h2>
            <h3>{artist}</h3>

        </div>
    );
};

export default Song;
