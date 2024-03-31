const findOrganization = require('../models/organization');
const findItem = require('../models/item');
const findPricing = require('../models/pricing');
const priceCalculator = require('../services/priceCalculator');

const calculatePrice = async(req,res)=>{
    
    const {zone,organization_id,total_distance,item_type} = req.body;
    console.log("Request Body",req.body);
    if (!zone || !organization_id || !total_distance || !item_type) {
        return res.status(400).json({ error: 'Invalid payload' });
    }
    try{
        const organization = await findOrganization(organization_id);
        const item = await findItem(item_type.toLowerCase());
        const pricing = await findPricing(organization.id,item.id,zone.toLowerCase());
        if(!pricing){
            return res.status(400).json({error:"Pricing is not avaiable for the requested service"});
        }
        const totalPrice = priceCalculator(pricing.base_distance_in_km,pricing.fix_price,pricing.km_price,total_distance)
        const responseData = {
            "Total price": totalPrice,
        };
        res.status(200).json(responseData);
    }catch(err){
        console.log(err);
        res.status(500).json({error:"internal server error",err})
    }
}

module.exports = calculatePrice;