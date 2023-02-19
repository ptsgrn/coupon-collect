<script lang="ts">
	import { page } from '$app/stores';
	import type { PageData } from './$types';
	let data: PageData;
</script>

<h1>{$page.error?.message}</h1>
