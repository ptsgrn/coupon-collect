<script lang="ts">
	import type { ActionData } from './$types';
	import { currentUserData, userData } from '$lib/data';
	import { goto } from '$app/navigation';
	let formData = {
		username: '',
		password: ''
	};
	if ($currentUserData?.username) {
		goto('/view');
	}
	let errormesssage = '';
	async function onSubmit(e) {
		e.preventDefault();
		errormesssage = '';
		if (!$userData.find((user) => user.username === formData.username)) {
			errormesssage = 'ชื่อผู้ใช้นี้ไม่มีในระบบ กรุณาลงทะเบียนก่อน';
			return;
		}
		$currentUserData =
			$userData.find(
				(user) => user.username === formData.username && user.password === formData.password
			) || {};
		if ($currentUserData?.username) {
			goto('/view');
		} else {
			errormesssage = 'ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง';
		}
	}
</script>

<svelte:head>
	<title>เข้าสู่ระบบ</title>
</svelte:head>
<h1
	class="text-3xl font-bold text-transparent from-blue-600 to-pink-600 bg-gradient-to-r bg-clip-text font-sans"
>
	เข้าสู่ระบบ
</h1>
<form class="flex flex-col gap-4" on:submit={onSubmit}>
	<label for="username"
		>ชื่อผู้ใช้
		<input
			type="text"
			placeholder="ชื่อผู้ใช้"
			name="username"
			bind:value={formData.username}
			autocomplete="username"
			required
		/>
	</label>
	<label for="password"
		>รหัสผ่าน
		<input
			type="password"
			placeholder="รหัสผ่าน"
			name="password"
			bind:value={formData.password}
			autocomplete="current-password"
			required
		/>
	</label>
	{#if errormesssage}
		<div class="alert alert-danger" role="alert">{errormesssage}</div>
	{/if}
	<button type="submit" class="bg-blue-600 text-white rounded-md p-2"> เข้าสู่ระบบ </button>
</form>
<p class="text-center mt-4">
	ยังไม่มีบัญชีผู้ใช้? <a href="/register" class="text-blue-600">ลงทะเบียน</a>
</p>
