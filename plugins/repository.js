import AccountRepository from '~/api/account/account.repository'
import BusinessRepository from '~/api/business/business.repository'
import FeedRepository from '~/api/feed/feed.repository'
import ProductRepository from '~/api/product/product.repository'
import SaasRepository from '~/api/saas/saas.repository'
export default (ctx, inject) => {
  // dependency injection
  const api = {
    accounts: {
      account: AccountRepository(ctx.$axios)
    }
  }
  inject('accountRepository', AccountRepository(ctx.$axios))
  inject('businessRepository', BusinessRepository(ctx.$axios))
  inject('feedRepository', FeedRepository(ctx.$axios))
  inject('productRepository', ProductRepository(ctx.$axios))
  inject('saasRepository', SaasRepository(ctx.$axios))
  inject('api', api)
}
