import mongoose from 'mongoose';
import mongooseDeepPopulate from 'mongoose-deep-populate';
const deepPopulate = mongooseDeepPopulate(mongoose);

const shopSchema = new mongoose.Schema({
	title: String,
	imageUrl: String,
	description: String,
	price: Number,
	remaining: Number
});

shopSchema.plugin(deepPopulate);

const Shop = mongoose.model('Shop', shopSchema);

export default Shop;
