import React, { Component } from 'react';

class StorePicker extends Component {
	myInput = React.createRef();

	goToStore = event => {
		event.preventDefault();
		const storeName = this.myInput.value.value;
		this.props.history.push(`/store/${storeName}`);
	};
	render() {
		return (
			<form className="store-selector" onSubmit={this.goToStore}>
				<h2> Please Enter A Store </h2>

				<input required type="text" ref={this.myInput} placeholder="Store Name" />

				<button type="submit"> Visit Store → </button>
			</form>
		);
	}
}

export default StorePicker;
