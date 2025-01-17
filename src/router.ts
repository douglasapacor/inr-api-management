import express from "express"
import boardRouter from "./routes/board"
const router = express.Router()

router.use("/board", boardRouter)

export default router
