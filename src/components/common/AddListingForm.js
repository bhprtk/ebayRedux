import React, {Component, PropTypes} from 'react';
import TextField from 'material-ui/TextField';


class AddListingForm extends Component {
	render() {
		return (
			<form className="form-horizontal">
				<div className="form-group">
					<label className="col-sm-3 control-label">Image URL</label>
					<div className="col-sm-9">
						<input type="text" className="form-control" placeholder="Image URL" />
					</div>
				</div>
				<div className="form-group">
					<label className="col-sm-3 control-label">Product Title</label>
					<div className="col-sm-9">
						<input type="text" className="form-control" placeholder="Product Title" />
					</div>
				</div>
				<div className="form-group">
					<label className="col-sm-3 control-label">Price</label>
					<div className="col-sm-9">
						<input type="number" className="form-control" min="0.01" step="0.01" placeholder="Price" />
					</div>
				</div>
				<div className="form-group">
					<label className="col-sm-3 control-label">Product Description</label>
					<div className="col-sm-9">
						<textarea type="text" className="form-control" placeholder="Product Description" />
					</div>
				</div>
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
