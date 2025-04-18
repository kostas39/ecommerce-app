const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
	{
		user: { type: String, required: false },
		orderItems: [
			{
				name: { type: String, required: true },
				qty: { type: Number, required: true },
				price: { type: Number, required: true },
				product: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
			},
		],
		paymentMethod: { type: String, required: true },
		totalPrice: { type: Number, required: true },
		isPaid: { type: Boolean, default: false },
		isDelivered: { type: Boolean, default: false },
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
