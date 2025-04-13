export default function Student(props) {
    return (
        <div>
            <h1 className="heading1">Student</h1>
            <div>
                <h2>{props.name}</h2>
                <h3>Coding Experience - {props.experience} years</h3>
            </div>
        </div>
    )
}