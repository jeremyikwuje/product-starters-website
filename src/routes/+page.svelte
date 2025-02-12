<script lang="ts">
	import { capitalizeFirstWord } from "$lib";
	import { formatNumber } from "$lib/utils/money";

  export let data;

  const posts = data.posts;
</script>

<svelte:head>
  <title>Product Starters – Case Studies of Founders Building & Earning</title>
  <meta name="description" content="Discover stories of founders building products and making money. Get insights, lessons, and inspiration from real entrepreneurs on Product Starters.">
  
  <!-- Open Graph Meta Tags -->
  <meta property="og:title" content="Product Starters – Case Studies of Founders Building & Earning">
  <meta property="og:description" content="Discover stories of founders building products and making money. Get insights, lessons, and inspiration from real entrepreneurs on Product Starters.">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://productstarters.com/">
  <meta property="og:image" content="https://productstarters.com/logo.jpg">
</svelte:head>

<div class="container">
  <div class="py-16">
    <h1 class="mb-4 text-6xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-4xl dark:text-white">
      Full Case Studies
    </h1>
  </div>


  <div class="case-studies">
    {#each posts as post}
    <div class="p-5 bg-white rounded-xl shadow-sm border-3 border-gray-100">
      <div class="space-x-4">
        <div class="flex flex-col md:flex-row items-start md:items-center">
          {#if post.casestudy.business_owner_image}
            <img src={post.casestudy.business_owner_image} alt="Profile" class="w-10 h-10 rounded-full mr-4 mb-4 md:mb-0">
          {:else}
            <span class="flex items-center w-10 h-10 rounded-full mr-4 mb-4 md:mb-0 bg-gray-200 flex-shrink-0 place-content-center">
              <span class="text-gray-600 font-semibold text-sm">{post.casestudy.business_name.substring(0, 2).toUpperCase()}</span>
            </span>
          {/if}
          <a href="/casestudy/{post.slug}" class="text-xl font-bold !text-black">{post.title}</a>
        </div>
        <div>
          <p class="text-gray-600 mt-3">{post.excerpt}</p>
          <div class="flex flex-col items-start md:flex-row md:items-center space-x-3 mt-3">
            <span class="inline-block mb-2 md:mb-0">
              <span class="text-black font-bold">${formatNumber(post.casestudy.revenue)}</span>
              <span class="text-gray-500 font-semibold">{capitalizeFirstWord(post.casestudy.revenue_interval)} Revenue</span>
            </span>
            <span>
              <span class="text-black font-bold">${formatNumber(post.casestudy.startup_cost)}</span>
              <span class="text-gray-500 font-semibold">Startup Costs</span>
            </span>
          </div>
          <!-- <div class="flex items-center mt-3">
            <div class="flex -space-x-2">
              <img src="https://via.placeholder.com/24" class="w-6 h-6 rounded-full border border-white" alt="User 1">
              <img src="https://via.placeholder.com/24" class="w-6 h-6 rounded-full border border-white" alt="User 2">
              <img src="https://via.placeholder.com/24" class="w-6 h-6 rounded-full border border-white" alt="User 3">
              <img src="https://via.placeholder.com/24" class="w-6 h-6 rounded-full border border-white" alt="User 4">
            </div>
            <span class="ml-2 text-gray-500 text-sm">Read by <span class="font-bold text-black">95,923</span> founders</span>
          </div> -->
        </div>
      </div>
    </div>
    {/each}
  </div>
</div>