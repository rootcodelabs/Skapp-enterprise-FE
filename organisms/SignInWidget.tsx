import SignInForm from "@/community/molecules/SignInForm";
import GoogleSignInButton from "@/enterprise/atoms/GoogleSignInButton";


export default function SignInWidget() {

  const signInButtonClick = () => {
    alert('Enterprise sign in trigger...')
  }

  return (
    <div>
      <SignInForm click={signInButtonClick}/>
      <GoogleSignInButton/>
    </div>
  );
}
