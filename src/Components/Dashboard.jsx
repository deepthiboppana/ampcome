import React from 'react'

export const Dashboard = () => {
    return (
        <div className="header-fixed sidebar-fixed sidebar-dark header-light" id="body">
        <div className='wrapper'> 
    
    {/*  LEFT SIDEBAR WITH FOOTER  */}
            <aside className="left-sidebar bg-sidebar">
                <div id="sidebar" className="sidebar sidebar-with-footer">
                <button id="sidebar-toggler" className="sidebar-toggle">
          <span className="sr-only">Toggle navigation</span>
        </button>
                    {/* begin sidebar scrollbar  */}
                    <div className="sidebar-scrollbar">
                        {/* sidebar menu  */}
                        <ul className="nav sidebar-inner" id="sidebar-menu">
                            <li className="has-sub active expand">
                                <a className="sidenav-item-link"  data-toggle="collapse" data-target="#dashboard"
                                    aria-expanded="false" aria-controls="dashboard">
                                    <i className="mdi mdi-view-dashboard"></i>
                                    <span className="nav-text">Dashboard</span>
                                </a>
                            </li>
                            <li className="has-sub">
                                <a className="sidenav-item-link"  data-toggle="collapse" data-target="#app"
                                    aria-expanded="false" aria-controls="app">
                                    <i className="mdi mdi-account-group"></i>
                                    <span className="nav-text">Doctor Queue</span>
                                </a>
                            </li>
                            <li className="has-sub">
                                <a className="sidenav-item-link" data-toggle="collapse" data-target="#components"
                                    aria-expanded="false" aria-controls="components">
                                    <i className="mdi mdi-calendar-multiple-check"></i>
                                    <span className="nav-text">Appointment</span>
                                </a>
                            </li>
                            <li className="has-sub">
                                <a className="sidenav-item-link"  data-toggle="collapse" data-target="#icons"
                                    aria-expanded="false" aria-controls="icons">
                                    <i className="mdi mdi-account"></i>
                                    <span className="nav-text">Patients</span>
                                </a>
                            </li>
                            <li className="has-sub">
                                <a className="sidenav-item-link"  data-toggle="collapse" data-target="#forms"
                                    aria-expanded="false" aria-controls="forms">
                                    <i className="mdi mdi-currency-inr"></i>
                                    <span className="nav-text">Earnings</span>
                                </a>
                            </li>
                            <li className="has-sub">
                                <a className="sidenav-item-link" data-toggle="collapse" data-target="#tables"
                                    aria-expanded="false" aria-controls="tables">
                                    <i className="mdi mdi-newspaper"></i>
                                    <span className="nav-text">Billing</span>
                                </a>
                            </li>
                            <li className="has-sub">
                                <a className="sidenav-item-link" data-toggle="collapse" data-target="#maps"
                                    aria-expanded="false" aria-controls="maps">
                                    <i className="mdi mdi-settings"></i>
                                    <span className="nav-text">Configuration</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="sidebar-footer">
                        <div className="sidebar-footer-content">
                            <img src="img/doctor-avatar.png" alt="" />
                            <h6>Anil Kumar</h6>
                        </div>
                    </div>
                </div>
            </aside>
            {/* LEFT SIDEBAR WITH FOOTER END  */}

            {/* PAGE WRAPPER START  */}
            <div className="page-wrapper">
                <div className="content-wrapper">
                    <div className="row">
                        <div className="col-12">
                            <div className="col-12 headerAbove">
                                <h1>Welcome <strong>Anil Kumar</strong></h1>
                                <h5>Cardiology</h5>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-8 pl-5">
                            <div className="col-lg-12 card custCardLeft">
                                <div className="row card-header bg-light">
                                    <div className="col-6">
                                        <i className="mdi mdi-file d-inline-block lead"></i>
                                        <h3 className="d-inline-block"><span className="d-block">Total Earnings</span> ₹4000</h3>
                                    </div>
                                    <div className="col-6 row">
                                        <div className="col-6">
                                            <label>Unit</label>
                                            <select className="form-control">
                                                <option value="" >PRK Hospital</option>
                                                <option>PRK Hospital</option>
                                                <option>Pramodini Hospital</option>
                                            </select>
                                        </div>
                                        <div className="col-6">
                                            <label>Time Duration</label>
                                            <select className="form-control">
                                                <option value="" >Last 7 days</option>
                                                <option>Last 7 days</option>
                                                <option>Last 15 days</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="row card-body bg-light">
                                    <div className="col-3">
                                        <h3><span>Appointments</span> 54</h3>
                                    </div>
                                    <div className="col-3">
                                        <h3><span>EMR Finalised</span> 47</h3>
                                    </div>
                                    <div className="col-3">
                                        <h3><span>Patient Registrations</span> 120</h3>
                                    </div>
                                    <div className="col-3">
                                        <h3><span>KR4ALL Visits</span> 30</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    {/* Appointments  */}
                                    <div className="card card-table-border-none makeIt">
                                        <div className="card-header justify-content-between pt-3">
                                            <h2>Appointments</h2>
                                            <div>
                                                <button className="text-black-50 mr-2 font-size-20">
                                                    <i className="mdi mdi-help-circle"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="card-body pt-0 pb-4">
                                            <table className="table table-appointments no-border">
                                                <tbody>
                                                    <tr>
                                                        <th>Waiting Queue(6)</th>
                                                        <th>View Queue</th>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="media">
                                                                <div className="media-image mr-3 rounded-circle">
                                                                    <a href=""><img className="rounded-circle w-45" src="img/user/u2.jpg" alt="" /></a>
                                                                </div>
                                                                <div className="media-body align-self-center">
                                                                    <a href="">
                                                                        <h6 className="mt-0 text-dark font-weight-medium">Prajeesh</h6>
                                                                    </a>
                                                                    <small><i className="mdi mdi-odnoklassniki"></i> <strong>In Person</strong> • 2:20
                                                                        pm</small>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="alert-danger rounded-alert"><i className="mdi mdi-odnoklassniki float-left"></i>
                                                                &nbsp;
                                                                To
                                                                be finalized</div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="media">
                                                                <div className="media-image mr-3 rounded-circle">
                                                                    <a href=""><img className="rounded-circle w-45" src="img/user/u1.jpg" alt="" /></a>
                                                                </div>
                                                                <div className="media-body align-self-center">
                                                                    <a href="">
                                                                        <h6 className="mt-0 text-dark font-weight-medium">Risha Mahin</h6>
                                                                    </a>
                                                                    <small><i className="mdi mdi-odnoklassniki"></i> <strong>Anytime Consultation</strong> •
                                                                        2:30
                                                                        pm</small>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="alert-warning rounded-alert"><i className="mdi mdi-alarm float-left"></i> &nbsp;
                                                                Waiting
                                                                • 40 min</div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="media">
                                                                <div className="media-image mr-3 rounded-circle">
                                                                    <a href=""><img className="rounded-circle w-45" src="img/user/u3.jpg" alt="" /></a>
                                                                </div>
                                                                <div className="media-body align-self-center">
                                                                    <a href="">
                                                                        <h6 className="mt-0 text-dark font-weight-medium">Riju K</h6>
                                                                    </a>
                                                                    <small><i className="mdi mdi-camcorder"></i> <strong>Video Consultation</strong> • 2:40
                                                                        pm</small>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="alert-warning rounded-alert"><i className="mdi mdi-alarm float-left"></i> &nbsp;
                                                                Waiting
                                                                • 40 min</div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="media">
                                                                <div className="media-image mr-3 rounded-circle">
                                                                    <a href=""><img className="rounded-circle w-45" src="img/user/u4.jpg" alt="" /></a>
                                                                </div>
                                                                <div className="media-body align-self-center">
                                                                    <a href="">
                                                                        <h6 className="mt-0 text-dark font-weight-medium">Setia S</h6>
                                                                    </a>
                                                                    <small><i className="mdi mdi-camcorder"></i> <strong>Video Consultation</strong> • 2:40
                                                                        pm</small>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="alert-warning rounded-alert"><i className="mdi mdi-alarm float-left"></i> &nbsp;
                                                                Waiting
                                                                • 40 min</div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="card-footer bg-white">
                                            <a href="">See all Appointments <i className="mdi mdi-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    {/* Schedule */}
                                    <div className="card card-table-border-none makeIt">
                                        <div className="card-header justify-content-between pt-3">
                                            <h2>Schedule</h2>
                                            <div>
                                                <button className="text-black-50 mr-2 font-size-20">
                                                    <i className="mdi mdi-help-circle"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="card-body pt-0 pb-4">
                                            <div className="card p-2 mt-2">
                                                <div className="car-body">
                                                    <div className="d-block">
                                                        <p className="d-inline-block">Receive <strong><i className="mdi mdi-flash"></i> &nbsp; Anytime
                                                            Consult</strong> &nbsp; <i className="mdi mdi-alert-circle"></i></p>
                                                        <label
                                                            className="switch switch-text switch-outline-alt-success switch-pill form-control-label float-right mb-0">
                                                            <input type="checkbox" className="switch-input form-check-input" value="yes"  />
                                                            <span className="switch-label" data-on="Yes" data-off="No"></span>
                                                            <span className="switch-handle"></span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 className="p-3">TODAY • MONDAY</h6>
                                            <div className="alert-success p-2 mb-2" role="alert">
                                                <p className="d-inline-block initialism">9:00 AM - 9:40 AM • 40 minutes</p>
                                                <h6 className="d-inline-block float-right"><i className="mdi mdi-flash"></i> &nbsp; Anytime</h6>
                                            </div>
                                            <div className="alert-success p-2 mb-2" role="alert">
                                                <p className="d-inline-block initialism">3:30 PM - 7:30 PM • 4 hours</p>
                                                <h6 className="d-inline-block float-right"><i className="mdi mdi-camcorder"></i> &nbsp; Video</h6>
                                            </div>
                                            <h6 className="p-3">TOMORROW • TUESDAY</h6>
                                            <div className="alert-success p-2 mb-2" role="alert">
                                                <p className="d-inline-block initialism">9:00 AM - 9:40 AM • 40 minutes</p>
                                                <h6 className="d-inline-block float-right"><i className="mdi mdi-odnoklassniki"></i> &nbsp; In-person</h6>
                                            </div>
                                            <div className="alert-success p-2 mb-2" role="alert">
                                                <p className="d-inline-block initialism">3:30 PM - 7:30 PM • 4 hours</p>
                                                <h6 className="d-inline-block float-right"><i className="mdi mdi-flash"></i> &nbsp; Anytime</h6>
                                            </div>
                                            <div className="alert-danger p-2 mb-2" role="alert">
                                                <p className="d-inline-block initialism">3:30 PM - 7:30 PM • 4 hours</p>
                                                <h6 className="d-inline-block float-right"><i className="mdi mdi-block-helper"></i> &nbsp; Block</h6>
                                            </div>
                                            <h6 className="p-3">WEDNESDAY</h6>
                                        </div>
                                        <div className="card-footer bg-white">
                                            <a href="">See all Schedule <i className="mdi mdi-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    {/* Consultation History Graph */}
                                    <div className="card card-table-border-none makeItNormal">
                                        <div className="card-header justify-content-between pt-3">
                                            <h2>consultation History</h2>
                                            <div className="float-right">
                                                <div className="d-flex mr-2 align-items-center">
                                                    <h6>KR4ALL Visits</h6>
                                                    <label
                                                        className="switch switch-text switch-outline-alt-success switch-pill form-control-label ml-2 mr-2">
                                                        <input type="checkbox" className="switch-input form-check-input" value="yes"  />
                                                        <span className="switch-label" data-on="" data-off=""></span>
                                                        <span className="switch-handle"></span>
                                                    </label>
                                                    <p>All</p>
                                                    <button className="text-black-50 font-size-20 ml-2">
                                                        <i className="mdi mdi-help-circle"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body pt-0 pb-4">
                                            {/* <img src="../deepu/img/consultation-graph.png" alt="" className="img-fluid mt-4" />  */}
                                            <canvas id="activity" className="chartjs chartjs-render-monitor mt-4" width="100%" height="250"
                                                style={{display:"block", width: "100%", height:"250px",maxHeight:"380px"}}></canvas>
                                            <small>No of Patient Consulted</small>
                                            <img src="img/graph-bottom.png" alt="" className="img-fluid mt-4" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 pr-5">
                            <div className="card custCardRight">
                                <div className="card-header bg-white">
                                    <img src="../deepu/img/right-card-logo.png" alt="" className="mb-5" />
                                    <h3 className="mt-3"><i className="mdi mdi-bell-ring"></i> Activity</h3>
                                </div>
                                <div className="card-body specialBody">
                                    <div className="itemWise d-flex pt-3 pb-3">
                                        <i className="mdi mdi-brightness-auto d-inline-block"></i>
                                        <h4 className="d-inline-block"><strong>User Activity</strong> • 12:32 <span>Vivek Kumar accepted the
                                            invitation</span></h4>
                                    </div>
                                    <div className="itemWise d-flex pt-3 pb-3">
                                        <i className="mdi mdi-brightness-auto d-inline-block"></i>
                                        <h4 className="d-inline-block"><strong>User Activity</strong> • 12:32 <span>Vivek Kumar accepted the
                                            invitation</span></h4>
                                    </div>
                                    <div className="itemWise d-flex pt-3 pb-3">
                                        <i className="mdi mdi-brightness-auto d-inline-block"></i>
                                        <h4 className="d-inline-block"><strong>User Activity</strong> • 12:32 <span>Vivek Kumar accepted the
                                            invitation</span></h4>
                                    </div>
                                    <div className="itemWise d-flex pt-3 pb-3">
                                        <i className="mdi mdi-brightness-auto d-inline-block"></i>
                                        <h4 className="d-inline-block"><strong>User Activity</strong> • 12:32 <span>Vivek Kumar accepted the
                                            invitation</span></h4>
                                    </div>
                                    <div className="itemWise d-flex pt-3 pb-3">
                                        <i className="mdi mdi-brightness-auto d-inline-block"></i>
                                        <h4 className="d-inline-block"><strong>User Activity</strong> • 12:32 <span>Vivek Kumar accepted the
                                            invitation</span></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



         </div> 
        </div>

      
        
    )
}

