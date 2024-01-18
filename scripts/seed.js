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
    campaignSlug: "yaz-indirimleri",
    campaignName: "Yaz İndirimleri",
    campaignDescription:
      "Yaz aylarına özel indirim fırsatları! Sıcak günleri daha özel kılmak için geniş ürün yelpazemizde geçerli indirimler sizi bekliyor. Şortlardan plaj giyimine, güneş gözlüklerinden şapkalara kadar yaz koleksiyonumuzda yapacağınız alışverişlerde cazip fiyatlar sizleri bekliyor. Bu kampanya 1 Haziran 2024 tarihinden itibaren başlayacak ve 30 Haziran 2024 tarihine kadar devam edecek.",
    campaignDesktopImage: "/campaigns/campaign-1.jpeg",
    campaignMobileImage: "/campaigns/campaign-1.jpeg",
    campaignLink: "/kampanyalar/yaz-indirimleri",
    campaignStartDate: "2024-06-01",
    campaignEndDate: "2024-06-30",
  },
  {
    id: "24717c5e-8d79-48db-b6a5-64e2ccfc9439",
    campaignSlug: "surpriz-hafta",
    campaignName: "Sürpriz Hafta",
    campaignDescription:
      "Bu hafta sürpriz indirimlerle dolu! Sadece bir hafta süreyle geçerli olan bu kampanyada kaçırılmayacak fırsatları kaçırmayın. Her kategorideki ürünlerde büyük indirimler sizi bekliyor. Modadan elektronik ürünlere, ev dekorasyonundan spor malzemelerine kadar birçok alanda cazip fiyatlarla karşılaşacaksınız. Bu özel kampanya 15 Mart 2024 tarihinde başlayacak ve 22 Mart 2024 tarihinde sona erecek.",
    campaignDesktopImage: "/campaigns/campaign-2.png",
    campaignMobileImage: "/campaigns/campaign-2.png",
    campaignLink: "/kampanyalar/surpriz-hafta",
    campaignStartDate: "2024-03-15",
    campaignEndDate: "2024-03-22",
  },
  {
    id: "24717c5e-8d79-48db-b6a5-64e2ccfc9439",
    campaignName: "Kış Alışverişi Festivali",
    campaignSlug: "kis-alisverisi-festivali",
    campaignDescription:
      "Soğuk kış günlerinde alışveriş keyfini yaşayın! Geniş kış koleksiyonumuzda %30'a varan indirimlerle, sadece bu festivalde geçerli. Montlardan kazaklara, termal iç giyimden kar botlarına kadar birçok kış ürününde büyük avantajlar sizi bekliyor. Bu özel festival 1 Aralık 2024 tarihinde başlayacak ve 15 Aralık 2024 tarihine kadar devam edecek.",
    campaignDesktopImage: "/campaigns/campaign-3.png",
    campaignMobileImage: "/campaigns/campaign-3.png",
    campaignLink: "/kampanyalar/kis-alisverisi-festivali",
    campaignStartDate: "2024-12-01",
    campaignEndDate: "2024-12-15",
  },
];
const products = [
  /* {
    id: "7dcfb467-88c8-4ac5-9bd9-d3ce94643492",
    category: "sweatshirt",
    name: "Ürün Adı 1",
    description: "Bu giyim ürünü harika bir açıklamaya sahiptir.",
    price: 49.99,
    image: "/products/black_hoodie_mockup.png",
    isTripleBig: true,
    isTripleSmall: false,
    isQuadrant: false,
  },
  {
    id: "3af83218-5c4c-4469-bdca-51b45fd00c82",
    category: "elektronik",
    name: "Ürün Adı 2",
    description: "Bu elektronik ürün harika bir açıklamaya sahiptir.",
    isTripleBig: false,
    isTripleSmall: true,
    isQuadrant: false,
    price: 399.99,
    image: "/products/laptop.png",
  },
  {
    id: "1ce07de3-d802-4824-afcf-62ae2a2c3e4a",
    category: "elektronik",
    name: "Ürün Adı 4",
    description: "Bu elektronik ürün harika bir açıklamaya sahiptir.",
    isTripleBig: false,
    isTripleSmall: true,
    isQuadrant: false,
    price: 399.99,
    image: "/products/headphone.png",
  },
  {
    id: "24cb5a41-684c-4941-bec8-39fae9b136a5",
    category: "pantolon",
    name: "Ürün Adı 3",
    description: "Bu ayakkabı harika bir açıklamaya sahiptir.",
    isTripleBig: false,
    isTripleSmall: false,
    isQuadrant: true,
    price: 79.99,
    image: "/products/jean.png",
  },
  {
    id: "4c6eae9b-7ed1-4f25-8098-4392e5d2a196",
    category: "ayakkabi",
    name: "Ürün Adı 3",
    description: "Bu ayakkabı harika bir açıklamaya sahiptir.",
    isTripleBig: false,
    isTripleSmall: false,
    isQuadrant: true,
    price: 79.99,
    image: "/products/shoes.png",
  },
  {
    id: "0c9d790d-f260-4e9a-9e1a-8a85fb6e22fa",
    category: "beyaz-esya",
    name: "Ürün Adı 3",
    description: "Bu ayakkabı harika bir açıklamaya sahiptir.",
    isTripleBig: false,
    isTripleSmall: false,
    isQuadrant: true,
    price: 79.99,
    image: "products/fridge.png",
  },
  {
    id: "c1dec8d3-b693-46e0-bbcf-dd35ccb0f071",
    category: "mutfak",
    name: "Ürün Adı 3",
    description: "Bu ayakkabı harika bir açıklamaya sahiptir.",
    isTripleBig: false,
    isTripleSmall: false,
    isQuadrant: true,
    price: 79.99,
    image: "/products/pan.png",
  }, */
  {
    id: "3a46844a-1b1e-4c9b-a66b-cdf3bdf16987",
    category: "beyaz-esya",
    name: "Ürün Adı Camasir makinesi",
    description: "Bu ayakkabı harika bir açıklamaya sahiptir.",
    isTripleBig: false,
    isTripleSmall: false,
    isQuadrant: false,
    price: 79.99,
    image: "products/fridge.png",
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
    const dropTable = await client.sql`DROP TABLE IF EXISTS campaigns;`;

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
    campaign_slug VARCHAR(255) NOT NULL,
    campaign_name VARCHAR(255) NOT NULL,
    campaign_description TEXT NOT NULL,
    campaign_desktop_image VARCHAR(255) NOT NULL,
    campaign_mobile_image VARCHAR(255) NOT NULL,
    campaign_link VARCHAR(255) NOT NULL,
    campaign_start_date DATE NOT NULL,
    campaign_end_date DATE NOT NULL
    )
    `;
    // insert data into the "categories" table

    const insertedCampaigns = await Promise.all(
      campaigns.map(
        (campaign) => client.sql`
            INSERT INTO campaigns (campaign_id, campaign_slug, campaign_name, campaign_description, campaign_desktop_image, campaign_mobile_image, campaign_link, campaign_start_date, campaign_end_date)
            VALUES (${campaign.id}, ${campaign.campaignSlug}, ${campaign.campaignName}, ${campaign.campaignDescription}, ${campaign.campaignDesktopImage}, ${campaign.campaignMobileImage}, ${campaign.campaignLink}, ${campaign.campaignStartDate}, ${campaign.campaignEndDate})
            ON CONFLICT (id) DO NOTHING;
            `,
      ),
    );
    return {
      createTable,
      campaigns: insertedCampaigns,
    };
  } catch (error) {
    console.error("Error seeding campaigns", error);
    throw error;
  }
}

async function seedProducts(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    const createProductsTable = await client.sql`
    CREATE TABLE IF NOT EXISTS products (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    category VARCHAR(50) NOT NULL,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    isTripleBig BOOLEAN,
    isTripleSmall BOOLEAN,
    isQuadrant BOOLEAN,
    image VARCHAR(255) NOT NULL
    )
    `;
    const insertedProducts = await Promise.all(
      products.map(
        (product) => client.sql`
            INSERT INTO products (id, category, name, description, price, isTripleBig, isTripleSmall, isQuadrant, image)
            VALUES (${product.id}, ${product.category}, ${product.name}, ${product.description}, ${product.price}, ${product.isTripleBig}, ${product.isTripleSmall}, ${product.isQuadrant}, ${product.image})
            ON CONFLICT (id) DO NOTHING;
            `,
      ),
    );

    return {
      createProductsTable,
      insertedProducts,
    };
  } catch (error) {
    console.error("Error seeding categories", error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();
  /* await seedCampaigns(client); */
  /* await dropInvoicesTable(client); */
  /* await seedProducts(client); */

  await client.end();
}
main().catch((err) => {
  console.error(
    "An error occurred while attempting to seed the database:",
    err,
  );
});
