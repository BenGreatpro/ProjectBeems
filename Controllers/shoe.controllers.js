const shoe = require('../models/shoe');
const Shoe = require('../models/shoe');


exports.createShoe = async (req, res) => {
    const { brand, size, price, color, quantity } = req.body;

    try {
        const shoe = await Shoe.create({
        

            brand,
            size,
            price,
            color,
          quantity
        });
    
        return await res.status(201).json(shoe);
    } catch (error) {
        return res.status(500).json(error.message);
    }
    

}

exports.findOneShoe = async (req, res) => {
    const id= req.params.id;
    try{
        const shoe = await Shoe.findById(id)
        return await res.status(200).json(shoe)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
}

exports.findAll = async (req, res) => {

    try{
        const shoes = await Shoe.find()
        return await res.status(200).json(shoes)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
}

exports.updateShoe = async (req, res) => {
    const id = req.params.id;

    if(!req.body) {
        return res.status(400).send('data to update cannot be empty')
    }
    try {
    const shoes = await shoe.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
    } catch(err) {
        return res.status(500).json(error)
    }
}

exports.deleteShoe = async (req, res) => {
    const id = req.params.id;

    try{
        const shoe = await Shoe.findByIdAndDelete(id);
        return await res.status(200).json(`$(shoe) has been successfully deleted`)
    } catch (error) {
        return res.status(500).json(error)
    }
}

exports.deleteAllShoe = async (req, res) => {
    try{
        const shoes = await Shoe.deleteMany({});
        return await res.status(200).json(`Successfully deleted the collection for ${shoes}`)
    } catch (error) {
        return res.status(500).json(error)
    }
}