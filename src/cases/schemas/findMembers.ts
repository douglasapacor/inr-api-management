import { z } from "zod"
export const findMembersValidation = z.object({
  sentence: z.string()
})
export type findMembersControllerProps = z.input<typeof findMembersValidation>
export type findMembersServiceProps = z.output<typeof findMembersValidation>
