import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define:{
    'process.env.VITE_EMAILJS_SERVICE':JSON.stringify(process.env.VITE_EMAILJS_SERVICE),
    'process.env.VITE_EMAILJS_TEMPLATE':JSON.stringify(process.env.VITE_EMAILJS_SERVICE),
    'process.env.VITE_EMAILJS_PUBLIC':JSON.stringify(process.env.VITE_EMAILJS_SERVICE),
  },
})
