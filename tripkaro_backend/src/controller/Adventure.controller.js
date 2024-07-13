const httpStatus = require("http-status")

const {SaveDataInAdventures, GetAdventuresByCity, DeleteAdventureByIdService} = require("./../service/Adventure.service")

async function AddNewAdventureController(req,res){
    try {
        const {cityId, name, category, costPerHead, currency, duration, image} = req.body;

        const result = await SaveDataInAdventures(cityId, name, category, costPerHead, currency, duration, image)

        if(result.success){
            res.status(httpStatus.CREATED).json({
                success : "true",
                data : result.data
            })
        }else{
            throw new Error("Error in AdventureController")
        }
    }catch(err) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            success : false
        })
    }
}

async function GetAllAdventureController(req, res){
    try{
        const city = req.query.city.toLowerCase()

        const result = await GetAdventuresByCity(city)

        if(result.success){
            res.status(httpStatus.OK).json({
                success : true,
                data : result.data
            })
        }else{
            throw new Error("Error in GetAllAdventureByCity")
        }

    }catch(err){
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            success : false
        })
    }
}

async function DeleteAdventureByIdController(req, res){
    try{

        const {id} = req.query;

        const result = await DeleteAdventureByIdService(id)

        if(result.success){
            res.status(httpStatus.OK).json({
                status : true
            })
        }else{
            throw new Error("Error in DeleteAdventureByIdController")
        }

    }catch(err){
        console.log(err)
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            success : false
        }) 
    }
}

module.exports = {
    AddNewAdventureController,
    GetAllAdventureController,
    DeleteAdventureByIdController
}