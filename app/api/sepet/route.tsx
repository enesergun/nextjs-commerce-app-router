import { cookies } from "next/headers";
import { redirect } from "next/navigation";
export async function POST() {
  const cookieStore = cookies();
  cookieStore.delete("basket_information");
  cookieStore.delete("shipping_method");

  return Response.json({ status: true });
}
