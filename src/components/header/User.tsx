import LoginBtn from "../shared/LoginBtn";

export default function User() {
  // return different component depending on the login state
  // LoginBTn or UserProfile
  return (
    <div>
      <LoginBtn />
    </div>
  );
}
