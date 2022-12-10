import React from 'react'
import data1 from './csvjson'


export const View = ({data}) => {

    return(
    data1.map(data=>(
        <tr key={data.id} className="hover:bg-[#ff9354] cursor-default">
            <td className="py-[.5rem] text-[1.2rem]"><div className="w-full text-center">{data.id}</div></td>
            <td className="py-[.5rem] text-[1.2rem]"><div className="w-full text-center">{data.first_name}</div></td>
            <td className="py-[.5rem] text-[1.2rem]"><div className="w-full text-center">{data.last_name}</div></td>
            <td className="py-[.5rem] text-[1.2rem]"><div className="w-full text-center">{data.email}</div></td>
            <td className="py-[.5rem] text-[1.2rem]"><div className="w-full text-center">{data.gender}</div></td>
            <td className="py-[.5rem] text-[1.2rem]"><div className="w-full text-center">{data.ip_address}</div></td>
            <td className="py-[.5rem] text-[1.2rem]"><div className="w-full text-center">{data.airport_code}</div></td>
            <td className="py-[.5rem] text-[1.2rem]"><div className="w-full text-center">{data.time}</div></td>
            <td className="py-[.5rem] text-[1.2rem]"><div className="w-full text-center">{data.status?(<div className="text-green-500">true</div>):(<div className="text-red-600">false</div>)}</div></td>
            <td className="py-[.5rem] text-[1.2rem]"><div className="w-full text-center">{data.mobile}</div></td>
            <td className="py-[.5rem] text-[1.2rem]"><div className="w-full text-center">{data.area}</div></td>
            <td className="py-[.5rem] text-[1.2rem]"><div className="w-full text-center">{data.show?(<div className="text-green-500">true</div>):(<div className="text-red-600">false</div>)}</div></td>
            <td className="py-[.5rem] text-[1.2rem]"><div className="w-full text-center">{data.edit?(<div className="text-green-500">true</div>):(<div className="text-red-600">false</div>)}</div></td>
        </tr>

    )   
        
    
))
}
export const View0 = ({data}) => {
    return(
        data1.sort((a,b)=>a.id > b.id ? 1 : -1).map(data=>(
            <tr key={data.id} className="hover:bg-[#ff9354] cursor-default">
                <td className="py-[.5rem] text-[1.2rem]"><div className="w-full text-center">{data.id}</div></td>
                <td className="py-[.5rem] text-[1.2rem]"><div className="w-full text-center">{data.first_name}</div></td>
                <td className="py-[.5rem] text-[1.2rem]"><div className="w-full text-center">{data.last_name}</div></td>
                <td className="py-[.5rem] text-[1.2rem]"><div className="w-full text-center">{data.email}</div></td>
                <td className="py-[.5rem] text-[1.2rem]"><div className="w-full text-center">{data.gender}</div></td>
                <td className="py-[.5rem] text-[1.2rem]"><div className="w-full text-center">{data.ip_address}</div></td>
                <td className="py-[.5rem] text-[1.2rem]"><div className="w-full text-center">{data.airport_code}</div></td>
                <td className="py-[.5rem] text-[1.2rem]"><div className="w-full text-center">{data.time}</div></td>
                <td className="py-[.5rem] text-[1.2rem]"><div className="w-full text-center">{data.status?(<div className="text-green-500">true</div>):(<div className="text-red-600">false</div>)}</div></td>
                <td className="py-[.5rem] text-[1.2rem]"><div className="w-full text-center">{data.mobile}</div></td>
                <td className="py-[.5rem] text-[1.2rem]"><div className="w-full text-center">{data.area}</div></td>
                <td className="py-[.5rem] text-[1.2rem]"><div className="w-full text-center">{data.show?(<div className="text-green-500">true</div>):(<div className="text-red-600">false</div>)}</div></td>
                <td className="py-[.5rem] text-[1.2rem]"><div className="w-full text-center">{data.edit?(<div className="text-green-500">true</div>):(<div className="text-red-600">false</div>)}</div></td>
                {/* <td className='delete-btn' 
                // onClick={()=>deleteBook(book.isbn)}
                >
                    <Icon icon={trash}/>
                </td>            */}
            </tr>
    
        )   
    ))
}

