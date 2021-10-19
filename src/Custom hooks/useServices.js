import { useEffect, useState } from "react";

const useServices = () => {
    const [services, setServices] = useState([]);    

    useEffect(()=>{
        const getServices = async () => {
            const response = await fetch('https://raw.githubusercontent.com/mehedi9465/Covid_data/main/services.json');
            const data = await response.json();
            setServices(data);
        }
        getServices();
    },[])

    return services;
}

export default useServices;