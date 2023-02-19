<script lang="ts">
	import type { ActionData } from './$types';
	import { browser } from '$app/environment';
	import { userData, couponData, currentUserData } from '$lib/data';
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';
	export let form: ActionData;
	let formData = {
		username: '',
		password: '',
		fullname: '',
		email: '',
		phone: ''
	};
	let errormesssage = '';
	let isSuccess = false;
	async function onSubmit() {
		errormesssage = '';
		isSuccess = false;
		if ($userData.find((user) => user.username === formData.username)) {
			errormesssage = 'ชื่อผู้ใช้นี้มีผู้ใช้แล้ว';
			return;
		}
		$userData.push({
			username: formData.username,
			password: formData.password,
			fullname: formData.fullname,
			email: formData.email,
			phone: formData.phone,
			coupon: [
				{
					name: 'คูปองต้อนรับสมัครบัญชีใหม่',
					code: 'WELCOME',
					amount: 20,
					amount_type: 'fixed',
					amount_limit: 100,
					isUsed: false
				}
			]
		});
		isSuccess = true;
		$currentUserData = $userData.find((user) => user.username === formData.username) || {};
		goto('/login')
	}
	
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
	currentUserData.subscribe((data) => {
		if (browser) {
			localStorage.setItem('currentUserData', JSON.stringify(data));
		}
	});
</script>

<h1
	class="text-3xl font-bold text-transparent from-blue-600 to-pink-600 bg-gradient-to-r bg-clip-text font-sans"
>
	สมัครสมาชิก
</h1>
<!-- in order: ชื่อผู้ใช้, รหัสผ่าน, ชื่อ สกุล, อีเมล, เบอร์โทรศัพท์ -->
	<form class="flex flex-col gap-4" on:submit={onSubmit}>
		{#if isSuccess}
			<div class="alert alert-success" role="alert">คุณลงทะเบียนเรียบร้อย</div>
		{/if}
		<label for="username"
			>ชื่อผู้ใช้
			<input
				type="text"
				placeholder="ชื่อผู้ใช้"
				name="username"
				autocomplete="username"
				bind:value={formData.username}
				required
			/>
		</label>
		<label for="password"
			>รหัสผ่าน
			<input
				type="password"
				placeholder="รหัสผ่าน"
				name="password"
				autocomplete="current-password"
				bind:value={formData.password}
				required
			/>
		</label>
		<label for="fullname"
			>ชื่อ สกุล
			<input
				type="text"
				placeholder="ชื่อ สกุล"
				name="fullname"
				bind:value={formData.fullname}
				required
			/>
		</label>
		<label for="email"
			>อีเมล
			<input
				type="email"
				placeholder="อีเมล"
				name="email"
				autocomplete="email"
				bind:value={formData.email}
				required
			/>
		</label>
		<label for="phone"
			>เบอร์โทรศัพท์
			<input
				type="tel"
				placeholder="เบอร์โทรศัพท์"
				name="phone"
				pattern="0[0-9]{'{9}'}"
				bind:value={formData.phone}
				required
			/>
		</label>
		{#if errormesssage}
			<div class="alert alert-danger" role="alert">{errormesssage}</div>
		{/if}
		<button type="submit" class="bg-blue-600 text-white rounded-md p-2"> สมัครสมาชิก </button>
	</form>