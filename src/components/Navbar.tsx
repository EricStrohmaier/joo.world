import { FC } from "react";
import Button from "./CommonUI/Button";
import { getPubKey } from "../actions/Nostr";
// import { useNavigate } from "react-router-dom";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
  // const navigate = useNavigate();
  const isLogged = sessionStorage.getItem("isLogged") === "true";
  // const [displayLogError, setDisplayLogError] = useState(false);

  // function goToProfile() {
  //   getPublicKey()
  //     .then((data) => {
  //       let npub = nip19.npubEncode(data);
  //       navigate(`/profile/${npub}`);
  //     })
  //     .catch((error) => console.log(error));
  // }

  return (
    <div className="w-full fixed top-0 z-50 bg-gray-50">
      {/* Navbar content */}
      <div className="flex justify-center items-center  z-10">
        <div className="w-full max-w-6xl flex justify-between p-2">
          <Button
            title={"nostWork"}
            style={
              "bg-gray-100 font-bold text-md mr-2 border-2 border-gray-200"
            }
          />
          {isLogged ? (
            <button
              onClick={() => {
                sessionStorage.clear();
                window.location.reload();
              }}
              className="bg-gray-100 text-md  mr-2 border-2 border-gray-200 flex justify-center p-3 rounded-[10px] transiton duration-100 "
            >
              Log out
            </button>
          ) : (
            <button
              className={`bg-gray-100 text-md  mr-2 border-2 border-gray-200 flex justify-center p-3 rounded-[10px] transiton duration-100 `}
              onClick={() => {
                const pubkey = getPubKey();

                pubkey.then((data) => {
                  sessionStorage.setItem("isLogged", "true");
                  sessionStorage.setItem("pubkey", `${data}`);
                  window.location.reload();
                });
              }}
            >
              Log in with extension
            </button>
          )}
        </div>
      </div>
      <div className="flex border-gray-200 border-b-2 w-full"></div>
    </div>
  );
};

export default Navbar;
