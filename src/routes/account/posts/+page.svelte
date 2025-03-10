<script lang="ts">
	import PostTable from '$lib/components/PostTable.svelte';


  export let data;

  const posts = data.posts;
  const published = posts.published;
  const drafts = posts.drafts;

  function togglePublished() {
    const publishedTab = document.getElementById('publishedTab');
    const draftsTab = document.getElementById('draftsTab');
    const publishedTable = document.getElementById('publishedTable');
    const draftsTable = document.getElementById('draftsTable');

    publishedTable?.classList.remove('hidden');
    draftsTable?.classList.add('hidden');

    publishedTab?.classList.add('active');
    draftsTab?.classList.remove('active');
  }

  function toggleDrafts() {
    const publishedTab = document.getElementById('publishedTab');
    const draftsTab = document.getElementById('draftsTab');
    const publishedTable = document.getElementById('publishedTable');
    const draftsTable = document.getElementById('draftsTable');

    draftsTable?.classList.remove('hidden');
    publishedTable?.classList.add('hidden');

    draftsTab?.classList.add('active');
    publishedTab?.classList.remove('active');
  }
</script>

<div class="w-full container mx-auto p-6 overflow-x-auto">
  <div class="flex items-center justify-end">
    <a href="/account/posts/new" class="btn-black">Create Post</a>

  </div>
  <!-- Tabs -->
  <div class="flex space-x-4">
      <button id="publishedTab" onclick={togglePublished} onkeydown={togglePublished} class="tab-button active">Published</button>
      <button id="draftsTab" onclick={toggleDrafts} onkeydown={toggleDrafts} class="tab-button">Drafts</button>
  </div>
  
  <!-- Published Table -->
  <div id="publishedTable">
    <PostTable posts={published} />
  </div>
  
  <!-- Drafts Table -->
  <div id="draftsTable" class="hidden">
    <PostTable posts={drafts} />
  </div>
</div>

<style>
  .tab-button {
    padding: 5px 0px;
    border-bottom: 2px solid transparent;
    cursor: pointer;
    transition: all 0.3s;
  }
  .tab-button.active {
    font-weight: bold;
    border-bottom: 2px solid #2563eb;
    color: #2563eb;
  }
  .table-container {
    overflow-x: auto;
  }
</style>
