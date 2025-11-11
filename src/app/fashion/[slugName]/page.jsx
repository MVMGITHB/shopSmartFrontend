import Article from "@/components/Article/Article";
import { base_url } from "@/components/helper/Helper";
// import { base_url } from "@/components/Helper/helper";
import axios from "axios";
import Script from "next/script";

const Base_url = "https://trendingstori.com/";

export async function generateMetadata({ params }) {
  const { slugName } = await params;

  try {
    const response = await axios.get(
      `${base_url}/api/blog/getOneBlogByslug/${slugName}`
    );
    const data = response.data;

    return {
      title: data?.title || "trendingstori",
      description: data?.subtitle || "Latest article from trendingstori",
      metadataBase: new URL("https://trendingstori.com"),
      alternates: {
        canonical: "./",
      },
      openGraph: {
        title: data?.title,
        description: data?.subtitle,
        url: `https://trendingstori.com/blog/${slugName}`,
        type: "article",
        siteName: "trendingstori",
        images: [
          {
            url: `${base_url}${data?.image}`,
            width: 1200,
            height: 630,
            alt: data?.title,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: data?.title,
        description: data?.subtitle,
        images: [`${base_url}${data?.image}`],
      },
    };
  } catch (error) {
    console.error("SEO metadata error:", error);
    return {
      title: "trendingstori",
      description: "Latest news, blogs and stories from trendingstori.",
    };
  }
}

export default async function Page({ params }) {
  const { slugName } = await params;

  try {
    const response = await axios.get(
      `${base_url}/api/blog/getOneBlogByslug/${slugName}`
    );
    const data1 = response.data;

    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://trendingstori.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: data1?.title,
          item: `https://trendingstori.com/blog/${slugName}`,
        },
      ],
    };

    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `https://trendingstori.com/blog/${slugName}`,
      },
      headline: data1?.title,
      description: data1?.subtitle,
      image: [`${base_url}${data1?.image}`],
      author: {
        "@type": "Organization",
        name: "trendingstori",
        url: "https://trendingstori.com",
      },
      publisher: {
        "@type": "Organization",
        name: "trendingstori",
        logo: {
          "@type": "ImageObject",
          url: "https://trendingstori.com/images/logo.png", // ✅ Update to actual logo path
        },
      },
      datePublished: data1?.createdAt,
      dateModified: data1?.updatedAt || data1?.createdAt,
    };

    return (
      <>
        {/* JSON-LD Schema */}
        <Script
          id="breadcrumb-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <Script
          id="article-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />

        <Article data={data1} />
      </>
    );
  } catch (error) {
    console.error("Error fetching article:", error);
    return <div>Failed to load article.</div>;
  }
}
