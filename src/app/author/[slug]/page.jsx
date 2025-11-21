// app/author/[slug]/page.jsx

import AuthorPage from "@/components/authorSection/authorprofile";
import { base_url } from "@/components/helper/Helper";

export async function generateMetadata({ params }) {
  const slug = params.slug;
  const baseUrl = "https://top5shots.com";

  // console.log("slug is sjjns" , slug)

  try {
    const res = await fetch(`${base_url}/api/auth/singleUserbyslug/${slug}`, {
      next: { revalidate: 60 },
    });
      // console.log("response is ", res)

    if (!res.ok) {
      return {
        title: "Author Not Found | Top5Shots",
        description: "No author information available at the moment.",
        alternates: {
          canonical: `${baseUrl}/author/${slug}`,
        },
      };
    }

    const data = await res.json();
    const author = data[0];

    if (!author) {
      return {
        title: "Author Not Found | Top5Shots",
        description: "No author information available at the moment.",
        alternates: {
          canonical: `${baseUrl}/author/${slug}`,
        },
      };
    }

    const fullName = `${author.firstName} ${author.lastName}`;
    const bio =
      author.shortBio ||
      `Explore articles and insights by ${fullName} on Top5Shots.`;
    const imageUrl = author.image
      ? author.image.startsWith("http")
        ? author.image
        : `${baseUrl}${author.image}`
      : `${baseUrl}/images/default-user.png`;

    return {
      title: `${fullName} | Author at Top5Shots`,
      description: bio,
      keywords: [
        fullName,
        "Top5Shots authors",
        "tech blog authors",
        "curated content writer",
        "top 5 articles",
        "insights by " + fullName,
      ],
      alternates: {
        canonical: `${baseUrl}/author/${slug}`,
      },
      openGraph: {
        title: `${fullName} | Top5Shots`,
        description: bio,
        url: `${baseUrl}/author/${slug}`,
        siteName: "Top5Shots",
        type: "profile",
        images: [
          {
            url: imageUrl,
            width: 800,
            height: 800,
            alt: `Photo of ${fullName}`,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: `${fullName} | Top5Shots`,
        description: bio,
        images: [imageUrl],
      },
    };
  } catch (error) {
    return {
      title: "Author Profile | Top5Shots",
      description:
        "Author information could not be loaded due to a network issue.",
      alternates: {
        canonical: `${baseUrl}/author/${slug}`,
      },
    };
  }
}

export default function Page({ params }) {

   const slug = params.slug;

  // console.log("paramzs is " , slug)
  
  return <AuthorPage slug={slug} />;
}
