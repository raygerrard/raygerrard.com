module.exports = {
    purge: ['./src/**/*.{js}', './public/index.html'],
    darkMode: false,
    theme: {
        fontFamily: {
            'sans': ['Poppins', 'sans-serif'],
            'body': ['Open Sans'],
        },
        extend: {
            colors: {
                black: '#000',
                white: '#fff',
                pink: '#F40076',
                purple: '#9984D4',
                green: '#E9FF70',
                orange: '#FFD670',
            },
            width: {
                'fit-content': 'fit-content'
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};