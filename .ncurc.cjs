// TypeScript 7 drops the JS API that @vue/compiler-sfc and vue-tsc rely on,
// so keep TypeScript on the latest 6.x until the Vue tooling supports it...
module.exports = {
    target: (name) => (name === 'typescript' ? 'minor' : 'latest'),
};
