#!/usr/bin/env node
import * as esbuild from 'esbuild';
import bookmarkletPlugin from 'esbuild-plugin-bookmarklet';
import { mkdirSync } from 'fs';

mkdirSync('dist', { recursive: true });

try {
	await esbuild.build({
	  bundle: true,
	  entryPoints: ['gpt2md.js'],
	  format: 'iife',
	  minify: true,
	  outfile: 'dist/gpt2md.bookmarklet.js',
	  plugins: [bookmarkletPlugin],
	  sourcemap: false,
	  target: ['chrome58', 'firefox57', 'safari11', 'edge16'],
	  write: false,
	});
	console.log('Build completed successfully.');
  } catch (error) {
	console.error('Build failed:', error);
  }