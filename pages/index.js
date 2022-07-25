import users from "../data/users.json";
function Home() {

  return (
    <>
      {users.map((item, i) => (
        <>
          {item.user.username}
        </>
      ))}
    </>
  )
}
export default Home;