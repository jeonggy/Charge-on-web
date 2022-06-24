import React from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CRow,
} from "@coreui/react";

const Login = () => {
  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="5">
            <CCardGroup>
              <CCard className="p-4" style={{ margin: "10px" }}>
                <CCardBody>
                  <CForm>
                    <h1 className="text-center" style={{ color: "#318CFB" }}>
                      Login
                    </h1>
                    <p style={{ color: "#989898" }} className="text-center">
                      Manager
                    </p>
                    <CInputGroup className="mb-2">
                      <CInput type="text" placeholder="아이디" />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInput type="password" placeholder="비밀번호" />
                    </CInputGroup>
                    <CButton
                      color="info"
                      block
                      style={{ padding: "10px 0px 10px 0px" }}
                    >
                      로그인
                    </CButton>
                    <CCol className="text-center" style={{ marginTop: "30px" }}>
                      <CButton style={{ color: "#989898" }} className="px-0">
                        아이디 찾기{" "}
                      </CButton>
                      <CButton style={{ color: "#989898" }} className="px-0">
                        {" "}
                        / 비밀번호 찾기
                      </CButton>
                    </CCol>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Login;
