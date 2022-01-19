import React from 'react'
const arrNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
const arrMonth = arrNumber.slice(0, 12)
const years = [1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025]


function Day() {
  return (
    <>
      {arrNumber.map((el, index) => (
            <option
          key={index}
          value={el}
        >{el}
        </option>
      )
      
      )}   
   </>
  )
}
function Month() {
  return (
    <>
      {arrMonth.map((el, index) => (
            <option
          key={index}
          value={el}
        >Tháng {el}
        </option>
      )
      
      )}   
   </>
  )
}

function Year() {
  return (
    <>
      {years.map((el, index) => (
            <option
          key={index}
          value={el}
        >Năm {el}
         </option>
      )
      
      )}
    </>
  )
}



export { Day, Month ,Year}
