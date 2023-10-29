import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "./Karakter.css";

const Karakter = ({ character }) => {
  return (
    <Accordion>
      <Accordion.Header>
        <h1>{character.name}</h1>
      </Accordion.Header>
      <Accordion.Body>
        <p>
          <b>Karakter Adı:</b> {character.name}
        </p>
        <p>
          <b>gender:</b> {character.gender}
        </p>
        <p>
          <b>Height:</b> {character.height}
        </p>
        <p>
          <b>Mass:</b> {character.mass}
        </p>
        <p>
          <b>BirthYear:</b> {character.birth_year}
        </p>
        <p>
          <b>Eye Color:</b> {character.eye_color}
        </p>
        <p>
          <b>Hair Color:</b> {character.hair_color}
        </p>
        <p>
          <b>Skin Color:</b> {character.skin_color}
        </p>
        <Accordion>
          <Accordion.Header>
            <b>Films:</b>
          </Accordion.Header>
          <Accordion.Body>
            <ul>
              {character.films.map((film, index) => (
                <li key={index}> {film} </li>
              ))}
            </ul>
          </Accordion.Body>
        </Accordion>
      </Accordion.Body>
    </Accordion>
  );
};
export default Karakter;
