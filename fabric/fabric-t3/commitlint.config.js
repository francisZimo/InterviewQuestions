module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'build',
        'chore',
        'save',
        'ci',
        'docs',
        'feat',
        'merge',
        'fix',
        'perf',
        'refactor',
        'revert',
        'style',
        'test',
        'revert',
        'chore'
      ]
    ]
  }
};
