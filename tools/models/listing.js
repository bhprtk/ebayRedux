import mongoose from 'mongoose';

const listingSchema = new mongoose.Schema({
	date: {type: Date},
	description: String,
	imageURL: String,
	price: Number,
	title: String
});

const Listing = mongoose.model('Listing', listingSchema);

export default Listing;
