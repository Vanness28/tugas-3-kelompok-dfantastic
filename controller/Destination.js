import Travel from '../model/DestinationModel.js';

export const getDestination = async (req, res) => {
    try {
        const response = await Travel.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getDestinationById = async (req, res) => {
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

export const createDestination = async (req, res) => {
    try {
        await Travel.create(req.body);
        res.status(201).json({ msg: 'Destination Created'})
    } catch (error) {
        console.log(error.message);
    }
}

export const updateDestination = async (req, res) => {
    try {
        await Travel.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({ msg: 'Destination Updated'});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteDestination = async (req, res) => {
    try {
        await Travel.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({ msg: 'Destination Deleted'})
    } catch (error) {
        console.log(error.message);
    }
}