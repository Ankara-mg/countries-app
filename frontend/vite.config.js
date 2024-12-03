import react from '@vitejs/plugin-react';
import { loadEnv } from 'vite';

export default ({mode}) => {
  const env = loadEnv(mode, process.cwd());
  return {
    server: {
      port: parseInt(env.VITE_PORT) || 5173
    },
    plugins: [react()],
  };
}
