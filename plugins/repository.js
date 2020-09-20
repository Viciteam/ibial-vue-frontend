import AccountRepository from '~/api/account/account.repository'
import BusinessRepository from '~/api/business/business.repository'
import ProductRepository from '~/api/product/product.repository'
export default (ctx, inject) => {
  // dependency injection
  const api = {
    accounts: {
      account: AccountRepository(ctx.$axios)
    }
  }
  inject('accountRepository', AccountRepository(ctx.$axios))
  inject('businessRepository', BusinessRepository(ctx.$axios))
  inject('productRepository', ProductRepository(ctx.$axios))
  inject('api', api)
}
