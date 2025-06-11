import Contact from "./Contact";

const GeneralContacts = (props) => {
    return (
        <div
            className="col-12 py-2"
            style={{ borderRadius: "10px", backgroundColor: "#323637" }}
        >
        <div className="text-center text-white-50">All Contacts</div>
        <div className="p-2">
        {
            props.contacts.map((contact, index) => (
                <Contact key={index} contact={contact} favouriteClick={props.favouriteClick}
                deleteContact={props.deleteContact}
                updateClick={props.updateClick}/>
            ))
        }
        </div>
        </div>
    );
}

export default GeneralContacts;