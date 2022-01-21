import { BaseService } from "medusa-interfaces"

class WelcomeService extends BaseService {
    constructor({ }) {
        super()
    }

    async registerOptin(cartId, optin) { }

    async sendWelcome(orderId) { }
}

export default WelcomeService