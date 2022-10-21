import SignUpForm from "../components/LogInForm";
// import LogInForm from "../components/SignUpForm";

export default function Signup (props) {
    return (
        <main>
            <h1>Signup Page</h1>
            <h2>Sign Up</h2>
            <SignUpForm setUser={props.setUser} />
        </main>
    )
}