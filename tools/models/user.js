import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
	uid: {type: String, unique: true},
	email: {type: String, unique: true},
	displayName: String,
	photoURL: String
});

userSchema.statics.saveNewUser = function(user, cb) {
	console.log ('user in user model:', user);
	console.log ('what:');
	const {email} = user;
	this.findOne({email}, (err, existingUser) => {
		if (existingUser) {
      return res.status(409).send({ message: 'Email is already taken' });
    }
		console.log ('nope:')
	})
	cb(null, user);
}

const User = mongoose.model('User', userSchema);

export default User;
