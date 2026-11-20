const esbuild = require('esbuild');
const path = require('path');

esbuild.build({
    entryPoints: [require.resolve('@eneris/push-receiver')],
    outfile: path.join(__dirname, '..', 'server', 'vendor', 'pushreceiver.js'),
    bundle: true,
    platform: 'node',
    target: 'es2018',
    format: 'cjs',
    logLevel: 'info',
    plugins: [{
        name: 'strip-node-prefix',
        setup(build) {
            build.onResolve({ filter: /^node:/ }, args => ({ path: args.path.slice(5), external: true }));
        }
    }]
}).catch(() => process.exit(1));
