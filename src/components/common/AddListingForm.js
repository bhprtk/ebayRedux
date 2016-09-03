import React, {Component, PropTypes} from 'react';
import TextField from 'material-ui/TextField';
import {Modal, Button} from 'react-bootstrap';
import Dropzone from 'react-dropzone';

import DropzoneComponent from './DropzoneComponent';

const AddListingForm = ({onInputChange, saveListing, hide}) => {
	return (
		<form className="form-horizontal" onSubmit={saveListing}>
			<div className="form-group">

				<label className="col-sm-3 control-label">Image URL</label>
				<div className="col-sm-9">
					<input
						type="text"
						className="form-control"
						placeholder="Image URL"
						data-statekey="imageUrl"
						onChange={onInputChange}
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
						data-statekey="title"
						onChange={onInputChange}
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
						data-statekey="price"
						onChange={onInputChange}
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
						data-statekey="description"
						onChange={onInputChange}
						required/>
				</div>
			</div>
			<Modal.Footer>
				<button className="btn btn-default">Save</button>
				<button className="btn btn-default" type="button" onClick={hide}>Cancel</button>

			</Modal.Footer>

		</form>

	);
};

AddListingForm.propTypes = {
	onInputChange: PropTypes.func.isRequired,
	saveListing: PropTypes.func.isRequired,
	hide: PropTypes.func.isRequired
};

const styles = {
	textBox: {
		width: '100%'
	}
};

export default AddListingForm;
