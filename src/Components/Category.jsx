import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Modal, Row } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addCategoryAPI, deleteCategoryAPI, getAllVideoAPI, getAVideoAPI, getCategoryAPI, updateCategoryAPI } from '../Services/allAPI';
import VideoCard from './VideoCard';
import { data } from '@remix-run/router';

function Category({dropVideoResponse}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const[categoryName,setCategoryName]=useState("")
  const[allCategory,setAllCategory]=useState([])


  const handleAdd=async()=>{
    if (categoryName) {
      const result=await addCategoryAPI({categoryName,allVideo:[]})
      if (result.status>=200 && result.status<300) {
        handleClose()
        setCategoryName("")
        getCategories()
      }
      else{
        console.log(result.message);
        
      }
    }else{
      alert("please fill the missing field")
    }
  }
  const getCategories=async()=>{
    const {data}=await getCategoryAPI()
    setAllCategory(data)
  }


  
 

  const removeCategory=async(id)=>{
    await deleteCategoryAPI(id)
    getCategories()
  }
  const dragOver=(e)=>{
    console.log("video drag over the category");
    e.preventDefault()
    
  }
  const videoDrop=async(e,categoryid)=>{
    const videoId= e.dataTransfer.getData("videoID")
    console.log(videoId,"dropped into categor id:" , categoryid);
   const {data}=await getAVideoAPI(videoId)
   console.log(data);
   const selectedCategory=allCategory.find(item=>item.id==categoryid)
   selectedCategory.allVideo.push(data)
   console.log(selectedCategory); 
   await updateCategoryAPI(categoryid,selectedCategory)
   getCategories()
  }
  useEffect(()=>{
    getCategories()
  },[dropVideoResponse])

  const videoDragStarted=(e,videoId,categoryid)=>{
    let dataShare={videoId,categoryid}
    e.dataTransfer.setData("data",JSON.stringify(dataShare))

  }

  
  return (
    <>
    <div className="d-flex">
      <h2>
        Add Category
      </h2>
      <button onClick={handleShow} className='btn'>
      <i class="fa-solid fa-arrow-up-from-bracket fa-2xl" style={{color: "#000000;"}}></i>
      </button>
    </div>


{/* Add modal */}
            <Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
              centered
             > 
              <Modal.Header closeButton>
                <Modal.Title>Category Details</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                {/* floating form */}

                        <FloatingLabel
                          controlId="floatingInput4"
                          label="Category Name"
                          className="mb-3"
                        >
                          <Form.Control type="text" placeholder=" Name" onChange={e=>setCategoryName(e.target.value)}/>
                        </FloatingLabel>
              </Modal.Body>

              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleAdd}>Add</Button>
              </Modal.Footer>
            </Modal>
            {
              allCategory?.length>0?allCategory.map(category=>(
                <div className="border m-3 p-3" droppable="true" onDragOver={e=>dragOver(e)} onDrop={e=>videoDrop(e,category?.id)} >
                  <div className="d-flex justify-content-between align-items-center">
                    <h3>{category?.categoryName}</h3>
                    <Button variant="primary" onClick={()=>removeCategory(category?.id)}><i class="fa-solid fa-trash fa-xl"></i></Button>
                  </div>


                  <Row className='border border-5'>
                  {
                    category?.allVideo.length>0?category?.allVideo.map(card=>(
                      <Col sm={12} className='ms-5 mt-3' draggable onDragStart={e=>videoDragStarted(e,card.id,category.id)}>
                      <VideoCard video={card} insideCategory={true}/>
                      </Col>
                    )):null
                  }
                </Row>




                </div>
               
              )): <p className='text-warning fs-3'>No Categories Created</p>
            }

    </>
  )
}

export default Category
