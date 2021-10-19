import React, {useEffect, useState, createContext} from 'react';
export const StatContext = createContext();
export const StatsProvider = props => {
   const [statisticState, setStatisticState] = useState();

   useEffect(() => {
      fetch(`https://rcslabs.ru/ttrp5.json`) //change the https
         .then(res => res.json())
         .then(data => setStatisticState(data))
   },[])

   function getStatisticData() {
      if(statisticState !== undefined){
      const statisticData = statisticState;

     return statisticData;
      }
      return [];
  }


   return (
      <StatContext.Provider value={{ getStatisticData }}>
          {props.children}
      </StatContext.Provider>
   );
}