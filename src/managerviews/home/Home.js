import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CButton,
} from "@coreui/react";
import { CChartLine } from "@coreui/react-chartjs";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }

  chartAddBtnClicked = () => {
    document.location.href = "#/chargerchart";
  };

  breakdownAddBtnClicked = () => {
    document.location.href = "#/breakdown";
  };

  checklistAddBtnClicked = () => {
    document.location.href = "#/checklist";
  };

  chargestationAddBtnClicked = () => {
    document.location.href = "#/chargestation";
  };

  queryAddBtnClicked = () => {
    document.location.href = "#/query";
  };

  loginAddBtnClicked = () => {
    document.location.href = "#/managerlogin";
  };
  memberAddBtnClicked = () => {
    document.location.href = "#/member";
  };

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
                <CRow
                  style={{
                    alignItems: "center",
                    marginLeft: "8px",
                    marginBottom: "10px",
                  }}
                >
                  <div className="text-muted">TODAY</div>
                  <strong style={{ fontSize: "26px", marginLeft: "12px" }}>
                    2021년 08월 23일
                  </strong>
                </CRow>
                <CCol
                  className="text-center"
                  style={{
                    padding: "14px 0px 14px 10px",
                    borderRadius: "8px",
                    backgroundColor: "#f8f8f8",
                  }}
                >
                  <CRow>
                    <CCol
                      xs="6"
                      className="text-left"
                      style={{
                        fontWeight: "700",
                        color: "#141414",
                        fontSize: "26px",
                        paddingLeft: "24px",
                      }}
                    >
                      강남빌딩
                    </CCol>
                    <CCol className="text-right">
                      <CButton
                        active
                        color="light"
                        aria-pressed="true"
                        style={{
                          marginRight: "10px",
                          color: "#fff",
                          backgroundColor: "#318CFB",
                        }}
                        onClick={() => this.chargestationAddBtnClicked()}
                      >
                        구역설정
                      </CButton>
                      <CButton
                        active
                        color="light"
                        aria-pressed="true"
                        style={{ marginRight: "20px", backgroundColor: "#fff" }}
                      >
                        정보수정
                      </CButton>
                    </CCol>
                  </CRow>
                  <CCol className="text-left">논현동 123-12</CCol>
                </CCol>
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
            <CCard>
              <CCardHeader style={{ borderRadius: "10px 10px 0px 0px" }}>
                <CRow>
                  <CCol
                    className="text-left"
                    style={{ padding: "6px 0px 0px 16px" }}
                  >
                    <h5>충전소 충전 현황</h5>
                  </CCol>
                  <CCol className="text-right">
                    <CButton
                      active
                      onClick={() => this.chartAddBtnClicked()}
                      color="light"
                      aria-pressed="true"
                    >
                      더보기
                    </CButton>
                  </CCol>
                </CRow>
              </CCardHeader>
              <CCardBody>
                <CChartLine
                  datasets={[
                    {
                      label: "지상A",
                      backgroundColor: "rgba(255,186,0,0.1)",
                      borderColor: "rgba(255,186,0,1)",
                      borderWidth: 2,
                      data: [30, 39, 10, 50, 30, 60, 35],
                    },
                    {
                      label: "지상B",
                      backgroundColor: "rgba(88,164,255,0.1)",
                      borderColor: "rgba(88,164,255,1)",
                      borderWidth: 2,
                      data: [39, 40, 40, 35, 40, 20, 25],
                    },
                    {
                      label: "지하A",
                      backgroundColor: "rgba(114,199,102,0.1)",
                      borderColor: "rgba(114,199,102,1)",
                      borderWidth: 2,
                      data: [30, 20, 30, 20, 20, 40, 35],
                    },
                  ]}
                  options={{
                    tooltips: {
                      enabled: true,
                    },
                  }}
                  labels="months"
                />
              </CCardBody>
            </CCard>
          </CCol>
          <CCol xs="12" sm="12" md="12" lg="12" xl="4">
            <CRow xs="12">
              <CCol xs="6">
                <CCard>
                  <CCardBody>
                    <CRow>
                      <CCol>
                        <div className="text-muted">
                          <span style={{ fontSize: "18px" }}>총 회원 수</span>
                        </div>
                      </CCol>
                      <CButton
                        size="sm"
                        style={{ marginRight: "10px" }}
                        active
                        onClick={() => this.memberAddBtnClicked()}
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
                          <span style={{ fontSize: "18px" }}>미답변 내역</span>
                        </div>
                      </CCol>
                      <CButton
                        size="sm"
                        style={{ marginRight: "10px" }}
                        active
                        onClick={() => this.queryAddBtnClicked()}
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
            <CCard>
              <CCardBody>
                <CRow style={{ marginBottom: "20px" }}>
                  <CCol
                    xs="8"
                    style={{ justifyContent: "center", alignItems: "center" }}
                  >
                    <h5>파트너 상세 정보</h5>
                  </CCol>
                </CRow>
                <CCol xs="12">
                  <table className="table customtable">
                    <tr>
                      <td style={{ color: "#989898", fontSize: "14px" }}>
                        파트너
                      </td>
                      <td style={{ fontSize: "14px" }} className="text-right">
                        -
                      </td>
                    </tr>
                    <tr>
                      <td style={{ color: "#989898", fontSize: "14px" }}>
                        시/도
                      </td>
                      <td style={{ fontSize: "14px" }} className="text-right">
                        -
                      </td>
                    </tr>
                    <tr>
                      <td style={{ color: "#989898", fontSize: "14px" }}>
                        시/군/구
                      </td>
                      <td style={{ fontSize: "14px" }} className="text-right">
                        -
                      </td>
                    </tr>
                    <tr>
                      <td style={{ color: "#989898", fontSize: "14px" }}>
                        주소
                      </td>
                      <td style={{ fontSize: "14px" }} className="text-right">
                        -
                      </td>
                    </tr>
                    <tr>
                      <td style={{ color: "#989898", fontSize: "14px" }}>
                        전화번호
                      </td>
                      <td style={{ fontSize: "14px" }} className="text-right">
                        -
                      </td>
                    </tr>
                    <tr>
                      <td style={{ color: "#989898", fontSize: "14px" }}>
                        충전기 수
                      </td>
                      <td style={{ fontSize: "14px" }} className="text-right">
                        -
                      </td>
                    </tr>
                    <tr>
                      <td style={{ color: "#989898", fontSize: "14px" }}>
                        소속그룹 수
                      </td>
                      <td style={{ fontSize: "14px" }} className="text-right">
                        -
                      </td>
                    </tr>
                    <tr>
                      <td style={{ color: "#989898", fontSize: "14px" }}>
                        멤버 수
                      </td>
                      <td style={{ fontSize: "14px" }} className="text-right">
                        -
                      </td>
                    </tr>
                    <tr>
                      <td style={{ color: "#989898", fontSize: "14px" }}>
                        등록일
                      </td>
                      <td style={{ fontSize: "14px" }} className="text-right">
                        -
                      </td>
                    </tr>
                  </table>
                </CCol>
                <CCol style={{ marginBottom: "30px" }}>
                  <CRow style={{ marginTop: "50px" }}>
                    <CCol
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                        marginBottom: "10px",
                      }}
                    >
                      <h5>주차장 리스트</h5>
                    </CCol>
                  </CRow>
                  <Link
                    to="/chargestation?tab=0"
                    style={{ textDecoration: "none" }}
                  >
                    <CRow className="parking-box">
                      <CCol xs="9" className="parking-name">
                        A관
                      </CCol>
                      <CCol className="parking-re">8</CCol>
                      <CCol className="parking-to">/140</CCol>
                    </CRow>
                  </Link>
                  <Link
                    to="/chargestation?tab=1"
                    style={{ textDecoration: "none" }}
                  >
                    <CRow className="parking-box">
                      <CCol xs="9" className="parking-name">
                        B관
                      </CCol>
                      <CCol className="parking-re">8</CCol>
                      <CCol className="parking-to">/140</CCol>
                    </CRow>
                  </Link>
                  <Link
                    to="/chargestation?tab=2"
                    style={{ textDecoration: "none" }}
                  >
                    <CRow className="parking-box">
                      <CCol xs="9" className="parking-name">
                        C관
                      </CCol>
                      <CCol className="parking-re">8</CCol>
                      <CCol className="parking-to">/140</CCol>
                    </CRow>
                  </Link>
                </CCol>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </>
    );
  }
}

export default Home;
