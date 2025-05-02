import Contact from "./Contact";

const GeneralContacts = (props) => {
    return (
        <div>
        {
            props.contacts.map((contact, index) => (
                <Contact key={index} contact={contact} />
            ))
        }
        </div>
    );
}

export default GeneralContacts;