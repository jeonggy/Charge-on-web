import React, { Component } from "react";
import {
  CCard,
  CCardBody,
  CCol,
  CRow,
  CButton,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CNav,
  CNavItem,
  CNavLink,
  CTabContent,
  CTabPane,
  CTabs,
  CInput,
} from "@coreui/react";
import { CChartBar, CChartLine } from "@coreui/react-chartjs";

class ChargerChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }
  render() {
    return (
      <>
        <CCol xs="12">
          <CCard>
            <CCardBody>
              <CTabs>
                <CNav variant="tabs">
                  <CNavItem>
                    <CNavLink>시간대 별 충전기 사용량</CNavLink>
                  </CNavItem>
                  <CNavItem>
                    <CNavLink>구역 별 충전기 사용량</CNavLink>
                  </CNavItem>
                </CNav>
                <CTabContent>
                  <CTabPane>
                    <CCardBody>
                      <CRow className="text-right">
                        <CCol></CCol>
                        <CCol xs="2">
                          <CInput placeholder="회원이름 입력" />
                        </CCol>
                        <CButton
                          style={{ marginRight: "30px" }}
                          color="info"
                          className="my-2 my-sm-0"
                          type="submit"
                        >
                          확인
                        </CButton>
                      </CRow>
                      <CDropdown
                        className="text-right"
                        style={{ marginTop: "10px" }}
                      >
                        <CCol>
                          <CDropdownToggle
                            color="light"
                            style={{ marginBottom: "10px" }}
                          >
                            오늘
                          </CDropdownToggle>
                        </CCol>
                        <CDropdownMenu>
                          <CDropdownItem>1주</CDropdownItem>
                          <CDropdownItem>2주</CDropdownItem>
                          <CDropdownItem>1달</CDropdownItem>
                          <CDropdownItem>2달</CDropdownItem>
                          <CDropdownItem>전체</CDropdownItem>
                        </CDropdownMenu>
                      </CDropdown>
                      <CChartLine
                        datasets={[
                          {
                            label: "지상A",
                            backgroundColor: "rgba(255,186,0,0.1)",
                            borderColor: "rgba(255,186,0,1)",
                            borderWidth: 2,
                            data: [30, 39, 10, 50, 30, 70, 35],
                          },
                          {
                            label: "지상B",
                            backgroundColor: "rgba(88,164,255,0.1)",
                            borderColor: "rgba(88,164,255,1)",
                            borderWidth: 2,
                            data: [39, 80, 40, 35, 40, 20, 45],
                          },
                          {
                            label: "지하A",
                            backgroundColor: "rgba(114,199,102,0.1)",
                            borderColor: "rgba(114,199,102,1)",
                            borderWidth: 2,
                            data: [30, 20, 70, 15, 20, 40, 35],
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
                  </CTabPane>
                  <CTabPane>
                    <CCardBody>
                      <CRow className="text-right">
                        <CCol></CCol>
                        <CCol xs="2">
                          <CInput placeholder="회원이름 입력" />
                        </CCol>
                        <CButton
                          style={{ marginRight: "30px" }}
                          color="info"
                          className="my-2 my-sm-0"
                          type="submit"
                        >
                          확인
                        </CButton>
                      </CRow>
                      <CDropdown
                        className="text-right"
                        style={{ marginTop: "10px" }}
                      >
                        <CCol>
                          <CDropdownToggle
                            color="light"
                            style={{ marginBottom: "10px" }}
                          >
                            1주
                          </CDropdownToggle>
                        </CCol>
                        <CDropdownMenu>
                          <CDropdownItem>2주</CDropdownItem>
                          <CDropdownItem>1달</CDropdownItem>
                          <CDropdownItem>2달</CDropdownItem>
                          <CDropdownItem>전체</CDropdownItem>
                        </CDropdownMenu>
                      </CDropdown>
                      <CChartBar
                        datasets={[
                          {
                            label: "지상A",
                            backgroundColor: "rgba(255,186,0,0.8)",
                            borderColor: "rgba(255,186,0,1)",
                            borderWidth: 1.6,
                            data: [
                              40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11,
                            ],
                          },
                          {
                            label: "지상B",
                            backgroundColor: "rgba(88,164,255,0.8)",
                            borderColor: "rgba(88,164,255,1)",
                            borderWidth: 1.6,
                            data: [
                              50, 20, 32, 39, 10, 70, 39, 30, 40, 20, 42, 21,
                            ],
                          },
                          {
                            label: "지하A",
                            backgroundColor: "rgba(114,199,102,0.8)",
                            borderColor: "rgba(114,199,102,1)",
                            borderWidth: 1.6,
                            data: [
                              30, 20, 70, 50, 40, 20, 12, 11, 15, 20, 40, 35,
                            ],
                          },
                        ]}
                        labels="months"
                        options={{
                          tooltips: {
                            enabled: true,
                          },
                        }}
                      />
                    </CCardBody>
                  </CTabPane>
                </CTabContent>
              </CTabs>
            </CCardBody>
          </CCard>
        </CCol>
      </>
    );
  }
}

export default ChargerChart;
