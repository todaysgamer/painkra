import { createClient } from 'next-sanity'

const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
    useCdn: false

  });

export async function getAllMobile() {
  const query = '*[_type == "techblog"]{ slug, lastModified }';
  return await client.fetch(query);
}
