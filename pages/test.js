import { createClient } from "next-sanity"

// Create a single client instance that can be reused
const getSanityClient = () => {
  return createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2023-05-03",
    useCdn: false,
  })
}

export default function Home({ posts, authorName }) {
  return (
    <div>
      <h1>Tech Blog Posts by {authorName}</h1>
      <div>
        {posts.map((post) => (
          <div key={post.slug.current}>
            <h2>{post.title}</h2>
            <p>{post.metadesc}</p>
            <p>Published: {new Date(post.publishedAt).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  try {
    const client = getSanityClient()

    // Add console logs for debugging
    console.log("Environment variables:", {
      projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ? "Set" : "Not set",
      dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ? "Set" : "Not set",
      apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION ? "Set" : "Not set",
    })

    const query = `*[_type == "techblog" &&  "Tech" in categories[]->title]{
      slug, 
      "slug": slug.current,
      metadesc, 
      title, 
      publishedAt, 
      mainImage
    }`

    const posts = await client.fetch(query)
    console.log("Fetched posts count:", posts.length)

    const authorquery = `*[_type == "author"]{name}[0]`
    const author = await client.fetch(authorquery)
    console.log("Fetched author:", author)

    return {
      props: {
        posts,
        authorName: author?.name || "Unknown Author",
      },
    }
  } catch (error) {
    console.error("Error fetching data:", error)
    // Return more detailed error information in development
    return {
      props: {
        posts: [],
        authorName: "",
        error: process.env.NODE_ENV === "development" ? error.message : "An error occurred",
      },
    }
  }
}

