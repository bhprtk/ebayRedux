import React, {Component} from 'react';
import Dropzone from 'react-dropzone';
import firebase from 'firebase';

class DropzoneComponent extends Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			preview: null,
			testing: '50%'
		}

		this.onDrop = this.onDrop.bind(this);
		this.savePicture = this.savePicture.bind(this);
		this.cancelImage = this.cancelImage.bind(this);
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
		console.log ('this.state.file:', this.state.file)
		const storageRef = firebase.storage().ref(`listingImages/${this.state.file.name}`);
		const task = storageRef.put(this.state.file);

			task.on('state_changed', snap => {
				const percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
					this.setState({
						percentage: `${percentage.toString()}%`
					})

				}

		)

	}

	render() {
		console.log ('this.props:', this.props)
		return (
			<div className="container" style={styles.container}>

				{/*<img src="https://firebasestorage.googleapis.com/v0/b/ebayredux-247f8.appspot.com/o/listingImages%2Fcat%20jump.gif?alt=media&token=ea505817-b485-4d1b-9ce3-e8c40b5d3cab"/>*/}
				{/*<div className="progress">
					<div className="progress-bar progress-bar-success progress-bar-striped" role="progressbar" aria-valuemin="0" aria-valuemax="100" style={{width: this.state.percentage}}>
					</div>
				</div>*/}

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
							<button onClick={this.saveImage} className="btn btn-default">
								Save Picture
							</button>
							<button onClick={this.cancelImage} className="btn btn-default" type="button">
								Cancel
							</button>

						</div>

					</div>
				</If>

			</div>
		)
	}
}

const styles = {
	progress: {
		width: "70%"
	},
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
	}
}

export default DropzoneComponent;
