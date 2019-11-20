import React, { } from 'react';
import {
  MDBBtn,
  MDBCardText,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardTitle, MDBBadge, MDBRow, MDBCol, MDBJumbotron, MDBAnimation, MDBCardHeader, MDBMedia
} from "mdbreact";
import "./EntityServices.css";


import BannerHeader from "./BannerHeader";
import portal from "../assets/img/SquareWhitePortalSplash.mp4"

const EntityServices = () => (

<div className={"portalBackground"}>
  <BannerHeader/>

  <MDBJumbotron fluid >

    <MDBContainer className={"mt-5"} >
      <MDBRow>
    <MDBCol md={"4"} middle={"true"}>

      <MDBCard border={"0"} className={"my-auto"}>
      <MDBCardTitle className="h1-responsive jumbo-title text-center">
            Portal:
    </MDBCardTitle>
      </MDBCard>
  </MDBCol>
    <MDBCol md={"4"} sm={"4"} xs={"2"}  middle={"true"}>

  <MDBCard border={"0"} className={"my-auto"} >
      <video muted loop id="myVideo" autoPlay={true} >
        <source src={portal} type="video/mp4"/>
      </video>
      </MDBCard>
    </MDBCol>
      <MDBCol md={"4"} sm={"6"} xs={"2"} middle={"true"}>

      <MDBCard border={"0"} className={"my-auto"} >
      <MDBCardTitle className="h1-responsive jumbo-title text-left">
        pened
      </MDBCardTitle>
      </MDBCard>
    </MDBCol>
      </MDBRow>

    </MDBContainer>


  <MDBRow className={"mt-5"}>
    <MDBContainer className={"text-center"}>
      {/*<MDBCard border={"0"} lg={"12"} >*/}

        <p className="h3">
          Etheric Business entities designed for any Blockchain business
        </p>
      {/*</MDBCard>*/}
    </MDBContainer>
  </MDBRow>
  </MDBJumbotron>




  {/* Products/cards row*/}

  <MDBRow className={"mt-1 cards-background fluid"}>
    {/*/!*Title*!/*/}
    <MDBCol className={"text-center mb-2"} lg={"12"}>
      <MDBCardTitle className="h1-responsive pt-3 m-5">
        Choose Your Entity
      </MDBCardTitle>
    </MDBCol>
    <MDBContainer>
      <MDBRow>
         {/*Card layout/design loosely based on : https://bootstrapmade.com/demo/Remember/*/}
        {/*Card 1*/}
    <MDBCol lg="4" className="mb-4">
      <MDBAnimation reveal type="fadeInUp">
        <MDBCard cascade className={"text-center"}>
        <MDBCardHeader className="view view-cascade gradient-card-header standard-card-header-gradient d-flex justify-content-between align-items-center py-2 mx-4 mb-2">
          <div/> <p className="card-title h3">New Hybrid Entity</p> <div/>
        </MDBCardHeader>
          <MDBCardBody cascade>
            <MDBCardText>
              <li>Hybrid Ethereum-Wyoming Entity formation</li>
              <li>Thirty Minutes of Consultation for you or your lawyer</li>
              <li>1 Year of Registered Agent Service.</li>
            </MDBCardText>
            <h4><MDBBadge className="mr-2 mt-2 badge-info"> Wyoming, Maine, Delaware </MDBBadge>
            <MDBBadge className="mr-2 mt-2 badge-info">  LLC, Series LLC, or Non-Profit </MDBBadge>
            <MDBBadge className="mr-2 mt-2 badge-info"> Ethereum (Rinkeby) </MDBBadge></h4>
            <MDBBtn size="lg" href={"/create"} className={"btn-secondary"}>
              Create
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBAnimation>
    </MDBCol>

        {/*Card 2*/}
    <MDBCol lg="4" className="mb-4">
      <MDBAnimation reveal type="fadeInUp">

        <MDBCard cascade className={"text-center"}>
        <MDBCardHeader className="view view-cascade gradient-card-header standard-card-header-gradient d-flex justify-content-between align-items-center py-2 mx-4 mb-2">
          <div/> <p className="card-title h3">Pre-Formed Hybrid</p> <div/>
        </MDBCardHeader>
          <MDBCardBody cascade>
            <MDBCardText>
              <li>Park your crypto assets</li>
              <li>Series LLC owned by your public key, multi-sig wallet, or DAO.</li>
              <li>EIN</li>
              <li>1 Year of Registered Agent Service.</li>
            </MDBCardText>
            <h4><MDBBadge className="mr-2 mt-2 badge-info"> Wyoming Series LLC </MDBBadge>
            <MDBBadge className="mr-2 mt-2  badge-info"> Any blockchain </MDBBadge></h4>

            <MDBBtn size="lg" href={"/adopt"} className={"btn-secondary"}>
              Adopt
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBAnimation>
    </MDBCol>

        {/*Card 3*/}
    <MDBCol lg="4" className="mb-4">
      <MDBAnimation reveal type="fadeInUp">
      <MDBCard cascade className={"text-center"}>
        <MDBCardHeader className="view view-cascade gradient-card-header standard-card-header-gradient d-flex justify-content-between align-items-center py-2 mx-4 mb-2">
          <div/> <p className="card-title h3">Roll Your Own</p> <div/>
        </MDBCardHeader>
          <MDBCardBody cascade>
            <MDBCardText >
              <li>Design a Hybrid Entity</li>
              <li> Draft your own Articles of Incorporation and Operating Agreement.</li>
              <li>Submit the filings yourself</li>
              <li> Hire Etherize to do it for you later.</li>
            </MDBCardText>
            <h4><MDBBadge className="mr-2 mt-2 badge-info"> Any state LLC </MDBBadge>
            <MDBBadge className="mr-2 mt-2 badge-info"> Any blockchain </MDBBadge></h4>
            <MDBBtn size="lg" href={"/draft"} className={"btn-secondary"}>
              Draft
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBAnimation>
    </MDBCol>
      </MDBRow>
    </MDBContainer>

  </MDBRow>
</div>

)

export default EntityServices;
