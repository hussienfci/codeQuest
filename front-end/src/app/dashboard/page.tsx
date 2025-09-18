
import Chart from './components/Chart'
import Table from './components/Table'
import ProtectedRoute from '../../components/normal/ProtectedRoute';

function Dashboard() {
  return (
    <ProtectedRoute>
        <div className=' h-96 md:h-[40rem] from-white to-neutral-100 dark:from-neutral-950 dark:to-neutral-800  items-center w-full justify-center '>
            <Table/>
            <Chart/>

        </div>
    </ProtectedRoute>
  )
}

export default Dashboard
