import React, { Component } from "react";
import {
  CBadge,
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
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CModal,
  CModalBody,
  CModalFooter,
  CInput,
  CInputFile,
  CSelect,
  CLabel,
  CTextarea,
} from "@coreui/react";
import usersData from "../home/UsersData";
import Swal from "sweetalert2";

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

class Breakdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      isAddModalOpen: false,
      selectedItem: null,
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
        Swal.fire("삭제완료", "충전기가 삭제되었습니다.", "success");
      }
    });
  };

  mapAddBtnClicked = () => {
    document.location.href = "#/chargermap";
  };

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

  mmodalConfirmBtnClicked = () => {
    this.setState({
      iisAddModalOpen: true,
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
    this.setState({
      isAddModalOpen: false,
    });
  };

  render() {
    return (
      <>
        <CRow>
          <CCol md="12" lg="12" sm="12" xl="8">
            <CCard>
              <CCardBody>
                <CTabs>
                  <CNav variant="pills">
                    <CNavItem>
                      <CNavLink>고장</CNavLink>
                    </CNavItem>
                    <CNavItem>
                      <CNavLink>수리중</CNavLink>
                    </CNavItem>
                    <CNavItem>
                      <CNavLink>수리완료</CNavLink>
                    </CNavItem>
                  </CNav>
                  <CTabContent>
                    <CTabPane>
                      <CCardBody>
                        <CRow style={{ marginBottom: "14px" }}>
                          <CCol>
                            <CRow className="text-left">
                              <CCol xs="5">
                                <CInput placeholder="회원이름 입력" />
                              </CCol>
                              <CButton
                                color="info"
                                className="my-2 my-sm-0"
                                type="submit"
                              >
                                확인
                              </CButton>
                            </CRow>
                          </CCol>
                          <CCol className="text-right">
                            <CButton
                              active
                              color="light"
                              aria-pressed="true"
                              onClick={() => this.breakDownAddBtnClicked()}
                            >
                              고장 추가
                            </CButton>
                          </CCol>
                        </CRow>
                        <CDataTable
                          items={usersData}
                          fields={[
                            "파트너",
                            "충전소",
                            "충전기",
                            "층",
                            "구역",
                            "상태변경일",
                          ]}
                          itemsPerPage={15}
                          pagination
                          hover
                          onRowClick={(item, index) => this.rowClicked(item)}
                          clickableRows
                          scopedSlots={{
                            파트너: (item, index) => <td>{item.name}</td>,
                            충전소: (item, index) => <td>{item.role}</td>,
                            충전기: (item, index) => <td>{item.role}</td>,
                            층: (item, index) => <td>{item.role}</td>,
                            구역: (item, index) => <td>{item.role}</td>,
                            상태변경일: (item, index) => (
                              <td>{item.registered}</td>
                            ),
                          }}
                        />
                      </CCardBody>
                    </CTabPane>
                    <CTabPane>
                      <CCardBody>
                        <CDataTable
                          items={usersData}
                          fields={[
                            "파트너",
                            "충전소",
                            "충전기",
                            "층",
                            "구역",
                            "상태변경일",
                          ]}
                          itemsPerPage={15}
                          pagination
                          hover
                          onRowClick={(item, index) => this.rowClicked(item)}
                          clickableRows
                          scopedSlots={{
                            파트너: (item, index) => <td>{item.name}</td>,
                            충전소: (item, index) => <td>{item.role}</td>,
                            충전기: (item, index) => <td>{item.role}</td>,
                            층: (item, index) => <td>{item.role}</td>,
                            구역: (item, index) => <td>{item.role}</td>,
                            상태변경일: (item, index) => (
                              <td>{item.registered}</td>
                            ),
                          }}
                        />
                      </CCardBody>
                    </CTabPane>
                    <CTabPane>
                      <CCardBody>
                        <CDropdown
                          className="text-right"
                          style={{ marginBottom: "10px" }}
                        >
                          <CDropdownToggle color="light">전체</CDropdownToggle>
                          <CDropdownMenu>
                            <CDropdownItem>1주일</CDropdownItem>
                            <CDropdownItem>1개월</CDropdownItem>
                            <CDropdownItem>2개월</CDropdownItem>
                          </CDropdownMenu>
                        </CDropdown>
                        <CDataTable
                          items={usersData}
                          fields={[
                            "파트너",
                            "충전소",
                            "충전기",
                            "층",
                            "구역",
                            "상태변경일",
                          ]}
                          itemsPerPage={15}
                          pagination
                          hover
                          onRowClick={(item, index) => this.rowClicked(item)}
                          clickableRows
                          scopedSlots={{
                            파트너: (item, index) => <td>{item.name}</td>,
                            충전소: (item, index) => <td>{item.role}</td>,
                            충전기: (item, index) => <td>{item.role}</td>,
                            층: (item, index) => <td>{item.role}</td>,
                            구역: (item, index) => <td>{item.role}</td>,
                            상태변경일: (item, index) => (
                              <td>{item.registered}</td>
                            ),
                          }}
                        />
                      </CCardBody>
                    </CTabPane>
                  </CTabContent>
                </CTabs>
              </CCardBody>
            </CCard>
          </CCol>
          <CCol xs="12" sm="12" md="12" lg="12" xl="4">
            {this.state.selectedItem && (
              <CCard id="deleteId">
                <CCardBody>
                  <CRow style={{ marginBottom: "20px" }}>
                    <CCol
                      xs="8"
                      style={{ justifyContent: "center", alignItems: "center" }}
                    >
                      <h5>고장 상세 정보</h5>
                    </CCol>
                    <CCol xs="4" className="text-right">
                      <CButton color="light" onClick={(e) => this.deletAlert()}>
                        삭제하기
                      </CButton>
                    </CCol>
                  </CRow>
                  <CRow>
                    <CCol xs="12">
                      <table className="table customtable">
                        <tr>
                          <td
                            xs="3"
                            style={{ color: "#989898", fontSize: "14px" }}
                          >
                            충전기
                          </td>
                          <td class="text-right" style={{ fontSize: "14px" }}>
                            {this.state.selectedItem.registered}{" "}
                            <CBadge
                              style={{ fontSize: "14px" }}
                              color={getBadge(this.state.selectedItem.status)}
                            >
                              {this.state.selectedItem.status}
                            </CBadge>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ color: "#989898", fontSize: "14px" }}>
                            파트너
                          </td>
                          <td class="text-right" style={{ fontSize: "14px" }}>
                            {this.state.selectedItem.name}
                            <br />
                            <span style={{ color: "#989898" }}>
                              {this.state.selectedItem.name},{" "}
                              {this.state.selectedItem.name},{" "}
                              {this.state.selectedItem.name}
                            </span>
                          </td>
                        </tr>
                      </table>
                      <CCol xs="12">
                        <CRow style={{ marginTop: "34px" }}>
                          <CCol style={{ color: "#989898", fontSize: "14px" }}>
                            지난내역
                          </CCol>
                          <CCol className="text-right">
                            <CButton
                              color="light"
                              onClick={() => this.mmodalConfirmBtnClicked()}
                            >
                              추가
                            </CButton>
                          </CCol>
                        </CRow>
                        <CRow>
                          <CCol>
                            <CCard
                              style={{
                                padding: "16px",
                                margin: "8px 0px 0px 0px",
                              }}
                            >
                              <CRow>
                                <CCol>
                                  <CBadge
                                    color={getBadge(
                                      this.state.selectedItem.status
                                    )}
                                  >
                                    {this.state.selectedItem.status}
                                  </CBadge>
                                </CCol>
                                <CCol
                                  className="text-right"
                                  style={{ color: "#989898", fontSize: "14px" }}
                                >
                                  <p>20201.02.01</p>
                                </CCol>
                              </CRow>
                              <p style={{ fontSize: "14px" }}>충전기 고장</p>
                            </CCard>
                          </CCol>
                        </CRow>
                      </CCol>
                    </CCol>
                  </CRow>
                </CCardBody>
              </CCard>
            )}
            {this.state.isAddModalOpen && (
              <CCard>
                <CCardBody>
                  <CRow style={{ marginBottom: "20px" }}>
                    <CCol xs="8">
                      <h5>고장 추가 등록</h5>
                    </CCol>
                  </CRow>
                  <CRow>
                    <CCol xs="12">
                      <CRow style={{ margin: "10px 0px 32px 0px" }}>
                        <CCol xs="3" style={{ color: "#989898" }}>
                          충전기
                        </CCol>

                        <CCol xs="7">
                          <CInput placeholder="충전기 코드 입력(필수)" />
                        </CCol>
                        <CButton
                          color="info"
                          className="my-2 my-sm-0"
                          type="submit"
                        >
                          확인
                        </CButton>
                      </CRow>
                      <CRow style={{ margin: "10px 0px 10px 0px" }}>
                        <CCol xs="6" style={{ color: "#989898" }}>
                          주차장
                        </CCol>
                        <CCol xs="6">
                          <CSelect custom name="ccstation" id="ccstation">
                            <option value="1">지상A</option>
                            <option value="2">지상B</option>
                            <option value="3">지하A</option>
                          </CSelect>
                        </CCol>
                      </CRow>
                      <CRow style={{ margin: "10px 0px 10px 0px" }}>
                        <CCol xs="6" style={{ color: "#989898" }}>
                          구역
                        </CCol>
                        <CCol xs="6">
                          <CSelect custom name="ccstation" id="ccstation">
                            <option value="1">A-1</option>
                            <option value="2">B-1</option>
                            <option value="3">A-2</option>
                          </CSelect>
                        </CCol>
                      </CRow>
                      <CRow style={{ margin: "10px 0px 10px 0px" }}>
                        <CCol style={{ color: "#989898" }}>층</CCol>
                        <CCol xs="6">
                          <CInput id="floor" name="floor" placeholder="입력" />
                        </CCol>
                      </CRow>
                      <CRow style={{ margin: "10px 0px 10px 0px" }}>
                        <CCol style={{ color: "#989898" }}>상태변경일</CCol>
                        <CCol>
                          <CInput id="floor" name="floor" placeholder="입력" />
                        </CCol>
                      </CRow>
                      <CRow style={{ margin: "10px 0px 10px 0px" }}>
                        <CCol xs="2">
                          <CLabel
                            htmlFor="textarea-input"
                            style={{ color: "#989898" }}
                          >
                            내용
                          </CLabel>
                        </CCol>
                        <CCol CCol xs="10">
                          <CTextarea
                            name="textarea-input"
                            id="textarea-input"
                            rows="8"
                            placeholder="고장 내용을 입력해 주세요(필수)"
                          />
                        </CCol>
                      </CRow>
                      <CRow style={{ margin: "10px 0px 10px 0px" }}>
                        <CCol xs="6" style={{ color: "#989898" }}>
                          현재상태
                        </CCol>
                        <CCol xs="6">
                          <CSelect custom name="ccstation" id="ccstation">
                            <option value="1">고장</option>
                            <option value="2">수리중</option>
                            <option value="3">수리완료</option>
                          </CSelect>
                        </CCol>
                      </CRow>
                      <CRow style={{ margin: "10px 0px 10px 0px" }}>
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
                    <CCol className="text-right" style={{ marginTop: "20px" }}>
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

          <CModal
            centered
            show={this.state.iisAddModalOpen}
            onClose={() => this.setState({ iisAddModalOpen: false })}
          >
            <CModalBody>
              <CRow style={{ marginBottom: "20px" }}>
                <CCol xs="8">
                  <h5>충전기 상태변경 추가</h5>
                </CCol>
              </CRow>
              <CCol xs="12">
                <CTextarea
                  name="textarea-input"
                  id="textarea-input"
                  rows="5"
                  placeholder="진행상황 입력"
                />
              </CCol>
              <CCol style={{ marginTop: "10px" }}>
                <CDropdown className="m-1 btn-group">
                  <CDropdownToggle color="light">상태변경 선택</CDropdownToggle>
                  <CDropdownMenu>
                    <CDropdownItem>고장</CDropdownItem>
                    <CDropdownItem>수리중</CDropdownItem>
                    <CDropdownItem>수리완료</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>
              </CCol>
            </CModalBody>
            <CModalFooter>
              <CButton
                color="light"
                onClick={() => this.setState({ iisAddModalOpen: false })}
              >
                취소
              </CButton>
              <CButton
                color="info"
                onClick={() => this.modalConfirmBtnClicked()}
              >
                등록
              </CButton>
            </CModalFooter>
          </CModal>
        </CRow>
      </>
    );
  }
}

export default Breakdown;
