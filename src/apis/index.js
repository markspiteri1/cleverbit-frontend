import Matches from "./matches";

class API {
    constructor() {
        // eslint-disable-next-line no-debugger
        if (process.env.NODE_ENV === 'development') {
            this.matches = new Matches({ isMock: true })
        }
        else {
            this.matches = new Matches({ isMock: false })
        }
    }
}

const api = new API();

Object.freeze(api)
export default api