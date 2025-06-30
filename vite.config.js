import { defineConfig } from 'vite';
export default defineConfig({
  base: '/ChronoHaven/',
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        login: './login.html',
        register: './register.html',
        forgotPassword: './forgot-password.html',
        resetPassword: './reset-password.html',
        shop: './shop.html',
        product: './product.html',
        checkout: './checkout.html'
      },
    },
  },
});