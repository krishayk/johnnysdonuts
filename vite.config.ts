import vinext from 'vinext';
import { defineConfig } from 'vite';

// Export plain files for GitHub Pages, without a hosted server runtime.
export default defineConfig({ plugins: [vinext()] });
