import React, {useState} from "react";

function NameGenerator() {
  const [generatedName, setGeneratedName] = useState(""); // Correct the state variable name

  const pickRandomName = () => {
    const harryPotterCharacters = [
      'Harry Potter',
      'Hermione Granger',
      'Ron Weasley',
      'Albus Dumbledore',
      'Severus Snape',
      'Rubeus Hagrid',
      'Sirius Black',
      'Remus Lupin',
      'Ginny Weasley',
      'Neville Longbottom',
      'Luna Lovegood',
      'Draco Malfoy',
      'Bellatrix Lestrange',
      'Voldemort (Tom Riddle)',
      'Dobby',
      'Fred Weasley',
      'George Weasley',
      'Molly Weasley',
      'Arthur Weasley',
      'Lucius Malfoy',
    ];

    const randomIndex = Math.floor(Math.random() * harryPotterCharacters.length);
    const randomName = harryPotterCharacters[randomIndex];
    setRandomName(randomName);
  };

  return (
    <div>
      <h1>Pick Your Fighter</h1>
      <button onClick={pickRandomName}>Generate Random Name</button>
      {generatedName && <p>Generated Name: {generatedName}</p>}
    </div>
  );
}

export default NameGenerator;