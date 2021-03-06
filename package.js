Package.describe({
  name: 'refapp:typescript',
  version: '0.9.18',
  summary: 'TypeScript for Meteor, based on barbatus:typescript',
  git: 'https://github.com/ref-app/typescript',
  documentation: 'README.md',
});

Package.registerBuildPlugin({
  name: 'typescript',
  use: ['refapp:typescript-compiler'],
  sources: ['plugin.js'],
  npmDependencies: {
    typescript: process.env.TYPESCRIPT_EXTERNAL_PATH ? 'file://' + process.env.TYPESCRIPT_EXTERNAL_PATH : '3.9.2',
  },
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.1');

  api.use('isobuild:compiler-plugin@1.0.0');
  api.use('refapp:typescript-compiler@0.12.18');

  api.imply('modules@0.11.6');
});
