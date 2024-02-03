import { sql } from "@vercel/postgres";
import { CATEGORY_NAMES, CAMPAING_ELEMENT, PRODUCT } from "./definitions";

export async function fetchCategories() {
  try {
    const data = await sql<CATEGORY_NAMES>`SELECT * FROM categories`;
    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch categories data.");
  }
}

export async function fetchCampaignBanners() {
  try {
    const campaigns = await sql<CAMPAING_ELEMENT>`
    SELECT campaign_link, campaign_id, campaign_desktop_image, campaign_mobile_image
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

export async function fetchSingleCampaign({ slug }: { slug: string }) {
  try {
    const campaign = await sql<CAMPAING_ELEMENT>`
    SELECT *
FROM campaigns
WHERE campaign_slug = ${slug};
    `;

    return campaign.rows[0];
  } catch (error) {
    console.error("Database Error", error);
    throw new Error("Failed to fetch campaign");
  }
}

export async function fetchProductWithCategory(category: string) {
  try {
    const products = await sql<PRODUCT>`
  SELECT id, category, name, price, image
FROM products
WHERE category = ${category}; 
  `;
    return products.rows;
  } catch (error) {
    console.error("Database Error", error);
    throw new Error("Failed to fetch products by category");
  }
}
export async function fetchProductDetail(id: string) {
  try {
    const product = await sql<PRODUCT>`
    SELECT * FROM products WHERE id = ${id};
`;

    return product.rows[0];
  } catch (error) {
    console.error("Database Error", error);
    throw new Error("Failed to fetch product");
  }
}
