import { PostVisibilty, type PostType } from "$lib/constant";
import { requestApi } from "$lib/utils/utilities";

export const getPosts = async (type: PostType) => {
  const url = `/posts/get_posts?post_type=${type}&visibility=${PostVisibilty.public}&is_published=true`;
  const requestPosts = await requestApi(url);
  const posts = requestPosts.data;

  return posts;
}

export const getPost = async (postUnique: string) => {
  const url = `/posts/get_post?post_unique=${postUnique}`;
  const requestPost = await requestApi(url);
  if (requestPost.error) {
    console.error(requestPost.error);
    return null;
  }

  const post = requestPost.data;

  return post;
}