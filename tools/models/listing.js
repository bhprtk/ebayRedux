import mongoose from 'mongoose';

const listingSchema = new mongoose.Schema({
	date: {type: Date},
	description: String,
	imageUrl: String,
	price: Number,
	title: String,
	listedBy: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
});

const Listing = mongoose.model('Listing', listingSchema);

export default Listing;
