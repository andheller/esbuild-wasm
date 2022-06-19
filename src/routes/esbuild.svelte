<script>
	import * as esbuild from 'esbuild-wasm';
	//import { compile, preprocess } from 'svelte/compiler';

	import { onMount } from 'svelte';

	let output;
	let input = `\<script\>let test = 'hello world'\<\/script\>`;

	onMount(async () => {
		// esbuild
		// 	.initialize({
		// 		wasmURL: 'https://unpkg.com/esbuild-wasm@0.8.27/esbuild.wasm'

		// 		// wasmURL: './node_modules/esbuild-wasm/esbuild.wasm'
		// 	})
		// 	.then(() => {
		// 		// esbuild.transform(code, options).then((result) => {});
		// 		// esbuild.build(options).then((result) => {});
		// 		esbuild.transform(input).then((result) => {
		// 			console.log(result);
		// 		});
		// 		esbuild.build().then((result) => {
		// 			console.log(result);
		// 		});
		// 	});
		esbuild.initialize({
			wasmURL: './esbuild.wasm',
			// worker: true,
			worker: false

			// wasmURL: './node_modules/esbuild-wasm/esbuild.wasm'
		});
	});

	const transform = () => {
		esbuild
			.build(input, {
				loader: 'js',
				target: 'esnext'
			})
			.then((result) => {
				output = result.code;
			});
	};
	const compiler = () => {
		//		output = compile(input);
	};
</script>

<h1>esbuild wasm in browser test</h1>

<textarea bind:value={input} />

<button on:click={transform}>Submit</button>
<!-- <button on:click={compiler}>Compile</button> -->
<pre>{JSON.stringify(output)}</pre>
