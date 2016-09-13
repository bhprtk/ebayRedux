import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
	uid: {type: String, unique: true},
	email: {type: String, unique: true},
	displayName: String,
	photoURL: String
});

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
