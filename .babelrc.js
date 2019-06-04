const {
    BABEL_ENV
} = process.env

const cjs = BABEL_ENV === 'cjs';


const presets = [
    ['@babel/preset-env', {
        loose: true,
        modules: false
    }]
]

const plugins = [];
if (cjs) {
    plugins.push(['@babel/plugin-transform-modules-commonjs', {
        loose: true
    }]);
}

module.exports = {
    presets,
    plugins
}