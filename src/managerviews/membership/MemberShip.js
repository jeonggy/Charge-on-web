import React, { Component } from "react";
import {
  CCard,
  CCardBody,
  CCol,
  CRow,
  CButton,
  CModal,
  CModalBody,
  CModalFooter,
  CInput,
  CSelect,
  CTextarea,
} from "@coreui/react";

class MemberShip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      isAddModalOpen: false,
      selectedItem: null,
    };
  }

  breakDownAddBtnClicked = () => {
    this.setState({
      isAddModalOpen: true,
      selectedItem: null,
    });
  };

  modalConfirmBtnClicked = () => {
    this.setState({
      isAddModalOpen: false,
    });
  };

  rowClicked = (item) => {
    this.setState({
      selectedItem: item,
      isAddModalOpen: false,
    });
  };

  closeBtnClicked = () => {
    this.setState({
      selectedItem: null,
    });
  };

  ccloseBtnClicked = () => {
    document.location.href = "#/member";
  };

  memberBtnClicked = () => {
    this.setState({
      iisAddModalOpen: true,
    });
  };

  render() {
    return (
      <>
        <CRow>
          <CCol md="12" lg="12" sm="12" xl="12" xs="12">
            <CCard>
              <CCardBody>
                <CRow style={{ marginBottom: "20px" }}>
                  <CCol>
                    <h5>멤버쉽 등록</h5>
                  </CCol>
                </CRow>
                <CRow style={{ marginTop: "40px" }}>
                  <CCol xs="4" md="2" lg="2" xl="1">
                    QR 코드 입력
                  </CCol>
                  <CCol xs="3" lg="3">
                    <CInput placeholder="회원의 코드 입력(필수)" required />
                  </CCol>
                  <CButton color="info" type="submit">
                    확인
                  </CButton>
                </CRow>

                <CRow style={{ marginTop: "20px" }}>
                  <CCol
                    xs="4"
                    md="2"
                    lg="2"
                    xl="1"
                    style={{ color: "#989898" }}
                  >
                    실명
                  </CCol>
                  <CCol xs="3" lg="3">
                    <CInput placeholder="이름 입력(필수)" required />
                  </CCol>
                </CRow>
                <CRow style={{ marginTop: "42px" }}>
                  <CCol
                    xs="4"
                    md="2"
                    lg="2"
                    xl="1"
                    style={{ color: "#989898" }}
                  >
                    대분류
                  </CCol>
                  <CCol xs="4" lg="4">
                    <CSelect custom name="select" id="select">
                      <option value="0">선택</option>
                      <option value="1">A입구</option>
                      <option value="2">B입구</option>
                      <option value="3">C입구</option>
                    </CSelect>
                  </CCol>
                </CRow>
                <CRow style={{ marginTop: "10px" }}>
                  <CCol
                    xs="4"
                    md="2"
                    lg="2"
                    xl="1"
                    style={{ color: "#989898" }}
                  >
                    중분류
                  </CCol>
                  <CCol xs="4" lg="4">
                    <CSelect custom name="select" id="select">
                      <option value="0">선택</option>
                      <option value="1">101동</option>
                      <option value="2">102동</option>
                      <option value="3">103동</option>
                    </CSelect>
                  </CCol>
                </CRow>
                <CRow style={{ marginBottom: "30px", marginTop: "10px" }}>
                  <CCol
                    xs="4"
                    md="2"
                    lg="2"
                    xl="1"
                    style={{ color: "#989898" }}
                  >
                    소분류
                  </CCol>
                  <CCol xs="4" lg="4">
                    <CSelect custom name="select" id="select">
                      <option value="0">선택</option>
                      <option value="1">101호</option>
                      <option value="2">102호</option>
                      <option value="3">103호</option>
                    </CSelect>
                  </CCol>
                </CRow>
                <CRow style={{ marginBottom: "150px" }}>
                  <CCol
                    xs="4"
                    md="2"
                    lg="2"
                    xl="1"
                    style={{ color: "#989898" }}
                  ></CCol>
                  <CCol xs="5">
                    <CButton
                      onClick={() => this.memberBtnClicked()}
                      active
                      color="info"
                      aria-pressed="true"
                      style={{ margin: 5 }}
                    >
                      + 새그룹 생성하기
                    </CButton>
                  </CCol>
                </CRow>

                <CCol className="text-right">
                  <CButton
                    active
                    color="light"
                    aria-pressed="true"
                    style={{ margin: 5 }}
                    onClick={() => this.ccloseBtnClicked()}
                  >
                    취소하기
                  </CButton>
                  <CButton
                    active
                    color="info"
                    aria-pressed="true"
                    style={{ margin: 5 }}
                  >
                    등록하기
                  </CButton>
                </CCol>
              </CCardBody>
            </CCard>
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
                <h5>새 그룹 생성하기</h5>
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
              <CCol xs="4">설명</CCol>
              <CCol xs="8">
                <CTextarea
                  name="textarea-input"
                  id="textarea-input"
                  rows="5"
                  placeholder="기타 참고 사항"
                />
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
              생성
            </CButton>
          </CModalFooter>
        </CModal>
      </>
    );
  }
}

export default MemberShip;
