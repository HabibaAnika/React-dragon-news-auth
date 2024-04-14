import { FaGoogle, FaGithub } from "react-icons/fa";
import facebook from '../../../assets/facebook-24.png';
import twitter from '../../../assets/twitter-48.png';
import instagram from '../../../assets/instagram-48.png';
import qzone1 from '../../../assets/qZone1.png';
import qzone2 from '../../../assets/qZone2.png';
import qzone3 from '../../../assets/qZone3.png';


const RightSideNav = () => {
    return (
        <div>
            <div className="p-4 space-y-3 mb-6">
                <h2 className="text-2xl font-semibold">Login With</h2>
                <button className="btn btn-outline w-full">
                    <FaGoogle />
                    Login with Google
                </button>
                <button className="btn btn-outline w-full">
                    <FaGithub />
                    Login with Github
                </button>
            </div>


            <div className="p-4 mb-6">
                <h2 className="text-2xl font-semibold mb-4">Find Us on</h2>
                <a className="p-4 flex items-center text-lg border rounded-t-lg gap-2" href="">
                   <img className="bg-[#F3F3F3] p-3 rounded-full h-10 w-10" src={facebook} alt="" />
                   <p>Facebook</p>
                </a>
                <a className="p-4 flex items-center text-lg border-x gap-2" href="">
                   <img className="bg-[#F3F3F3] w-11 p-2 rounded-full" src={twitter} alt="" />
                   <p>Twitter</p>
                </a>
                <a className="p-4 flex items-center text-lg border rounded-b-lg gap-2" href="">
                   <img className="bg-[#F3F3F3] p-2 w-10 rounded-full" src={instagram} alt="" />
                   <p>Instagram</p>
                </a>
            </div>

            {/* q zone */}
            <div className="p-4 space-y-3 mb-6">
                <h2 className="text-2xl font-semibold">Q Zone</h2>
                <img src={qzone1} alt="" />
                <img src={qzone2} alt="" />
                <img src={qzone3} alt="" />
            </div>
            
        </div>
    );
};

export default RightSideNav;