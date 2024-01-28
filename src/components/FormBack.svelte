<script lang="ts">
  export let clazz: string = '';
  export let href: string = '';
</script>

<a class={'px-4 py-2 bg-slate-200 font-medium ' + clazz} {href}><slot /></a>
