# Next.js Commerce

A Next.js 14 and App Router ecommerce application

## 🔥 Featuring

- Next.js App Router
- Typescript
- Optimized for SEO using Next.js's Metadata
- Optimized for Core Web Vitals
- Styling with Tailwind CSS
- Optimized for Next.js + Tailwind CSS (cssnano + postcss-import)
- React Server Components (RSCs) and Suspense
- Server Actions for mutations
- New fetching and caching paradigms
- Zustand for Context Management

## 🛣️ Routing 

The Next.js App Router introduces a new model for building applications using React's latest features such as Server Components, Streaming with Suspense, and Server Actions.

## 📁 Project Organization and File Colocation

Each folder represents a route segment that is mapped to a corresponding segment in a URL path.

```
app
├── api
│   └── sepet
│       └── route.tsx
├── arama
│   ├── [collection]
│   │   └── page.tsx
│   ├── layout.tsx
│   └── page.tsx
├── kampanyalar
│   └── [slug]
│       ├── error.tsx
│       └── page.tsx
├── layout.tsx
├── not-found.tsx
├── page.tsx
├── sepet
│   ├── checkout
│   │   └── page.tsx
│   ├── kargo
│   │   └── page.tsx
│   ├── layout.tsx
│   ├── odeme
│   │   └── page.tsx
│   └── page.tsx
├── siparis-sonuc
│   └── page.tsx
├── urun
│   └── [name]
│       └── page.tsx
```

## ⬆️ Metadata 
Next.js has a Metadata API that can be used to define your application metadata for improved SEO and web shareability.
#### Two ways to add metadata were used in the application:
1- Config-based Metadata:
  - Export a static metadata object: 
```js
export const metadata: Metadata = {
  title: "Sepet",
  description: "Siparişinizi hemen tamamlayın hemen teslim edelim!",
};
```
  - Dynamic generateMetadata function
```js
export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const category = collectionsMetaData.find(
    (element) => element.link === params.collection,
  );

  return {
    title: category?.title,
    description: category?.description,
    openGraph: {
      images: category?.openGraphImage,
    },
  };
}
```
2- File-based Metadata:
 - favicon file added to app directory

## ✈️ Core Web Vitals
Core Web Vitals (LCP, FID, CLS) are key metrics assessing webpage loading speed, interactivity, and visual stability, crucial for user satisfaction and search rankings. Optimizing them enhances website performance and visibility. 

**What was done in application?**
- Image Optimization for LCP
- Defer offscreen images for Speed Index
- Used Skeletons of components for CLS
- Cssnano used for optimization Tailwind + Next.js CSS
- ... 

**For example Lighthouse report:**

<img src="https://github.com/enesergun/nextjs-commerce-app-router/assets/63712936/63454220-4014-4c19-94ea-e744ecd50fa1" width="300" alt="report one"/>
<img src="https://github.com/enesergun/nextjs-commerce-app-router/assets/63712936/17ddbc07-a28a-4ee7-9f39-1dd8c5114247" width="350" alt="report two"/>

## 🚚 Server Actions and Mutations
The part of the application that excited me the most was experiencing server actions.

Server actions were used in the `actions.ts` file. Here, actions such as form validations with <a href="https://zod.dev/">zod</a>, writing to cookies and fetching. For example,
**when form like this:**
```js
<form action={handleSubmit}>...</form>
```
**action like this**
```js
export async function basketInformationFnc(
  prevSate: Awaited<State>,
  data: FormData,
) {
  const inputObject = {
    ...inputs,
  };
  noStore();
  // Validate form using Zod
  const validatedFields = basketValidation.safeParse(inputObject);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Submit Form.",
    };
  }

  try {
    const cookieStore = cookies();
    cookieStore.set("basket_information", JSON.stringify(inputObject));
  } catch (error) {
    return {
      message: "Error: Something went wrong.",
    };
  }
  redirect("/sepet/kargo");
}
```
### Data Mutations
The fetching process was performed by writing SQL queries with <a href="https://vercel.com/docs/storage/vercel-postgres">vercel/postgres</a> in the data.ts file.
```js
export async function fetchCampaignBanners() {
  try {
    const campaigns = await sql<CAMPAING_ELEMENT>`
    SELECT campaign_name, campaign_link, campaign_id, campaign_desktop_image, campaign_mobile_image
FROM campaigns;
`;
    return campaigns.rows;
  } catch (error) {
    console.error("Database Error", error);
    throw new Error("Failed to fetch campaigns");
  }
}
```
## 🪢 Fetching in a Server Component Using a Server Action
This paradigm leverages the server-side capabilities of Next.js to fetch data. Also you can see async components:

```js
export default async function ProductDetail({ name }: { name: string }) {
  const data = await fetchProductDetail(name);

  return (
    <div className="p-4 lg:px-6 max-w-screen-xl mx-auto gap-3 sm:flex sm:border sm:p-12 rounded-2xl justify-around mt-5">
      <ProductContent data={data} />
    </div>
  );
}
```
## 📞 Get Feedback

You can contact me via enesergun1515@gmail.com or through <a href="https://www.linkedin.com/in/enesergun/" >LinkedInd</a> to provide feedback on the project.
