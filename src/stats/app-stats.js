import React, { useContext } from 'react';
import { StatContext } from '../context/app-context';

function AppStats() {
   const arg = useContext(StatContext);
   // arg.getStatisticData();
   const title = arg.getStatisticData().title;
   const devFront = arg.getStatisticData().dev.front;
   const devBack = arg.getStatisticData().dev.back;
   const devDb = arg.getStatisticData().dev.db;
   const prodFront = arg.getStatisticData().prod.front;
   const prodBack = arg.getStatisticData().prod.back;
   const prodDb = arg.getStatisticData().prod.db;
   const testFront = arg.getStatisticData().test.front;
   const testBack = arg.getStatisticData().test.back;
   const testDb = arg.getStatisticData().test.db;
   const normColumn = arg.getStatisticData().norm;
   const maxColumnHeight = 270;
   const columnHeight = 315;
   const minColumnHeight = 39.9;

   function getSumDevColumn(...arg) {
      return [...arg].reduce((prev, current)=>prev + current, 0);
   }

   const devColumn = getSumDevColumn(devFront, devBack, devDb);
   const prodColumn = getSumDevColumn(prodFront, prodBack, prodDb);
   const testColumn = getSumDevColumn(testFront, testBack, testDb);
   const maxColumn = Math.max(devColumn, prodColumn, testColumn, normColumn) > 0 ? Math.max(devColumn, prodColumn, testColumn, normColumn) : null;

   function getPercentOfHeight(arg) {
      return (arg / maxColumn * 100);
   }

   function addPxString(number) {
      return number.toString() + 'px'
    }

   function getPxForPercent(percent) {
      return Math.round(percent * (maxColumnHeight / 100));
   }

   function getDifferense(arg1, arg2) {
      return arg2 - arg1;
   }

   function getDifferenseValue(arg) {
      if (arg === 0) {
         return arg;
      } else if (arg > 0) {
         return `\u2191 +${arg}`;
      } else {
         return `\u2193 ${arg}`;
      }
   }

   function getColorDifferense(arg) {
      if (arg === 0) {
         return 'black';
      } else if (arg > 0) {
         return '#00CC99';
      } else {
         return '#FC440F';
      }
   }

   function getWidhtValue(arg) {
      return arg.lenght
   }
   const devTestDifferense = getDifferense(devColumn, testColumn);
   const testProdDifferense = getDifferense(testColumn, prodColumn);
   const valueDevTest = getDifferenseValue(devTestDifferense);
   const valueTestProd = getDifferenseValue(testProdDifferense);
   const colorBGDevTestDifferense = getColorDifferense(devTestDifferense);
   const colorBGTestProdDifferense = getColorDifferense(testProdDifferense);
   const widthOfDevTestDifferenseBlock = (devTestDifferense.toString().length * 10 + 18) + 'px';
   const widthOfTestProdDifferenseBlock = (testProdDifferense.toString().length * 10 + 18) + 'px';

   function getColumnHeight(arg) {
      return arg > minColumnHeight ? arg : minColumnHeight;
   }

   document.documentElement.style.setProperty('--height_column1_client', addPxString(getPxForPercent(getPercentOfHeight(devFront))));
   document.documentElement.style.setProperty('--height_column1_server', addPxString(getPxForPercent(getPercentOfHeight(devBack))));
   document.documentElement.style.setProperty('--height_column1_data', addPxString(getPxForPercent(getPercentOfHeight(devDb))));
   document.documentElement.style.setProperty('--height_column2_client', addPxString(getPxForPercent(getPercentOfHeight(testFront))));
   document.documentElement.style.setProperty('--height_column2_server', addPxString(getPxForPercent(getPercentOfHeight(testBack))));
   document.documentElement.style.setProperty('--height_column2_data', addPxString(getPxForPercent(getPercentOfHeight(testDb))));
   document.documentElement.style.setProperty('--height_column3_client', addPxString(getPxForPercent(getPercentOfHeight(prodFront))));
   document.documentElement.style.setProperty('--height_column3_server', addPxString(getPxForPercent(getPercentOfHeight(prodBack))));
   document.documentElement.style.setProperty('--height_column3_data', addPxString(getPxForPercent(getPercentOfHeight(prodDb))));
   document.documentElement.style.setProperty('--height_dev_column', addPxString(getColumnHeight(getPxForPercent(getPercentOfHeight(devColumn)))));
   document.documentElement.style.setProperty('--height_test_column', addPxString(getColumnHeight(getPxForPercent(getPercentOfHeight(testColumn)))));
   document.documentElement.style.setProperty('--height_prod_column', addPxString(getColumnHeight(getPxForPercent(getPercentOfHeight(prodColumn)))));
   document.documentElement.style.setProperty('--height_norm_column', addPxString(getColumnHeight(getPxForPercent(getPercentOfHeight(normColumn)))));
   document.documentElement.style.setProperty('--color_dev_test_differense', colorBGDevTestDifferense);
   document.documentElement.style.setProperty('--color_test_prod_differense', colorBGTestProdDifferense);
   document.documentElement.style.setProperty('--width_dev_test_differense_block', widthOfDevTestDifferenseBlock);
   document.documentElement.style.setProperty('--width_test_prod_differense_block', widthOfTestProdDifferenseBlock);
   document.documentElement.style.setProperty('--height_figure', columnHeight + 'px');

   return (
       <div className="App">
         <div className="wrapper">
            <h1 className="wrapper__header">Количество пройденных тестов "{title}"</h1>

           <div className="wrapper__test-columns">
             <div className="test-column dev">
               <figure>
                  <div className="wrapper__dev wrapper-column">
                     <div className="test-column__client value"><span>{devFront}</span></div>
                     <div className="test-column__server value"><span>{devBack}</span></div>
                     <div className="test-column__data value"><span>{devDb}</span></div>
                  </div>
                  <figcaption>dev</figcaption>
               </figure>
             </div>
             <div className="test-column test">
               <span className="arrow"></span>
               <figure>
                  <div class="differense__dev-test"><span class="value">{valueDevTest}</span></div>
                  <div className="wrapper__test wrapper-column">
                     <div className="test-column__client value"><span>{testFront}</span></div>
                     <div className="test-column__server value"><span>{testBack}</span></div>
                     <div className="test-column__data value"><span>{testDb}</span></div>
                  </div>
                  <figcaption>test</figcaption>
               </figure>
             </div>
             <div className="test-column prod">
               <span className="arrow"></span>
               <figure>
                  <div class="differense__test-prod"><span class="value">{valueTestProd}</span></div>
                  <div className="wrapper__prod wrapper-column">
                     <div className="test-column__client value"><span>{prodFront}</span></div>
                     <div className="test-column__server value"><span>{prodBack}</span></div>
                     <div className="test-column__data value"><span>{prodDb}</span></div>
                  </div>
                  <figcaption>prod</figcaption>
               </figure>
             </div>
             <div className="test-column norm">
               <figure>
                 <div className="test-column__norm"><div><span class="test-column__norm_value">{normColumn}</span></div></div>
                 <figcaption>норматив</figcaption>
               </figure>
             </div>
           </div>
           <div className="wrapper__test-specifications">
             <div className="test-specification test-specification__client"><span></span>Клиентская часть</div>
             <div className="test-specification test-specification__server"><span></span>Серверная часть</div>
             <div className="test-specification test-specification__data"><span></span>База данных</div>
           </div>
         </div>
       </div>
   );
 }

 export default AppStats;