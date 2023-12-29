import { ReactComponent as LogoCarInsurance } from '../../assets/insurance.svg';
import { useNavigate } from "react-router-dom";


const InsuranceList = () => {
    const navigate = useNavigate();

    const navigateToThirdPartyInsurance = () => {
        navigate('/steps/first');
    }

    return (
        <div className='flex flex-col w-2/5 p-8'>
            <h2 className='text-3xl mb-2 text-bold'> انتخاب بیمه </h2>
            <div className="flex mt-6">
                <div className="flex flex-col w-[150px] h-[150px] ml-7 text-center border border-gray-200 rounded-3xl cursor-pointer" onClick={navigateToThirdPartyInsurance}>
                    <LogoCarInsurance className="w-full p-6" />
                    <div className="pb-3"> شخص ثالث </div>
                </div>
                <div className="text-center border border-gray-200 rounded-3xl cursor-not-allowed">
                    <div className="flex flex-col w-[150px] h-[150px] opacity-50">
                        <LogoCarInsurance className="w-full p-6" />
                        <div className="pb-3"> بدنه </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default InsuranceList;
