/* eslint-disable @typescript-eslint/no-explicit-any */
import type { PostType } from '$lib/constant';
import { getPost, getPosts } from '$lib/server/services/post.service';
import { json } from '@sveltejs/kit';

export async function GET ({ url }) {
  const urlParams = url.searchParams;
  const postType = urlParams.get('post_type') || 'casestudy';
  const postUnique = urlParams.get('post_unique');

  let result: any;

  if (postUnique) {
    result = await getPost(postUnique);
  } else {
    result = await getPosts(postType as PostType);
  }

  return json(result);
}