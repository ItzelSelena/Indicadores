import React from "react";
import ReactApexChart from "react-apexcharts";

class ApexChart extends React.Component {
  constructor(props) {
    super(props);

    // Estado inicial del componente
    this.state = {
      // Datos de las series a graficar
      series: [{
        name: 'Income', // Nombre de la serie
        type: 'column', // Tipo de gráfico (columna)
        data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6] // Datos de la serie
      }, {
        name: 'Cashflow', // Nombre de la serie
        type: 'column', // Tipo de gráfico (columna)
        data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5] // Datos de la serie
      }, {
        name: 'Revenue', // Nombre de la serie
        type: 'line', // Tipo de gráfico (línea)
        data: [1000000, 956787, 1000000, 800000, 600000, 900000, 750000, 1350000] // Datos de la serie
      }],
      // Opciones de configuración del gráfico
      options: {
        chart: {
          height: 350, // Altura del gráfico
          type: 'line', // Tipo de gráfico (línea)
          stacked: false // No apilado
        },
        dataLabels: {
          enabled: false // Etiquetas de datos desactivadas
        },
        stroke: {
          width: [1, 1, 4] // Ancho de las líneas
        },
        title: {
          text: 'XYZ - Análisis de Stock (2009 - 2016)', // Título del gráfico
          align: 'left', // Alineación del título
          offsetX: 110 // Desplazamiento horizontal del título
        },
        xaxis: {
          categories: ['JUL 23', 'AGO 23', 'SEP 23', 'OCT 23', 'NOV 23', 'DIC 23', 'ENE 24', 'FEB 24'], // Categorías del eje X
        },
        yaxis: [
          {
            axisTicks: {
              show: true,
            },
            axisBorder: {
              show: true,
              color: '#008FFB'
            },
            labels: {
              style: {
                colors: '#008FFB',
              }
            },
            title: {
              text: "Ingresos (miles de millones)", // Título del eje Y
              style: {
                color: '#008FFB',
              }
            },
            tooltip: {
              enabled: true
            }
          },
          {
            seriesName: 'Income',
            opposite: true,
            axisTicks: {
              show: true,
            },
            axisBorder: {
              show: true,
              color: '#00E396'
            },
            labels: {
              style: {
                colors: '#00E396',
              }
            },
            title: {
              text: "Flujo de Efectivo Operativo (miles de millones)", // Título del eje Y
              style: {
                color: '#00E396',
              }
            },
          },
          {
            seriesName: 'Revenue',
            opposite: true,
            axisTicks: {
              show: true,
            },
            axisBorder: {
              show: true,
              color: '#FEB019'
            },
            labels: {
              style: {
                colors: '#FEB019',
              },
            },
            title: {
              text: "Ingresos (miles de millones)", // Título del eje Y
              style: {
                color: '#FEB019',
              }
            }
          },
        ],
        tooltip: {
          fixed: {
            enabled: true,
            position: 'topLeft', // Posición del tooltip
            offsetY: 30, // Desplazamiento vertical del tooltip
            offsetX: 60 // Desplazamiento horizontal del tooltip
          },
        },
        legend: {
          horizontalAlign: 'left', // Alineación horizontal de la leyenda
          offsetX: 40 // Desplazamiento horizontal de la leyenda
        }
      },
    };
  }

  render() {
    return (
      <div>
        <div id="chart">
          {/* Componente ReactApexChart con opciones y series como propiedades */}
          <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={350} />
        </div>
        <div id="html-dist"></div>
      </div>
    );
  }
}

export default ApexChart;
