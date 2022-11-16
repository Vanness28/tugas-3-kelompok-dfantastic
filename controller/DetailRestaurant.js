import Travel from '../model/DetailRestaurantModel.js';

export const getDetail = async (req, res) => {
    try {
        const response = await Travel.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getDetailById = async (req, res) => {
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

export const createDetail = async (req, res) => {
    try {
        await Travel.create(req.body);
        res.status(201).json({ msg: 'Detail Restaurant Created'})
    } catch (error) {
        console.log(error.message);
    }
}

export const updateDetail = async (req, res) => {
    try {
        await Travel.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({ msg: 'Detail Restaurant Updated'});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteDetail = async (req, res) => {
    try {
        await Travel.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({ msg: 'Detail Restaurant Deleted'})
    } catch (error) {
        console.log(error.message);
    }
}