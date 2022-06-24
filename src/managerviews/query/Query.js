import React, { Component } from "react";
import {
  CCard,
  CCardBody,
  CCol,
  CRow,
  CButton,
  CDataTable,
  CTabContent,
  CTabPane,
  CTabs,
  CTextarea,
  CInputFile,
} from "@coreui/react";
import usersData from "../home/UsersData";

class Query extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }

  rowClicked = (item) => {
    this.setState({
      selectedItem: item,
      isAddModalOpen: false,
    });
  };

  breakDownAddBtnClicked = () => {
    this.setState({
      isAddModalOpen: true,
      selectedItem: true,
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
                <CCol style={{ marginBottom: "30px" }}>
                  <h5>문의내역</h5>
                </CCol>
                <CTabs>
                  <CTabContent>
                    <CTabPane>
                      <CCol xs="12">
                        <CDataTable
                          items={usersData}
                          fields={["등록일", "제목"]}
                          itemsPerPage={15}
                          pagination
                          clickableRows
                          hover
                          onRowClick={(item, index) => this.rowClicked(item)}
                          scopedSlots={{
                            등록일: (item, index) => <td>{item.registered}</td>,
                            제목: (item, index) => <td>{item.name}</td>,
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
              <CCard>
                <CCardBody>
                  <CCol xs="8" style={{ marginBottom: "20px" }}>
                    <h5>문의내용</h5>
                  </CCol>
                  <CRow>
                    <CCol xs="12">
                      <table className="table customtable">
                        <tr>
                          <td style={{ color: "#989898", fontSize: "14px" }}>
                            일자
                          </td>
                          <td
                            className="text-right"
                            style={{ color: "#989898", fontSize: "14px" }}
                          >
                            2021.02.01
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
                          궁금한게 있는데..어떻게 사용해야 하는건지 몰라서 문의
                          남깁니다. 궁금한게 있는데..어떻게 사용해야 하는건지
                          몰라서 문의 남깁니다. 궁금한게 있는데..어떻게 사용해야
                          하는건지 몰라서 문의 남깁니다. 궁금한게 있는데..어떻게
                          사용해야하는건지 몰라서 문의 남깁니다. 궁금한게
                          있는데..어떻게 사용해야 하는건지 몰라서 문의 남깁니다.
                        </td>
                      </tr>
                    </CCol>
                  </CRow>
                  <CRow>
                    {this.state.isAddModalOpen == false && (
                      <CCol className="text-right">
                        <CButton
                          active
                          color="info"
                          aria-pressed="true"
                          style={{ margin: 5 }}
                          onClick={() => this.breakDownAddBtnClicked()}
                          style={{ marginTop: "10px" }}
                        >
                          답변하기
                        </CButton>
                      </CCol>
                    )}
                  </CRow>
                </CCardBody>
              </CCard>
            )}
            {this.state.isAddModalOpen && (
              <CCard>
                <CCardBody>
                  <CCol xs="8" style={{ marginBottom: "20px" }}>
                    <h5>문의 답변</h5>
                  </CCol>
                  <CRow>
                    <CCol xs="12">
                      <CCol CCol xs="12">
                        <CTextarea
                          name="textarea-input"
                          id="textarea-input"
                          rows="12"
                          placeholder="답변을 입력해 주세요(필수)"
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
                        답변취소
                      </CButton>
                      <CButton
                        active
                        color="info"
                        aria-pressed="true"
                        style={{ margin: 5 }}
                      >
                        답변등록
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

export default Query;
