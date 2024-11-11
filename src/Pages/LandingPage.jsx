import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'



function LandingPage() {
  return (
    <>
    {/* head */}
      <Row className='mt-5 align-items-center justify-content-between w-100'>
        <Col></Col>
        <Col lg={5}>
        <h1 style={{color:"grey", fontSize:"40px"}}>WELCOME TO <span className='text-dark'>MEDIA-PLAYER</span></h1>
        <p>Welcome to Media-Player! Dive into an immersive experience where your favorite music, videos, and podcasts come together in one place. Whether you're here to unwind with soothing tunes, catch up on the latest hits, or watch captivating videos, Media-Player offers seamless playback and quality sound. Discover, create, and enjoy playlists tailored just for you. Let's make every moment a little more musical!</p>
        <Link to={'./home'} className='btn btn-dark'>Get Started</Link>
        </Col>
        <Col lg={5}>
        <img width={'100%'} src="https://media.tenor.com/r5HknDlfbK8AAAAM/record.gif" alt="" />
        </Col>
        <Col></Col>
      </Row>
      {/* add cards */}
      <div className="container mt-5 mb-5 d-flex justify-content-center align-items-center flex-column w-100">
        <h2 className='text-center text-dark'>FEATURES</h2>
        <div className="card mb-5 mt-5 d-flex align-items-center flex-row justify-content-center gap-5 w-100">

        {/* card1 */}
        <Card style={{ width: '18rem' ,backgroundColor:'grey'}} >
            <Card.Img variant="top" height={'300px'} width={'300px'} src="https://cdn3.iconfinder.com/data/icons/storyteller/500/yul698_14_video_player_music_heart_silhouette_star_internet-512.png" />
            <Card.Body>
              <Card.Title className='text-light'>Managing Videos</Card.Title>
              <Card.Text className='text-light'>
              Organize your entire video collection with ease. Access your saved videos, favorite categories, and watch history from one convenient library. Keep track of everything you love.
              </Card.Text>
             
            </Card.Body>
        </Card>
        {/* card2 */}
        <Card style={{ width: '18rem' ,backgroundColor:'grey'}} >
            <Card.Img variant="top" height={'300px'} width={'300px'} src="https://cdn2.iconfinder.com/data/icons/music-player-36/32/report_media_button_music_player-512.png" />
            <Card.Body className='text-light'>
              <Card.Title>Categorized Videos</Card.Title>
              <Card.Text>
              Find videos by categories that interest you. From trending playlists to classic films, quickly browse the latest in each category and discover something new every time.
              </Card.Text>
             
            </Card.Body>
        </Card>
        {/* card3 */}
        <Card style={{ width: '18rem' ,backgroundColor:'grey'}} >
            <Card.Img variant="top" height={'276px'} width={'300px'} src="https://cdn3.iconfinder.com/data/icons/multimedia-and-media-player-solid/48/Artboard_25-512.png" />
            <Card.Body className='text-light'>
              <Card.Title>Watch History</Card.Title>
              <Card.Text>
              The Watch History feature lets you revisit your recently viewed videos, complete with timestamps and titles, so you can pick up right where you left off or enjoy your favorite moments again.
              </Card.Text>
             
            </Card.Body>
        </Card>
        </div>
      </div>
      {/* details section */}
      <div className="container border border-3 border-dark d-flex  justify-content-center align-items-center mt-5 p-3">
        <div className="col-lg-5">
          <h4 className='text-dark fw-bolder'>Simple,Powerful & Fast</h4>
          <h6 className='m-3 text-dark'><span className='fw-bolder'>Play Everything</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda praesentium temporibus minima vero nihil architecto eaque amet ad consequatur iste voluptate, nisi eveniet perferendis quae, quidem facere? Possimus, doloribus autem!</h6>
        
        
          <h4 className='text-dark fw-bolder'>Categorized Videos</h4>
          <h6 className='m-3 taext-dark' ><span className=' fw-bolder'>Play Everything</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda praesentium temporibus minima vero nihil architecto eaque amet ad consequatur iste voluptate, nisi eveniet perferendis quae, quidem facere? Possimus, doloribus autem!</h6>
      
       
          <h4 className='text-dark fw-bolder'>Managing Videos</h4>
          <h6 className='m-3 text-dark'><span className='fw-bolder'>Play Everything</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda praesentium temporibus minima vero nihil architecto eaque amet ad consequatur iste voluptate, nisi eveniet perferendis quae, quidem facere? Possimus, doloribus autem!</h6>
          </div>

          <div className="col-lg-5 ms-2">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/XrqSF2OOz_M?si=15shV_J3JDmBLpc4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen autoplay></iframe>
          </div>
      </div>
    </>
  )
}

export default LandingPage
