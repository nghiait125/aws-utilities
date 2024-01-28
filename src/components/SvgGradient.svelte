<script lang="ts">
  export let id: string = '';
  export let start: string = '';
  export let stop: string = '';
</script>

<defs>
  <linearGradient x1="0%" y1="100%" x2="100%" y2="0%" {id}>
    <stop stop-color={start} offset="0%"></stop>
    <stop stop-color={stop} offset="100%"></stop>
  </linearGradient>
</defs>
