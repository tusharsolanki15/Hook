import {useEffect} from 'react'

const useDocumetTitle = (count) => {
    useEffect(()=>{
        document.title = `Coutn ${count}`
    }, [count])
}

export default useDocumetTitle