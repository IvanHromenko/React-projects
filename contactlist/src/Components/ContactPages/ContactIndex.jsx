import Header from "../Layout/Header";
import AddContact from "./AddContact";
import AddRandomContact from "./AddRandomContact";
import RemoveAllContacts from "./RemoveAllContact";
import FavouriteContacts from "./FavouriteContacts";
import GeneralContacts from "./GeneralContacts";
import React from "react";
import Footer from "../Layout/Footer";


class ContactIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contactList: [
                {
                    id: 1,
                    name: "Ivan Hromenko",
                    phone: "666-666-7770",
                    email: "ivan@mail.com",
                    isFavorite: false,
                  },
                  {
                    id: 2,
                    name: "John Smith",
                    phone: "111-222-0000",
                    email: "john@mail.com",
                    isFavorite: true,
                  },
                  {
                    id: 3,
                    name: "Paul Show",
                    phone: "999-222-1111",
                    email: "paul@mail.com",
                    isFavorite: true,
                  },
            ]
        };
    }

    handleAddContact = (newContact) => {
        if(newContact.name === "") {
            return {status: "failure", msg: "Name is required!"};
        } else if(newContact.phone === "") {
            return {status: "failure", msg: "Phone is required!"};
        } else if(newContact.email === "") {
            return {status: "failure", msg: "Email is required!"};
        }
        const isContactExist = this.state.contactList.filter((u) => {
            if(u.name === newContact.name || u.phone === newContact.phone) {
                return true;
            };
        });
        if(isContactExist.length > 0) {
            return {status: "failure", msg: "Contact already exists!"};
        } else {
        const newContactToAdd = {...newContact, 
            id: this.state.contactList.length + 1,
            isFavorite: false};
        this.setState((prevState) => {
            return {
            contactList: prevState.contactList.concat([newContactToAdd]),
        };
        });    
        return{ status:"success", msg:"Contact added successfully!"};
    }
    }

    handleToggleFavorite = (contact) => {
        this.setState((prevState) => {
            const updatedContactList = prevState.contactList.map((u) => {
                if (u.id === contact.id) {
                    return { ...u, isFavorite: !u.isFavorite };
                }
                return u;
            });
            return { contactList: updatedContactList };
        });
    }

    handleDeleteContact = (contact) => {
        this.setState((prevState) => {
            const updatedContactList = prevState.contactList.filter(
                (u) => u.id !== contact.id
            );
            return { contactList: updatedContactList };
        });
    }

    handleAddRandomContact = (newContact) => {
    const newFinalContact = {
      ...newContact,
      id: this.state.contactList[this.state.contactList.length - 1].id + 1,
      isFavorite: false,
    };
    this.setState((prevState) => {
      return {
        contactList: prevState.contactList.concat([newFinalContact]),
      };
    });
  };

  handleRemoveAllContact = () => {
    this.setState((prevState) => {
      return {
        contactList: [],
      };
    });
  };

    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <div className="row py-3">
                      <div className="col-4 offset-2 row">
                        <AddRandomContact handleAddRandomContact={this.handleAddRandomContact}/>
                        </div>
                    <div className="col-4 row">
                        <RemoveAllContacts handleRemoveAllContact={this.handleRemoveAllContact}/>
                    </div>
                    <div className="row py-2">
                        <div className="col-8 offset-2 row">
                        <AddContact handleAddContact={this.handleAddContact} />
                        </div>
                    </div>
                    <div className="row py-2">
                    <div className="col-8 offset-2 row">
                        <FavouriteContacts contacts={this.state.contactList.filter(
                            (u) => u.isFavorite===true)
                            }
                            favouriteClick={this.handleToggleFavorite}
                            deleteContact={this.handleDeleteContact}/>
                        </div>
                    </div>
                    <div className="row py-2">
                    <div className="col-8 offset-2 row">
                        <GeneralContacts contacts={this.state.contactList.filter(
                            (u) => u.isFavorite===false)
                            }
                            favouriteClick={this.handleToggleFavorite}
                            deleteContact={this.handleDeleteContact}/>
                    </div>
                    </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default ContactIndex;