import mongoose from 'mongoose';

const listingSchema = new mongoose.Schema({
	date: {type: Date},
	description: String,
	imageUrl: String,
	price: Number,
	title: String,
	listedBy: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
	bids: [{type: mongoose.Schema.Types.ObjectId, ref: 'Bid'}],
	highestBid: {type: mongoose.Schema.Types.ObjectId, ref: 'Bid'}
});

const Listing = mongoose.model('Listing', listingSchema);

export default Listing;
