<script lang="ts">
  import { enhance } from '$app/forms';

  // Import components.
  import FormRow from '$components/FormRow.svelte';
  import FormText from '$components/FormText.svelte';
  import FormTextarea from '$components/FormTextarea.svelte';
  import FormSelect from '$components/FormSelect.svelte';
  import FormSubmit from '$components/FormSubmit.svelte';
  import FormBack from '$components/FormBack.svelte';

  // Extract data.
  export let data;
</script>

<form method="post" use:enhance>
  <div class="flex flex-col p-4 bg-white shadow">
    <FormRow label="Name" target="Name" required={true}>
      <FormText id="Name" name="Name"></FormText>
    </FormRow>
    <FormRow label="Short name" target="ShortName">
      <FormText id="ShortName" name="ShortName"></FormText>
    </FormRow>
    <FormRow label="Long name" target="LongName" required={true}>
      <FormText id="LongName" name="LongName"></FormText>
    </FormRow>
    <FormRow label="Icon" target="Icon" required={true}>
      <FormTextarea id="Icon" name="Icon" rows={10}></FormTextarea>
    </FormRow>
    <FormRow label="Icon type" target="IconType" required={true}>
      <FormSelect id="IconType" name="IconType">
        <option value={1}>1</option>
        <option value={2}>2</option>
      </FormSelect>
    </FormRow>
    <FormRow label="Category" target="CategoryId" required={true}>
      <FormSelect id="CategoryId" name="CategoryId">
        {#each data.categories as category}
          <option value={category.Id}>{category.Name}</option>
        {/each}
      </FormSelect>
    </FormRow>
    <div class="flex mt-10">
      <FormSubmit clazz="mr-4">Save</FormSubmit>
      <FormBack href="/">Back</FormBack>
    </div>
  </div>
</form>
