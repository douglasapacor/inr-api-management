import express, { Request, Response } from "express"
import BoardController from "../cases/controllers/Board"
import BoardService from "../cases/services/Board"
import BoardRepository from "../cases/repositories/Board"
import wrapper from "../lib/wrapper"
const boardRouter = express.Router()
const boardRepository = new BoardRepository()
const boardService = new BoardService(boardRepository)
const boardController = new BoardController(boardService)

boardRouter.get(
  "/find-members",
  wrapper({
    handle: async (req, res) => {
      res.status(200).json(
        await boardController.findMembers({
          sentence: req.query.sentence ? req.query.sentence.toString() : ""
        })
      )
    },
    settings: {
      level: "full",
      featureCode: "board",
      action: "read",
      groupCode: ["admin"]
    }
  })
)

export default boardRouter
