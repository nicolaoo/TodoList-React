/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                orange: '#DB650B',
                darkOrange: '#DB1D0B',
            },

        },
    },
    plugins: [],
}