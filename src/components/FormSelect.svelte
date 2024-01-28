<script lang="ts">
  export let id: string = '';
  export let name: string = '';
</script>

<div class="relative">
  <span
    class="absolute top-1/2 right-[15px] -mt-px -translate-y-1/2 w-[8px] h-[8px] border-l border-b border-slate-400 -rotate-45"
  ></span>
  <select class="pl-3 pr-9 py-2 w-full border focus:outline-none" {id} {name}>
    <slot />
  </select>
</div>

<style>
  select {
    appearance: none;
  }
</style>
