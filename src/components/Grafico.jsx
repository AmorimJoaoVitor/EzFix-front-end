import React from 'react';
import { Doughnut } from 'react-chartjs-2';

function chamaValores({ valorSmartphone, valorNotebook, valorDesktop, valorOutros }) {
    const data = {
        datasets: [
            {
                label: "Gráfico de Receitas",
                data: [valorSmartphone, valorNotebook, valorDesktop, valorOutros],
                backgroundColor: [
                    "#B09FFF",
                    "#ffd700",
                    "#14CA3C",
                    "#7C7878",
                ],
                hoverOffset: 15,
            },
        ],
    };
    return data
}

const Grafico = ({ valorSmartphone, valorNotebook, valorDesktop, valorOutros }) => (
    <>
        <div>
            <Doughnut data={chamaValores({ valorSmartphone, valorNotebook, valorDesktop, valorOutros })}> </Doughnut>
        </div>
    </>
);

export default Grafico;