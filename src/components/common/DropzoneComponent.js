import React, {Component} from 'react';
import Dropzone from 'react-dropzone';
import firebase from 'firebase';

class DropzoneComponent extends Component {
	constructor(props) {
		super(props);

		this.state = {
			preview: null,
			testing: '50%'
		}

		this.onDrop = this.onDrop.bind(this);
		this.savePicture = this.savePicture.bind(this);
	}

	onDrop(file) {
		console.log ('file:', file)
		this.setState({
			file: file[0],
			preview: file[0].preview
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
		console.log ('this.state:', this.state)
		return (
			<div>

				<img src="https://firebasestorage.googleapis.com/v0/b/ebayredux-247f8.appspot.com/o/listingImages%2Fcat%20jump.gif?alt=media&token=ea505817-b465-4d1b-9ce3-e8c40b5d3cab"/>
				<div className="progress">
					<div className="progress-bar progress-bar-success progress-bar-striped" role="progressbar" aria-valuemin="0" aria-valuemax="100" style={{width: this.state.percentage}}>
					</div>
				</div>

				<If condition={!this.state.preview}>
					<Dropzone onDrop={this.onDrop}>
						<div>
							Click or drop a file here
						</div>
					</Dropzone>
					<button onClick={() => this.setState({testing: '20%'})}>
						update
					</button>

				</If>



				<If condition={this.state.preview}>
					<img src={this.state.preview} />
					<button
						type="button"
						className="btn btn-primary"
						onClick={this.savePicture}>
						Save Picture
					</button>
				</If>

			</div>
		)
	}
}

const styles = {
	progress: {
		width: "70%"
	}
}

export default DropzoneComponent;
