import { Repository } from "../types"
export default class BoardRepository extends Repository {
  async findMembers(params: {
    sentences: string
  }): Promise<{ id: number; name: string; photo: string }[]> {
    try {
      return this.list<{ id: number; name: string; photo: string }[]>(
        "find_members",
        `'${params.sentences}'`
      )
    } catch (error: any) {
      throw new Error(error.message)
    }
  }
}
