import BoardRepository from "../repositories/Board"
import { findMembersServiceProps } from "../schemas/findMembers"
import { defaultResponse } from "../types"

export default class BoardService {
  constructor(private boardRepository: BoardRepository) {}

  async findMembers(params: findMembersServiceProps): Promise<defaultResponse> {
    try {
      const list = await this.boardRepository.findMembers({
        sentences: params.sentence
      })
      return {
        success: true,
        data: list
      }
    } catch (error: any) {
      return {
        success: false,
        message: error.message
      }
    }
  }
}
