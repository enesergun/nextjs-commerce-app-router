import { sql } from "@vercel/postgres";
import { CATEGORY_NAMES, CAMPAING_ELEMENT, PRODUCT } from "./definitions";

export async function fetchCategories() {
  try {
    const data = await sql<CATEGORY_NAMES>`SELECT * FROM categories`;
    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch revenue data.");
  }
}

export async function fetchCampaignBanners() {
  try {
    const campaigns = await sql<CAMPAING_ELEMENT>`
    SELECT campaign_link, campaign_id, campaign_desktop_image, campaign_mobile_image, campaign_name
FROM campaigns;
`;
    return campaigns.rows;
  } catch (error) {
    console.error("Database Error", error);
    throw new Error("Failed to fetch campaigns");
  }
}
export async function fetchProductCollections() {
  try {
    const products = await sql`
      SELECT *
      FROM products
      WHERE isTripleBig = true OR isTripleSmall = true OR isQuadrant = true;
    `;

    const tripleBigProducts = products.rows.filter(
      (product) => product.istriplebig,
    );
    const tripleSmallProducts = products.rows.filter(
      (product) => product.istriplesmall,
    );
    const quadrantProducts = products.rows.filter(
      (product) => product.isquadrant,
    );

    const result = {
      tripleBigProduct: tripleBigProducts as PRODUCT[],
      tripleSmallProducts: tripleSmallProducts as PRODUCT[],
      quadrantProducts: quadrantProducts as PRODUCT[],
    };

    return result;
  } catch (error) {
    console.error("Database Error", error);
    throw new Error("Failed to fetch product collections");
  }
}
