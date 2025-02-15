<script lang="ts">
  import '../../../prose.css';
	import { formatTeamSize, getIntervalAbbreviation } from "$lib";
	import { formatNumber } from "$lib/utils/money";

  export let data;

  const post = data.post;
  const content = data.content;
</script>

<svelte:head>
  <title>{post.post.casestudy.business_name} Case Study: {post.post.title}</title>
  <meta name="description" content="{post.post.excerpt}">

  <!-- Open Graph Meta Tags-->
  <meta property="og:title" content="{post.post.casestudy.business_name} Case Study: {post.post.title}">
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
    <!-- Business name -->
    <span class="block text-center text-lg md:text-xl font-bold mb-8">{post.post.casestudy.business_name} Case Study:</span>

    <!-- Main Header -->
    <h1 class="text-center text-3xl md:text-4xl font-bold text-gray-800 mb-8">{post.post.title}</h1>

    <!-- Excerpt -->
    <div class="mb-8 space-x-6 bg-white border border-black rounded-sm p-4 italic">
      {post.post.excerpt}
    </div>


    <!-- Profile Section -->
    <div class="flex items-center space-x-6 bg-white border-2 border-gray-100 rounded-lg p-4 text-sm md:tex-lg">
        <img src="https://ik.imagekit.io/productstarters/casestudies/icons/{post.post.casestudy.business_name_slug}.webp" class="w-16 h-16 md:w-24 md:h-24 rounded-full border-4 border-gray-50" alt="{post.post.casestudy.business_owners[0]} avatar">
        <div>
            <h2 class="text-lg md:text-xl font-semibold">{post.post.casestudy.business_name}</h2>
            <p class="">{post.post.casestudy.website_url}</p>
            <p class="">
              Key Figure{post.post.casestudy.business_owners.length > 1 ? 's': ''}: <strong>{post.post.casestudy.business_owners.join(', ')}</strong>
            </p>
        </div>
    </div>

    <!-- Info Section -->
    <div class="mt-8 border-2 border-gray-100 text-black p-4 rounded-lg flex flex-col md:flex-row justify-between items-startmd:items-center">
        <div class="flex items-center space-x-4 border-b border-gray-100 md:border-b-0 pb-4 md:pb-0 mb-4 md:mb-0">
            <span class="text-3xl font-bold">${formatNumber(post.post.casestudy.revenue)}</span>
            <span>REVENUE/{getIntervalAbbreviation(post.post.casestudy.revenue_interval).toUpperCase()}</span>
        </div>
        <div class="flex items-center space-x-4 border-b border-gray-100 md:border-b-0 pb-4 md:pb-0 mb-4 md:mb-0">
          <span class="text-3xl font-bold">${formatNumber(post.post.casestudy.startup_cost)}</span>
          <span>STARTUP COST</span>
      </div>
      <div class="flex space-x-4">
          <span class="text-xl">{formatTeamSize(post.post.casestudy.employees_size)}</span>
          <span class="text-xl">EMPLOYEES</span>
      </div>
      <!-- <button class="bg-transparent border-2 border-white text-white px-4 py-2 rounded-lg">SAVE</button> -->
    </div>

    <!-- Content Section -->
    <article class="mt-12 mx-auto w-full prose">
      {@html content}
    </article>
  </div>
</div>