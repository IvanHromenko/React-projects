import Header from "../Layout/Header";
import AddContact from "./AddContact";
import AddRandomContact from "./AddRandomContact";
import RemoveAllContacts from "./RemoveAllContacts";
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
    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <div className="row py-3">
                      <div className="col-4 offset-2">
                        <AddRandomContact />
                        </div>
                    <div className="col-4">
                        <RemoveAllContacts />
                    </div>
                    <div className="row py-2">
                        <AddContact />
                    </div>
                    <div className="row py-2">
                        <FavouriteContacts contacts={this.state.contactList.filter(
                            (u) => u.isFavorite===true)
                            }/>
                    </div>
                    <div className="row py-2">
                        <GeneralContacts contacts={this.state.contactList.filter(
                            (u) => u.isFavorite===false)
                            }/>
                    </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default ContactIndex;