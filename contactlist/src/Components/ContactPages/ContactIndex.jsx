import Header from "../Layout/Header";
import AddContact from "./AddContact";
import AddRandomContact from "./AddRandomContact";
import RemoveAllContacts from "./RemoveAllContacts";
import FavouriteContacts from "./FavouriteContacts";
import GeneralContacts from "./GeneralContacts";
import React from "react";
import Footer from "../Layout/Footer";


class ContactIndex extends React.Component {
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
                        <FavouriteContacts />
                    </div>
                    <div className="row py-2">
                        <GeneralContacts />
                    </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default ContactIndex;