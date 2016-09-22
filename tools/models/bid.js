import mongoose from 'mongoose';
import mongooseDeepPopulate from 'mongoose-deep-populate';
const deepPopulate = mongooseDeepPopulate(mongoose);

const bidSchema = new mongoose.Schema({
	listing: {type: mongoose.Schema.Types.ObjectId, ref: 'Listing'},
	user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
	date: {type: Date},
	amount: Number
});

bidSchema.plugin(deepPopulate);

const Bid = mongoose.model('Bid', bidSchema);

export default Bid;
