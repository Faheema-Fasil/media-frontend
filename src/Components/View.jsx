import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getAllVideoAPI, getCategoryAPI, updateCategoryAPI } from '../Services/allAPI'


function View({uploadVideoResponse,setDropVideoResponse}) {
  const [deleteVideoResponse,setDeleteVideoResponse]=useState()
  const[allVideo,setallVideos]=useState([])
  const getAllVideos=async()=>{
    const result=await getAllVideoAPI()
    console.log(result);
    if (result.status==200) {
      setallVideos(result.data)
    }else{
      console.log("API failed");
      setallVideos([])
      
    }
    
  }
  console.log(allVideo);
  useEffect(() => {
    getAllVideos()
    setDeleteVideoResponse(false)
   }, [uploadVideoResponse,deleteVideoResponse])

   const dragOver=(e)=>{
    e.preventDefault()
    
  }
  const videoDropped=async(e)=>{
    const {videoId,categoryid}=JSON.parse(e.dataTransfer.getData("data"))
    // console.log(videoId,categoryid);
    const {data}=await getCategoryAPI()
    const selectedCategory=data.find(item => item.id===categoryid)
    let result=selectedCategory.allVideo.filter(item => item.id!==videoId)
    console.log(result);
    let {id,categoryName}=selectedCategory
    let newCategory={id,categoryName,allVideo:result}
    const res=await updateCategoryAPI(categoryid,newCategory)
    setDropVideoResponse(res)
    
  }
  
  return (
    <>
    <h2 className='text-dark '   >ALL-VIDEOS</h2>
      <Row className='ms-5' droppable="true" onDragOver={e=>dragOver(e)} onDrop={e=>videoDropped(e)}>
        {allVideo.length>0 ? allVideo.map((video,index)=>(
          <Col className='mt-3' sm={12} md={6} lg={4}>
        <VideoCard getAllVideos={getAllVideos} setDeleteVideoResponse={setDeleteVideoResponse} video={video}/>
        </Col>
        )): <p className='text-warning fs-3'>Nothing to Display</p>
        }
      </Row>
    </>
  )
}

export default View
