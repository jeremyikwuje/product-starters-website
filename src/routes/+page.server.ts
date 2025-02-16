import { PostType, PostVisibilty } from "$lib/constant";
import { getPosts } from "$lib/server/services/post.service";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
  const posts = await getPosts(PostType.CaseStudy, true, PostVisibilty.public);
  return { 
    posts: posts.results,
  };
};