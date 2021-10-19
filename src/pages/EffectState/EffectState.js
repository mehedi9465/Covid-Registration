import React from 'react';
import { Container } from 'react-bootstrap';
import { Bar, BarChart, ResponsiveContainer } from 'recharts';
import useVaccines from '../../Custom hooks/useVaccines';

const EffectState = () => {
    const vaccines = useVaccines();

    let objectContainer = {};
    let arrayContainer = [];
    vaccines.forEach(vaccine => {
        // console.log(course);
        objectContainer.name = vaccine?.name;
        objectContainer.uv = vaccine?.effectiveness;
        arrayContainer.push(objectContainer);
        objectContainer = {};
    });
    console.log(arrayContainer);
    return (
        <div>
            <Container id='effectState'>
                    <div className="enrollmentState d-flex flex-wrap">
                    <ResponsiveContainer width="100%" height="100%">
                    <BarChart width={150} height={40} data={arrayContainer}>
                        <Bar dataKey="uv" fill="#8884d8" />
                    </BarChart>
                    </ResponsiveContainer>
                    </div>
                </Container>
        </div>
    );
};

export default EffectState;