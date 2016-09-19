import mongoose from 'mongoose';

const bidSchema = new mongoose.Schema({
	listing: {type: mongoose.Schema.Types.ObjectId, ref: 'Listing'},
	user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
	date: {type: Date},
	amount: Number
});

const Bid = mongoose.model('Bid', bidSchema);

export default Bid;
