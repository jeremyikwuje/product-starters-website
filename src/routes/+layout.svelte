<script lang="ts">
  import { browser } from '$app/environment';
  import { navigating } from '$app/stores';
  import { getCookie, setCookie } from '$lib';
  import { timezone } from '$lib/utils/functions';
  import { onMount } from 'svelte';
  import '../app.css';
  let { children } = $props();

  let year = (new Date()).getFullYear();
  let showPromotionBar = (getCookie('promotion_bar') == null ? true : false);

  // hide sticky navbar menu on page change
  $effect(() => {
    if (navigating && browser) {
      const targetEl = document.getElementById('navbar-sticky');
      targetEl?.classList.add("hidden");
    }
  });

  // toggle navbar collapse menu on mobile
  onMount(() => {
    if (browser) {
      const getTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      if (getCookie('timezone') !== getTimezone) {
        setCookie('timezone', getTimezone, 1);
      }
      setCookie('timezone', getTimezone, 1);
      timezone.set(getTimezone);
    }

    const collapse = () => {
      const triggerEl = document.getElementById('nav-collapse-trigger');
      const targetEl = document.getElementById('navbar-sticky');

      triggerEl?.addEventListener('click', () => {
        targetEl?.classList.toggle("hidden");
      });
    };
    collapse();
  });
</script>

<header class="relative mb-0">
  <nav class="w-full z-100 top-0 left-0 bg-white border-b border-gray-100 dark:bg-gray-900 dark:border-none">
      <div class="container flex flex-wrap items-center justify-between mx-auto p-4">
				<div class="inline-flex items-center">
					<a class="flex items-center gap-x-2 mr-6" href="/">
						<img src="/logo.png" alt="Logo" class="w-8 h-8 rounded-full">
						<h3 class="text-[#301446] text-lg font-bold md:text-lg">Product Starters</h3>
					</a>

					<div class="flex items-center space-x-4 hidden md:block">
						<span class="block border-3 border-solid border-gray-100 rounded-lg pr-2">
							<input type="email" placeholder="Get new case studies in your inbox" class="p-3 border-0 focus:outline-none focus:ring-0 w-[300px]" />
							<button class="bg-black text-white text-sm px-5 py-2 rounded-lg hover:bg-gray-800 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Yes Please :)</button>
						</span>
					</div>
				</div>

				<div class="flex md:order-2">
					<!-- Right Section -->
					<div class="flex items-center space-x-4">
					
						<svg width="30px" height="24px" viewBox="0 0 30 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
							<title>Group 3 Copy 2</title>
							<g id="swiped1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
									<g id="Artboard-Copy-27" transform="translate(-129.000000, -20.000000)">
											<g id="Group-3-Copy-2" transform="translate(129.000000, 21.000000)">
													<path d="M21.7058824,5 L1.58823529,5 C0.711077162,5 -1.36779477e-13,5.71107716 -1.36779477e-13,6.58823529 L-1.36779477e-13,21.4117647 C-1.36779477e-13,22.2889228 0.711077162,23 1.58823529,23 L21.7058824,23 C22.5830405,23 23.2941176,22.2889228 23.2941176,21.4117647 L23.2941176,6.58823529 C23.2941176,5.71107716 22.5830405,5 21.7058824,5 Z M21.7058824,20.2894118 L17.5023529,16.0858824 C17.1894603,15.7943259 16.7018721,15.8029288 16.3994593,16.1053416 C16.0970465,16.4077544 16.0884436,16.8953426 16.38,17.2082353 L20.5835294,21.4117647 L2.71058824,21.4117647 L6.91411765,17.2082353 C7.20567409,16.8953426 7.19707116,16.4077544 6.89465838,16.1053416 C6.59224559,15.8029288 6.10465739,15.7943259 5.79176471,16.0858824 L1.58823529,20.2894118 L1.58823529,10.0982353 L11.1176471,17.2823529 C11.4,17.4941176 11.7882353,17.4941176 12.0705882,17.2823529 L21.6952941,10.0929412 L21.7058824,20.2894118 Z M21.7058824,6.58823529 L21.7058824,8.11294118 L11.61,15.6570588 L1.58823529,8.11294118 L1.58823529,6.58823529 L21.7058824,6.58823529 Z" id="Shape-Copy" fill="#000000"></path>
													<circle id="Oval-Copy" stroke="#FFFFFF" fill="#61CAA0" cx="22.3" cy="6.6" r="7"></circle>
													<text id="1" font-family="MuggsyHeavy, Muggsy Heavy" font-size="8.4" font-weight="800" fill="#2E3A46">
															<tspan x="21.1946" y="10">1</tspan>
													</text>
											</g>
									</g>
							</g>
						</svg>
					</div>

					<button id="nav-collapse-trigger" data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-lg text-gray-800 rounded-lg !hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
						<span class="sr-only">Open main menu</span>
						<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none">
							<g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
							<g id="SVGRepo_iconCarrier">
								<path fill="#000000" fill-rule="evenodd" d="M19 4a1 1 0 01-1 1H2a1 1 0 010-2h16a1 1 0 011 1zm0 6a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 7a1 1 0 100-2H2a1 1 0 100 2h16z"></path>
							</g>
						</svg>
					</button>
				</div>
				<div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
						<!-- <ul class="flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0">
								<li>
										<a href="/casestudy" 
												class="font-bold block py-2 pl-3 pr-4 !text-gray-500 md:hover:text-orange-500 md:p-0 md:dark:hover:text-orange-500 dark:text-white dark:hover:text-white dark:border-gray-700 mr-4 md:mr-6"
												aria-current="page">Case Studies</a>
								</li>
								<li>
										<a href="https://tally.so/r/npJvQB" class="font-bold block py-2 pl-3 pr-4 !text-gray-500 md:hover:text-orange-500 md:p-0 md:dark:hover:text-orange-500 dark:text-white dark:hover:text-white dark:border-gray-700 mr-0" aria-current="page">Share Story</a>
								</li>
						</ul> -->
				</div>
      </div>
  </nav>
</header>

{@render children()}

<!-- Footer -->
<footer class="text-gray-700 py-4 mt-12">
  <div class="container mx-auto flex flex-col md:flex-row items-center justify-between border-0 border-gray-200">
    <!-- Left Section -->
    <div class="pt-8">
      
    </div>

    <div class="pt-8">
      <!-- Right Section -->
      <div class="flex items-center justify-end space-x-4 mb-12">
      </div>


      <div class="mt-4 text-right text-sm text-gray-500">
        © {year} Product Starters.
      </div>
    </div>
  </div>
</footer>