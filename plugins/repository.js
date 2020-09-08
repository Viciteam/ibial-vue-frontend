import { SocialRepository } from '~/api'
import accountRepository from '~/api/account/accountRepository'

export default (ctx, inject) => {
  // dependency injection
  const api = {
    accounts: {
      account: accountRepository(ctx.$axios)
    }
  }
  inject('socialRepository', SocialRepository(ctx.$axios))
  inject('api', api)
}
