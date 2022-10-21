import SignUpForm from "../components/LogInForm";
import LogInForm from "../components/SignUpForm";

export default function Auth (props) {
    return (
        <main>
            <h1>Auth Page</h1>
            <h2>Sign Up</h2>
            <SignUpForm setUser={props.setUser} />
            <h2>Log In</h2>
            <LogInForm setUser={props.setUser} />
        </main>
    )
}