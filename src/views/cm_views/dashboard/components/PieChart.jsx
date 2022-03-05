import React from 'react';
import { CChart } from '@coreui/react-chartjs';
import { CCol, CRow } from '@coreui/react';


const PieChart = () => {
    return (
        <CChart
            type="doughnut"
            height={4}
            width={10}
            data={{
                labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
                datasets: [
                    {
                        backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
                        data: [40, 20, 80, 10],
                    },
                ],
            }}
        />
    );
};

export default PieChart;