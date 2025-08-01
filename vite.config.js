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
        cart: './cart.html',
        checkout: './checkout.html',
        thankYou: './thank-you.html',
        orders: './orders.html',
        orderDetails: './order-details.html',
        wishlist: './wishlist.html',
        profile: './my-profile.html',
        addAddress: './add-address.html',
        privacyPolicy: '/privacy-policy.html',
        termsOfService: '/terms-of-service.html'
      },
    },
  },
});