export const View1 = ({data}) => {
    
    return(
    data1.sort((a,b)=>a.first_name > b.first_name ? 1 : -1).map(data=>(
        <tr key={data.id} className="hover:bg-[#ff9354] cursor-default">
            <td className="py-[.5rem] text-[1.2rem]"><div className="w-full text-center">{data.id}</div></td>
            <td className="py-[.5rem] text-[1.2rem]"><div className="w-full text-center">{data.first_name}</div></td>
            <td className="py-[.5rem] text-[1.2rem]"><div className="w-full text-center">{data.last_name}</div></td>
            <td className="py-[.5rem] text-[1.2rem]"><div className="w-full text-center">{data.email}</div></td>
            <td className="py-[.5rem] text-[1.2rem]"><div className="w-full text-center">{data.gender}</div></td>
            <td className="py-[.5rem] text-[1.2rem]"><div className="w-full text-center">{data.ip_address}</div></td>
            <td className="py-[.5rem] text-[1.2rem]"><div className="w-full text-center">{data.airport_code}</div></td>
            <td className="py-[.5rem] text-[1.2rem]"><div className="w-full text-center">{data.time}</div></td>
            <td className="py-[.5rem] text-[1.2rem]"><div className="w-full text-center">{data.status?(<div className="text-green-500">true</div>):(<div className="text-red-600">false</div>)}</div></td>
            <td className="py-[.5rem] text-[1.2rem]"><div className="w-full text-center">{data.mobile}</div></td>
            <td className="py-[.5rem] text-[1.2rem]"><div className="w-full text-center">{data.area}</div></td>
            <td className="py-[.5rem] text-[1.2rem]"><div className="w-full text-center">{data.show?(<div className="text-green-500">true</div>):(<div className="text-red-600">false</div>)}</div></td>
            <td className="py-[.5rem] text-[1.2rem]"><div className="w-full text-center">{data.edit?(<div className="text-green-500">true</div>):(<div className="text-red-600">false</div>)}</div></td>
            {/* <td className='delete-btn' 
            // onClick={()=>deleteBook(book.isbn)}
            >
                <Icon icon={trash}/>
            </td>            */}
        </tr>

    )   
))
}

export const View2 = ({data}) => {
    
    return(
    data1.sort((a,b)=>a.first_name < b.first_name ? 1 : -1).map(data=>(
        <tr key={data.id} className="hover:bg-[#ff9354] cursor-default">
            <td className="py-[.5rem] text-[1.2rem]"><div className="w-full text-center">{data.id}</div></td>
            <td className="py-[.5rem] text-[1.2rem]"><div className="w-full text-center">{data.first_name}</div></td>
            <td className="py-[.5rem] text-[1.2rem]"><div className="w-full text-center">{data.last_name}</div></td>
            <td className="py-[.5rem] text-[1.2rem]"><div className="w-full text-center">{data.email}</div></td>
            <td className="py-[.5rem] text-[1.2rem]"><div className="w-full text-center">{data.gender}</div></td>
            <td className="py-[.5rem] text-[1.2rem]"><div className="w-full text-center">{data.ip_address}</div></td>
            <td className="py-[.5rem] text-[1.2rem]"><div className="w-full text-center">{data.airport_code}</div></td>
            <td className="py-[.5rem] text-[1.2rem]"><div className="w-full text-center">{data.time}</div></td>
            <td className="py-[.5rem] text-[1.2rem]"><div className="w-full text-center">{data.status?(<div className="text-green-500">true</div>):(<div className="text-red-600">false</div>)}</div></td>
            <td className="py-[.5rem] text-[1.2rem]"><div className="w-full text-center">{data.mobile}</div></td>
            <td className="py-[.5rem] text-[1.2rem]"><div className="w-full text-center">{data.area}</div></td>
            <td className="py-[.5rem] text-[1.2rem]"><div className="w-full text-center">{data.show?(<div className="text-green-500">true</div>):(<div className="text-red-600">false</div>)}</div></td>
            <td className="py-[.5rem] text-[1.2rem]"><div className="w-full text-center">{data.edit?(<div className="text-green-500">true</div>):(<div className="text-red-600">false</div>)}</div></td>
            {/* <td className='delete-btn' 
            // onClick={()=>deleteBook(book.isbn)}
            >
                <Icon icon={trash}/>
            </td>            */}
        </tr>

    )   
))
}