module.exports = {
    content: ['./src/*.html', './src/**/*.svelte'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                'light-primary': '#ffffffff',
                'light-decoration': '#14213dff',
                'light-content': '#e5e5e5ff',
                'light-text': '#14213dff',
                'light-icon': '#14213dff',
                'dark-primary': '#555',
                'dark-decoration': 'rgba(255, 153, 0, 0.877)',
                'dark-content': 'rgba(50, 50, 50)',
                'dark-text': 'white',
                'dark-icon': 'rgb(29, 29, 29)',
            },
            scale: {
                '175': '1.75',
                '200': '2.00',
            },
        },
    },
    plugins: [],
};

/* CSS HEX LIGHT */
// --black: #000000ff;
// --oxford-blue: #14213dff;
// --orange-web: #fca311ff;
// --platinum: #e5e5e5ff;
// --white: #ffffffff;
