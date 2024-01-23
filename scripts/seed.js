/* const { db } = require("@vercel/postgres");

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
  {
    id: "7dcfb467-88c8-4ac5-9bd9-d3ce94643492",
    category: "sweatshirt",
    name: "Siyah Sweatshirt",
    description:
      "Şıklık ve rahatlık arayanlar için tasarlanan Siyah Basic Kapüşonlu Sweatshirt, günlük şıklığınızı tamamlayacak bir parça. Yüksek kaliteli pamuk karışımı malzemesi sayesinde, hem konforlu hem de dayanıklı bir giyim deneyimi sunar.",
    price: 429.99,
    image: "/products/black_hoodie_mockup.png",
    isTripleBig: true,
    isTripleSmall: false,
    isQuadrant: false,
  },
  {
    id: "c7846e76-c9fc-4725-92a1-8d4725a1da2f",
    category: "sweatshirt",
    name: "Beyaz Sweatshirt",
    description:
      "Yalın güzellik ve rahatlık arayanların favorisi olan Beyaz Rahat Kesim Sweatshirt, şıklığı basit ve zarif bir şekilde bir araya getiriyor. Yüksek kaliteli malzemesi ve konforlu tasarımı ile bu sweatshirt, günlük şıklığınızı tamamlamak için mükemmel bir seçenek.",
    price: 629.99,
    image: "/products/white_hoodie.png",
    isTripleBig: false,
    isTripleSmall: false,
    isQuadrant: false,
  },
  {
    id: "83018d42-a5aa-49b9-a3d1-9e454fc0e113",
    category: "sweatshirt",
    name: "Baskılı Sweatshirt",
    description:
      "Moda ve özgünlük arayanların tercihi olan Trendy Baskılı Kapüşonlu Sweatshirt, tarzınıza renk katmak için tasarlandı. Eşsiz baskı detaylarıyla dikkat çeken bu sweatshirt, hem şık hem de dikkat çekici bir görünüm sunar.",
    price: 829.99,
    image: "/products/94.jpg",
    isTripleBig: false,
    isTripleSmall: false,
    isQuadrant: false,
  },
  {
    id: "3af83218-5c4c-4469-bdca-51b45fd00c82",
    category: "elektronik",
    name: "İş Bilgisayarı",
    description:
      "Güçlü performansı, dayanıklı tasarımı ve işlevselliği bir araya getiren Profesyonel İş Bilgisayarı, iş dünyasının ihtiyaçlarına uygun olarak tasarlandı. Gelişmiş özellikleri ve sağlam yapısı ile bu bilgisayar, iş süreçlerinizi daha verimli hale getirmek için ideal bir çözümdür.",
    isTripleBig: false,
    isTripleSmall: true,
    isQuadrant: false,
    price: 399.99,
    image: "/products/laptop.png",
  },
  {
    id: "1ce07de3-d802-4824-afcf-62ae2a2c3e4a",
    category: "elektronik",
    name: "Kulaklık",
    description:
      "Mükemmel ses kalitesi, rahat tasarım ve kablosuz özgürlük bir araya geldi! Premium Ses Deneyimi Sunan Kablosuz Kulaklık, her müzikseverin, oyuncunun ve çağrıda bulunanın aradığı birinci sınıf ses deneyimini sunmak üzere tasarlandı.",
    isTripleBig: false,
    isTripleSmall: true,
    isQuadrant: false,
    price: 4099.99,
    image: "/products/headphone.png",
  },
  {
    id: "24cb5a41-684c-4941-bec8-39fae9b136a5",
    category: "pantolon",
    name: "Mavi Pantolon",
    description:
      "Her zaman modada ve her duruma uygun olan Klasik Kot Pantolon, zamanın ötesindeki tasarımı ve konforu ile öne çıkıyor. Günlük yaşamın vazgeçilmez parçası olan bu kot pantolon, şıklığı rahatlıkla bir araya getirir.",
    isTripleBig: false,
    isTripleSmall: false,
    isQuadrant: true,
    price: 245.99,
    image: "/products/jean.png",
  },
  {
    id: "0e3b9ca4-407d-460d-911d-9ad20cf7ff64",
    category: "pantolon",
    name: "Kargo Pantolon",
    description:
      "Modern Kargo Pantolon, pratik tasarımı ve şık görünümü ile hareket halindeki yaşam tarzınız için ideal bir seçenektir. Klasik kargo detayları ve fonksiyonellik, bu pantolonu günlük şıklığınızın bir parçası haline getirir.",
    isTripleBig: false,
    isTripleSmall: false,
    isQuadrant: false,
    price: 679.99,
    image: "/products/cargo-pant.png",
  },
  {
    id: "4c6eae9b-7ed1-4f25-8098-4392e5d2a196",
    category: "ayakkabi",
    name: "Koşu Ayakkabısı",
    description:
      "Performans Serisi Koşu Ayakkabısı, koşu tutkunları için özel olarak tasarlanmış birinci sınıf bir ayakkabıdır. Üstün teknoloji ve konfor detayları ile donatılan bu ayakkabı, koşu deneyiminizi zirveye taşımak için tasarlandı.",
    isTripleBig: false,
    isTripleSmall: false,
    isQuadrant: true,
    price: 760.0,
    image: "/products/shoes.png",
  },
  {
    id: "65ac17d4-5e83-4a67-a194-28278d47e5c5",
    category: "ayakkabi",
    name: "Günlük Siyah Ayakkabı",
    description:
      "Sade, şık ve her duruma uygun olan Klasik Siyah Günlük Ayakkabı, gardırobunuzun vazgeçilmezi olmaya aday. Günün her anında stilinizi tamamlayacak bu ayakkabı, hem konforlu tasarımıyla hem de zarif detaylarıyla öne çıkıyor.",
    isTripleBig: false,
    isTripleSmall: false,
    isQuadrant: false,
    price: 530.0,
    image: "/products/black-shoes.jpg",
  },
  {
    id: "0c9d790d-f260-4e9a-9e1a-8a85fb6e22fa",
    category: "beyaz-esya",
    name: "ArcticCool 500L Buzdolabı",
    description:
      "ArcticCool 500L No-Frost Buzdolabı, yenilikçi teknolojisi ve şık tasarımı ile evinizin kalbindeki mükemmel tamamlayıcıdır. Gıdalarınızı taze tutmanın ve depolamanın yanı sıra enerji tasarrufu ve kullanıcı dostu özellikleriyle öne çıkan bu buzdolabı, mutfak deneyiminizi bir üst seviyeye taşıyor.",
    isTripleBig: false,
    isTripleSmall: false,
    isQuadrant: true,
    price: 24249.25,
    image: "/products/fridge.png",
  },
  {
    id: "c1dec8d3-b693-46e0-bbcf-dd35ccb0f071",
    category: "mutfak",
    name: "Chef'sChoice Tava",
    description:
      "Mutfakta ustalaşmanın anahtarı, Chef'sChoice Profesyonel Seramik Kaplama Tava ile lezzet ve pratikliğin bir araya geldiği bir deneyimdir. Yüksek kaliteli malzemeler ve özel tasarımı, bu tavayı mutfakta vazgeçilmez kılacak.",
    isTripleBig: false,
    isTripleSmall: false,
    isQuadrant: true,
    price: 120.30,
    image: "/products/pan.png",
  },
  {
    id: "49089a8a-7cde-45ea-ac21-a7e9588e2ea8",
    category: "esofman",
    name: "Eşofman",
    description:
      "Günlük aktivitelerinizde ve spor seanslarınızda tarzınızı ön plana çıkaran Rahatlık ve Stilin Buluştuğu Eşofman Takımı, konforu ve şıklığı bir araya getiriyor. Hareket özgürlüğü sunan tasarımı ile her anınıza eşlik edecek bir seçenek.",
    isTripleBig: false,
    isTripleSmall: false,
    isQuadrant: false,
    price: 179.99,
    image: "/products/tracksuit.png",
  },
  {
    id: "fabc2fc0-23e6-4bb7-9a94-3d318b5a1702",
    category: "telefon",
    name: "ayPhone X",
    description:
      "Yüksek performans, zarif tasarım ve yenilikçi özellikleri bir araya getiren ayPhone Stellar Akıllı Telefon, dijital dünyanızı daha da aydınlatacak! Güçlü donanımı ve kullanıcı dostu arayüzü ile hayalinizdeki mobil deneyimi sunuyoruz.",
    isTripleBig: false,
    isTripleSmall: false,
    isQuadrant: false,
    price: 12470.0,
    image: "/products/phone.png",
  },
  {
    id: "ff1a8906-2848-4a7e-9e1c-d51aa340512c",
    category: "telefon",
    name: "ayPhone Pro",
    description:
      "ayPhone Pro, teknoloji ve estetiğin mükemmel bir birleşimini sunan, sektördeki en son yenilikleri benimseyen bir akıllı telefon modelidir. Üst düzey özellikleri ve üstün performansıyla, kullanıcı deneyimini sınırları aşan bir seviyeye taşıyor.",
    isTripleBig: false,
    isTripleSmall: false,
    isQuadrant: false,
    price: 1579.99,
    image: "/products/phone-two.png",
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
            `
      )
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
    const dropTable = await client.sql`DROP TABLE IF EXISTS products;`;

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
            `
      )
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
            `
      )
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
  await seedCampaigns(client);
  await dropInvoicesTable(client);
  await seedProducts(client);

  await client.end();
}
main().catch((err) => {
  console.error(
    "An error occurred while attempting to seed the database:",
    err
  );
});
 */
