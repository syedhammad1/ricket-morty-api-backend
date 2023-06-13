import express from "express";
import locationRoute from "./location.route";
import characterRoute from "./character.route";

const router = express.Router();

router.use("/locations", locationRoute);
router.use("/characters", characterRoute);

export default router;
