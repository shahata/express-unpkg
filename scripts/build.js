const inInstall = require('in-publish').inInstall

if (inInstall())
  process.exit(0)

require('child_process').execSync('babel ./modules -d . --copy-files', {
  stdio: 'inherit'
})
