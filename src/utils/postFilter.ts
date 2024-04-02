// import { SITE } from "@config";
import type { CollectionEntry } from "astro:content";

const postFilter = ({ data }: CollectionEntry<"posts">) => {
  const isPublishTimePassed =
    Date.now() > new Date(data.pubDate).getTime() - 15 * 60 * 1000;
  return import.meta.env.DEV || isPublishTimePassed;
};

export default postFilter;
