import { PostType } from "$lib/constant";
import { getPosts } from "$lib/server/services/post.service";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {

  const publishedPosts = await getPosts(PostType.CaseStudy, true);
  const draftPosts = await getPosts(PostType.CaseStudy, false);

  return { 
    posts: {
      published: publishedPosts.results,
      drafts: draftPosts.results
    },
  };
};