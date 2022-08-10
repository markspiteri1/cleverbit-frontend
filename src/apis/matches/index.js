import Service from './service';
export default class Matches {
    constructor({ isMock } = {}) {
        let MockService = null;

        if (isMock) {
            MockService = require('./service.mock').default;
        }
        this.service = isMock ? new MockService : new Service()
    }

    /**
     * retrieve the list of previous and current matches
     */
    getAllMatches() {
        return this.service.getAllMatches()
    }

    /**
     * plays the game by posting the number
     * to the web service
     */
    postNumber(number) {
        return this.service.postNumber(number)
    }
}