import React, { useContext } from 'react';
import { StatContext } from '../context/app-context';
import AppStats from '../stats/app-stats';

function CreateDevColumn() {
   const arg = useContext(StatContext);

   if (arg.getStatisticData().length !== 0) {
      return (
         <>
            <AppStats />
         </>
      )
   } else {
      return (
         <>
         <p className="wait">Waiting ...</p>
         </>
      )
   }
}
export default CreateDevColumn;