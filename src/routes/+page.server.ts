import { PostType } from "$lib/constant";
import { getPosts } from "$lib/server/services/post.service";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
  const posts = await getPosts(PostType.CaseStudy);
  return { 
    posts: posts.results,
  };
};