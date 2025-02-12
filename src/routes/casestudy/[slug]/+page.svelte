<script lang="ts">
  import '../../../prose.css';
	import { formatTeamSize, getIntervalAbbreviation } from "$lib";
	import { formatNumber } from "$lib/utils/money";

  export let data;

  const post = data.post;
  const content = data.content;
</script>

<svelte:head>
  <title>{post.post.title} | Product Starters</title>
  <meta name="description" content="{post.post.excerpt}">

  <!-- Open Graph Meta Tags-->
  <meta property="og:title" content="{post.post.title} | Product Starters">
  <meta property="og:description" content="{post.post.excerpt}">
  <meta property="og:type" content="article">
  <meta property="og:url" content="https://productstarters.com/casestudy/{post.post.slug}">
  {#if post.post.featured_img}
    <meta property="og:image" content="{post.post.featured_img}">
  {:else}
  <meta property="og:image" content="https://productstarters.com/logo.jpg">
  {/if}
</svelte:head>

<div class="container">
  <div class="max-w-3xl mx-auto py-16">
    <!-- Main Header -->
    <h1 class="text-4xl font-bold text-gray-800 mb-8">{post.post.title}</h1>

    <!-- Profile Section -->
    <div class="flex items-center space-x-6 bg-primary rounded-lg p-4">
        <img src="https://avatar.iran.liara.run/public/30" class="w-24 h-24 rounded-full border-4 border-white" alt="{post.post.casestudy.business_owners[0]} avatar">
        <div>
            <h2 class="text-xl font-semibold text-white">{post.post.casestudy.business_owners[0]}</h2>
            <p class="text-white">Founder, {post.post.casestudy.business_name}</p>
        </div>
    </div>

    <!-- Info Section -->
    <div class="mt-8 border-2 border-gray-100 text-black p-4 rounded-lg flex flex-col md:flex-row justify-between items-startmd:items-center">
        <div class="flex items-center space-x-4 border-b border-gray-100 md:border-b-0 pb-4 md:pb-0 mb-4 md:mb-0">
            <span class="text-3xl font-bold">${formatNumber(post.post.casestudy.revenue)}</span>
            <span>REVENUE/{getIntervalAbbreviation(post.post.casestudy.revenue_interval).toUpperCase()}</span>
        </div>
        <div class="flex space-x-4 ">
            <span class="text-xl">{post.post.casestudy.business_owners.length}</span>
            <span class="text-xl">FOUNDERS</span>
        </div>
        <div class="flex space-x-4">
          <span class="text-xl">{formatTeamSize(post.post.casestudy.employees_size)}</span>
          <span class="text-xl">EMPLOYEES</span>
      </div>
      <!-- <button class="bg-transparent border-2 border-white text-white px-4 py-2 rounded-lg">SAVE</button> -->
    </div>

    <!-- Content Section -->
    <article class="mt-8 mx-auto prose lg:prose-xl">
      {@html content}
    </article>
  </div>
</div>