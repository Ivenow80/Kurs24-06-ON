function Avatar({ person, size, age }) {
  return (
    <div>
      <img
        className="avatar"
        src={getImageUrl(person)}
        alt={person.name}
        width={size}
        height={size}
      />
      <p>Alter: {age}</p> {/75/}
    </div>
  );
}
