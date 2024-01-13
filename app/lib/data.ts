import { sql } from "@vercel/postgres";
import { CATEGORY_NAMES } from "./definitions";

export async function fetchCategories() {
  try {
    /* await new Promise((resolve) => setTimeout(resolve, 5000)); */
    const data = await sql<CATEGORY_NAMES>`SELECT * FROM categories`;
    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch revenue data.");
  }
}
