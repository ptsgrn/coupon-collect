<script>
	import { currentUserData } from '$lib/data';
	import { goto } from '$app/navigation';
	import { browser } from '$app/environment';

	if (!$currentUserData?.username && browser) {
		goto('/login');
	}
</script>

<h1
	class="text-3xl font-bold text-transparent from-blue-600 to-pink-600 bg-gradient-to-r bg-clip-text font-sans"
>
	สวัสดี {$currentUserData?.fullname}
</h1>
<h2
	class="text-xl font-bold font-sans
"
>
	ข้อมูลของคุณ
</h2>
<ul>
	<li>ชื่อผู้ใช้: {$currentUserData?.username}</li>
	<li>ชื่อ-นามสกุล: {$currentUserData?.fullname}</li>
	<li>อีเมล: {$currentUserData?.email}</li>
	<li>เบอร์โทร: {$currentUserData?.phone}</li>
</ul>

<h2
	class="text-xl font-bold font-sans
"
>
	คูปองของคุณ
</h2>
{#if $currentUserData?.coupon?.length > 0}
	<ul>
		{#each $currentUserData?.coupon as coupon}
			<article class="flex flex-col gap-3">
				<strong>{coupon.name}</strong>
				<code class="p-4 text-xl text-center">{coupon.code}</code>
				<span>มูลค่า {coupon.amount} บาท</span>
				<span>{coupon.isUsed ? 'ใช้แล้ว' : 'ยังไม่ได้ใช้'}</span>
			</article>
		{/each}
	</ul>
{:else}
	<p>คุณยังไม่มีคูปอง</p>
{/if}
