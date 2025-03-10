<script lang="ts">
  export let text;
  export let htmlFor = "";
  export let required = false;
  export let tooltip = null;

  function toggleDropdown(e: Event) {
   //  window?.logicDropToggle?.(event);
  }
</script>

<label for={htmlFor} class="mb-1 block text-sm {tooltip ? 'flex items-center gap-x-1' : ''}">
  {text} 
  {#if required}
    <span class="text-base font-bold leading-[0] text-red-600">*</span>
  {/if}
  
  {#if tooltip}
    <div class="relative">
      <code 
        on:mouseover={toggleDropdown} 
        on:mouseleave={toggleDropdown} 
        class="text cursor-pointer" 
        data-lc-toggle="dropdown" 
        data-popper-placement="bottom"
      >
        <i class="bi bi-question-circle text-sm text-gray-600"></i>
      </code>
      <div class="dropdown-menu z-10 hidden w-[200px] rounded-md border border-neutral-100 bg-[#262a33] bg-clip-padding px-3 py-4">
        <p class="text-sm text-slate-200">{tooltip}</p>
      </div>
    </div>
  {/if}
</label>
