<script lang="ts">
  import type { Prisma } from '@prisma/client';

  // Import components.
  import SvgGradient from '$components/SvgGradient.svelte';

  // Extend attributes.
  export let service: Prisma.ServiceGetPayload<{
    include: {
      Category: true;
    };
  }>;

  // Generate gradient id.
  let gradientId = `Service-${service.Id}`;
</script>

<svg width="80px" height="80px" viewBox="0 0 80 80" class="rounded-lg">
  <SvgGradient
    id={gradientId}
    start={service.Category.GradientColorFrom}
    stop={service.Category.GradientColorTo}
  ></SvgGradient>
  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
    <g fill={`url(#${gradientId})`}>
      <rect x="0" y="0" width="80" height="80"></rect>
    </g>
    <path fill="#ffffff" d={service.Icon}></path>
  </g>
</svg>
