

let baseUrl = `https://swapi.py4e.com/api/`

let getvehiclesWithPilots = async() => {
   

    try {
        let vehicles = []
        let nextUrl  = `${baseUrl}/vehicles`
        while(nextUrl){
            let vehiclesDatas =await  fetch (nextUrl)
            let {next,results}  = await vehiclesDatas.json()
            vehicles.push(...results.filter(({pilots})=>pilots.length).map(({name,pilots})=>{return{name,pilots}}))
            nextUrl =  next
        }
        return await vehicles
    } catch (error) {
        console.log(error)
    }
}

let getPilotsHome  = async ({name,pilots})=>{
   
    try {
        let pilotsData  = await Promise.all(pilots.map(async url => {
            let pilotsDatas = await  fetch (url)
            let {name,homeworld} = await  pilotsDatas.json()
            return  {name,homeworld}
        }));
        return {
            name,
            pilots:pilotsData
        }
    } catch (error) {
        console.log(error)
    }
}
let getHomesData  = async ({name,pilots})=>{
    
    try {
        let pilotsData = await  Promise.all(pilots.map(async({homeworld,...rest})=>{
            let homeData = await  fetch (homeworld)
            let {name,population}= await  homeData.json()
            return  {...rest,homeworld:{name,population}}
        }))
        return {
            name,
            pilots:pilotsData
        }
    } catch (error) {
        console.log(error)
    }
}   

export { getvehiclesWithPilots,getPilotsHome,getHomesData } 