
import { useSelector } from "react-redux";
import {type RootState } from "../../../store/store";
// const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });
import Plot from 'react-plotly.js';

type TableRow={
    price?: number ; 
    model?:string ; 
    make?:string  ;
}

function Chart() {
      const tableData = useSelector((state:RootState) => state.tableData);
      
      if (!tableData?.rows || tableData.rows.length === 0) {
              return <div>No data available</div>;
      }

      const line = {
          type: "scatter" as const, 
          mode: "lines" as const, 
          y:tableData.rows.map((row: TableRow) => row.price as number), 
          x: tableData.rows.map((row:TableRow)=> row.make as string),
      };
   
      const layoutLine: Partial<Plotly.Layout> = {
        title:{text: "Car Prices by Company" }, 
      };
      const configLine = {responsive:true}
      
      const pie = {
          type: "pie" as const , 
          values:tableData.rows.map((row: TableRow) => row.price as number), 
          labels: tableData.rows.map((row:TableRow)=> row.make as string),
          marker: {
            colors: [ '#000080',  '#36454F',   '#228B22', '#008080',  '#696969', '#0000CD'  ],
            width: 1
          }
      };
  

      const layoutPie: Partial<Plotly.Layout> = {
        title:{text: "Car Prices by Company" }, 
      };
      const configPie = {responsive:true}
      
        return (
          <div className='mt-15'>
              <p className="relative text-center z-20 bg-gradient-to-b from-white to-black bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl">
                Chart place
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Plot
                      data={[line]} 
                      layout={layoutLine}
                      config={configLine}
                      useResizeHandler= {true} 
                      style={{ width: "100%", height: "100%" }}
                  />
                  
                  <Plot
                      data={[pie]} 
                      layout={layoutPie}
                      config={configPie}
                      useResizeHandler= {true} 
                      style={{ width: "100%", height: "100%" }}
                  />

              </div>
    </div>
  )
}

export default Chart
function dynamic(arg0: () => Promise<any>, arg1: { ssr: boolean; }) {
  throw new Error("Function not implemented.");
}

