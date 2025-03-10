<script lang="ts">
	import Label from '$lib/components/Label.svelte';
	import PostTable from '$lib/components/PostTable.svelte';

	const handleSubmit = (e: Event) => {
		e.preventDefault();
		console.log('submit');
	};
</script>

<div class="container mx-auto w-full overflow-x-auto p-6">
	<div class="mx-auto max-w-5xl mt-10">
		<form onsubmit={handleSubmit}>
			<div class="grid grid-cols-2 gap-5">
				<div class="">
					<Label text="Title" required />
					<input type="text" value="" placeholder="title" class="form-control" required />
				</div>
				<div class="">
					<Label text="Title" required />
					<input type="text" value="" placeholder="title" class="form-control" required />
				</div>
			</div>
		</form>
	</div>
</div>
