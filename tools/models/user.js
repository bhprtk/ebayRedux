import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
	uid: {type: String, unique: true},
	email: {type: String, unique: true},
	displayName: String,
	photoURL: String,
	listings: [{type: mongoose.Schema.Types.ObjectId, ref: 'Listing'}],
	bids: [{type: mongoose.Schema.Types.ObjectId, ref: 'Bid'}],
	coins: Number
});

userSchema.statics.addListingToUser = function(userId, listingId, cb) {
	this.findById(userId)
		.then(user => {
			user.listings.push(listingId);
			user.save()
				.then(savedUser => cb(null, savedUser))
				.catch(err => cb(err))
			})
		.catch(err => console.log ('err:', err));
}

userSchema.statics.saveNewUser = function(user, cb) {
	const {email} = user;
	this.findOne({email}, (err, existingUser) => {
		if (existingUser) {
      return cb({ error: 'Email is already taken' });
    }
		User.create(user)
			.then(res => cb(null, res))
			.catch(err => cb(err));
	})
}

const User = mongoose.model('User', userSchema);

export default User;
