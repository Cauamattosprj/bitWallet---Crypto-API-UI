"use client";
import dynamic from 'next/dynamic';
import 'chart.js/auto';
const Line = dynamic(() => import('react-chartjs-2').then((mod) => mod.Line), {
  ssr: false,
});
const data = {
  labels: ['January', 'February', 'March', 'April', 'May'],
  datasets: [
    {
      data: [65, 59, 80, 81, 56],
      fill: true,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.2,
    },
  ],
};
const ChartData = () => {
  return (
      <Line data={data} />
  );
};
export default ChartData;