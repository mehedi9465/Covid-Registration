import { useEffect, useState } from "react";

const useVaccines = () => {
    const [vaccines, setVaccines] = useState([]);    

    useEffect(()=>{
        const getVaccines = async () => {
            const response = await fetch('https://raw.githubusercontent.com/mehedi9465/Covid_data/main/vaccines.json');
            const data = await response.json();
            setVaccines(data);
        }
        getVaccines();
    },[])

    return vaccines;
}

export default useVaccines;