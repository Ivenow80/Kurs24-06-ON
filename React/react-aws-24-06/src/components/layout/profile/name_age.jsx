export function Avatar({ name, age }) {
    return (
      <div>
        <img
          className="avatar"
          src="https://i.imgur.com/1bX5QH6.jpg"
          alt={name}
        />
        <h1>{name}</h1>
        <p>Age: {age}</p>
      </div>
    );
  }
  