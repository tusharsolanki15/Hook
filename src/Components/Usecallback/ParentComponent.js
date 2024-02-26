import React, { useCallback } from 'react'
import Button from './Button';
import Count from './Count';
import Title from './Title';
import { useState } from 'react';



const ParentComponent = () => {
    const [age, setAge] = useState(25)
    const [salary, setSalary] = useState(50000)

    const incrementage = useCallback(() => {
        setAge(age + 1)
    },[age])

    const incrementsalary = useCallback(() => {
        setSalary(salary + 10000)
    }, [salary])

    return (
        <div>
            <Title />
            <Count text="age" count={age} />
            <Button handleClick={incrementage}>Increment Age</Button>
            <Count text="salary" count={salary} />
            <Button handleClick={incrementsalary}>Increment Salary</Button>
        </div>
    )
}

export default ParentComponent