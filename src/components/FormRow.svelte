<script lang="ts">
  export let label: string = '';
  export let required: boolean = false;
  export let target: string = '';
</script>

<div class="flex flex-col mb-4">
  {#if label}
    <label class="mb-0.5 font-medium" for={target}>
      {label}
      {#if required}
        <span class="text-red-400">*</span>
      {/if}
    </label>
  {/if}
  <slot />
</div>
