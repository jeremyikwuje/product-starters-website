import { marked } from 'marked';
import { getPost } from "$lib/server/services/post.service";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }) => {
  const slug = params.slug;
  const post = await getPost(slug);
  const content = marked(post.content);

  return { 
    post,
    content: content,
  };
};