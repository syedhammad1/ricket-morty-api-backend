import express from "express";
import {
  filterCharacterByStatusOfGivenLocation,
  getCharacterById,
  getCharactersByLocation,
} from "../controllers/character.controller";

const router = express.Router();

router.post("/", getCharactersByLocation);

router.post("/filterbystatus", filterCharacterByStatusOfGivenLocation);

router.get("/:id", getCharacterById);

export default router;
