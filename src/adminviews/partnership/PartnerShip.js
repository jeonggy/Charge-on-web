import React, { Component } from "react";
import {
  CCard,
  CCardBody,
  CCol,
  CRow,
  CButton,
  CInput,
  CInputFile,
  CForm,
  CFormGroup,
  CSelect,
  CLabel,
} from "@coreui/react";

const getBadge = (status) => {
  switch (status) {
    case "Active":
      return "success";
    case "Inactive":
      return "secondary";
    case "Pending":
      return "warning";
    case "Banned":
      return "danger";
    default:
      return "primary";
  }
};
class PartnerShip extends Component {
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
    document.location.href = "#/partner";
  };

  render() {
    return (
      <>
        <CRow>
          <CCol xs="12">
            <CCard>
              <CCardBody>
                <CRow style={{ marginBottom: "20px" }}>
                  <CCol>
                    <h5 style={{ fontWeight: "700", color: "#141414" }}>
                      파트너 등록{" "}
                      <span
                        style={{
                          fontWeight: "400",
                          color: "#989898",
                          fontSize: "12px",
                        }}
                      >
                        (필수 입력)
                      </span>
                    </h5>
                  </CCol>
                </CRow>
                <CForm action="" method="post" style={{ padding: "10px" }}>
                  <CFormGroup row>
                    <CCol
                      xs="3"
                      md="3"
                      lg="2"
                      xl="1"
                      style={{ color: "#989898" }}
                    >
                      <CLabel className="text-right">파트너 이름</CLabel>
                    </CCol>
                    <CCol xs="4">
                      <CInput placeholder="15자 이하로 입력" />
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol
                      xs="3"
                      md="3"
                      lg="2"
                      xl="1"
                      style={{ color: "#989898" }}
                    >
                      <CLabel className="text-right">전화번호</CLabel>
                    </CCol>
                    <CCol xs="4">
                      <CInput placeholder="15자 이하로 입력" />
                    </CCol>
                  </CFormGroup>
                  <CFormGroup style={{ marginTop: "40px" }}>
                    <CRow>
                      <CCol
                        xs="3"
                        md="3"
                        lg="2"
                        xl="1"
                        style={{ color: "#989898" }}
                      >
                        <CLabel className="text-right" htmlFor="select">
                          파트너 주소
                        </CLabel>
                      </CCol>
                      <CCol xs="2">
                        <CSelect custom name="select" id="select">
                          <option value="0">시/도 선택</option>
                          <option value="1">강원도</option>
                          <option value="2">경기도</option>
                          <option value="3">경상남도</option>
                          <option value="3">경상북도</option>
                        </CSelect>
                      </CCol>
                      <CCol xs="2">
                        <CSelect custom name="select" id="select">
                          <option value="0">시/군/구 선택</option>
                          <option value="1">수원시</option>
                          <option value="2">화성시</option>
                          <option value="3">광주시</option>
                        </CSelect>
                      </CCol>
                    </CRow>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol xs="3" md="3" lg="2" xl="1"></CCol>
                    <CCol xs="4">
                      <CInput placeholder="나머지 주소 입력" />
                    </CCol>
                  </CFormGroup>
                </CForm>

                <CRow style={{ marginTop: "60px " }}>
                  <CCol>
                    <h5 style={{ fontWeight: "700", color: "#141414" }}>
                      충전소 등록{" "}
                      <span
                        style={{
                          fontWeight: "400",
                          color: "#989898",
                          fontSize: "12px",
                        }}
                      >
                        (필수 입력)
                      </span>
                    </h5>
                  </CCol>
                </CRow>
                <CForm
                  action=""
                  method="post"
                  style={{
                    marginTop: "10px ",
                    padding: "20px",
                    marginBottom: "20px",
                  }}
                >
                  <CFormGroup row>
                    <CCol
                      xs="3"
                      md="3"
                      lg="2"
                      xl="1"
                      style={{ color: "#989898" }}
                    >
                      <CLabel className="text-right">충전소 이름</CLabel>
                    </CCol>
                    <CCol xs="4">
                      <CInput placeholder="15자 이하로 입력" />
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol
                      xs="3"
                      md="3"
                      lg="2"
                      xl="1"
                      style={{ color: "#989898" }}
                    >
                      <CLabel className="text-right">충전소 주소</CLabel>
                    </CCol>
                    <CCol xs="4">
                      <CInput placeholder="15자 이하로 입력" />
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row style={{ marginTop: "40px" }}>
                    <CCol
                      xs="3"
                      md="3"
                      lg="2"
                      xl="1"
                      style={{ color: "#989898" }}
                    >
                      <CLabel className="text-right">충전소 위도</CLabel>
                    </CCol>
                    <CCol xs="4">
                      <CInput placeholder="15자 이하로 입력" />
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol
                      xs="3"
                      md="3"
                      lg="2"
                      xl="1"
                      style={{ color: "#989898" }}
                    >
                      <CLabel className="text-right">충전소 경도</CLabel>
                    </CCol>
                    <CCol xs="4">
                      <CInput placeholder="15자 이하로 입력" />
                    </CCol>
                  </CFormGroup>
                  <CRow style={{ marginTop: "40px" }}>
                    <CCol
                      xs="3"
                      md="3"
                      lg="2"
                      xl="1"
                      style={{ color: "#989898" }}
                    >
                      <CLabel className="text-right">충전소 썸네일</CLabel>
                    </CCol>
                    <CCol xs="4">
                      <CInputFile
                        id="file-input"
                        name="file-input"
                        accept="image/*"
                      />
                    </CCol>
                  </CRow>
                </CForm>
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
      </>
    );
  }
}

export default PartnerShip;
