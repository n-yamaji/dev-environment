export default {
  proxy: {
    '/.netlify/': { target: 'http://localhost:9000/' }
  },
}  