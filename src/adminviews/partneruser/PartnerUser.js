import React, { Component } from "react";
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

class PartnerUser extends Component {
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

  memberAddBtnClicked = () => {
    document.location.href = "#/membership";
  };

  mapAddBtnClicked = () => {
    document.location.href = "#/chargermap";
  };
  listAddBtnClicked = () => {
    document.location.href = "#/adminchargelist";
  };
  edmemberBtnClicked = () => {
    this.setState({
      edAddModalOpen: true,
    });
  };

  render() {
    return (
      <>
        <CRow>
          <CCol md="12" lg="12" sm="12" xl="8">
            <CFormGroup row>
              <CCol xs="2">
                <CSelect custom name="select" id="select">
                  <option value="0">선택</option>
                  <option value="1">이름</option>
                  <option value="2">전화번호</option>
                  <option value="3">아이디</option>
                </CSelect>
              </CCol>
              <CCol sm="6">
                <CInput placeholder="회원 이름 / 휴대폰 번호 / 아이디 검색" />
              </CCol>
              <CButton color="info" className="my-2 my-sm-0" type="submit">
                검색
              </CButton>
            </CFormGroup>
            <CCard>
              <CCardBody>
                <h5 style={{ marginBottom: "20px" }}>검색 리스트</h5>
                <CDataTable
                  items={usersData}
                  fields={[
                    "이름",
                    "아이디",
                    "휴대폰",
                    "소속",
                    "최근이용",
                    "가입일",
                  ]}
                  itemsPerPage={15}
                  pagination
                  hover
                  onRowClick={(item, index) => this.rowClicked(item)}
                  scopedSlots={{
                    이름: (item, index) => <td>{item.registered}</td>,
                    아이디: (item, index) => <td>{item.name}</td>,
                    휴대폰: (item, index) => <td>{item.role}</td>,
                    소속: (item, index) => <td>{item.registered}</td>,
                    최근이용: (item, index) => <td>{item.registered}</td>,
                    가입일: (item, index) => <td>{item.registered}</td>,
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
                    <CCol>
                      <h5>멤버 상세 정보</h5>
                    </CCol>
                    <CCol className="text-right">
                      <CButton
                        active
                        color="light"
                        aria-pressed="true"
                        style={{ margin: 5 }}
                        onClick={() => this.edmemberBtnClicked()}
                      >
                        수정하기
                      </CButton>
                    </CCol>
                  </CRow>
                  <table className="table customtable">
                    <tr>
                      <td style={{ color: "#989898", fontSize: "14px" }}>
                        이름
                      </td>
                      <td style={{ fontSize: "14px" }} className="text-right">
                        {this.state.selectedItem.registered}
                      </td>
                    </tr>
                    <tr>
                      <td style={{ color: "#989898", fontSize: "14px" }}>
                        아이디
                      </td>
                      <td style={{ fontSize: "14px" }} className="text-right">
                        {this.state.selectedItem.name}
                      </td>
                    </tr>
                    <tr>
                      <td style={{ color: "#989898", fontSize: "14px" }}>
                        휴대폰
                      </td>
                      <td style={{ fontSize: "14px" }} className="text-right">
                        {this.state.selectedItem.role}
                      </td>
                    </tr>
                    <tr>
                      <td style={{ color: "#989898", fontSize: "14px" }}>
                        대분류
                      </td>
                      <td style={{ fontSize: "14px" }} className="text-right">
                        {this.state.selectedItem.role}
                      </td>
                    </tr>
                    <tr>
                      <td style={{ color: "#989898", fontSize: "14px" }}>
                        중분류
                      </td>
                      <td style={{ fontSize: "14px" }} className="text-right">
                        {this.state.selectedItem.role}
                      </td>
                    </tr>
                    <tr>
                      <td style={{ color: "#989898", fontSize: "14px" }}>
                        소분류
                      </td>
                      <td style={{ fontSize: "14px" }} className="text-right">
                        {this.state.selectedItem.role}
                      </td>
                    </tr>
                    <tr>
                      <td style={{ color: "#989898", fontSize: "14px" }}>
                        가입일
                      </td>
                      <td style={{ fontSize: "14px" }} className="text-right">
                        {this.state.selectedItem.registered}
                      </td>
                    </tr>
                    <tr>
                      <td style={{ fontSize: "14px" }}>충전내역</td>
                      <td className="text-right">
                        <CButton
                          active
                          color="light"
                          aria-pressed="true"
                          onClick={() => this.listAddBtnClicked()}
                        >
                          바로보기
                        </CButton>
                      </td>
                    </tr>
                  </table>
                </CCardBody>
              </CCard>
            )}
          </CCol>
        </CRow>
        <CModal
          centered
          show={this.state.edAddModalOpen}
          onClose={() => this.setState({ edAddModalOpen: false })}
        >
          <CModalBody>
            <CRow style={{ marginBottom: "30px" }}>
              <CCol xs="8">
                <h5>멤버 정보 수정</h5>
              </CCol>
            </CRow>
            <CRow style={{ margin: "0px 0px 12px 0px" }}>
              <CCol xs="4">이름</CCol>
              <CCol xs="8">
                <CInput id="floor" name="floor" />
              </CCol>
            </CRow>
            <CRow style={{ margin: "0px 0px 12px 0px" }}>
              <CCol xs="4">아이디</CCol>
              <CCol xs="8">
                <CInput id="floor" name="floor" />
              </CCol>
            </CRow>
            <CRow style={{ margin: "0px 0px 12px 0px" }}>
              <CCol xs="4">휴대폰</CCol>
              <CCol xs="8">
                <CInput id="floor" name="floor" />
              </CCol>
            </CRow>
            <CRow style={{ margin: "0px 0px 12px 0px" }}>
              <CCol xs="4">대분류</CCol>
              <CCol xs="8">
                <CInput
                  id="floor"
                  name="floor"
                  placeholder="생성할 그룹 이름 입력"
                />
              </CCol>
            </CRow>
            <CRow style={{ margin: "0px 0px 12px 0px" }}>
              <CCol xs="4">중분류</CCol>
              <CCol xs="8">
                <CInput id="floor" name="floor" placeholder="그룹 동 수 입력" />
              </CCol>
            </CRow>
            <CRow style={{ margin: "0px 0px 12px 0px" }}>
              <CCol xs="4">소분류</CCol>
              <CCol xs="8">
                <CInput id="floor" name="floor" placeholder="그룹 호 수 입력" />
              </CCol>
            </CRow>
            <CRow style={{ margin: "0px 0px 12px 0px" }}>
              <CCol xs="4">가입일</CCol>
              <CCol xs="8">
                <CInput id="floor" name="floor" />
              </CCol>
            </CRow>
          </CModalBody>
          <CModalFooter>
            <CButton
              color="light"
              onClick={() => this.setState({ edAddModalOpen: false })}
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

export default PartnerUser;
