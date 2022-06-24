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
} from "@coreui/react";
import usersData from "../home/UsersData";

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

class Member extends Component {
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
    document.location.href = "#/chargelist";
  };

  edmemberBtnClicked = () => {
    this.setState({
      iisAddModalOpen: true,
    });
  };

  render() {
    return (
      <>
        <CCol xs="12">
          <CRow>
            <CCol xs="3" style={{ textAlign: "center" }}>
              <CCard style={{ backgroundColor: "#fff" }}>
                <CCardBody>
                  <div className="text-muted">
                    <span style={{ fontSize: "16px" }}>
                      오늘 가입한 회원 수
                    </span>
                  </div>
                  <strong style={{ fontSize: "46px" }}>24</strong>
                </CCardBody>
              </CCard>
            </CCol>
            <CCol xs="3" style={{ textAlign: "center" }}>
              <CCard style={{ backgroundColor: "#fff" }}>
                <CCardBody>
                  <div className="text-muted">
                    <span style={{ fontSize: "16px" }}>총 회원 수</span>
                  </div>
                  <strong style={{ fontSize: "46px" }}>24</strong>
                </CCardBody>
              </CCard>
            </CCol>
            <CCol xs="3">
              <CCard style={{ backgroundColor: "#318CFB" }}>
                <CCardBody>
                  <CButton
                    block
                    style={{
                      padding: "26px 0px",
                      fontSize: "24px",
                      background: "#318CFB",
                      color: "#fff",
                      fontWeight: "700",
                    }}
                    shape="square"
                    size="lg"
                    color="#318CFB"
                    onClick={() => this.memberAddBtnClicked()}
                  >
                    멤버쉽 등록
                  </CButton>
                </CCardBody>
              </CCard>
            </CCol>
            <CCol xs="3">
              <CCard style={{ backgroundColor: "#318CFB" }}>
                <CCardBody>
                  <CButton
                    block
                    style={{
                      padding: "26px 0px",
                      fontSize: "24px",
                      background: "#318CFB",
                      color: "#fff",
                      fontWeight: "700",
                    }}
                    shape="square"
                    size="lg"
                    color="#318CFB"
                    onClick={() => this.listAddBtnClicked()}
                  >
                    충전내역
                  </CButton>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
        </CCol>

        <CCol xs="12">
          <CFormGroup row>
            <CCol sm="6">
              <CInput placeholder="회원 이름 또는 그룹 검색" />
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
                  "등록일",
                  "이름",
                  "QR코드",
                  "연락처",
                  "중분류",
                  "소분류",
                  "최근이용일",
                ]}
                itemsPerPage={10}
                pagination
                hover
                onRowClick={(item, index) => this.rowClicked(item)}
                scopedSlots={{
                  등록일: (item, index) => <td>{item.registered}</td>,
                  이름: (item, index) => <td>{item.registered}</td>,
                  QR코드: (item, index) => <td>{item.name}</td>,
                  연락처: (item, index) => <td>{item.role}</td>,
                  중분류: (item, index) => <td>{item.registered}</td>,
                  소분류: (item, index) => <td>{item.registered}</td>,
                  최근이용일: (item, index) => <td>{item.registered}</td>,
                }}
              />
            </CCardBody>
          </CCard>
        </CCol>

        {this.state.selectedItem && (
          <CModal centered show={this.state.selectedItem}>
            <CModalBody>
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
                  <CButton
                    color="light"
                    onClick={() => this.setState({ selectedItem: false })}
                  >
                    닫기
                  </CButton>
                </CCol>
              </CRow>
              <table className="table customtable">
                <tr>
                  <td style={{ color: "#989898", fontSize: "14px" }}>이름</td>
                  <td style={{ fontSize: "14px" }} className="text-right">
                    {this.state.selectedItem.registered}
                  </td>
                </tr>

                <tr>
                  <td style={{ color: "#989898", fontSize: "14px" }}>아이디</td>
                  <td style={{ fontSize: "14px" }} className="text-right">
                    {this.state.selectedItem.name}
                  </td>
                </tr>

                <tr>
                  <td style={{ color: "#989898", fontSize: "14px" }}>휴대폰</td>
                  <td style={{ fontSize: "14px" }} className="text-right">
                    {this.state.selectedItem.role}
                  </td>
                </tr>

                <tr>
                  <td style={{ color: "#989898", fontSize: "14px" }}>대분류</td>
                  <td style={{ fontSize: "14px" }} className="text-right">
                    {this.state.selectedItem.role}
                  </td>
                </tr>

                <tr>
                  <td style={{ color: "#989898", fontSize: "14px" }}>중분류</td>
                  <td style={{ fontSize: "14px" }} className="text-right">
                    {this.state.selectedItem.role}
                  </td>
                </tr>

                <tr>
                  <td style={{ color: "#989898", fontSize: "14px" }}>소분류</td>
                  <td style={{ fontSize: "14px" }} className="text-right">
                    {this.state.selectedItem.role}
                  </td>
                </tr>

                <tr>
                  <td style={{ color: "#989898", fontSize: "14px" }}>가입일</td>
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
            </CModalBody>
          </CModal>
        )}
        <CModal
          centered
          show={this.state.iisAddModalOpen}
          onClose={() => this.setState({ iisAddModalOpen: false })}
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
            <CCol className="justify-content-flex-start">
              <CButton color="light">멤버쉽 해제</CButton>
            </CCol>
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

export default Member;
