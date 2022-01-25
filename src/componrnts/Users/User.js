const User = ({user, getUser}) => {

    return (
        <div>
            {user.id}) {user.name} . . <button onClick={() => getUser={getUser} }> Details </button>
        </div>
)
    ;
};

export default User;