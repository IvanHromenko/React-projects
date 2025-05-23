import React from 'react';

class AddContact extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            errorMessage: undefined,
            successMessage: undefined,
        };
    }

    handleAddContactFormSubmit = (e) => {
        e.preventDefault();
        const name = e.target.elements.contactName.value.trim();
        const phone = e.target.elements.contactPhone.value.trim();
        const email = e.target.elements.contactEmail.value.trim();
        const response = this.props.handleAddContact({name:name, phone:phone, email:email});

        if(response.status === "success") {
            this.setState({errorMessage: undefined, successMessage: response.msg});
            document.querySelector('.contact-form').reset();
        } else {
            this.setState({errorMessage: response.msg, successMessage: undefined});
        }
    };

    render() {
    return (
        <div className="border col-12 text-white p-2">
            <form onSubmit={this.handleAddContactFormSubmit} className='contact-form'>
                <div className="row p-2">
                <div className="col-12 text-white-50">Add a new contact</div>
                <div className="col-12 col-md-4 p-1">
                    <input type="text" className="form-control form-control-sm" placeholder="Name" name="contactName" />
                </div>
                <div className="col-12 col-md-4 p-1">
                    <input type="text" className="form-control form-control-sm" placeholder="Phone" name="contactPhone"/>
                </div>
                <div className="col-12 col-md-4 p-1">
                    <input type="text" className="form-control form-control-sm" placeholder="Email" name="contactEmail"/>
                </div>
                {this.state.errorMessage === undefined ? (<div></div>) : (
                    <div className="col-12 text-center text-danger">{this.state.errorMessage}</div>
                )}
                {this.state.successMessage === undefined ? (<div></div>) : (
                    <div className="col-12 text-center text-success">{this.state.successMessage}</div>
                )}
                <div className="col-12 col-md-4 offset-md-4 p-1">
                    <button className="btn btn-primary btn-sm form-control">
                    Create</button>
            </div>
           
            </div>
            </form>
        </div>
    );
}
}

export default AddContact;