const AdventureDetail = require("./../model/AdventureDetail.model")

async function SaveNewAdventureDetailService(adventureId, subtitle, images, content, slots){

try {
    const result = await AdventureDetail.create({
        adventureId,
        subtitle,
        images,
        content,
        slots
    })

    if(result){
        return{
            success : true,
            data : result
        }
    }else{
        throw new Error("Error in SaveNewAdventureDetailService")
    }
} catch (error) {
    console.log(error)
    return{
        success : false
    }
}

}

async function GetAdventureDetailsService(adventureId){
    try{

        const result = await AdventureDetail.findOne({adventureId : adventureId}).populate('adventureId', 'name costPerHead')

        if(result){
            return {
                success : true,
                data : result
            }
        }else{
            throw new Error("Error in GetAdventureDetailService")
        }

    }catch(err){
        console.log(err)
        return {
            success : false
        }
    }
}
module.exports = {
    SaveNewAdventureDetailService,
    GetAdventureDetailsService
}