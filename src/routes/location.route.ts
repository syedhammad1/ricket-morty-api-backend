import express, { Request, Response } from "express";
import { getLocations } from "../controllers/location.controller";

const router = express.Router();

// GET /characters
router.get("/", getLocations);

export default router;
