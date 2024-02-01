import { createCLI } from '../../core/cli/cli'
import { fileURLToPath } from 'node:url'

const appDir = fileURLToPath(new URL('../app', import.meta.url))

const cli = createCLI({
  name: 'unjs-docs',
  description: 'UnJS Docs Tool',
  setup: {
    extends: [appDir],
    defaults: {
      github: 'unjs',
      themeColor: '#ECDC5A',
    },
  },
})

cli.runMain()