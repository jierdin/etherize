import React, { } from 'react';
import {
  MDBBtn,
  MDBCardText,
  MDBContainer,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle, MDBBadge, MDBRow, MDBCol, MDBJumbotron, MDBAnimation, MDBCardHeader
} from "mdbreact";
import "./EntityServices.css";

import self from '../assets/img/self.webp';
import deconstruct from '../assets/img/deconstruct-beeple.webp';
import poly from '../assets/img/awaken-giant-beeple.webp';
import BannerHeader from "./BannerHeader";

const EntityServices = () => (

<div className={"portalBackground"}>
  <BannerHeader/>

  <MDBJumbotron fluid className={"text-center"} >
    <MDBContainer className={"jumbo-container"}>
    <MDBCardTitle className="h1-responsive pt-3 m-5 jumbo-title">
            The Portal is Open
    </MDBCardTitle>
    <p className="h3">
      Etheric Business entities designed for any Blockchain business
    </p>
    </MDBContainer>
  </MDBJumbotron>

<MDBContainer>

  {/*Title*/}
  <MDBRow className={"mb-5"} >
    <MDBCol className={"text-center"}>
    <MDBCardTitle className="h1-responsive pt-3 m-5 white-text">
      Choose Your Entity
    </MDBCardTitle>
    </MDBCol>
  </MDBRow>

  {/*begin cards row*/}
  <MDBRow className={"mt-2"}>

    <MDBCol lg="4" className="mb-4">
      <MDBAnimation reveal type="fadeInUp">
      <MDBCard cascade >
        <MDBCardHeader className="view view-cascade gradient-card-header standard-card-header-gradient d-flex justify-content-between align-items-center py-2 mx-4 mb-2">
          <div/> <p className="card-title h3">New Hybrid Entity</p> <div/>
        </MDBCardHeader>
          <MDBCardImage cascade
              src={poly}
              alt=""
              top
              hover
              overlay="white-slight"
          />
          <MDBCardBody cascade>
            <MDBCardText>
              Create a Hybrid Entity, capable of traversing the "real world" of court rooms and the virtual worlds of Ethereum and other distributed networks.
              <br/> <br/>
              Includes Entity Formation, Thirty Minutes of Consultation, and 1 Year of Registered Agent Service.
              <br/> <br/>
              Consultation may be used towards generating an Operating Agreement, attaining EIN, or advising you and your lawyer on Hybrid Entities.
            </MDBCardText>
            <h4><MDBBadge className="mr-2 mt-2 badge-info"> Wyoming, Maine, Delaware </MDBBadge>
            <MDBBadge className="mr-2 mt-2 badge-info">  LLC, Series LLC, or Non-Profit </MDBBadge>
            <MDBBadge className="mr-2 mt-2 badge-info"> Ethereum (Rinkeby) </MDBBadge></h4>
            <MDBBtn size="lg" href={"/create"} className={"btn-primary"}>
              Create
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBAnimation>
    </MDBCol>



    <MDBCol lg="4" className="mb-4">
      <MDBAnimation reveal type="fadeInUp">

      <MDBCard cascade >
        <MDBCardHeader className="view view-cascade gradient-card-header standard-card-header-gradient d-flex justify-content-between align-items-center py-2 mx-4 mb-2">
          <div/> <p className="card-title h3">Pre-Formed Hybrid</p> <div/>
        </MDBCardHeader>
          <MDBCardImage
              cascade
              src={self}
              alt=""
              top
              hover
              overlay="white-slight"
          />
          <MDBCardBody cascade>
            <MDBCardText>
              Want a place to park your crypto assets and don't care what to call it? WyDAO LLC has an affordable, rapid solution: Series LLC's available for adoption for applicable parents.
              <br/> <br/>
              This process transfers legal ownership of the Series LLC to your public key, multi-sig wallet, or DAO.
              <br/> <br/>
              Includes EIN and 1 Year of Registered Agent Service.
            </MDBCardText>
            <h4><MDBBadge className="mr-2 mt-2 badge-info"> Wyoming Series LLC </MDBBadge>
            <MDBBadge className="mr-2 mt-2  badge-info"> Any blockchain </MDBBadge></h4>

            <MDBBtn size="lg" href={"/adopt"} className={"btn-primary"}>
              Adopt
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBAnimation>
    </MDBCol>

    <MDBCol lg="4" className="mb-4">
      <MDBAnimation reveal type="fadeInUp">

      <MDBCard cascade >
        <MDBCardHeader className="view view-cascade gradient-card-header standard-card-header-gradient d-flex justify-content-between align-items-center py-2 mx-4 mb-2">
          <div/> <p className="card-title h3">Roll Your Own</p> <div/>
        </MDBCardHeader>
          <MDBCardImage cascade
              src={deconstruct}
              alt=""
              top
              hover
              overlay="white-slight"
          />
          <MDBCardBody cascade>
            <MDBCardText>
              Design a Hybrid Entity
              <br/> <br/>
              This will take you to Etherize's 'Full Entity' deal, a collection of templates on OpenLaw. With this single form, you will be able to draft your own Articles of Incorporation and Operating Agreement.
              <br/> <br/>
              Instructions are included for submitting the filings yourself, or for hiring Etherize to do it for you later.
            </MDBCardText>
            <h4><MDBBadge className="mr-2 mt-2 badge-info"> Any state LLC </MDBBadge>
            <MDBBadge className="mr-2 mt-2 badge-info"> Any blockchain </MDBBadge></h4>
            <MDBBtn size="lg" href={"/draft"} className={"btn-primary"}>
              Draft
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBAnimation>
    </MDBCol>
  </MDBRow>
</MDBContainer>
</div>

)

export default EntityServices;
