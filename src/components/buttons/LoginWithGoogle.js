
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LoginWithGoogle = () => {
    return ( 
        <button 
            onClick={()=>{console.log('test')}}
            className=" bg-white shadow text-center w-full 
            py-4 px-6 flex gap-3 items-center justify-center">
                <FontAwesomeIcon icon={faGoogle} className=" h-6"/>
                <span>
                    Sign In with Google
                </span>
        </button>
    );
}
 
export default LoginWithGoogle;