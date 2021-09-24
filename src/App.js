import Song from "./components/Song";
import Player from "./components/Player";
import data from "./data"
import {useRef, useState} from "react";
import Library from "./components/Library";
import Nav from "./components/Nav";

function App() {

    const [songs, setSongs] = useState(data())
    const [currentSong, setCurrentSong] = useState(songs[0])
    const [isPlaying, setIsPlaying] = useState(false)
    const audioRef = useRef(null)
    const [songInfo, setSongInfo] = useState({
        currentTime: 0,
        duration: 0
    })
    const [libraryStatus, setLibraryStatus] = useState(false)

    const timeUpdateHandler = (e) => {
        const current = e.target.currentTime
        const duration = e.target.duration
        setSongInfo({
            ...songInfo,
            currentTime: current,
            duration
        })

    }
    const songEndHandler = async () => {
        let currentIndex = songs.findIndex((song) => song.id === currentSong.id)

            await setCurrentSong(songs[(currentIndex + 1) % songs.length])
        if (isPlaying){
            audioRef.current.play()
        }
    }

  return (
    <div className={`App ${libraryStatus ? 'library-active': ''}`}>
     <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus}/>
     <Song currentSong={currentSong}/>
        <Player
            audioRef={audioRef}
            setIsPlaying={setIsPlaying}
            isPlaying={isPlaying}
            currentSong={currentSong}
            setSongInfo={setSongInfo}
            songInfo={songInfo}
            songs={songs}
            setCurrentSong={setCurrentSong}
            setSongs={setSongs}
        />
        <Library
            audioRef={audioRef}
            isPlaying={isPlaying}
            songs={songs}
            setCurrentSong={setCurrentSong}
            setSongs={setSongs}
            libraryStatus={libraryStatus}
        />

        <audio
            onTimeUpdate={timeUpdateHandler}
            onLoadedMetadata={timeUpdateHandler}
            ref={audioRef}
            src={currentSong.audio}
            onEnded={songEndHandler}
        />
    </div>
  );
}

export default App;
