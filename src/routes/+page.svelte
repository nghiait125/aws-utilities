<script lang="ts">
  // Import components.
  import AwsService from '$components/AwsService.svelte';
  import Hyperlink from '$components/Hyperlink.svelte';

  // Extract data.
  export let data;
</script>

<Hyperlink clazz="mb-4" href="/service/add">+ Add service</Hyperlink>
{#each data.services as service}
  <AwsService {service}>
    <Hyperlink slot="action" href={`/service/${service.Name}/attribute`}
      >Show attributes →</Hyperlink
    >
  </AwsService>
{/each}
