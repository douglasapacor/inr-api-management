import {
  findMembersControllerProps,
  findMembersValidation
} from "../schemas/findMembers"
import BoardService from "../services/Board"
import { defaultResponse } from "../types"

export default class BoardController {
  constructor(private boardService: BoardService) {}

  async findMembers(
    params: findMembersControllerProps
  ): Promise<defaultResponse> {
    try {
      const validation = await findMembersValidation.safeParseAsync(params)

      if (!validation.success)
        throw new Error(validation.error.issues[0].message)

      return await this.boardService.findMembers(validation.data)
    } catch (error: any) {
      return {
        success: false,
        message: error.message
      }
    }
  }
}
