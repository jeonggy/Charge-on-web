import React, { Component } from "react";
import {
  CBadge,
  CCard,
  CCardBody,
  CCol,
  CRow,
  CButton,
  CDataTable,
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

import "react-datepicker/dist/react-datepicker.css";
import ko from "date-fns/locale/ko";
import DatePicker, { registerLocale } from "react-datepicker";
registerLocale("ko", ko);

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

class AdminStationChargeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      isAddModalOpen: false,
      selectedItem: null,
      startDate: new Date(),
      endDate: new Date(),
      tabDefaultValue: 0,
    };
  }
  componentDidMount = () => {
    // alert(JSON.stringify(this.props.location))
    const { search } = this.props.location;
    const urlParams = this.queryParse(search);

    const sortValue = urlParams.get("sort");
    if (sortValue == "charge") {
    } else if (sortValue == "device") {
      this.setState({
        tabDefaultValue: 1,
      });
    }
  };
  queryParse = (queryString) => {
    const urlParams = new URLSearchParams(queryString);
    return urlParams;
  };

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
      selectedSitem: null,
    });
  };

  rrowClicked = (sitem) => {
    this.setState({
      selectedItem: null,
      isAddModalOpen: false,
      selectedSitem: sitem,
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
  breakDownAddBtnClicked = () => {
    this.setState({
      piisAddModalOpen: true,
      selectedItem: null,
    });
  };
  cbreakDownAddBtnClicked = () => {
    this.setState({
      ciisAddModalOpen: true,
      selectedItem: null,
    });
  };
  pccloseBtnClicked = () => {
    this.setState({
      piisAddModalOpen: false,
    });
  };
  cpccloseBtnClicked = () => {
    this.setState({
      ciisAddModalOpen: false,
    });
  };

  setStartDate = (date) => {
    this.setState({
      startDate: date,
    });
  };
  setEndDate = (date) => {
    this.setState({
      endDate: date,
    });
  };

  render() {
    return (
      <>
        <CRow>
          <CCol md="12" lg="12" sm="12" xl="8">
            <CCard>
              <CRow>
                <h2 style={{ padding: "12px 0px 8px 32px" }}>
                  <span style={{ color: "#989898" }}>
                    논현동A 아파트단지 / 논현동아파트A입구 / 지상A / B1 -{" "}
                  </span>
                  <span style={{ color: "#318CFB" }}> B1-A</span>
                </h2>
              </CRow>
            </CCard>
            <CCard>
              <CCardBody>
                <CCol>
                  <h5>충전기 리스트</h5>
                </CCol>
                <CCol xs="12">
                  <CCardBody>
                    <CRow>
                      <CCol>
                        <CButton
                          style={{ margin: "6px 4px 6px 0px" }}
                          variant="outline"
                          color="danger"
                        >
                          고장
                        </CButton>
                        <CButton
                          style={{ margin: "6px 4px 7px 0px" }}
                          variant="outline"
                          color="warning"
                        >
                          수리중
                        </CButton>
                        <CButton
                          style={{ margin: "6px 4px 7px 0px" }}
                          variant="outline"
                          color="warning"
                        >
                          점검중
                        </CButton>
                        <CButton
                          style={{ margin: "6px 4px 7px 0px" }}
                          variant="outline"
                          color="info"
                        >
                          대기중
                        </CButton>
                        <CButton
                          style={{ margin: "6px 4px 7px 0px" }}
                          variant="outline"
                          color="secondary"
                        >
                          사용중
                        </CButton>
                        <CButton
                          style={{ margin: "6px 4px 7px 0px" }}
                          variant="outline"
                          color="secondary"
                        >
                          점유중
                        </CButton>
                      </CCol>
                      <CCol className="text-right">
                        <CButton
                          style={{ margin: "6px 4px 6px 0px" }}
                          active
                          color="light"
                          aria-pressed="true"
                          onClick={() => this.breakDownAddBtnClicked()}
                        >
                          고장 추가
                        </CButton>
                        <CButton
                          active
                          style={{ margin: "6px 4px 7px 0px" }}
                          color="light"
                          aria-pressed="true"
                          onClick={() => this.cbreakDownAddBtnClicked()}
                        >
                          충전기 추가
                        </CButton>
                      </CCol>
                    </CRow>
                    <CDataTable
                      items={usersData}
                      fields={["충전기", "상태변경일", "현재상태"]}
                      itemsPerPage={15}
                      pagination
                      hover
                      onRowClick={(sitem, index) => this.rrowClicked(sitem)}
                      clickableRows
                      scopedSlots={{
                        충전기: (sitem, index) => <td>{sitem.name}</td>,
                        상태변경일: (sitem, index) => (
                          <td>{sitem.registered}</td>
                        ),
                        현재상태: (sitem, index) => (
                          <td>
                            <CBadge color={getBadge(sitem.status)}>
                              {sitem.status}
                            </CBadge>
                          </td>
                        ),
                      }}
                    />
                  </CCardBody>
                </CCol>
              </CCardBody>
            </CCard>
          </CCol>

          <CCol xs="12" sm="12" md="12" lg="12" xl="4">
            {this.state.selectedItem && (
              <CCard>
                <CCardBody>
                  <CRow style={{ marginBottom: "10px" }}>
                    <CCol xs="8">
                      <h5>내역 상세 정보</h5>
                    </CCol>
                  </CRow>
                  <CRow>
                    <CCol xs="12">
                      <table className="table customtable">
                        <tr>
                          <td style={{ color: "#989898", fontSize: "14px" }}>
                            이름
                          </td>
                          <td
                            style={{ fontSize: "14px" }}
                            className="text-right"
                          >
                            {this.state.selectedItem.registered}
                          </td>
                        </tr>
                        <tr>
                          <td style={{ color: "#989898", fontSize: "14px" }}>
                            아이디
                          </td>
                          <td
                            style={{ fontSize: "14px" }}
                            className="text-right"
                          >
                            {this.state.selectedItem.registered}
                          </td>
                        </tr>
                        <tr>
                          <td style={{ color: "#989898", fontSize: "14px" }}>
                            대분류
                          </td>
                          <td
                            style={{ fontSize: "14px" }}
                            className="text-right"
                          >
                            {this.state.selectedItem.registered}
                          </td>
                        </tr>
                        <tr>
                          <td style={{ color: "#989898", fontSize: "14px" }}>
                            중분류
                          </td>
                          <td
                            style={{ fontSize: "14px" }}
                            className="text-right"
                          >
                            {this.state.selectedItem.registered}
                          </td>
                        </tr>
                        <tr>
                          <td style={{ color: "#989898", fontSize: "14px" }}>
                            소분류
                          </td>
                          <td
                            style={{ fontSize: "14px" }}
                            className="text-right"
                          >
                            {this.state.selectedItem.registered}
                          </td>
                        </tr>
                        <tr>
                          <td style={{ color: "#989898", fontSize: "14px" }}>
                            충전기
                          </td>
                          <td
                            style={{ fontSize: "14px" }}
                            className="text-right"
                          >
                            {this.state.selectedItem.registered}
                          </td>
                        </tr>
                        <tr>
                          <td style={{ color: "#989898", fontSize: "14px" }}>
                            사용량
                          </td>
                          <td
                            style={{ fontSize: "14px" }}
                            className="text-right"
                          >
                            {this.state.selectedItem.registered}
                          </td>
                        </tr>
                        <tr>
                          <td style={{ color: "#989898", fontSize: "14px" }}>
                            예상 금액
                          </td>
                          <td
                            style={{ fontSize: "14px" }}
                            className="text-right"
                          >
                            {this.state.selectedItem.registered}
                          </td>
                        </tr>
                        <tr>
                          <td style={{ color: "#989898", fontSize: "14px" }}>
                            사용시간
                          </td>
                          <td
                            style={{ fontSize: "14px" }}
                            className="text-right"
                          >
                            {this.state.selectedItem.registered}
                          </td>
                        </tr>
                        <tr>
                          <td style={{ color: "#989898", fontSize: "14px" }}>
                            시작시간
                          </td>
                          <td
                            style={{ fontSize: "14px" }}
                            className="text-right"
                          >
                            {this.state.selectedItem.registered}
                          </td>
                        </tr>
                        <tr>
                          <td style={{ color: "#989898", fontSize: "14px" }}>
                            종료시간
                          </td>
                          <td
                            style={{ fontSize: "14px" }}
                            className="text-right"
                          >
                            {this.state.selectedItem.registered}
                          </td>
                        </tr>
                      </table>
                    </CCol>
                  </CRow>
                </CCardBody>
              </CCard>
            )}
            {this.state.selectedSitem && (
              <CCard id="deleteId">
                <CCardBody>
                  <CRow style={{ marginBottom: "20px" }}>
                    <CCol
                      xs="8"
                      style={{ justifyContent: "center", alignItems: "center" }}
                    >
                      <h5>충전기 상세 정보</h5>
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
                            이름
                          </td>
                          <td class="text-right" style={{ fontSize: "14px" }}>
                            {this.state.selectedSitem.registered}{" "}
                            <CBadge
                              style={{ fontSize: "14px" }}
                              color={getBadge(this.state.selectedSitem.status)}
                            >
                              {" "}
                              {this.state.selectedSitem.status}
                            </CBadge>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ color: "#989898", fontSize: "14px" }}>
                            파트너
                          </td>
                          <td class="text-right" style={{ fontSize: "14px" }}>
                            {this.state.selectedSitem.name}
                            <br />
                            <span style={{ color: "#989898" }}>
                              {this.state.selectedSitem.name},{" "}
                              {this.state.selectedSitem.name},{" "}
                              {this.state.selectedSitem.name}
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
                                      this.state.selectedSitem.status
                                    )}
                                  >
                                    {this.state.selectedSitem.status}
                                  </CBadge>
                                </CCol>
                                <CCol
                                  className="text-right"
                                  style={{ color: "#989898", fontSize: "14px" }}
                                >
                                  20201.02.01
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

          <CModal
            centered
            show={this.state.piisAddModalOpen}
            onClose={() => this.setState({ iisAddModalOpen: false })}
          >
            <CModalBody>
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
            </CModalBody>
            <CModalFooter>
              <CButton color="light" onClick={() => this.pccloseBtnClicked()}>
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
          <CModal centered show={this.state.ciisAddModalOpen}>
            <CModalBody>
              <CRow style={{ marginBottom: "20px" }}>
                <CCol xs="8">
                  <h5>충전기 추가 등록</h5>
                </CCol>
              </CRow>
              <CRow>
                <CCol xs="12">
                  <CRow style={{ margin: "10px 0px 10px 0px" }}>
                    <CCol xs="6" style={{ color: "#989898" }}>
                      충전소
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
                      주차장 구역
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
                    <CCol style={{ color: "#989898" }}>충전기 코드</CCol>
                    <CCol xs="8">
                      <CInput id="floor" name="floor" placeholder="입력" />
                    </CCol>
                  </CRow>
                </CCol>
              </CRow>
            </CModalBody>
            <CModalFooter>
              <CButton color="light" onClick={() => this.cpccloseBtnClicked()}>
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

export default AdminStationChargeList;

const ExampleCustomInput = ({ value, onClick }) => (
  <CButton size="lg" onClick={onClick} className="btn-outline-info">
    {value}
  </CButton>
); // 월/일
const getDayName = (date) => {
  return date.toLocaleDateString("ko-KR", { weekday: "long" }).substr(0, 1);
}; // 날짜 비교시 년 월 일까지만 비교하게끔
const createDate = (date) => {
  return new Date(
    new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0)
  );
};
