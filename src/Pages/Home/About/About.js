import React from 'react'
import building from "../../../Assets/buliding.png"
import Button from 'react-bootstrap/esm/Button'

const HomeAbout = () => {
  return (
    <div style={{boxShadow: "-4px -4px 8px rgba(0, 0, 0, 0.3)"}}>
        <div className='row' style={{marginTop:'20px'}} >
            <div className='col p-5' style={{backgroundColor:"#fae7a5"}}>
                <h2 style={{fontFamily:"Libre Bodoni", color:"#B6080A", fontStyle: 'normal', fontWeight: '700', textDecoration:"underline"}}>About us</h2>

                <div className='container'>
                    <p>Welcome to South India’s zero-wastage and less making-charges jewellery store in TamilNadu.</p>
                </div>
                <div className='container'>
                    <p>Our store, which has been in the jewellery business for two generations, opened in the year 2019 on the Karur Bye-pass road in Trichy. Our mission is to provide high-quality gold jewellery with zero percent wastage to all people.</p>
                </div>

                <div className='container'>

                    <Button className='btn btn-danger' style={{borderRadius:'20px'}}>
                        Read More 👈
                    </Button>

                </div>
            </div>

            <div className='col'>
                <img src={building} alt='bulding'/>
                <div className='container'>
                    <h5>"The Road to Perfection"</h5>
                </div>
            </div>

        </div>
    </div>
  )
}

export default HomeAbout