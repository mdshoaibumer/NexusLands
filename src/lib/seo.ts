export interface SEOProps {
  title: string;
  description: string;
  url: string;
  image?: string;
  type?: string;
  schema?: string;
}

export function constructSEO({
  title,
  description,
  url,
  image = "https://nexuslands.in/og-image.jpg",
  type = "website",
  schema,
}: SEOProps) {
  const meta: Array<Record<string, unknown>> = [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: url },
    { property: "og:type", content: type },
    { property: "og:image", content: image },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: image },
  ];

  if (schema) {
    meta.push({
      tagName: "script",
      type: "application/ld+json",
      children: schema,
    });
  }

  return meta;
}
