import React, { useState } from 'react'
import {BiChevronDown} from "react-icons/bi"
import {AiOutlineQuestionCircle} from "react-icons/ai"
const Showtable = ({TableData}) => {
  const [showdata, setShowdata] = useState(TableData.data)
  const [order, setOrder] = useState("high")
  const tableHeadings = TableData.tableHeadings

  const handleSorting = (column) => {
    if (!column) {
      return;
    }
  
    if (order === "high") {
      const sorteddata = [...showdata].sort((a, b) => {
        const valueA = a[column];
        const valueB = b[column];
  
        if (typeof valueA === "number" && typeof valueB === "number") {
          return valueA - valueB;
        } else {
          return valueA.toLowerCase() > valueB.toLowerCase() ? 1 : -1;
        }
      });
  
      setShowdata(sorteddata);
      setOrder("low");
    } else if (order === "low") {
      const sorteddata = [...showdata].sort((a, b) => {
        const valueA = a[column];
        const valueB = b[column];
  
        if (typeof valueA === "number" && typeof valueB === "number") {
          return valueB - valueA;
        } else {
          return valueA.toLowerCase() < valueB.toLowerCase() ? 1 : -1;
        }
      });
  
      setShowdata(sorteddata);
      setOrder("high");
    }
  };
  
  return (
    <div className='table-container'>
      <div class="header-contaner">
        <h2>Ads Insight</h2>
        <AiOutlineQuestionCircle className='questiontag'/>

      </div>
      <table>
        <thead className=' p-v-12 border-bottom '>
        {tableHeadings.map((heading, index) => (
            <th
              key={index}
              className='table-heading'
              onClick={() => handleSorting(heading)}
            >
              {heading}
              <div className="sorting-arrow">
                {order === 'high' ? (
                  <BiChevronDown className="uparrow" />
                ) : (
                  <BiChevronDown className="uparrow" style={{ pointerEvents: 'none',color:"grey" }} />
                )}
                {order === 'low' ? (
                  <BiChevronDown className="downarrow" />
                ) : (
                  <BiChevronDown className="downarrow" style={{pointerEvents: 'none',color:"grey" }} />
                )}
              </div> 
            </th>
        )
          )} 
        </thead>  
        <tbody>
        {showdata.map((d)=>(
            <tr className='border-bottom p-v-12' key={d.id}>
              <td className='p-v-12 text-right'>{d.campaigns ? d.campaigns : d.groups}</td>
              <td className='p-v-12 text-right'>{d.clicks}</td>
              <td className='p-v-12 text-right'>USD {d.costs}</td>
              <td className='p-v-12 text-right'>{d.conversions}</td>
              <td className='p-v-12 text-right'>USD {d.revenue}</td>
            </tr>
          ))
    }
     <tr  >
             <td className='text-right p-v-12'>Total</td>
             <td className='text-right'>{showdata.reduce((total, campaign) => total + (campaign.campaigns ? campaign.clicks : campaign.groups ? campaign.clicks : 0), 0)}</td>
             <td className='text-right'>USD { showdata.reduce((total, campaign) => total + campaign.costs, 0)}</td>
             <td className='text-right'>{ showdata.reduce((total, campaign) => total + campaign.conversions, 0)}</td>
             <td className='text-right'>USD { showdata.reduce((total, campaign) => total + campaign.revenue, 0)}</td>
            </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Showtable