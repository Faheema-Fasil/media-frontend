import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { deleteHistoryAPI, getHistoryAPI } from '../Services/allAPI';

function WatchHistory() {
   const[history,setHistory]=useState([]);
    useEffect(()=>{
        getHistory()
    },  [])
const getHistory=async()=>{
  const result=await getHistoryAPI()
  if (result.status==200) {
    setHistory(result.data)
  }else{
    console.log("api failed");
    setHistory(result.message)
    
  }
}
console.log(history);
const removeVideoHistory=async(id)=>{
  await deleteHistoryAPI(id)
  getHistory()
}
  return (
    <>
      <div className="container mt-5 mb-3 d-flex justify-content-between">
        <h2>Watch-History <i className="fa-solid fa-clock-rotate-left fa-xl"></i></h2>
        <Link style={{ textDecoration: 'none' }} to="/home">
          <h3>Back To Home <i className="fa-solid fa-rotate-left fa-xl"></i></h3>
        </Link>
      </div>
      <div className="container mt-5 mb-3 w-100">
        <table className="table shadow w-100 p-3 m-2">

            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Video url</th>
              <th>Time stamp</th>
              <th>Action</th>
            </tr>
            {
              history?.length>0?history.map((video,index)=>(
                <tr>
              <td>{index+1}</td>
              <td>{video?.caption}</td>
              <td>
                <a href={video?.link} target="_blank" rel="noopener noreferrer">
                  {video?.link}
                </a>
              </td>
              <td>{video?.timeStamp}</td>
              <td>
                <button className="text-danger btn" onClick={()=>removeVideoHistory(video?.id)}>
                  <i className="fa-solid fa-trash" style={{ color: '#eb5e00' }}></i>
                </button>
              </td>
            </tr>

              )): <p className='text-warning ms-5  fs-3'>Nothing to Display</p>
            }
         

            


        </table>
      </div>
    </>
  );
}

export default WatchHistory;
