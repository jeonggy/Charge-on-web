import React, { Component } from "react";
import {
  CCard,
  CCardBody,
  CCol,
  CRow,
  CButton,
  CDataTable,
  CNav,
  CNavItem,
  CNavLink,
  CTabContent,
  CTabPane,
  CTabs,
  CInput,
  CTextarea,
  CInputFile,
} from "@coreui/react";
import usersData from "../home/UsersData";
import Swal from "sweetalert2";

class Notice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }

  deletAlert = (e) => {
    Swal.fire({
      title: "정말 삭제하시겠습니까?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#D5D5D5",
      cancelButtonColor: "#318CFB",
      confirmButtonText: "예",
      cancelButtonText: "아니요",
    }).then((result) => {
      if (result.value) {
        document.getElementById("deleteId").remove();
        Swal.fire("삭제완료", "공지사항 삭제가 완료되었습니다.", "success");
      }
    });
  };

  rowClicked = (item) => {
    this.setState({
      selectedItem: item,
      isAddModalOpen: false,
      selectedSitem: null,
    });
  };

  rrowClicked = (sitem) => {
    this.setState({
      selectedSitem: sitem,
      isAddModalOpen: false,
      selectedItem: null,
    });
  };

  breakDownAddBtnClicked = () => {
    this.setState({
      isAddModalOpen: true,
      selectedItem: null,
      selectedSitem: null,
    });
  };

  ccloseBtnClicked = () => {
    this.setState({
      isAddModalOpen: false,
    });
  };

  render() {
    return (
      <>
        <CRow>
          <CCol xs="12" sm="12" md="12" lg="12" xl="4">
            <CCard>
              <CCardBody>
                <CCol>
                  <CButton
                    block
                    size="lg"
                    color="info"
                    style={{
                      marginBottom: "24px",
                      padding: "10px 0px 10px 0px",
                    }}
                    onClick={() => this.breakDownAddBtnClicked()}
                  >
                    충전소 공지사항 등록
                  </CButton>
                </CCol>
                <CTabs>
                  <CNav variant="tabs">
                    <CNavItem>
                      <CNavLink>회원 공지사항</CNavLink>
                    </CNavItem>
                    <CNavItem>
                      <CNavLink>차지온 공지사항</CNavLink>
                    </CNavItem>
                  </CNav>
                  <CTabContent>
                    <CTabPane>
                      <CCol xs="12" style={{ marginTop: "20px" }}>
                        <CDataTable
                          items={usersData}
                          fields={["제목", "등록일"]}
                          itemsPerPage={14}
                          pagination
                          clickableRows
                          hover
                          onRowClick={(item, index) => this.rowClicked(item)}
                          scopedSlots={{
                            제목: (item, index) => <td>{item.name}</td>,
                            등록일: (item, index) => <td>{item.registered}</td>,
                          }}
                        />
                      </CCol>
                    </CTabPane>
                    <CTabPane>
                      <CCol xs="12" style={{ marginTop: "20px" }}>
                        <CDataTable
                          items={usersData}
                          fields={["제목", "등록일"]}
                          itemsPerPage={14}
                          pagination
                          clickableRows
                          hover
                          onRowClick={(sitem, index) => this.rrowClicked(sitem)}
                          scopedSlots={{
                            제목: (item, index) => <td>{item.name}</td>,
                            등록일: (item, index) => <td>{item.registered}</td>,
                          }}
                        />
                      </CCol>
                    </CTabPane>
                  </CTabContent>
                </CTabs>
              </CCardBody>
            </CCard>
          </CCol>
          <CCol md="12" lg="12" sm="12" xl="8">
            {this.state.selectedItem && (
              <CCard id="deleteId">
                <CCardBody>
                  <h5 style={{ marginBottom: "20px" }}>
                    충전소 공지 상세 정보
                  </h5>
                  <CRow>
                    <CCol xs="12">
                      <table className="table customtable">
                        <tr>
                          <td style={{ color: "#989898", fontSize: "14px" }}>
                            일자
                          </td>
                          <td class="text-right" style={{ fontSize: "14px" }}>
                            2021.02.01
                          </td>
                        </tr>
                        <tr>
                          <td style={{ color: "#989898", fontSize: "14px" }}>
                            제목
                          </td>
                          <td class="text-right" style={{ fontSize: "14px" }}>
                            2WJDNF31
                          </td>
                        </tr>
                      </table>
                      <tr>
                        <td
                          style={{
                            fontSize: "14px",
                            padding: "10px 10px 20px 10px",
                          }}
                        >
                          충전기 고장으로 인해 ........
                        </td>
                      </tr>
                    </CCol>
                  </CRow>
                  <CRow>
                    <CCol className="text-right" style={{ marginTop: "10px" }}>
                      <CButton
                        onClick={(e) => this.deletAlert()}
                        active
                        color="light"
                        aria-pressed="true"
                        style={{ margin: 5 }}
                      >
                        삭제하기
                      </CButton>
                    </CCol>
                  </CRow>
                </CCardBody>
              </CCard>
            )}
            {this.state.selectedSitem && (
              <CCard>
                <CCardBody>
                  <h5 style={{ marginBottom: "20px" }}>
                    차지온 공지 상세 정보
                  </h5>
                  <CRow>
                    <CCol xs="12">
                      <table className="table customtable">
                        <tr>
                          <td style={{ color: "#989898", fontSize: "14px" }}>
                            일자
                          </td>
                          <td class="text-right" style={{ fontSize: "14px" }}>
                            2021.02.01
                          </td>
                        </tr>
                        <tr>
                          <td style={{ color: "#989898", fontSize: "14px" }}>
                            제목
                          </td>
                          <td class="text-right" style={{ fontSize: "14px" }}>
                            2WJDNF31
                          </td>
                        </tr>
                      </table>
                      <tr>
                        <td
                          style={{
                            fontSize: "14px",
                            padding: "10px 10px 20px 10px",
                          }}
                        >
                          충전기 고장으로 인해 ........
                        </td>
                      </tr>
                    </CCol>
                  </CRow>
                </CCardBody>
              </CCard>
            )}

            {this.state.isAddModalOpen && (
              <CCard>
                <CCardBody>
                  <CCol xs="8" style={{ marginBottom: "20px" }}>
                    <h5>충전소 공지 상세 정보</h5>
                  </CCol>
                  <CRow>
                    <CCol xs="12">
                      <CCol xs="12" style={{ marginBottom: "12px" }}>
                        <CInput
                          id="text-input"
                          name="text-input"
                          placeholder="제목을 입력해 주세요(필수)"
                        />
                      </CCol>
                      <CCol CCol xs="12">
                        <CTextarea
                          name="textarea-input"
                          id="textarea-input"
                          rows="20"
                          placeholder="내용을 입력해 주세요(필수)"
                        />
                      </CCol>
                      <CRow style={{ margin: "24px 0px 30px 0px" }}>
                        <CCol style={{ color: "#989898" }}>이미지 첨부</CCol>
                        <CCol className="text-right">
                          <CInputFile
                            id="file-input"
                            name="file-input"
                            accept="image/*"
                          />
                        </CCol>
                      </CRow>
                    </CCol>
                  </CRow>
                  <CRow>
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
                  </CRow>
                </CCardBody>
              </CCard>
            )}
          </CCol>
        </CRow>
      </>
    );
  }
}

export default Notice;
