const { db } = require("@vercel/postgres");

const categories = [
  {
    categoryId: "3958dc9e-712f-4377-85e9-fec4b6a6442a",
    categoryName: "Sweatshirt",
    categoryImage: "/categories/sweat-category.png",
    categoryLink: "/sweatshirt",
  },
  {
    categoryId: "3958dc9e-742f-4377-85e9-fec4b6a6442a",
    categoryName: "Ayakkabı",
    categoryImage: "/categories/shoes-category.png",
    categoryLink: "/ayakkabi",
  },
  {
    categoryId: "3958dc9e-737f-4377-85e9-fec4b6a6442a",
    categoryName: "Pantolon",
    categoryImage: "/categories/pants.png",
    categoryLink: "/pantolon",
  },
  {
    categoryId: "50ca3e18-62cd-11ee-8c99-0242ac120002",
    categoryName: "Dış Giyim",
    categoryImage: "/categories/overcoat.png",
    categoryLink: "/dis-giyim",
  },
  {
    categoryId: "3958dc9e-787f-4377-85e9-fec4b6a6442a",
    categoryName: "Eşofman",
    categoryImage: "/categories/sportswear.png",
    categoryLink: "/esofman",
  },
  {
    categoryId: "76d65c26-f784-44a2-ac19-586678f7c2f2",
    categoryName: "Elektronik",
    categoryImage: "/categories/electronics.png",
    categoryLink: "/elektronik",
  },
  {
    categoryId: "d6e15727-9fe1-4961-8c5b-ea44a9bd81aa",
    categoryName: "Telefon",
    categoryImage: "/categories/phone-category.png",
    categoryLink: "/telefon",
  },
  {
    categoryId: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c66",
    categoryName: "Beyaz Eşya",
    categoryImage: "/categories/machine.png",
    categoryLink: "/beyaz-esya",
  },
  {
    categoryId: "CC27C14A-0ACF-4F4A-A6C9-D45682C144B9",
    categoryName: "Mutfak",
    categoryImage: "/categories/kitchen.png",
    categoryLink: "/mutfak",
  },
];
const campaigns = [
  {
    id: "24717c5e-8d79-48db-b6a5-64e2ccfc9439",
    campaignName: "Yeni Duyurular",
    campaignDesktopImage: "/campaigns/campaign-1.jpeg",
    campaignMobileImage: "/campaigns/campaign-1.jpeg",
    campaignLink: "/kampanyalar/yeni-duyurular",
  },
  {
    id: "24717c5e-8d79-48db-b6a5-64e2ccfc9439",
    campaignName: "Flaş İndirimler Burada",
    campaignDesktopImage: "/campaigns/campaign-2.png",
    campaignMobileImage: "/campaigns/campaign-2.png",
    campaignLink: "/kampanyalar/flas-indirimler",
  },
  {
    id: "24717c5e-8d79-48db-b6a5-64e2ccfc9439",
    campaignName: "Yüzde 30'a varan indirimler!",
    campaignDesktopImage: "/campaigns/campaign-3.png",
    campaignMobileImage: "/campaigns/campaign-3.png",
    campaignLink: "/kampanyalar/yuzde-30-a-varan-indirimler",
  },
];

async function seedCategories(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // create the "categories" table if it doesn't exist
    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS categories (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    category_id UUID NOT NULL,
    category_name VARCHAR(255) NOT NULL,
    category_image VARCHAR(255) NOT NULL,
    category_link VARCHAR(255) NOT NULL
    )
    `;
    // insert data into the "categories" table

    const insertedCategories = await Promise.all(
      categories.map(
        (category) => client.sql`
            INSERT INTO categories (category_id, category_name, category_image, category_link)
            VALUES (${category.categoryId}, ${category.categoryName}, ${category.categoryImage}, ${category.categoryLink})
            ON CONFLICT (id) DO NOTHING;
            `,
      ),
    );
    return {
      createTable,
      categories: insertedCategories,
    };
  } catch (error) {
    console.error("Error seeding categories", error);
    throw error;
  }
}
async function dropInvoicesTable(client) {
  try {
    // Drop the "invoices" table if it exists
    const dropTable = await client.sql`DROP TABLE IF EXISTS categories;`;

    return {
      dropTable,
    };
  } catch (error) {
    console.error("Error dropping invoices table:", error);
    throw error;
  }
}
async function seedCampaigns(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // create the "categories" table if it doesn't exist
    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS campaigns (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    campaign_id UUID NOT NULL,
    campaign_name VARCHAR(255) NOT NULL,
    campaign_desktop_image VARCHAR(255) NOT NULL,
    campaign_mobile_image VARCHAR(255) NOT NULL,
    campaign_link VARCHAR(255) NOT NULL
    )
    `;
    // insert data into the "categories" table

    const insertedCampaigns = await Promise.all(
      campaigns.map(
        (campaign) => client.sql`
            INSERT INTO campaigns (campaign_id, campaign_name, campaign_desktop_image, campaign_mobile_image, campaign_link)
            VALUES (${campaign.id}, ${campaign.campaignName}, ${campaign.campaignDesktopImage}, ${campaign.campaignMobileImage}, ${campaign.campaignLink})
            ON CONFLICT (id) DO NOTHING;
            `,
      ),
    );
    return {
      createTable,
      campaigns: insertedCampaigns,
    };
  } catch (error) {
    console.error("Error seeding categories", error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();
  await seedCampaigns(client);
  /* await dropInvoicesTable(client); */

  await client.end();
}
main().catch((err) => {
  console.error(
    "An error occurred while attempting to seed the database:",
    err,
  );
});
