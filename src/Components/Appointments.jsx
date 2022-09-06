import React from 'react'

export const Appointments = () => {
  return (
   
     <div className="header-fixed sidebar-fixed sidebar-dark header-light" id="body">
  {/* Minified SideBAR className:sidebar-minified  */}
  <div className="wrapper">
     {/* LEFT SIDEBAR WITH FOOTER  */}
    <aside className="left-sidebar bg-sidebar">
    <div id="sidebar" className="sidebar sidebar-with-footer">
        <button id="sidebar-toggler" className="sidebar-toggle">
          <span className="sr-only">Toggle navigation</span>
        </button>
        {/* begin sidebar scrollbar  */}
        <div className="sidebar-scrollbar">
           {/* sidebar menu */}
          <ul className="nav sidebar-inner" id="sidebar-menu">
            <li className="has-sub expand">
              <a className="sidenav-item-link" href="index.html">
                <i className="mdi mdi-view-dashboard"></i>
                <span className="nav-text">Dashboard</span>
              </a>
            </li>
            <li className="has-sub">
              <a className="sidenav-item-link" href="">
                <i className="mdi mdi-account-group"></i>
                <span className="nav-text">Doctor Queue</span>
              </a>
            </li>
            <li className="has-sub active">
              <a className="sidenav-item-link" href="">
                <i className="mdi mdi-calendar-multiple-check"></i>
                <span className="nav-text">Appointment</span>
              </a>
            </li>
            <li className="has-sub">
              <a className="sidenav-item-link" href="">
                <i className="mdi mdi-account"></i>
                <span className="nav-text">Patients</span>
              </a>
            </li>
            <li className="has-sub">
              <a className="sidenav-item-link" href="">
                <i className="mdi mdi-currency-inr"></i>
                <span className="nav-text">Earnings</span>
              </a>
            </li>
            <li className="has-sub">
              <a className="sidenav-item-link" href="">
                <i className="mdi mdi-newspaper"></i>
                <span className="nav-text">Billing</span>
              </a>
            </li>
            <li className="has-sub">
              <a className="sidenav-item-link" href="">
                <i className="mdi mdi-settings"></i>
                <span className="nav-text">Configuration</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="sidebar-footer">
          <div className="sidebar-footer-content">
            <img src="img/doctor-avatar.png" alt=""/>
            <h6>Anil Kumar</h6>
          </div>
        </div>
      </div>
    </aside>
    {/* LEFT SIDEBAR WITH FOOTER END */}
     {/* PAGE WRAPPER STAR */}
    <div className="page-wrapper">
      <div className="content-wrapper">
        <div className="row">
          <div className="col-12 p-5">
            <div className="row mb-2">
              <h2 className="col-12">Appointments</h2>
              <div className="col-12 mt-3">
                <label className="float-left mt-4" style={{color:"#8a909d"}}>List of booked appointments</label>
                <button className="btn btn-outline-danger btn-md float-right mb-0 mt-0">Add <i
                    className="mdi mdi-plus-circle"></i></button>
                <hr className="mt-5"/>
              </div>
            </div>
            <div className="row justify-content-between top-information">
              <div className="col-4">
                <div className="input-group mt-4">
                  <input type="text" className="form-control" placeholder="Search by name, number "
                    aria-label="Search by name, number "/>
                  <div className="input-group-append">
                    <span className="input-group-text">
                      <i className="mdi mdi-magnify"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="2">
                <label>Date</label>
                <select className="form-control">
                  <option value="" defaultValue>PRK Hospital</option>
                  <option>PRK Hospital</option>
                  <option>Pramodini Hospital</option>
                </select>
              </div>
              <div className="2">
                <label>Consultation Type</label>
                <select className="form-control">
                  <option value="" defaultValue>Last 7 days</option>
                  <option>Last 7 days</option>
                  <option>Last 15 days</option>
                </select>
              </div>
              <div className="2">
                <label>Status</label>
                <select className="form-control">
                  <option value="" defaultValue>Last 7 days</option>
                  <option>Last 7 days</option>
                  <option>Last 15 days</option>
                </select>
              </div>
              <div className="2">
                <label>Invoice</label>
                <select className="form-control">
                  <option value="" defaultValue>Last 7 days</option>
                  <option>Last 7 days</option>
                  <option>Last 15 days</option>
                </select>
              </div>
            </div>
            <div className="responsive-data-table">
              <div id="responsive-data-table_wrapper" className="dataTables_wrapper dt-bootstrap4 no-footer">
                <table id="responsive-data-table"
                  className="table dt-responsive nowrap dataTable no-footer dtr-inline collapsed">
                  <thead>
                    <tr role="row">
                      <th>Order ID</th>
                      <th>patient</th>
                      <th>Consultation</th>
                      <th>team</th>
                      <th>doctor</th>
                      <th>Slot</th>
                      <th>status</th>
                      <th>invoice</th>
                      <th>action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="odd">
                      <td>
                        <p>2422562</p>
                      </td>
                      <td>
                        <p><a href="">Risha Mahin</a> <span>26, F</span></p>
                      </td>
                      <td>
                        <p><i className="mdi mdi-video"></i> Video <span>First Consultation</span></p>
                      </td>
                      <td>
                        <p>&nbsp;</p>
                      </td>
                      <td>
                        <p>Anil Kumar</p>
                      </td>
                      <td>
                        <p>Jul 3, 2021 8:53 AM</p>
                      </td>
                      <td><span className="badge badge-secondary">Cancelled</span></td>
                      <td><span className="badge badge-secondary">Refunded</span></td>
                      <td>
                        <div className="dropdown show d-inline-block widget-dropdown">
                          <a className="dropdown-toggle icon-burger-mini" href="" role="button" id="dropdown-recent-order1"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static"></a>
                          <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdown-recent-order1">
                            <li className="dropdown-item">
                              <a href="#">Edit</a>
                            </li>
                            <li className="dropdown-item">
                              <a href="#">Remove</a>
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <tr className="even">
                      <td>
                        <p>2429657</p>
                      </td>
                      <td>
                        <p><a href="">Riju K</a> <span>32, M</span></p>
                      </td>
                      <td>
                        <p><i className="mdi mdi-video"></i> Video <span>Follow-up</span></p>
                      </td>
                      <td>
                        <p>Medical Camp</p>
                      </td>
                      <td>
                        <p>Greg Ferguson</p>
                      </td>
                      <td>
                        <p>Jul 3, 2021 8:53 AM</p>
                      </td>
                      <td><span className="badge badge-secondary">No Show</span></td>
                      <td><span className="badge badge-danger">Unpaid</span></td>
                      <td>
                        <div className="dropdown show d-inline-block widget-dropdown">
                          <a className="dropdown-toggle icon-burger-mini" href="" role="button" id="dropdown-recent-order1"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static"></a>
                          <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdown-recent-order1">
                            <li className="dropdown-item">
                              <a href="#">Edit</a>
                            </li>
                            <li className="dropdown-item">
                              <a href="#">Remove</a>
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <tr className="odd">
                      <td>
                        <p>2422455</p>
                      </td>
                      <td>
                        <p><a href="">Prajeesh</a> <span>47, M</span></p>
                      </td>
                      <td>
                        <p><i className="mdi mdi-flash"></i> Anytime Consult</p>
                      </td>
                      <td>
                        <p>&nbsp;</p>
                      </td>
                      <td>
                        <p>Pankaj Dhir</p>
                      </td>
                      <td>
                        <p>Jul 3, 2021 8:53 AM</p>
                      </td>
                      <td><span className="badge badge-secondary">Completed</span></td>
                      <td><span className="badge badge-success">Paid</span></td>
                      <td>
                        <div className="dropdown show d-inline-block widget-dropdown">
                          <a className="dropdown-toggle icon-burger-mini" href="" role="button" id="dropdown-recent-order1"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static"></a>
                          <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdown-recent-order1">
                            <li className="dropdown-item">
                              <a href="#">Edit</a>
                            </li>
                            <li className="dropdown-item">
                              <a href="#">Remove</a>
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <tr className="even">
                      <td>
                        <p>2421751</p>
                      </td>
                      <td>
                        <p><a href="">Nikita Gandhi</a> <span>29, F</span></p>
                      </td>
                      <td>
                        <p><i className="mdi mdi-video"></i> Video <span>First Consultation</span></p>
                      </td>
                      <td>
                        <p>Medical Camp</p>
                      </td>
                      <td>
                        <p>Sujata Mohan</p>
                      </td>
                      <td>
                        <p>Jul 3, 2021 8:53 AM</p>
                      </td>
                      <td><span className="badge badge-secondary">Booked</span></td>
                      <td><span className="badge badge-success">Paid</span></td>
                      <td>
                        <div className="dropdown show d-inline-block widget-dropdown">
                          <a className="dropdown-toggle icon-burger-mini" href="" role="button" id="dropdown-recent-order1"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static"></a>
                          <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdown-recent-order1">
                            <li className="dropdown-item">
                              <a href="#">Edit</a>
                            </li>
                            <li className="dropdown-item">
                              <a href="#">Remove</a>
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <tr className="odd">
                      <td>
                        <p>2422455</p>
                      </td>
                      <td>
                        <p><a href="">Darshan Singh</a> <span>36, M</span></p>
                      </td>
                      <td>
                        <p><i className="mdi mdi-human-male"></i> In-person</p>
                      </td>
                      <td>
                        <p>&nbsp;</p>
                      </td>
                      <td>
                        <p>Ram Dayanand</p>
                      </td>
                      <td>
                        <p>Jul 3, 2021 8:53 AM</p>
                      </td>
                      <td><span className="badge badge-secondary">Completed</span></td>
                      <td><span className="badge badge-danger">Unpaid</span></td>
                      <td>
                        <div className="dropdown show d-inline-block widget-dropdown">
                          <a className="dropdown-toggle icon-burger-mini" href="" role="button" id="dropdown-recent-order1"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static"></a>
                          <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdown-recent-order1">
                            <li className="dropdown-item">
                              <a href="#">Edit</a>
                            </li>
                            <li className="dropdown-item">
                              <a href="#">Remove</a>
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <tr className="even">
                      <td>
                        <p>2421751</p>
                      </td>
                      <td>
                        <p><a href="">Risha Mahin</a> <span>19, F</span></p>
                      </td>
                      <td>
                        <p><i className="mdi mdi-video"></i> Video <span>First Consultation</span></p>
                      </td>
                      <td>
                        <p>&nbsp;</p>
                      </td>
                      <td>
                        <p>Prakash Jhanti</p>
                      </td>
                      <td>
                        <p>Jul 3, 2021 8:53 AM</p>
                      </td>
                      <td><span className="badge badge-secondary">Completed</span></td>
                      <td><span className="badge badge-success">Paid</span></td>
                      <td>
                        <div className="dropdown show d-inline-block widget-dropdown">
                          <a className="dropdown-toggle icon-burger-mini" href="" role="button" id="dropdown-recent-order1"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static"></a>
                          <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdown-recent-order1">
                            <li className="dropdown-item">
                              <a href="#">Edit</a>
                            </li>
                            <li className="dropdown-item">
                              <a href="#">Remove</a>
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="clear"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

   {/* PAGE SCRIPTS START
    <script src="js/jquery.min.js"></script>
    <script src="js/jquery.slimscroll.min.js"></script>
    <script src="js/sleek.bundle.js"></script> */}
</div>
   </div>
  )
}
