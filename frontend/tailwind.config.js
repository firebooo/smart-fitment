const config = {
    darkMode: 'class',
    content: [
      `./components/**/*.{vue,js,ts}`,
      `./layouts/**/*.vue`,
      `./pages/**/*.vue`,
      `./composables/**/*.{js,ts}`,
      `./plugins/**/*.{js,ts}`,
      './stories/**/*.{js,ts,vue,mdx}',
      './app.vue',
      './lib/**/composables/*.{js,ts}',
    ],
    plugins: []
  }
  
module.exports = config