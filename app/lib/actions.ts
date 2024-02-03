"use server";
import { z } from "zod";
import { unstable_noStore as noStore } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
const basketValidation = z
  .object({
    email: z.coerce
      .string({
        required_error: "Email Alanı Zorunludur",
        invalid_type_error: "Geçersiz Email Formatı",
      })
      .email({
        message: "Geçersiz Email Formatı",
      }),
    phone: z.coerce
      .number({
        invalid_type_error: "Telefon Formatı Geçersiz",
      })
      .gte(1000000000, "Telefon Numarası En az 10 rakam olabilir")
      .lte(99999999999, {
        message: "Telefon Numarası En fazla 11 rakam olabilir",
      }),
    name: z.string().min(2, "İsim Alanı Zorunludur"),
    surname: z.string().min(2, "Soyisim Alanı Zorunludur"),
    address: z.string().min(1, "Adres Alanı Zorunludur"),
  })
  .required();
export type State = {
  errors?: any;
  message?: any;
};
export async function basketInformationFnc(prevSate: any, data: FormData) {
  console.log("DATA", data);
  const cookieStore = cookies();
  const inputObject = {
    email: data.get("email"),
    phone: data.get("phone"),
    name: data.get("name"),
    surname: data.get("surname"),
    address: data.get("address"),
  };
  noStore();
  // Validate form using Zod
  const validatedFields = basketValidation.safeParse(inputObject);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create Invoice.",
    };
  }

  try {
    cookieStore.set("testCookie", JSON.stringify(inputObject));
  } catch (error) {
    return {
      message: "Database Error: Failed to Create Invoice.",
    };
  }
  redirect("/sepet/kargo");
}
