"use server";
import { z } from "zod";
import { unstable_noStore as noStore } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { State } from "@/app/lib/definitions";

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

export async function basketInformationFnc(
  prevSate: Awaited<State>,
  data: FormData,
) {
  const inputObject = {
    email: data.get("email"),
    phone: data.get("phone"),
    name: data.get("name"),
    surname: data.get("surname"),
    address: data.get("address"),
    addressType: data.get("addressType"),
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
    const cookieStore = cookies();
    cookieStore.set("basket_information", JSON.stringify(inputObject));
  } catch (error) {
    return {
      message: "Database Error: Failed to Create Invoice.",
    };
  }
  redirect("/sepet/kargo");
}
export async function getExistData() {
  const cookieStore = cookies();
  const existData = cookieStore.get("basket_information");

  try {
    if (existData) return JSON.parse(existData.value);
  } catch (error) {}
}
