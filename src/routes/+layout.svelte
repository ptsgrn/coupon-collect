<script>
	import '../app.scss';
	import '$lib/styles/normalize.css';
	import '$lib/styles/global.css';
	import { userData, couponData, productData, initUserData, currentUserData } from '$lib/data';
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';

	onMount(() => {
		if (browser) {
			userData.set(JSON.parse(localStorage.getItem('userData') || '{}') || initUserData);
			couponData.set(JSON.parse(localStorage.getItem('couponData') || '[]'));
			productData.set(JSON.parse(localStorage.getItem('productData') || '[]'));
		}
	});
	userData.subscribe((data) => {
		if (browser) {
			localStorage.setItem('userData', JSON.stringify(data));
		}
	});
	couponData.subscribe((data) => {
		if (browser) {
			localStorage.setItem('couponData', JSON.stringify(data));
		}
	});
	productData.subscribe((data) => {
		if (browser) {
			localStorage.setItem('productData', JSON.stringify(data));
		}
	});
	currentUserData.subscribe((data) => {
		if (browser) {
			localStorage.setItem('currentUserData', JSON.stringify(data));
		}
	});

	function onLogout() {
		$currentUserData = {}
	}
</script>

<main class="container" data-theme="dark">
	<nav>
		<ul>
			<li>
				<strong
					><a
						href="/"
						class="from-blue-500 to-pink-500 text-2xl font-bold tracking-wider bg-gradient-to-r px-1 bg-clip-text text-transparent"
						>Coupony</a
					></strong
				>
			</li>
		</ul>
		<ul>
			{#if $currentUserData?.username}
				<li><a href="/view">สวัสดี {$currentUserData.fullname}</a></li>
				<li><span on:keydown={onLogout} role="button">ออกจากระบบ</span></li>
			{:else}
				<li><a href="/login">เข้าสู่ระบบ</a></li>
				<li><a href="/register">สมัครสมาชิก</a></li>
			{/if}
		</ul>
	</nav>

	<slot />
</main>
