import React, {Component} from 'react';
import Dropzone from 'react-dropzone';

class DropzoneComponent extends Component {
	constructor(props) {
		super(props);

		this.state = {
			preview: null,
			testing: 'test'
		}

		this.onDrop = this.onDrop.bind(this);
	}

	onDrop(file) {
		console.log ('file:', file)
		this.setState({
			preview: file[0].preview
		})
	}

	render() {
		console.log ('this.state:', this.state)
		return (
			<div>
				<If condition={!this.state.preview}>
					<Dropzone onDrop={this.onDrop}>
						<div>
							Click or drop a file here
						</div>
					</Dropzone>

				</If>

				<If condition={this.state.preview}>
					<img src={this.state.preview} />
				</If>

			</div>
		)
	}
}

export default DropzoneComponent;
