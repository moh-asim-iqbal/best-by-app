const { Error } = require('mongoose')
const Items = require('../models/item-model')

createItem = (req, res) => {
    const body = req.body
    if(!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide an item'
        })
    }

    const item = new Items(body)
    if(!item) {
        return res.status(400).json({success:false, error:err})
    }

    item.save()
        .then( () => {
            return res.status(200).json({
                success:true,
                id:item._id,
                message: 'Item added!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Item not added!',
            })
        })
}

updateItem = async (req, res) => {
    const body = req.body
    if(!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide an item'
        })
    }

    await Items.findOne({_id: req.params.id}, (err, item) => {
        if(err) {
            return res.status(400).json({
                err,
                message: 'Item not found!',
            })
        }

        item.name = body.name
        item.expiry = body.expiry
        item.quantity = body.quantity
        if(body.created) {
            item.created = body.created
        }

        item.save()
            .then( () => {
                return res.status(200).json({
                    success: true,
                    id: item._id,
                    message: 'Item updated!',
                })
            }).catch( error => {
                return res.status(400).json({
                    error,
                    message: 'Item not updated!',
                })
            })

    })

}

deleteItem = async (req, res) => {
    await Items.findOneAndDelete({ _id: req.params.id }, (err, item) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!item) {
            return res
                .status(404)
                .json({ success: false, error: `Item not found` })
        }

        return res.status(200).json({ success: true, data: item })
    }).catch(err => console.log(err))
}

getItems = async (req, res) => {
    await Items.find({}, (err, items) => {
        if(err) {
            return res.status(400).json({
                success: false,
                error: Error
            })
        }
        if(!items.length) {
            return res.status(400).json({
                sucess: false,
                error: 'Items not found'
            })
        }

        return res.status(200).json({
            success: true,
            data: items,
        })
    }).catch(error => console.log(error))
}

getItemById = async (req, res) => {
    const body = req.body
    if(!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide an item'
        })
    }

    await Items.findOne({_id: req.params.id}, (err, item) => {
        if(err) {
            return res.status(400).json({
                err,
                message: 'Item not found!',
            })
        }
        if(!item) {
            return res.status(404).json({
                success: false,
                error: 'Item not found!'
            })
        }

        return res.status(200).json({
            success: true,
            data: item,
        })

    }).catch(error => console.log(error))
}

module.exports = {
    createItem,
    updateItem,
    deleteItem,
    getItems,
    getItemById,
}