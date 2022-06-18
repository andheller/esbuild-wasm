<script>
	import * as esbuild from 'esbuild-wasm';

	const startService = async () => {
		ref.current = await esbuild.startService({
			worker: true,
			wasmURL: 'https://unpkg.com/esbuild-wasm@0.8.27/esbuild.wasm'
		});
	};
</script>

<h1>esbuild wasm in browser test</h1>
