import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Carrega env vars de .env, .env.local, .env.[mode], etc.
  const env = loadEnv(mode, process.cwd(), '');
  
  // Mapeia variáveis NEXT_PUBLIC_ para VITE_
  const nextVars = Object.entries(env)
    .filter(([key]) => key.startsWith('NEXT_PUBLIC_'))
    .reduce((acc, [key, value]) => {
      const viteKey = key.replace('NEXT_PUBLIC_', 'VITE_');
      return { ...acc, [viteKey]: value };
    }, {});
  
  return {
    plugins: [react()],
    optimizeDeps: {
      exclude: ['lucide-react'],
    },
    define: {
      // Adiciona variáveis de ambiente do Next ao Vite
      ...nextVars
    }
  };
});
