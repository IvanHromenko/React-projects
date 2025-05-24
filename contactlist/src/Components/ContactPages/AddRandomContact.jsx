import { getRandomUser } from "../../Utility/api";

const getRandomContact = async () => {
    const randomUser = await getRandomUser();
    return {
        firstName: randomUser.first_name,
        lastName: randomUser.last_name,
        email: randomUser.email,
        phone: randomUser.phone_number,
    };
}

const AddRandomContact = () => {
    
    return (
        <div>
            <button className="btn btn-success form-control">Add Random Contact</button>
        </div>
    );
}

export default AddRandomContact;