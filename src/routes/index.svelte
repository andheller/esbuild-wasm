<script>
	import { svelte_compile } from './compile.js';

	let input;
	let output;

	function compile() {
		console.log('test');
		output = svelte_compile(input);
		console.log('end test');
	}
</script>

<textarea bind:value={input} />

<button on:click={compile}>Compile</button>
<pre>{JSON.stringify(output)}</pre>
