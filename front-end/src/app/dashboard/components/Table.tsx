
import  { useState } from 'react' ; 

import type { ColDef } from "ag-grid-community";
import { AllCommunityModule, ModuleRegistry, themeAlpine, themeBalham, themeMaterial, themeQuartz } from "ag-grid-community";
import { AgGridReact } from 'ag-grid-react';
import { useSelector } from 'react-redux';
import { type RootState } from '../../../store/store';


ModuleRegistry.registerModules([AllCommunityModule]);


interface IRow{
    make:string ; 
    model:string  ;
    price: number ; 
}

const themes = [
  { id: "themeQuartz", theme: themeQuartz },
  { id: "themeBalham", theme: themeBalham },
  { id: "themeMaterial", theme: themeMaterial },
  { id: "themeAlpine", theme: themeAlpine },
];
type PartSelectorProps<T extends { id: string } | null> = {
  options: T[];
  value: T;
  setValue: (value: T) => void;
};

const PartSelector = <T extends { id: string; variant?: string } | null>({
  options,
  value,
  setValue,
}: PartSelectorProps<T>) => (
  <select
    onChange={(e) =>
      setValue(options.find((t) => t?.id === e.currentTarget.value)! || null)
    }
    style={{ marginRight: 16 }}
    value={value?.id}
  >
    {options.map((option, i) => (
      <option key={i} value={option?.id}>
        {option?.variant || option?.id || "(unchanged)"}
      </option>
    ))}
  </select>
);

function Table() {
  
  const tableData = useSelector((state:RootState) => state.tableData);

  const [theme, setBaseTheme] = useState(themes[0]);
    const defaultColDef: ColDef = {
      flex: 1,
      minWidth: 80,
      filter: true,
      floatingFilter: true,
    };
  return (
    <div className='relative mx-auto mt-9 h-100 w-full mb-30' >
      <p className="relative text-center z-20 bg-gradient-to-b from-neutral-200 to-black bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl">
        Table 
      </p>
      <div className=' '
      >
       <p className='pl-1.5' style={{ flex: 0 }}>
        Theme:{" "}
        <PartSelector options={themes} value={theme} setValue={setBaseTheme} />
      </p>

      </div>
         <AgGridReact 
         theme={theme.theme} 
          rowData={tableData.rows} 
          columnDefs={tableData.cols} 
           defaultColDef={defaultColDef} 
          />
    </div>
  );
}

export default Table
