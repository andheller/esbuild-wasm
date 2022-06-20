import { compile } from 'svelte/compiler';

export function svelte_compile(code) {
	return compile(code);
}
