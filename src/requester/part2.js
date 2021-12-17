



let planets = ["Tatooine", "Alderaan", "Naboo", "Bespin", "Endor"]



let baseUrl = `https://swapi.py4e.com/api/`

let getPlanets = async () => {


    try {
        let planetsAr = []
        let nextUrl = `${baseUrl}/planets`
        let toMatch = planets.length
        while (toMatch) {
            let vehiclesDatas = await fetch(nextUrl)
            let { next, results } = await vehiclesDatas.json()

            results.forEach(({ name, population }) => {
                if (planets.includes(name)) {
                    planetsAr.push({ name, population })
                    toMatch--
                }
            });
            nextUrl = next
        }
        return planetsAr
    } catch (error) {
        console.log(error)
    }
}



export { getPlanets } 