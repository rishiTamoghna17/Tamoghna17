const mongoose = require('mongoose');
const ObjectId= mongoose.Schema.Types.ObjectId
const orderSchema = new mongoose.Schema( {
    user:{
        type:ObjectId,
        ref: "user"
    },
	product: {
        type: ObjectId,
        ref: "product"
    },
	amount: Number,
    date:{type:Date}

}, { timestamps: true });

module.exports = mongoose.model('orders', orderSchema)
