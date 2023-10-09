import React, { useState, useRef } from 'react';
import './Home.css';
import Button from 'react-bootstrap/Button';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Parallax } from 'react-parallax';
import Parallaximg from '../Assets/Background.png';
import Code from '../Assets/code.png';
import Person from '../Assets/Vector.png';
import Mobile from '../Assets/ui-design 1.png';
import Website from '../Assets/web-design (1) 1.png';
import Iphone from '../Assets/iphone.png';
import Chats from '../Assets/chat.png';
import CardImg from '../Assets/Rectangle 24.png';
import CardImg2 from '../Assets/rec.png';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Row from 'react-bootstrap/row';
import Col from 'react-bootstrap/col';
import Card from 'react-bootstrap/card';
import { AiOutlineUnorderedList as ListIcon } from "react-icons/ai";
import { BiBasketball as Basketball } from "react-icons/bi";
import { TbBrandBooking as Booking } from "react-icons/tb";
import { BiStoreAlt  as Store} from "react-icons/bi";
import { BsFillBuildingFill as Building} from 'react-icons/bs';
import { FaCashRegister as Cashier} from 'react-icons/fa';
import { BsChatRight as ChatsIcon} from 'react-icons/bs';
import { GrWorkshop as Workshop} from 'react-icons/gr';
import { RiHammerLine as Hammer} from 'react-icons/ri';
import { BsArrowRightShort  as Arrow} from 'react-icons/bs';

