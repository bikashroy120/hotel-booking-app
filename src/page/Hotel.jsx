import React from 'react'
import DataTableCommon from '../component/dashborad/DataTableCommon';




const Hotel = () => {


    



    const columns = [
        {
            name: 'Img',
            selector: row => <img src={row.imgUrl} className={"w-[50px] h-[50px]"}/>,
        
        },
        {
            name:"Id",
            selector: row => row.id,
        },
        {
            name: 'Title',
            selector: row => row.title,
        },


        {
            name:"Action",
            cell:(row)=><button className='bg-red-400 text-white py-1 px-2'>Delete</button>, 
        }
    ];



    const category =[

    ]




  return (
    <div className="dashboard w-full">
        <div>Hotel</div>

        <div>
            <DataTableCommon columns={columns} data={category}/>
        </div>
    </div>
  ) 
}

export default Hotel