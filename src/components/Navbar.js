import ButtonComponent from "./ButtonComponent"

function Brand() {
    return(
        <div>Logo</div>
    );
}
function Menu() {
    return(
        <div>
            <li>Home</li>
            <li>About</li>
            <li>Service</li>
            <li>Portfolio</li>
            <li>Contact</li>
        </div>
    );
}
function LoginStatus() {
    return (
        <div>
            <ButtonComponent text="Login"/>
        </div>
    )
}
const Navbar = () => {
    return(
        <div 
            style = {
                {border: "1px solid #333"}
            }
        >
            <Brand />
            <Menu />
            <LoginStatus />
        </div>
    )
}
export default Navbar;