module.exports = {
  content: ['./src/**/*.{html,js}'],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#5360c1',
          secondary: '#848bd8',
          accent: '#085c66',
          neutral: '#1F2D37',
          'base-100': '#F1F2F4',
          info: '#44B4DA',
          success: '#16CA94',
          warning: '#A08208',
          error: '#E24B40',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
