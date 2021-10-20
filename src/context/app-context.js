import React, {useEffect, useState, createContext} from 'react';
export const StatContext = createContext();
export const StatsProvider = props => {
   const [statisticState, setStatisticState] = useState();
   const [url, setUrl] = useState(`https://rcslabs.ru/ttrp1.json`);
   useEffect(() => {
      fetch(url)
         .then(res => res.json())
         .then(data => setStatisticState(data))
   },[url])

   function getStatisticData() {
      if(statisticState !== undefined){
        const statisticData = statisticState;

        return statisticData;
      }
      return [];
   }

   return (
      <StatContext.Provider value={{ getStatisticData, url, setUrl }}>
          {props.children}
      </StatContext.Provider>
   );
}