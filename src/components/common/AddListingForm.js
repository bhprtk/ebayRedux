import React, {Component, PropTypes} from 'react';
import TextField from 'material-ui/TextField';
import {Modal, Button} from 'react-bootstrap';



class AddListingForm extends Component {
	constructor(props) {
		super(props);

		this.saveListing = this.saveListing.bind(this);
		this.onChange = this.onChange.bind(this);
	}

	onChange(e) {
		let key = e.target.dataset.statekey;
    let value = e.target.value;

    this.setState({
      [key]: value
    });
	}

	saveListing(e) {
		e.preventDefault();
		console.log ('this.state:', this.state)
	}

	render() {
		return (
			<form className="form-horizontal" onSubmit={this.saveListing}>
				<div className="form-group">
					<label className="col-sm-3 control-label">Image URL</label>
					<div className="col-sm-9">
						<input
							type="text"
							className="form-control"
							placeholder="Image URL"
							data-statekey='imageUrl'
							onChange={this.onChange}
							required/>
					</div>
				</div>
				<div className="form-group">
					<label className="col-sm-3 control-label">Product Title</label>
					<div className="col-sm-9">
						<input
							type="text"
							className="form-control"
							placeholder="Product Title"
							data-statekey='title'
							onChange={this.onChange}
							required/>
					</div>
				</div>
				<div className="form-group">
					<label className="col-sm-3 control-label">Price</label>
					<div className="col-sm-9">
						<input
							type="number"
							className="form-control"
							min="0.01" step="0.01"
							placeholder="Price"
							data-statekey='price'
							onChange={this.onChange}
							required/>
					</div>
				</div>
				<div className="form-group">
					<label className="col-sm-3 control-label">Product Description</label>
					<div className="col-sm-9">
						<textarea
							type="text"
							className="form-control"
							placeholder="Product Description" 
							data-statekey='description'
							onChange={this.onChange}
							required/>
					</div>
				</div>
				<Modal.Footer>
					<button className="btn btn-default">Save</button>
					<button className="btn btn-default" type="button" onClick={this.props.hide}>Cancel</button>

				</Modal.Footer>

			</form>

		);
	}
}

const styles = {
	textBox: {
		width: '100%'
	}
};

export default AddListingForm;
