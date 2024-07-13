const Adventures = require("./../model/Adventure.model")
const Cities = require("./../model/Cities.model")

async function SaveDataInAdventures(cityId, name, category, costPerHead, currency, duration, image){
    try{
       const result = await Adventures.create({
        cityId,
        name,
        category,
        costPerHead,
        currency,
        duration,
        image
       })

       if(result){
        return{
            success : "true",
            data : result
        }
       }else{
        throw new Error("Error in SaveDataInAdventures")
       }
    }catch(err){
        console.log(err)
        return {
            success : false
        }
    }
}

async function GetAdventuresByCity(cityName){
    try {
        
        const cityResult = await Cities.findOne({
            id : cityName
        })

        if(!cityResult){
            throw new Error(`${cityName} is not available in cities`)
        }

        const {_id : cityId} = cityResult

        const adventureResult = await Adventures.find({cityId : cityId})

        if(adventureResult){
            return{
                success : true,
                data : adventureResult
            }
        }else{
            throw new Error("Unable to fetch the adventures using cityId: "+cityId)
        }

    }catch(err){
        console.log("Error in GetAllAdventuresByCityService")
        return({
            success : false
        })
    }
}

async function DeleteAdventureByIdService(id){
    try{

        const result = await Adventures.findByIdAndDelete(id)

        if(result){
            return {
                success : true
            }
        }else{
            throw new Error("Error in DeleteAdventureByIdService")
        }

    }catch(err){
        console.log(err)
        return {
            success : false
        }
    }
}

module.exports = {
    SaveDataInAdventures,
    GetAdventuresByCity,
    DeleteAdventureByIdService
}