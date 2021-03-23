import css from 'https://deno.land/x/aleph/plugins/css.ts'
import type { Config } from 'https://deno.land/x/aleph/types.ts'

export default (): Config => ({
  plugins: [
    css({
      postcss: { plugins: ['autoprefixer'] }
    })
  ]
})
