import { PostVisibilty, RequestMethod, type PostType } from "$lib/constant";
import { requestApi } from "$lib/utils/utilities";

export const getPosts = async (
  type: PostType,
  isPublished: boolean = true,
  visibility?: PostVisibilty,
) => {
  let url = `/posts/get_posts?post_type=${type}&is_published=${isPublished}`;
  if (visibility) {
    url += `&visibility=${visibility}`;
  }

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

export const deletePost = async (postUnique: string) => {
  const url = `/posts/delete_post?post_unique=${postUnique}`;
  const requestPost = await requestApi(url, RequestMethod.POST);
  if (requestPost.error) {
    console.error(requestPost.error);
    return null;
  }

  return requestPost;
}