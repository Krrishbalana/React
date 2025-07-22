import {useEffect, useState} from "react"

function useCurrencyInfo() {
    let currency;
    const [data, setData] = useState({ });
    useEffect(() => {
        fetch(`https://api.frankfurter.dev/v1/latest?base=${currency}`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
    }, [currency])
    console.log(data);
    return data;
}

export default useCurrencyInfo;