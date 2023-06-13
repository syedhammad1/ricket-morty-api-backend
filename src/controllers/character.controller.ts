import { Request, Response } from "express";
import axios from "axios";
export const getCharactersByLocation = async (req: Request, res: Response) => {
  const location = req.body.locationId;
  console.log(location, "location");
  try {
    const response = await axios.get(
      "https://rickandmortyapi.com/api/character"
    );
    const characters = response.data.results;
    console.log(characters, "characters");
    const filteredCharacters = characters.filter(
      (character: any) =>
        character.location.name === location ||
        character.origin.name === location
    );

    const characterData = filteredCharacters.map((character: any) => {
      return {
        id: character.id,
        name: character.name,
        image: character.image,
        status: character.status,
        species: character.species,
      };
    });

    res.json({ data: characterData });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const filterCharacterByStatusOfGivenLocation = async (
  req: Request,
  res: Response
) => {
  // Handle GET /characters route
  // Retrieve character data from the database or API
  // Respond with character data

  const location = req.body.location;
  const status = req.body.status;

  try {
    const allCharacters = await axios.get(
      `https://rickandmortyapi.com/api/character/?status=${status}`
    );
    const characters = allCharacters.data.results;

    const filteredCharacters = characters.filter((character: any) => {
      console.log(character, "YE DIKHA");
      return character.location.name === location;
    });

    const filteredData = filteredCharacters.map((character: any) => {
      return {
        id: character.id,
        name: character.name,
        image: character.image,
      };
    });

    res.json({ characters: filteredData });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getCharacterById = async (req: Request, res: Response) => {
  // Handle GET /characters route
  // Retrieve character data from the database or API
  // Respond with character data

  const id = req.params.id;

  try {
    const character = await axios.get(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    const charData = character.data;

    res.json({ character: charData });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
