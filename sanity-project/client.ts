import { createClient } from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "ubkm9twf",
  dataset: "production",
  apiVersion: "2025-01-22",
  useCdn: true,
  token: process.env.SANITY_TOKEN
});

const builder = ImageUrlBuilder(client);
export const urlFor = (source: any) => builder.image(source);