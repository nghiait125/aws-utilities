<script lang="ts">
  export let id: string = '';
  export let name: string = '';
  export let value: string = '';
  export let placeholder: string = '';
</script>

<input
  type="text"
  class="px-3 py-2 border focus:outline-none"
  autocomplete="off"
  spellcheck="false"
  {id}
  {name}
  {value}
  {placeholder}
/>
