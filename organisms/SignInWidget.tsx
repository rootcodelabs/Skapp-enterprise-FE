import SignInForm from "@/community/molecules/SignInForm";


export default function SignInWidget() {

  const signInButtonClick = () => {
    alert('Enterprise sign in trigger...')
  }

  return (
    <div>
      <SignInForm click={signInButtonClick}/>
    </div>
  );
}
