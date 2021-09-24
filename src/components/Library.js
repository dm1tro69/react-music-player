import React from 'react';
import LibrarySong from "./LibrarySong";

const Library = ({songs, setCurrentSong, audioRef, isPlaying, setSongs, libraryStatus}) => {
    return (
        <div className={`library ${libraryStatus? 'active-library': ''}`}>
            <h2>Library</h2>
            <div className="library-songs">
                {songs.map((song) => {
                    return (
                        <LibrarySong
                            key={song.id}
                            isPlaying={isPlaying}
                            setCurrentSong={setCurrentSong}
                            songs={songs}
                            id={song.id}
                            audioRef={audioRef}
                            setSongs={setSongs}
                            song={song}/>
                    )
                }) }
            </div>
        </div>
    );
};

export default Library;
