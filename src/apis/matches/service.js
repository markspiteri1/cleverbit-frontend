import axios from "axios"

export default class Service {
    async getAllMatches() {
        return await axios.get("https://localhost:44337/matches")
    }

    async postNumber(number) {
        return await axios.post("https://localhost:44337/matches/play", { number: number })
    }
}