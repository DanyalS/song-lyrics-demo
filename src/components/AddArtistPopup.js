import React, { useState } from "react";

const AddArtistPopup = ({ onAdd, onCancel }) => {
  const [name, setName] = useState("");
  const [nationality, setNationality] = useState("");
  const [age, setAge] = useState("");

  const handleAdd = () => {
    if (name.trim() !== "" && nationality.trim() !== "" && age.trim() !== "") {
      onAdd({ name, nationality, age });
      setName("");
      setNationality("");
      setAge("");
    } 
  };

  return (
    <div id="add-artist-popup" className="overlay">
      <div className="popup">
        <h2>Add Artist</h2>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder="Nationality" value={nationality} onChange={(e) => setNationality(e.target.value)} />
        <input type="text" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} />
        <div className="button-container">
          <button onClick={handleAdd}>Add</button>
          <button onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default AddArtistPopup;
