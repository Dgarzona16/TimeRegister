/** @type {import('tailwindcss').Config} */
export default {
  content: [
      './src/**/*.{html,ts}',
  ],
  theme: {
    extend: {
      backgroundColor:{
        "color-light":"#f5f5f5",
        "color-dark":"#1a1a1a",
        "color-card-light":"#e5e3e3",
        "color-card-dark":"#2b2b2b",
        "color-card-light-hover":"#f0f0f0",
        "color-card-dark-hover":"#3a3a3a",
      },
      borderColor:{
        "color-light":"#f5f5f5",
        "color-dark":"#1a1a1a",
      },
      textColor:{
          "color-light":"#1a1a1a",
          "color-dark":"#f5f5f5",
      },
      button:{
        "color-primary-light":"#5454ff",
        "color-primary-dark":"#34349b",
        "color-secondary-light":"#f954ff",
        "color-secondary-dark":"#b7349b",
      },
    },
  },
  safelist:[
    {
      parent: /text-color-(light|dark)/
    },
    {
      parent: /bg-color-(light|dark)/
    },
    {
      parent: /bg-color-card-(light|dark)/
    },
    {
      parent: /bg-color-card-(light|dark)/,
      variants: ['hover'],
    },
    {
      parent: /border-color-(light|dark)/
    }
  ],
  plugins: [],
}

