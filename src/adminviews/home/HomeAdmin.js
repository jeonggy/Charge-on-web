import React, { Component } from "react";
import { CCard, CCardBody, CCol, CRow, CButton } from "@coreui/react";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }

  breakdownAddBtnClicked = () => {
    document.location.href = "#/adbreakdown";
  };

  checklistAddBtnClicked = () => {
    document.location.href = "#/checklist";
  };

  chargestationAddBtnClicked = () => {
    document.location.href = "#/chargestation";
  };

  queryAddBtnClicked = (tag) => {
    document.location.href = "#/adquery?tab=" + tag;
  };

  loginAddBtnClicked = () => {
    document.location.href = "#/managerlogin";
  };

  test = () => {
    var stationData2;
  };
  rowClicked = (item) => {};

  getTotalSum = (list, key) => {
    var total = 0;
    for (let index = 0; index < list.length; index++) {
      const item = list[index];
      total = total + item[key];
    }
    return total;
  };

  render() {
    return (
      <>
        <CRow>
          <CCol md="12" lg="12" sm="12" xl="8">
            <CCard>
              <CCardBody>
                <CRow style={{ marginRight: "4px" }}>
                  <CCol
                    style={{ alignItems: "center", justifyContent: "center" }}
                  >
                    <div className="text-muted">TODAY</div>
                    <strong style={{ fontSize: "26px" }}>
                      2021년 08월 23일
                    </strong>
                  </CCol>
                  <CCol
                    xs="2"
                    style={{
                      margin: "6px",
                      backgroundColor: "#F8F8F8",
                      alignItems: "center",
                      textAlign: "center",
                      padding: "4px 4px",
                    }}
                  >
                    <div className="text-muted">
                      <span style={{ fontSize: "16px" }}>총 파트너 수</span>
                    </div>
                    <strong style={{ fontSize: "40px" }}>24</strong>
                  </CCol>
                  <CCol
                    xs="2"
                    style={{
                      margin: "6px",
                      backgroundColor: "#F8F8F8",
                      alignItems: "center",
                      textAlign: "center",
                      padding: "4px 4px",
                    }}
                  >
                    <div className="text-muted">
                      <span style={{ fontSize: "16px" }}>총 회원 수</span>
                    </div>
                    <strong style={{ fontSize: "40px" }}>24</strong>
                  </CCol>
                </CRow>
              </CCardBody>
            </CCard>
            <CRow>
              <CCol xs="3">
                <CCard style={{ backgroundColor: "#d93737" }}>
                  <CCardBody>
                    <CRow>
                      <CCol>
                        <div className="text-muted">
                          <span style={{ color: "#fff", fontSize: "18px" }}>
                            고장
                          </span>
                        </div>
                      </CCol>
                      <CButton
                        style={{ marginRight: "10px" }}
                        size="sm"
                        active
                        onClick={() => this.breakdownAddBtnClicked()}
                        color="light"
                        aria-pressed="true"
                      >
                        자세히보기
                      </CButton>
                    </CRow>
                    <strong style={{ fontSize: "46px", color: "#fff" }}>
                      24
                    </strong>
                  </CCardBody>
                </CCard>
              </CCol>
              <CCol xs="3">
                <CCard style={{ backgroundColor: "#f6960b" }}>
                  <CCardBody>
                    <div className="text-muted">
                      <span style={{ color: "#fff", fontSize: "18px" }}>
                        점검중
                      </span>
                    </div>
                    <strong style={{ fontSize: "46px", color: "#fff" }}>
                      24
                    </strong>
                  </CCardBody>
                </CCard>
              </CCol>
              <CCol xs="3">
                <CCard>
                  <CCardBody>
                    <div className="text-muted">
                      <span style={{ fontSize: "18px" }}>사용중</span>
                    </div>
                    <strong style={{ fontSize: "46px" }}>24</strong>
                  </CCardBody>
                </CCard>
              </CCol>
              <CCol xs="3">
                <CCard style={{ backgroundColor: "#318CFB" }}>
                  <CCardBody>
                    <div className="text-muted">
                      <span style={{ color: "#fff", fontSize: "18px" }}>
                        총 충전기
                      </span>
                    </div>
                    <strong style={{ fontSize: "46px", color: "#fff" }}>
                      24
                    </strong>
                  </CCardBody>
                </CCard>
              </CCol>
            </CRow>
            <CRow>
              <CCol xs="6">
                <CCard>
                  <CCardBody>
                    <CRow>
                      <CCol>
                        <div className="text-muted">
                          <span style={{ fontSize: "18px" }}>
                            차지온 새 문의내역
                          </span>
                        </div>
                      </CCol>
                      <CButton
                        size="sm"
                        style={{ marginRight: "10px" }}
                        active
                        onClick={() => this.queryAddBtnClicked(0)}
                        color="light"
                        aria-pressed="true"
                      >
                        더보기
                      </CButton>
                    </CRow>
                    <strong style={{ fontSize: "40px" }}>24</strong>
                  </CCardBody>
                </CCard>
              </CCol>
              <CCol xs="6">
                <CCard>
                  <CCardBody>
                    <CRow>
                      <CCol>
                        <div className="text-muted">
                          <span style={{ fontSize: "18px" }}>
                            파트너 새 문의내역
                          </span>
                        </div>
                      </CCol>
                      <CButton
                        size="sm"
                        style={{ marginRight: "10px" }}
                        active
                        onClick={() => this.queryAddBtnClicked(1)}
                        color="light"
                        aria-pressed="true"
                      >
                        더보기
                      </CButton>
                    </CRow>
                    <strong style={{ fontSize: "40px" }}>24</strong>
                  </CCardBody>
                </CCard>
              </CCol>
            </CRow>
          </CCol>
        </CRow>
      </>
    );
  }
}

export default Home;
