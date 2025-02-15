/* eslint-disable @typescript-eslint/no-explicit-any */
import { marked } from 'marked';
import { getPost } from "$lib/server/services/post.service";
import type { PageServerLoad } from "./$types";
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params }) => {
  try {
    const slug = params.slug;
    const post = await getPost(slug);
    if (!post) {
      error(404, 'Post not found');
    }

    const content = marked(post.content);

    return { 
      post,
      content: content,
    };
  } catch(e: any) {
    error(e.status || 500, e.body.message || 'Something went wrong');
  }
};