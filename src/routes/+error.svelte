<script lang="ts">
  import { page } from '$app/state';

  let title = `Something went wrong.`;
  let message = 'Oops! Looks like something went wrong. Not your fault.';
  if (page.status === 404) {
    title = `Something is missing.`
    message = `Oops! Looks like you are looking for a content or page that may no longer exist. You'll find lot more content on the homepage.`;
  }
</script>

<section class="bg-white dark:bg-gray-900">
  <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div class="mx-auto max-w-screen-sm text-center">
          <h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">{page.status}</h1>
          <p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">{title}</p>
          <p class="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">{message}</p>
          <a href="/" class="mt-8 underline">Back to Homepage</a>
      </div>   
  </div>
</section>