import { getRandomUser } from "../../Utility/api";

const GetRandomContact = async (props) => {
    const randomUser = await getRandomUser();
    return props.handleAddRandomContact ({
        name: randomUser.data.first_name + " " + randomUser.data.last_name,
        email: randomUser.data.email,
        phone: randomUser.data.phone_number
    });
};

const AddRandomContact = (props) => {
  return (
    <div>
      <button
        className="btn btn-success form-control"
        onClick={() => GetRandomContact(props)}
      >
        Add Random Contact
      </button>
    </div>
  );
};

export default AddRandomContact;