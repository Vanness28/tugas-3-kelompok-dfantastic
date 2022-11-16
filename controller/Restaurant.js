import Travel from '../model/RestaurantModel.js';

export const getRestaurant = async (req, res) => {
    try {
        const response = await Travel.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getRestaurantById = async (req, res) => {
    try {
        const response = await Travel.findOne({
            where: {
                id: req.params.id
            }
        })
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createRestaurant = async (req, res) => {
    try {
        await Travel.create(req.body);
        res.status(201).json({ msg: 'Restaurant Created'})
    } catch (error) {
        console.log(error.message);
    }
}

export const updateRestaurant = async (req, res) => {
    try {
        await Travel.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({ msg: 'Restaurant Updated'});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteRestaurant = async (req, res) => {
    try {
        await Travel.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({ msg: 'Restaurant Deleted'})
    } catch (error) {
        console.log(error.message);
    }
}