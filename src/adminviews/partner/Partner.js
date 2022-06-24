import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  CCard,
  CCardBody,
  CCol,
  CRow,
  CButton,
  CDataTable,
  CInput,
  CFormGroup,
  CModal,
  CModalBody,
  CModalFooter,
  CSelect,
} from "@coreui/react";
import usersData from "../home/UsersData";

class Partner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      selectedItem: null,
    };
  }

  rowClicked = (item) => {
    this.setState({
      selectedItem: item,
    });
  };

  mapAddBtnClicked = () => {
    document.location.href = "#/chargermap";
  };
  listAddBtnClicked = () => {
    document.location.href = "#/chargelist";
  };

  partnerAddBtnClicked = () => {
    document.location.href = "#/partnership";
  };
  groupAddBtnClicked = (tag) => {
    document.location.href = "#/partnerList?tab=" + tag;
  };
  edmemberBtnClicked = () => {
    this.setState({
      iisAddModalOpen: true,
    });
  };

  render() {
    return (
      <>
        <CRow>
          <CCol md="12" lg="12" sm="12" xl="8">
            <CButton
              style={{
                padding: "46px 50px",
                fontSize: "24px",
                background: "#318CFB",
                color: "#fff",
                fontWeight: "700",
                marginBottom: "20px",
                borderRadius: "10px",
              }}
              shape="square"
              size="lg"
              color="#318CFB"
              onClick={() => this.partnerAddBtnClicked()}
            >
              파트너 등록
            </CButton>
            <CFormGroup row>
              <CCol sm="6">
                <CInput placeholder="파트너 검색" />
              </CCol>
              <CButton color="info" className="my-2 my-sm-0" type="submit">
                검색
              </CButton>
            </CFormGroup>
            <CCard>
              <CCardBody>
                <h5 style={{ marginBottom: "20px" }}>파트너 리스트</h5>
                <CDataTable
                  items={usersData}
                  fields={[
                    "파트너",
                    "총 충전기 수",
                    "시/도",
                    "시/군/구",
                    "등록일",
                  ]}
                  itemsPerPage={12}
                  pagination
                  hover
                  onRowClick={(item, index) => this.rowClicked(item)}
                  scopedSlots={{
                    파트너: (item, index) => <td>{item.registered}</td>,
                    "총 충전기 수": (item, index) => <td>{item.name}</td>,
                    "시/도": (item, index) => <td>{item.role}</td>,
                    "시/군/구": (item, index) => <td>{item.registered}</td>,
                    등록일: (item, index) => <td>{item.registered}</td>,
                  }}
                />
              </CCardBody>
            </CCard>
          </CCol>
          <CCol xs="12" sm="12" md="12" lg="12" xl="4">
            {this.state.selectedItem && (
              <CCard>
                <CCardBody>
                  <CRow style={{ marginBottom: "20px" }}>
                    <CCol
                      xs="8"
                      style={{ justifyContent: "center", alignItems: "center" }}
                    >
                      <h5>파트너 상세 정보</h5>
                    </CCol>
                    <CCol xs="4" className="text-right">
                      <CButton
                        color="light"
                        onClick={() => this.edmemberBtnClicked()}
                      >
                        정보변경
                      </CButton>
                    </CCol>
                  </CRow>
                  <CCol xs="12">
                    <table className="table customtable">
                      <tr>
                        <td style={{ color: "#989898", fontSize: "14px" }}>
                          파트너
                        </td>
                        <td style={{ fontSize: "14px" }} className="text-right">
                          {this.state.selectedItem.registered}
                        </td>
                      </tr>
                      <tr>
                        <td style={{ color: "#989898", fontSize: "14px" }}>
                          시/도
                        </td>
                        <td style={{ fontSize: "14px" }} className="text-right">
                          {this.state.selectedItem.name}
                        </td>
                      </tr>
                      <tr>
                        <td style={{ color: "#989898", fontSize: "14px" }}>
                          시/군/구
                        </td>
                        <td style={{ fontSize: "14px" }} className="text-right">
                          {this.state.selectedItem.role}
                        </td>
                      </tr>
                      <tr>
                        <td style={{ color: "#989898", fontSize: "14px" }}>
                          주소
                        </td>
                        <td style={{ fontSize: "14px" }} className="text-right">
                          {this.state.selectedItem.role}
                        </td>
                      </tr>
                      <tr>
                        <td style={{ color: "#989898", fontSize: "14px" }}>
                          전화번호
                        </td>
                        <td style={{ fontSize: "14px" }} className="text-right">
                          {this.state.selectedItem.role}
                        </td>
                      </tr>
                      <tr>
                        <td style={{ color: "#989898", fontSize: "14px" }}>
                          충전기 수
                        </td>
                        <td style={{ fontSize: "14px" }} className="text-right">
                          {this.state.selectedItem.role}
                        </td>
                      </tr>
                      <tr>
                        <td style={{ color: "#989898", fontSize: "14px" }}>
                          소속그룹 수
                        </td>
                        <td style={{ fontSize: "14px" }} className="text-right">
                          {this.state.selectedItem.role}{" "}
                          <CButton
                            active
                            onClick={() => this.groupAddBtnClicked("group")}
                            color="light"
                            aria-pressed="true"
                          >
                            상세보기
                          </CButton>
                        </td>
                      </tr>
                      <tr>
                        <td style={{ color: "#989898", fontSize: "14px" }}>
                          멤버 수
                        </td>
                        <td style={{ fontSize: "14px" }} className="text-right">
                          {this.state.selectedItem.role}{" "}
                          <CButton
                            active
                            onClick={() => this.groupAddBtnClicked("member")}
                            color="light"
                            aria-pressed="true"
                          >
                            상세보기
                          </CButton>
                        </td>
                      </tr>
                      <tr>
                        <td style={{ color: "#989898", fontSize: "14px" }}>
                          등록일
                        </td>
                        <td style={{ fontSize: "14px" }} className="text-right">
                          {this.state.selectedItem.registered}
                        </td>
                      </tr>
                    </table>
                  </CCol>
                  <CCol style={{ marginBottom: "30px" }}>
                    <CRow style={{ marginTop: "50px" }}>
                      <CCol
                        xs="8"
                        style={{
                          justifyContent: "center",
                          alignItems: "center",
                          marginBottom: "10px",
                        }}
                      >
                        <h5>충전소 리스트</h5>
                      </CCol>
                    </CRow>
                    <Link
                      to="/adminchargestation"
                      style={{ textDecoration: "none" }}
                    >
                      <CRow className="parking-box">
                        <CCol xs="9" className="parking-name">
                          논현동아파트A입구
                        </CCol>
                        <CCol className="parking-re">8</CCol>
                        <CCol className="parking-to">/140</CCol>
                      </CRow>
                    </Link>
                    <Link
                      to="/adminchargestation"
                      style={{ textDecoration: "none" }}
                    >
                      <CRow className="parking-box">
                        <CCol xs="9" className="parking-name">
                          논현동아파트A입구
                        </CCol>
                        <CCol className="parking-re">8</CCol>
                        <CCol className="parking-to">/140</CCol>
                      </CRow>
                    </Link>
                    <Link
                      to="/adminchargestation"
                      style={{ textDecoration: "none" }}
                    >
                      <CRow className="parking-box">
                        <CCol xs="9" className="parking-name">
                          논현동아파트A입구
                        </CCol>
                        <CCol className="parking-re">8</CCol>
                        <CCol className="parking-to">/140</CCol>
                      </CRow>
                    </Link>
                  </CCol>
                </CCardBody>
              </CCard>
            )}
          </CCol>
        </CRow>
        <CModal
          centered
          show={this.state.iisAddModalOpen}
          onClose={() => this.setState({ iisAddModalOpen: false })}
        >
          <CModalBody>
            <CRow style={{ marginBottom: "30px" }}>
              <CCol xs="8">
                <h5>파트너 정보 수정</h5>
              </CCol>
            </CRow>
            <CRow style={{ margin: "0px 0px 12px 0px" }}>
              <CCol xs="4">파트너 이름</CCol>
              <CCol xs="8">
                <CInput id="floor" name="floor" />
              </CCol>
            </CRow>
            <CRow style={{ margin: "0px 0px 12px 0px" }}>
              <CCol xs="4">시/도</CCol>
              <CCol xs="8">
                <CSelect custom name="select" id="select">
                  <option value="0">시/도 선택</option>
                  <option value="1">강원도</option>
                  <option value="2">경기도</option>
                  <option value="3">경상남도</option>
                  <option value="3">경상북도</option>
                </CSelect>
              </CCol>
            </CRow>
            <CRow style={{ margin: "0px 0px 12px 0px" }}>
              <CCol xs="4">시/군/구</CCol>
              <CCol xs="8">
                <CSelect custom name="select" id="select">
                  <option value="0">시/군/구 선택</option>
                  <option value="1">수원시</option>
                  <option value="2">화성시</option>
                  <option value="3">광주시</option>
                </CSelect>
              </CCol>
            </CRow>
            <CRow style={{ margin: "0px 0px 12px 0px" }}>
              <CCol xs="4">주소</CCol>
              <CCol xs="8">
                <CInput id="floor" name="floor" />
              </CCol>
            </CRow>
            <CRow style={{ margin: "0px 0px 12px 0px" }}>
              <CCol xs="4">전화번호</CCol>
              <CCol xs="8">
                <CInput id="floor" name="floor" />
              </CCol>
            </CRow>
          </CModalBody>
          <CModalFooter>
            <CButton
              color="light"
              onClick={() => this.setState({ iisAddModalOpen: false })}
            >
              취소
            </CButton>
            <CButton color="info" onClick={() => this.modalConfirmBtnClicked()}>
              수정
            </CButton>
          </CModalFooter>
        </CModal>
      </>
    );
  }
}

export default Partner;
