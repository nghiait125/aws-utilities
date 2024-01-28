<script lang="ts">
  export let clazz: string = '';
  export let href: string = '';
</script>

<a
  class={'inline-flex font-medium text-blue-700 hover:text-blue-500 ' + clazz}
  {href}><slot /></a
>
