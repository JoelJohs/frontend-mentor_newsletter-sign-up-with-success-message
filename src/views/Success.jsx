import useEmailStore from "../store"
import { useNavigate } from "react-router-dom";

import successIcon from "../assets/icon-success.svg"

const Success = () => {
    const email = useEmailStore((state) => state.email);
    const navigate = useNavigate();

  return (
    <main className="flex justify-center items-center h-screen">
        <div className="bg-white flex flex-col p-10 xl:rounded-3xl w-full h-full xl:max-w-[500px] xl:h-auto">
            <div className="flex flex-col flex-grow justify-center mb-36 xl:mb-0">
              <img src={successIcon} alt="Success Icon" className="w-16 mb-10"/>
              <h1 className=" text-6xl font-semibold">Thanks for subscribing!</h1>
              <p className="my-10"> A confirmation email has   been sent to <strong>{email}</strong>. Please open it and click the button inside to confirm
                      your subscription. </p>
            </div>
        <input
            type="submit"
            value="Dismiss message"
            onClick={() => {
                navigate("/");}}
            className="bg-dark-slate-grey text-white font-bold rounded-md p-4 xl:my-2 cursor-pointer hover:bg-gradient-to-r hover:from-tomato hover:to-orange mt-auto"
          />
        </div>
    </main>
  )
}

export default Success