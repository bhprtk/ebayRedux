import mongoose from 'mongoose';

const shopSchema = new mongoose.Schema({
	title: String,
	imageUrl: String,
	description: String,
	price: Number,
	remaining: Number
});

const Shop = mongoose.model('Shop', shopSchema);

export default Shop;
