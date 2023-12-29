import React, { useEffect, useState } from "react";
import Dropdown from "../../Base/Dropdown"
import { useGetVehicles } from "../../../api/api";

interface Model {
    id: number;
    title: string;
}

interface Option {
    label: string;
    value: number;
}

interface CarType extends Option {
    models: Model[]
}



const FirstStep = () => {
    const [carsType, setCarsType] = useState<CarType[] >([]);
    const [kindsOption, setKindsOption] = useState<Option[]>([]);
    const [selectedCarType, setSelectedCarType] = useState<CarType | null>(null);
    const [selectedKindOption, setSelectedKindOption] = useState<CarType | null>(null);
    const { data } = useGetVehicles();

    useEffect(()=>{
        if (data) {
            const types = data.map(item => ({label: item.title, value: item.id, models: item.usages }))
            setCarsType(types)
        } 
	}, [data])

    useEffect(()=>{
        if (selectedCarType) {
            const kinds = selectedCarType.models.map(item => ({label: item.title, value: item.id}))
            setKindsOption(kinds)
        }
    },[selectedCarType])


    const handleCarSelect = (option: CarType) => setSelectedCarType(option)
    const handleKindSelect = (option: CarType) => setSelectedKindOption(option)

    return (
        <div>
            <span className='text-gray-500 text-xl'> نوع و مدل خودروی خود را انتخاب کنید. </span>
            <div>
                <div className="flex flex-row p-4">
                    <div className="w-1/5 ml-5">
                        <Dropdown
                            options={carsType}
                            placeholder="نوع خودرو"
                            /* @ts-ignore */
                            onSelect={handleCarSelect}
                        />
                    </div>
                    <div className="w-1/5">
                        <Dropdown
                            options={kindsOption}
                            placeholder="مدل خودرو"
                            /* @ts-ignore */
                            onSelect={handleKindSelect}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FirstStep