import { z } from "zod"

export const registerFormSchema = z.object({
    username: z.string().min(1, { message: "Username is Required" }),
    email: z.string().email(),
    phone: z.string().min(8, { message: "Password Should have atleast 8  Character " }),
    subject: z.string().min(1, { message: "Subject is Required" }),
    message: z.string().min(1, { message: "Message is Required" }),
})