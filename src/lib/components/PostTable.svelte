<script lang="ts">
  import { formatDate } from '$lib/utils/time';

  export let posts;

  async function deletePost(postUnique: string) {
    // show prompt to confirm
    const confirmDelete = confirm('Are you sure you want to delete this post?');
    if (!confirmDelete) {
      return;
    }

    const response = await fetch(`/api/posts?post_unique=${postUnique}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();

    if (data.error || data.status === 'error') {
      alert(data.error || data.message);
      return;
    }

    if (data.status === 'success') {
      alert('Post deleted successfully');
      window.location.reload();
    }
  }
</script>

<div class="relative overflow-x-auto">
  <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-8 whitespace-nowrap">
    <thead>
        <tr class="border-0 text-left">
            <th class="p-3 pl-0">Title</th>
            <th class="p-3">Business</th>
            <th class="p-3">Visibility</th>
            <th class="p-3">Status</th>
            <th class="p-3">Edited on</th>
            <th class="p-3 pr-0 text-right">Action</th>
        </tr>
    </thead>
    <tbody>
      {#each posts as post}
        <tr class="border-t border-gray-100">
            <td class="p-3 pl-0"><a href="/casestudy/{post.slug}" class="!text-gray-800 hover:underline">{post.title}</a></td>
            <td class="p-3">{post.casestudy.business_name}</td>
            <td class="p-3">{post.visibility}</td>
            <td class="p-3">{post.is_published ? 'Published' : 'Draft'}</td>
            <td class="p-3">{formatDate(post.updated_at)}</td>
            <td class="p-3 pr-0 text-right">
              <a href="/account/posts/{post.slug}/edit" class="text-blue-500 hover:underline mr-2">Edit</a>
              <a tabindex="0" role="button" onclick={() => deletePost(post.slug)} onkeydown={() => deletePost(post.slug)} class="text-red-500 hover:underline">Delete</a>
            </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
