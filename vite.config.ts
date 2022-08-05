import { defineConfig } from 'vite';
import solid from 'solid-start/vite';
import staticGenerator from 'solid-start-static';

export default defineConfig({
  plugins: [solid({ adapter: staticGenerator() })],
});
