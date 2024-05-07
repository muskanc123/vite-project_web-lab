// props: way to receive data
export const User = ({ name="Muskan" ,username = "Loki", email = "Email@gmail.com" , address,index}) => {
    return (
      <div cl="user">
        <img
          src={`https://api.dicebear.com/8.x/lorelei/svg?seed=${username}`}
          alt="user"
        />

        <div>{name}</div>
        <div>{username}</div>
        <div>{email}</div>
        {JSON.stringify(address.city)}
        {(index)}

      </div>
    );
  };