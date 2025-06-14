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
        const id = e.target.elements.contactId.value.trim();
        let response = undefined;
        if(this.props.isUpdating) {
            response = this.props.handleUpdateContact({
                name: name,
                phone: phone,
                email: email,
                id : id
            });
        } else {
          response = this.props.handleAddContact({name:name, phone:phone, email:email});
        }

        if(response.status === "success") {
            this.setState({errorMessage: undefined, successMessage: response.msg});
            document.querySelector('.contact-form').reset();
        } else {
            this.setState({errorMessage: response.msg, successMessage: undefined});
        }
    };

    handleCancel = () => {
    this.props.cancelUpdateContact();
  };

    render() {
    return (
        <div className="border col-12 text-white p-2">
            <form onSubmit={this.handleAddContactFormSubmit} className='contact-form'>
                <div className="row p-2">
                     <input hidden                 
                    name="contactId"
                    defaultValue={this.props.isUpdating? this.props.selectedContact.id : ""}/>
                <div className="col-12 text-white-50">{this.props.isUpdating? "Update contact" : "Add a new contact"}</div>
                <div className="col-12 col-md-4 p-1">
                    <input type="text" 
                    className="form-control form-control-sm" 
                    placeholder="Name" 
                    name="contactName" 
                    defaultValue={this.props.isUpdating? this.props.selectedContact.name : ""}/>
                </div>
                <div className="col-12 col-md-4 p-1">
                    <input type="text" 
                    className="form-control form-control-sm" 
                    placeholder="Phone" 
                    name="contactPhone"
                    defaultValue={this.props.isUpdating? this.props.selectedContact.phone : ""}/>
                </div>
                <div className="col-12 col-md-4 p-1">
                    <input type="text" 
                    className="form-control form-control-sm" 
                    placeholder="Email" 
                    name="contactEmail"
                    defaultValue={this.props.isUpdating? this.props.selectedContact.email : ""}/>
                </div>
                {this.state.errorMessage === undefined ? (<div></div>) : (
                    <div className="col-12 text-center text-danger">{this.state.errorMessage}</div>
                )}
                {this.state.successMessage === undefined ? (<div></div>) : (
                    <div className="col-12 text-center text-success">{this.state.successMessage}</div>
                )}
                <div
              className={`col-12 p-1 ${
                this.props.isUpdating
                  ? "col-md-4 offset-md-2"
                  : "col-md-6 offset-md-3"
              }`}
            >
              <button className="btn btn-primary btn-sm form-control">
                {this.props.isUpdating ? "Update" : "Create"}
              </button>
            </div>
            <div className="col-12 col-md-4 p-1">
              {this.props.isUpdating && (
                <button
                  className="btn btn-secondary form-control btn-sm"
                  onClick={this.handleCancel}
                >
                  Cancel
                </button>
              )}
            </div>
           
            </div>
            </form>
        </div>
    );
}
}

export default AddContact;