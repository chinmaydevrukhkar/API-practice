const getAllPlants = async(req,res)=>{
    res.status(200).json({msg: "I am getAllPlants"});
};
const getAllPlantsTesting = async(req,res)=>{
    res.status(200).json({msg: "I am getAllPlantsTesting"});
};

module.exports = { getAllPlants, getAllPlantsTesting};