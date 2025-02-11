import type { PostType } from "$lib/constant";
import { requestApi } from "$lib/utils/utilities";

export const getPosts = async (type: PostType) => {
  const url = `/posts/get_posts?type=${type}`;
  const request_picks = await requestApi(url);
  const posts = request_picks.data;

  return posts;
}

export const getPost = async (postUnique: string) => {
  const url = `/posts/get_post?post_unique=${postUnique}`;
  const request_pick = await requestApi(url);
  const post = request_pick.data;

  return post;
}