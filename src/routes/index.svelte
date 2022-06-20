<script>
	let input;
	let output;
	import { svelte_compile } from './svelte-compile';

	function compile() {
		console.log('test');
		output = svelte_compile(input);
		console.log('end test');
	}
</script>

<textarea bind:value={input} />

<button on:click={compile}>Compile</button>
<pre>{JSON.stringify(output)}</pre>
