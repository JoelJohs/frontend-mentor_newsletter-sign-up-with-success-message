
import iconList from "../assets/icon-list.svg";
import signUp from "../assets/illustration-sign-up-desktop.svg";
import signUpMobile from "../assets/illustration-sign-up-mobile.svg";
import Form from "./Form";



const Card = () => {
  return (
    
    <div className="bg-white flex flex-col xl:flex-row xl:p-5 xl:rounded-3xl w-full h-full xl:max-w-[900px] xl:h-auto">
      <div className="xl:hidden block">
        <img src={signUpMobile} alt="Sign Up Ilulustration" className="w-full"/>
      </div>
      <div className="py-16 px-12 justify-center">
        <h1 className=" text-6xl font-bold">Stay updated!</h1>
        <p className="my-5">
          Join 60,000+ product managers receiving monthly updates on:
        </p>
        <ul>
          <li className="flex align-middle mb-2">
            <img src={iconList} alt="Icon List" className="mr-3" /> Product
            discovery and building what matters
          </li>
          <li className="flex align-middle mb-2">
            <img src={iconList} alt="Icon List" className="mr-3" />
            Measuring to ensure updates are a success
          </li>
          <li className="flex align-middle mb-2">
            <img src={iconList} alt="Icon List" className="mr-3" />
            And much more!
          </li>
        </ul>

        <Form/>
      </div>
      <div className="hidden xl:block">
        <img src={signUp} alt="Sign Up Ilulustration" />
      </div>
    </div>
  );
};

export default Card;


