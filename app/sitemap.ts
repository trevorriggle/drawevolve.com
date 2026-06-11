import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://drawevolve.com",
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://drawevolve.com/privacy",
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: "https://drawevolve.com/terms",
      changeFrequency: "monthly",
      priority: 0.3,
    },
  ];
}
