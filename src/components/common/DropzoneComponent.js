import React, {Component} from 'react';
import Dropzone from 'react-dropzone';
import firebase from 'firebase';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as listingActions from '../../actions/listingActions';

class DropzoneComponent extends Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			preview: null,
			showProgress: false,
			imageUploadSuccess: false,
			getMetadata: false
		}

		this.onDrop = this.onDrop.bind(this);
		this.savePicture = this.savePicture.bind(this);
		this.cancelImage = this.cancelImage.bind(this);
		this.deleteImage = this.deleteImage.bind(this);
	}

	onDrop(file) {
		this.setState({
			file: file[0],
			preview: file[0].preview
		})
	}

	cancelImage() {
		this.setState({
			file: null,
			preview: null
		})
	}

	savePicture() {
		this.setState({showProgress: true})
		const storageRef = firebase.storage().ref(`listingImages/${this.state.file.name}`);
		const task = storageRef.put(this.state.file);
		let imageUrl;

		task.on('state_changed', snap => {
			const percentage = ((snap.bytesTransferred / snap.totalBytes) * 100);
				this.setState({
					percentage: `${percentage.toString()}%`,
					displayPercentage: Math.ceil(percentage)
				})

			},
			err => {
				console.log ('err:', err)
			},
			() => {
				this.setState({
					imageUploadSuccess: true,
					imageUrl: task.snapshot.downloadURL
				});
				console.log ('task.snapshot.downloadURL:', task.snapshot.downloadURL)
			}
		);
	}
	deleteImage() {
		const storageRef = firebase.storage().ref(`listingImages/${this.state.file.name}`);
		storageRef.delete()
			.then(() => {
				this.setState({preview: null});
			})
			.catch(err => {
				console.log ('err:', err)
			})
	}

	render() {
		return (
			<div className="container" style={styles.container}>

				<If condition={!this.state.preview}>
					<Dropzone onDrop={this.onDrop} role="button">
						<div style={styles.dropzone} className="text-center">
							<i className="fa fa-cloud-upload" style={styles.cloudIcon}></i>
							<p>Click or drop an image here</p>
						</div>
					</Dropzone>
				</If>



				<If condition={this.state.preview}>
					<div className="row">
						<img src={this.state.preview} style={styles.preview} className="col-xs-6 col-sm-6 col-md-6"/>
						<div
							className="col-xs-6 col-sm-6 col-md-6">

							<If condition={!this.state.showProgress}>
								<button onClick={this.savePicture} className="btn btn-default" type="button">
									Save Picture
								</button>
								<button onClick={this.cancelImage} className="btn btn-default" type="button">
									Cancel
								</button>

							</If>


							<If condition={this.state.showProgress}>

								<If condition={!this.state.imageUploadSuccess}>
									<div className="progress" style={styles.progress}>
										<div className="progress-bar progress-bar-success progress-bar-striped" role="progressbar" aria-valuemin="0" style={{width: this.state.percentage}}>
										</div>
									</div>
									<p>Saving Image {this.state.displayPercentage}%</p>
								</If>

								<If condition={this.state.imageUploadSuccess}>
									<p>Image saved</p>
									<button className="btn btn-default" type="button" onClick={this.deleteImage}>
										Cancel Image
									</button>
									<button className="btn btn-default" type="button" onClick={this.confirmImage}>
										Confirm Image
									</button>
								</If>

							</If>


						</div>

					</div>
				</If>

			</div>
		)
	}
}

const styles = {
	dropzone: {
		paddingTop: 30
	},
	cloudIcon: {
		fontSize: 64
	},
	container: {
		color: '#696969',
		paddingBottom: 20
	},
	preview: {
		height: 300,
		width: 300
	},
	progress: {
		width: 250
	}
}

export default DropzoneComponent;
