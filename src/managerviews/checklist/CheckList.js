import React, { Component } from "react";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CListGroup,
  CListGroupItem,
  CButton,
  CDataTable,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from "@coreui/react";
import usersData from "../home/UsersData";

class CheckList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }

  checkAddBtnClicked = () => {
    this.setState({
      isAddModalOpen: true,
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
    });
  };

  render() {
    return (
      <>
        <CRow>
          <CCol xs="8">
            <CCard>
              <CCardHeader>
                <h4>점검내역</h4>
              </CCardHeader>
              <CCardBody>
                <CCol className="text-right">
                  <CButton
                    active
                    style={{ marginBottom: "10px" }}
                    color="light"
                    aria-pressed="true"
                    onClick={() => this.checkAddBtnClicked()}
                  >
                    점검 추가
                  </CButton>
                </CCol>
                <CDropdown className="text-right">
                  <CCol>
                    <CDropdownToggle
                      color="light"
                      style={{ marginBottom: "10px" }}
                    >
                      전체
                    </CDropdownToggle>
                  </CCol>
                  <CDropdownMenu>
                    <CDropdownItem>1주일</CDropdownItem>
                    <CDropdownItem>1개월</CDropdownItem>
                    <CDropdownItem>2개월</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>
                <CDataTable
                  items={usersData}
                  fields={["제목", "구역", "세부구역", "층", "등록일"]}
                  itemsPerPage={15}
                  pagination
                  hover
                  clickableRows
                  onRowClick={(item, index) => this.rowClicked(item)}
                  scopedSlots={{
                    제목: (item, index) => <td>{item.name}</td>,
                    구역: (item, index) => <td>{item.role}</td>,
                    세부구역: (item, index) => <td>{item.role}</td>,

                    층: (item, index) => <td>{item.role}</td>,
                    등록일: (item, index) => <td>{item.registered}</td>,
                  }}
                />
              </CCardBody>
            </CCard>
          </CCol>
          <CCol xs="4">
            {this.state.selectedItem && (
              <CCard>
                <CCardHeader>
                  <h4>점검 상세 정보</h4>
                </CCardHeader>
                <CCardBody>
                  <CRow>
                    <CCol xs="12">
                      <CListGroup>
                        <CListGroupItem>
                          <CRow>
                            <CCol style={{ color: "#989898" }}>일자</CCol>
                            <CCol className="text-right">
                              {this.state.selectedItem.registered}
                            </CCol>
                          </CRow>
                        </CListGroupItem>
                        <CListGroupItem>
                          <CRow>
                            <CCol style={{ color: "#989898" }}>제목</CCol>
                            <CCol className="text-right">
                              {this.state.selectedItem.name}
                            </CCol>
                          </CRow>
                        </CListGroupItem>
                        <CListGroupItem>
                          <CRow>
                            <CCol style={{ color: "#989898" }}>내용</CCol>
                          </CRow>
                          <CCol>
                            <p>오늘 B-1 구역 점검..</p>
                          </CCol>
                        </CListGroupItem>
                        <CListGroupItem>
                          <CRow>
                            <CCol style={{ color: "#989898" }}>구역</CCol>
                            <CCol className="text-right">
                              {this.state.selectedItem.role}
                            </CCol>
                          </CRow>
                        </CListGroupItem>
                        <CListGroupItem>
                          <CRow>
                            <CCol style={{ color: "#989898" }}>세부구역</CCol>
                            <CCol className="text-right">
                              {this.state.selectedItem.role}
                            </CCol>
                          </CRow>
                        </CListGroupItem>
                        <CListGroupItem>
                          <CRow>
                            <CCol style={{ color: "#989898" }}>층</CCol>
                            <CCol className="text-right">
                              {this.state.selectedItem.role}
                            </CCol>
                          </CRow>
                        </CListGroupItem>
                      </CListGroup>
                    </CCol>
                  </CRow>
                  <CRow>
                    <CCol className="text-right">
                      <CButton
                        active
                        color="light"
                        aria-pressed="true"
                        style={{ margin: 5 }}
                      >
                        삭제하기
                      </CButton>
                      <CButton
                        active
                        color="light"
                        aria-pressed="true"
                        style={{ margin: 5 }}
                      >
                        수정하기
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

export default CheckList;
