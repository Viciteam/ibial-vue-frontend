import AccountRepository from '~/api/account/account.repository'
import BusinessRepository from '~/api/business/business.repository'
import ProductRepository from '~/api/product/product.repository'
import SaasRepository from '~/api/saas/saas.repository'
<<<<<<< plugins/repository.js
import FeedRepository from '~/api/feed/feed.repository'
import MediaRepository from '~/api/media/media.repository'
import TeamsRepository from '~/api/teams/teams.repository'
=======
import TeamsRepository from '~/api/teams/teams.repository'
>>>>>>> plugins/repository.js
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
  inject('saasRepository', SaasRepository(ctx.$axios))
<<<<<<< plugins/repository.js
  inject('feedRepository', FeedRepository(ctx.$axios))
  inject('mediaRepository', MediaRepository(ctx.$axios))
=======
  inject('teamsRepository', TeamsRepository(ctx.$axios))
>>>>>>> plugins/repository.js
  inject('api', api)
}
