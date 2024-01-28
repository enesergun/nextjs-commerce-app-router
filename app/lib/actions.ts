"use server";
import { z } from "zod";

const FormSchema = z.object({
  email: z.coerce.string().email(),
  phone: z.number(),
});

export async function basketInformationFnc(prevState: any, formData: FormData) {
  console.log("something");

  // Validate form using Zod
  /* const validatedFields = basketInformation.safeParse({
    email: formData.get("email"),
    phone: formData.get("phone"),
  });
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create Invoice.",
    };
  } */
  console.log("no problema");
  try {
    await console.log("everthing is fine");
  } catch (error) {
    console.error("error", error);
  }
}
