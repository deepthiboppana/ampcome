import React from 'react'
import { Col, Row } from 'antd';
import 'antd/dist/antd.css';
import { Group } from 'antd/lib/avatar';

export const Login = () => {
    return (
        <div>
            {/* <Row>
                <Col span={12}>
                    <img src="./Group.png" alt="" />
                </Col>
                <Col span={12}>col-12</Col>
            </Row> */}
           
  <section className="vh-100" style={{display:"flex"}}>
    <div className="container-fluid h-custom mainBg">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-md-4 col-lg-4 col-xl-4 text-center">
          <h3 style={{paddingBottom:"30px"}}>Welcome to App Name</h3>
          <p style={{paddingBottom:"30px"}}>Get ahead of the curve. Join the next generation of health heroes.</p>
          <img src="Group.png"className="img-fluid" alt="Login"/>
          
        </div>
        <div className="col-md-4 col-lg-4 col-xl-4 offset-xl-1">
          <form   style={{maxWidth:"400px",margin:"auto"}}>
            <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
              <h4 style={{paddingBottom:"30px"}}>Sign-in to your account</h4>
            </div>

             {/* Email input */}
            <div className="form-outline mb-4">
              <input type="email" id="form3Example3" className="form-control form-control-lg" placeholder="Username" />
            </div>

             {/* Password input  */}
            <div className="form-outline mb-3">
              <input type="password" id="form3Example4" className="form-control form-control-lg" placeholder="Password" />
            </div>

             {/* Select input  */}
            <div className="form-outline mb-3">
              <select className="form-control" id="exampleFormControlSelect12">
                <option value>Select Unit Name</option>
                <option>Unit Name - 1</option>
                <option>Unit Name -2</option>
              </select>
            </div>

            <div className="text-center text-lg-start mt-4 pt-2">
              <button type="button" className="btn btn-primary btn-block" >Sign
                In</button>
            </div>

          </form>
        </div>
      </div>
    </div>
  </section>

        </div>
    )
}
