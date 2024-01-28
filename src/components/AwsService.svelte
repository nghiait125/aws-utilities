<script lang="ts">
  import type { Prisma } from '@prisma/client';

  // Import components.
  import AwsIcon from '$components/AwsIcon.svelte';

  // Extend attributes.
  export let service: Prisma.ServiceGetPayload<{
    include: {
      Category: true;
    };
  }>;
</script>

<div class="flex mb-4 p-4 bg-white shadow">
  <span>
    <AwsIcon {service}></AwsIcon>
  </span>
  <div class="flex flex-col flex-1 pl-4">
    <div class="flex items-center">
      <span class="font-medium">{service.LongName}</span>
      {#if service.ShortName}
        <span class="ml-2 px-2 bg-slate-200 rounded-lg"
          >{service.ShortName}</span
        >
      {/if}
      <div class="flex-1 text-right">
        <slot name="action" />
      </div>
    </div>
    <div class="flex">
      <span class="text-slate-400">{service.Category.Name}</span>
    </div>
    <div class="flex">
      A serverless compute service for running code without having to provision
      or manage servers.
    </div>
  </div>
</div>
