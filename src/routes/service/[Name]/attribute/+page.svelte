<script lang="ts">
  import { enhance } from '$app/forms';

  // Import components.
  import AwsService from '$components/AwsService.svelte';
  import FormRow from '$components/FormRow.svelte';
  import FormText from '$components/FormText.svelte';
  import FormSubmit from '$components/FormSubmit.svelte';
  import Hyperlink from '$components/Hyperlink.svelte';

  // Extract data.
  export let data;
</script>

{#if data.service}
  <AwsService service={data.service}>
    <Hyperlink slot="action" href="/">← Back</Hyperlink>
  </AwsService>
  <form
    method="post"
    action={`/service/${data.service.Name}/attribute/add`}
    use:enhance
  >
    <div class="flex flex-col p-4 bg-white shadow">
      <FormRow target="Name" required={true}>
        <FormText id="Name" name="Name" placeholder="Add new attribute"
        ></FormText>
      </FormRow>
      <div class="flex w-1/4">
        <FormSubmit clazz="mr-4">Save</FormSubmit>
      </div>
    </div>
  </form>
  <div class="flex flex-col mt-4 p-4 bg-white shadow">
    <div class="font-medium">List of attributes</div>
    {#if data.service.Attributes.length > 0}
      <div class="flex mt-4">
        {#each data.service.Attributes as { Name }}
          <span class="mr-2 px-2 py-1 bg-slate-200">{Name}</span>
        {/each}
      </div>
    {/if}
  </div>
{/if}
