export default class MockService {
    getAllMatches() {
        const response = {
            data: [
                { Id: 1, ExpiryTimestamp: 'ExpiryTimestamp', WinnerId: 1 },
                { Id: 2, ExpiryTimestamp: 'ExpiryTimestamp', WinnerId: 2 },
                { Id: 3, ExpiryTimestamp: 'ExpiryTimestamp', WinnerId: 1 },
                { Id: 4, ExpiryTimestamp: 'ExpiryTimestamp', WinnerId: 2 }]
        }
        return Promise.resolve(response)
    }

    postNumber() {
        return Promise.resolve()
    }
}