function Home() {
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

  const variants = {
    visible: {
      opacity: 1, x: 0, transition: { duration: 1.5 }
    },
    hidden: {
      opacity: 0, x: -100
    },
  };

  const variants1 = {
    visible: {
      opacity: 1, transition: { duration: 1.5 }
    },
    hidden: {
      opacity: 0, 
    },
  };

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const opacityvalue = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1])
  const position1 = useTransform(scrollYProgress, [0, 0.5, 1], [-50, 0, 0])
  const position2 = useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, 0])

  return (
    <>
    <div className="home-hero">
      <img src={Code} className="code-image"alt="" />
        <motion.div initial="hidden" animate="visible" variants={variants} className="hero-title">
          Make Your Own <br></br>
          Website and Mobile Application <br></br>
          With Nodewave
            <img src={Person} className="person-pic" alt="" />
          </motion.div>

          <Button className="nav-button">Get Started Now</Button>
          <motion.div initial="hidden" animate="visible" variants={variants1}  className="hero-text">
          Create Mobile Applications and Websites for Companies or Your Business
          Have a transparent pricing, easy and straightforward development process
          </motion.div>
    </div>

      <div className="product" ref={containerRef}>
      <div className="box-title">Our Product</div>

        <div class="container">
          <motion.div class="product-box Mobile" style={{ opacity: opacityvalue, x: position1 }}>
          <Row>
              <Col md={3}><img src={Mobile} className="img-position" alt="" /></Col>
            <Col><div className="product-title"> Mobile Apps </div>
            <div className="product-text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit
            <Arrow className="arrow" /></div></Col>
          </Row>
          </motion.div>


          <motion.div class="product-box Website" style={{ opacity: opacityvalue, x: position1 }}>
          <Row><Col md={3}>
            <img src={Website} className="img-position" alt="" />
          </Col>
          <Col><div className="product-title"> Website </div>
            <div className="product-text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        <Arrow className="arrow" /></div></Col>
          </Row>
          </motion.div>


          <motion.div class="product-box Mobile-apps" style={{ opacity: opacityvalue, x: position2 }}>
            <img src={Iphone} className="iphone-img" alt="" />
            <img src={Iphone} className="iphone-img" alt="" />
            <img src={Iphone} className="iphone-img"  alt="" />
            <div className="mobile-title">Mobile Apps</div>
            <div className="mobile-text">Mobile apps Android dan iPhone sekaligus, buat aplikasi dengan fitur sesuka anda. Bisa untuk aplikasi transaksi jual beli, Aplikasi kasir, Aplikasi Informasi, maupun Aplikasi chat dengan fitur GPS.</div>
            <div className="flex-position"><Button className="nav-button">Pelajari Selengkapnya</Button></div>
           
          </motion.div>
        </div>
    </div>

    <div className="testimony">
    <div className="testimony-title">Testimony</div>
    
        <Carousel responsive={responsive}>
          <div className="card-slider">
            Buat aplikasi sama tim ini emang luar biasa dicarikan
            solusi yang paling murah supaya bisa segera mulai
            aplikasi PPOB saya. 2 minggu udah jadi hasilnya
            saya tinggal fokus di promosi! Terima kasih Nodewave.
            <div className="name">Ahmad Prasetyo</div>
            </div>
          <div className="card-slider">
            Awalnya bingung mau buat website pada mahal. Hubungi tim Nodewave,
            ngobrol bentar, eh aplikasinya langsung jadi. Saya dan suami
            tinggal cerita aja lewat zoom maunya buat website seperti apa,
            langsung dibuatin dengan cepat sama Nodewave.
            <div className="name">Ahmad Prasetyo</div>
          </div>
          <div className="card-slider">
            Yang paling keren sih source codenya sekalian dikasih,
            pas pula bisa pakai Flutter, jadi gw ama cofounder bisa
            develop lagi fitur2 baru untuk startup gw.
            Thanks a lot Nodewave supportnya!!
            <div className="name">Ahmad Prasetyo</div>
            </div>
          <div className="card-slider">
            Buat aplikasi sama tim ini emang luar biasa dicarikan
            solusi yang paling murah supaya bisa segera mulai
            aplikasi PPOB saya. 2 minggu udah jadi hasilnya
            saya tinggal fokus di promosi! Terima kasih Nodewave.
            <div className="name">Ahmad Prasetyo</div>
          </div>
        </Carousel>
    </div>

    <div className="works">
      <div className="work-title">Our Works</div>


    </div>

      <Parallax className="how" bgImage={Parallaximg} strength={200}>
      <div className="how-title">
        How We Work
      </div>
      <div className="how-box">
      <Row>
      <Col><img src={Chats} alt="" /></Col>
      <Col><div className="box-title"> Estimate</div>
          <div className="box-text"> 
            Estimate the cost of creating your application with us. Pricing is transparent at the start with a gradual payment method.</div></Col> 
        
         </Row>
      </div>

      </Parallax>

    <div className="apps">
        <div className="apps-title">Applications that can be made</div>

        <Row>
          <Col><Row>
            <Col md={1}><ListIcon className="icon-position" /></Col>
            <Col><div className="apps-sub">Online Attendance</div></Col>
          </Row>
            With the times, your team may be able to work in the office or outside the office. Get the accuracy of your team's work hours with your own company's special online attendance feature with features such as:
            <br></br><br></br>
            <li>Clock in and Clock Out attendance</li>
            <li>Face Photo</li>
            <li>Face Recognition</li>
            <li>Accurate time stamp down to seconds</li>
            <li>GPS location of employees</li>
          </Col>

          <Col>
          <Row>
              <Col md={1}><Basketball className="icon-position" /></Col>
            <Col><div className="apps-sub">Sports Center</div></Col>
          </Row>
            Create your sports center field booking application. Suitable for futsal, mini soccer, badminton, tennis, golf, basketball, to table tennis. Give your customers the freedom to
            <br></br><br></br>
            <li>Choose a booking schedule</li>
            <li>Online payments</li>
            <li>Automatic scheduling system</li>
            <li>Search for Friends feature</li>
            <li>Split Payment with team members</li>
            <li>Information and announcements from you</li>
          </Col>

          <Col>
          <Row>
              <Col md={1}><Booking className="icon-position" /></Col>
            <Col><div className="apps-sub">Booking</div></Col>
          </Row>
            Offer your services in your own application to place orders to delivery directly to the client's house. Suitable for ac service, cleaning, cleaning service, CCTV, massage, and even other digital services. Features that can be made:
            <br></br><br></br>
            <li>Memilih jenis dan kategori jasa yang dikehendaki</li>
            <li>Melakukan reservasi online dan pembayaran dengan metode pembayaran digital</li>
            <li>Penjadwalan dengan tim lapangan</li>
            <li>Aplikasi khusus untuk tim</li>
            <li>Promosi dan Kode voucher khusus</li>
          </Col>
        </Row>

      <div className="row-margin">
        <Store className="apps-icon"/> <span className="icon-text">E-Commerce</span>
        <Building className="apps-icon" /> <span className="icon-text">Company Profile</span>
        <Cashier className="apps-icon" /> <span className="icon-text">Cashier</span>
        <ChatsIcon className="apps-icon" /> <span className="icon-text">Chat</span>
        <Workshop className="apps-icon" /> <span className="icon-text">Workshop</span>
        <Hammer className="apps-icon" /> <span className="icon-text">Construction</span>
        <span className="icon-text">and many others</span>
        </div>
    </div>
    
    <div className="start">
        <div className="apps-title">Start Creating Websites or Mobile Apps For You Now</div>

        <Row >
          <Col className="flex-position">
            <Card className="card-box" >
              <Row >
              <Col>
                <div className="card-title">Website</div>
                <div className="card-start">Start from</div>
                <div className="old-price">Rp, 1.000.000</div>
                <div className="new-price">Rp, 500.000</div>
                <div className="flex-position"><Button className="order-button">Order Now</Button></div>
                


              </Col>
              <Col ><img alt="" src={CardImg} /></Col>
            </Row>
              
                
                
            </Card>

          </Col>

          <Col className="flex-position">
          <Card className="card-box">
              <Row noGutters={true}>
            <Col>
                  <div className="card-title">Mobile Apps</div>
                  <div className="card-start">Start from</div>
                  <div className="new-price">Rp, 999.000</div>
                  <div className="flex-position"><Button className="order-button">Order Now</Button></div>
            </Col>
            <Col><img alt="" src={CardImg2} /></Col>
          </Row>
              
          </Card>
          </Col>
        </Row>

    </div>


    </>
  )
}

export default Home