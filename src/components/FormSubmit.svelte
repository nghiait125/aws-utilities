<script lang="ts">
  export let clazz: string = '';
</script>

<button class={'px-4 py-2 bg-slate-700 text-white font-medium ' + clazz}
  ><slot /></button
>
