import React, { useState, useEffect } from "react";
import "./App.css";
import ArtistCard from "./components/ArtistCard";
import AddArtistPopup from "./components/AddArtistPopup";
import { Link } from "react-router-dom";

function App() {
  const [selectedCardId, setSelectedCardId] = useState(null);
  const [artists, setArtists] = useState([
    {
      id: 1,
      name: "Beyoncé",
      nationality: "American", 
      age: "40",
      songs: [
        {
          id: 1,
          name: "Formation",
          lyrics: "Placeholder lyrics for Formation...",
          composer: "Composer: Beyoncé, Mike Will Made-It, Swae Lee", 
          production: "Production: Produced by Mike Will Made-It",
          productiondate: "Production Date: 2015",
          awards: "Awards: Grammy Awards",
        },
        {
          id: 2,
          name: "Halo",
          lyrics: "Placeholder lyrics for Halo...",
          composer: "Composer: Beyoncé, Ryan Tedder, Evan Bogart",
          production: "Production: Produced by Ryan Tedder, Beyoncé",
          productiondate: "Production Date: 2008",
          awards: "Awards: Grammy Awards",
        },
        {
          id: 3,
          name: "Single Ladies",
          lyrics: "Placeholder lyrics for Single Ladies...",
          composer: "Composer: Beyoncé, Thaddis Harrell, Christopher Stewart",
          production: "Production: Produced by Christopher Stewart, Beyoncé",
          productiondate: "Production Date: 2008",
          awards: "Awards: Grammy Awards",
        },
      ],
    },
    {
      id: 2,
      name: "Drake",
      nationality: "Canadian",
      age: "35",
      songs: [
        {
          id: 1,
          name: "God's Plan",
          lyrics: "Placeholder lyrics for God's Plan...",
          composer: "Composer: Drake, Ronald LaTour, Daveon Jackson",
          production: "Production: Produced by Cardo, Yung Exclusive, Boi-1da",
          productiondate: "Production Date: 2018",
          awards: "Awards: Grammy Awards",
        },
        {
          id: 2,
          name: "Hotline Bling",
          lyrics: "Placeholder lyrics for Hotline Bling...",
          composer: "Composer: Drake, Paul Jefferies, Timmy Thomas",
          production: "Production: Produced by Nineteen85, Paul Jefferies",
          productiondate: "Production Date: 2015",
          awards: "Awards: Grammy Awards",
        },
        {
          id: 3,
          name: "In My Feelings",
          lyrics: "Placeholder lyrics for In My Feelings...",
          composer: "Composer: Drake, TrapMoneyBenny, City Girls",
          production: "Production: Produced by TrapMoneyBenny",
          productiondate: "Production Date: 2018",
          awards: "Awards: Grammy Awards",
        },
      ],
    },
    {
      id: 3,
      name: "Taylor Swift",
      nationality: "American",
      age: "33",
      songs: [
        {
          id: 1,
          name: "Shake It Off",
          lyrics: "Placeholder lyrics for Shake It Off...",
          composer: "Composer: Taylor Swift, Max Martin, Shellback",
          production: "Production: Produced by Max Martin, Shellback",
          productiondate: "Production Date: 2014",
          awards: "Awards: Grammy Awards",
        },
        {
          id: 2,
          name: "Blank Space",
          lyrics: "Placeholder lyrics for Blank Space...",
          composer: "Composer: Taylor Swift, Max Martin, Shellback",
          production: "Production: Produced by Max Martin, Shellback",
          productiondate: "Production Date: 2014",
          awards: "Awards: Grammy Awards",
        },
        {
          id: 3,
          name: "Love Story",
          lyrics: "Placeholder lyrics for Love Story...",
          composer: "Composer: Taylor Swift",
          production: "Production: Produced by Nathan Chapman, Taylor Swift",
          productiondate: "Production Date: 2008",
          awards: "Awards: Grammy Awards",
        },
      ],
    },
  ]);

  const handleCardSelection = (id) => {
    setSelectedCardId(id === selectedCardId ? null : id);
  };

  const [showAddPopup, setShowAddPopup] = useState(false);

  const addArtist = (newArtist) => {
    const updatedArtists = [...artists];
    newArtist.id = Date.now();
    newArtist.songs = [];

    newArtist.songs.push({
      id: 1,
      name: "Sample Song",
      lyrics: "Lyrics for Sample Song...",
      composer: "Composer: Composer Name",
      production: "Production: Produced by XYZ",
      productiondate: "Production Date: Date produced",
      awards: "Awards: Awards",
    });
    updatedArtists.push(newArtist);
    setArtists(updatedArtists);
    setSelectedCardId(null);
    setShowAddPopup(false);
  };

  const handleRemoveSelected = () => {
    if (selectedCardId !== null) {
      const updatedArtists = artists.filter((artist) => artist.id !== selectedCardId);
      setArtists(updatedArtists);
      setSelectedCardId(null);
    }
  };

  const selectedArtist = artists.find((artist) => artist.id === selectedCardId);

  const [selectedSongId, setSelectedSongId] = useState(null);

  const selectedSong = selectedArtist?.songs?.find((song) => song.id === selectedSongId);

  const handleSongSelection = (songId) => {
    setSelectedSongId(songId);
    setIsPopupVisible(null);
  };

  useEffect(() => {
    if (selectedArtist && selectedArtist.songs.length > 0) {
      setSelectedSongId(selectedArtist.songs[0].id);
    }
  }, [selectedArtist]);

  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  return (
    <div className="app-container">
      <div className="left-section">
        {artists.map((artist) => (
          <ArtistCard
            key={artist.id}
            id={artist.id}
            name={artist.name}
            nationality={artist.nationality}
            age={artist.age}
            isSelected={selectedCardId === artist.id}
            handleCardSelection={handleCardSelection}
          />
        ))}
        <div className="button-container">
          <button onClick={() => setShowAddPopup(true)}>Add Artist</button>
          <button onClick={handleRemoveSelected}>Remove Artist</button>
        </div>
        {showAddPopup && <AddArtistPopup onAdd={addArtist} onCancel={() => setShowAddPopup(false)} />}
      </div>
      <div className="right-section">
        {selectedCardId && selectedArtist && selectedSong && (
          <div>
            <div className="section artist-song">
              <button id="view-songs" onClick={togglePopup}>
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
              </button>
              <p>
                {selectedArtist?.name}: {selectedSong.name}
              </p>
              <Link id="song-new-tab" to="/song-lyrics"></Link>
            </div>
            {selectedArtist && (
              <div id="song-selector" className="popup" style={{ display: isPopupVisible ? "block" : "none" }}>
                <div className="popup-content">
                  <h2>{selectedArtist.name}'s Songs</h2>

                  {selectedArtist.songs.map((song) => (
                    <p key={song.id}>
                      <button onClick={() => handleSongSelection(song.id)}>{song.name}</button>
                    </p>
                  ))}
                </div>
              </div>
            )}
            {selectedSong && (
              <div>
                <div className="section">
                  <p>{selectedSong.lyrics || "No lyrics available"}</p>
                </div>
                <div className="section">
                  <p>{selectedSong.composer}</p>
                  <p>{selectedSong.production}</p>
                  <p>{selectedSong.productiondate}</p>
                  <p>{selectedSong.awards}</p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
