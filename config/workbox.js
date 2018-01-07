const path = require('path');
const dist = './dist';

module.exports = {
    globDirectory: dist,
    globPatterns: ['**/*.{html,js,css}'],
    swDest: path.join(dist, 'sw.js'),
    clientsClaim: true,
    skipWaiting: true,
};