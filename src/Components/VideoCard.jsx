import React, { useState } from 'react'
import { Button, Card, Modal } from 'react-bootstrap'
import { addHistoryAPI, deleteVideoAPI } from '../Services/allAPI';





function VideoCard({video,getAllVideos,insideCategory,setDeleteVideoResponse}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async() => {setShow(true)
    const{caption,link}=video
  let today=new Date()

  let timeStamp=new Intl.DateTimeFormat('en-US',{year:'numeric',month:'numeric',day:"2-digit",hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(today)
  let videoHistory={caption,link,timeStamp}
  // api call
  await addHistoryAPI(videoHistory)
  };
  const removeVideoCard=async(id)=>{
    await deleteVideoAPI(id)
    // getAllVideos()
    setDeleteVideoResponse(true)


  }
  const dragStarted=(e,id)=>{
    console.log("video drrag started:" , id);
    e.dataTransfer.setData("videoID",id)
    
  }
  
  return (
    <>
      <Card style={{ width: '18rem' }} draggable onDragStart={e=>dragStarted(e,video?.id)}>
      <Card.Img variant="top" width={'100%'} height={'290px'} onClick={handleShow} src={video.url} />
      <Card.Body>
        <div className="d-flex justify-content-between">
          <Card.Title>{video.caption}</Card.Title>
        </div>
        
        { insideCategory?null:<Button variant="primary" onClick={()=>removeVideoCard(video?.id)}><i class="fa-solid fa-trash fa-xl"></i></Button>}
      </Card.Body>
    </Card>


    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{video.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="315" src={`${video.link}?autoplay=1`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Modal.Body>
        
      </Modal>
    </>
  )
}

export default VideoCard
