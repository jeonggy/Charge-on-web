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

class StationChargeList extends Component {
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

    const sortValue = urlParams.get("tab");
    if (sortValue == "0") {
      this.setState({
        tabDefaultValue: 0,
      });
    } else if (sortValue == "1") {
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
                  <span style={{ color: "#989898" }}>지상A / B1 -</span>
                  <span style={{ color: "#318CFB" }}> B1-A</span>
                </h2>
              </CRow>
            </CCard>
            <CCard>
              <CCardBody>
                <CTabs>
                  <CNav variant="tabs">
                    <CNavItem>
                      <CNavLink
                        active={!this.state.tabDefaultValue}
                        onClick={() => this.setState({ tabDefaultValue: 0 })}
                      >
                        충전내역
                      </CNavLink>
                    </CNavItem>
                    <CNavItem>
                      <CNavLink
                        active={this.state.tabDefaultValue}
                        onClick={() => this.setState({ tabDefaultValue: 1 })}
                      >
                        충전기 리스트
                      </CNavLink>
                    </CNavItem>
                  </CNav>
                  <CTabContent>
                    <CTabPane active={!this.state.tabDefaultValue}>
                      <CCol xs="12">
                        <CRow style={{ marginTop: "10px" }}>
                          <CCol></CCol>

                          <CCol xs="3" className="text-right">
                            <CInput placeholder="회원이름 입력" />
                          </CCol>
                          <CButton
                            style={{ marginRight: "30px" }}
                            color="info"
                            className="my-2 my-sm-0"
                            type="submit"
                          >
                            확인
                          </CButton>
                        </CRow>
                        <CRow>
                          <CCol style={{ maxWidth: 220 }}>
                            <p
                              style={{
                                color: "#989898",
                                textAlign: "center",
                                marginBottom: "4px",
                              }}
                            >
                              시작일
                            </p>
                            <DatePicker
                              customStyles={{ dateInput: { borderWidth: 0 } }}
                              locale="ko" // 달력 한글화
                              selected={new Date(this.state.startDate)} // 날짜 state
                              onChange={(date) => this.setStartDate(date)} // 날짜 설정 콜백 함수
                              customInput={<ExampleCustomInput />}
                              //minDate={new Date()} // 과거 날짜 disable
                              dateFormat="yyyy년 M월 d일 (eee)"
                              popperModifiers={{
                                // 모바일 web 환경에서 화면을 벗어나지 않도록 하는 설정
                                preventOverflow: { enabled: true },
                              }}
                              // popperPlacement="auto" // 화면 중앙에 팝업이 뜨도록
                              dayClassName={(date) =>
                                getDayName(createDate(date)) === "토"
                                  ? "saturday"
                                  : getDayName(createDate(date)) === "일"
                                  ? "sunday"
                                  : undefined
                              }
                            />
                          </CCol>

                          <CCol style={{ maxWidth: 220 }}>
                            <p
                              style={{
                                color: "#989898",
                                textAlign: "center",
                                marginBottom: "4px",
                              }}
                            >
                              종료일
                            </p>
                            <DatePicker
                              customStyles={{ dateInput: { borderWidth: 0 } }}
                              locale="ko" // 달력 한글화
                              selected={new Date(this.state.endDate)} // 날짜 state
                              onChange={(date) => this.setEndDate(date)} // 날짜 설정 콜백 함수
                              customInput={<ExampleCustomInput />}
                              //minDate={new Date()} // 과거 날짜 disable
                              dateFormat="yyyy년 M월 d일 (eee)"
                              popperModifiers={{
                                // 모바일 web 환경에서 화면을 벗어나지 않도록 하는 설정
                                preventOverflow: { enabled: true },
                              }}
                              // popperPlacement="auto" // 화면 중앙에 팝업이 뜨도록
                              dayClassName={(date) =>
                                getDayName(createDate(date)) === "토"
                                  ? "saturday"
                                  : getDayName(createDate(date)) === "일"
                                  ? "sunday"
                                  : undefined
                              }
                            />
                          </CCol>
                        </CRow>
                        <CCardBody>
                          <CRow>
                            <CCol className="text-left">
                              <CButton
                                style={{ marginRight: "10px" }}
                                color="light"
                                className="my-2 my-sm-0"
                                type="submit"
                              >
                                전체
                              </CButton>
                              <CButton
                                style={{ marginRight: "10px" }}
                                color="light"
                                className="my-2 my-sm-0"
                                type="submit"
                              >
                                1주일
                              </CButton>
                              <CButton
                                style={{ marginRight: "10px" }}
                                color="light"
                                className="my-2 my-sm-0"
                                type="submit"
                              >
                                1개월
                              </CButton>
                              <CButton
                                style={{ marginRight: "10px" }}
                                color="light"
                                className="my-2 my-sm-0"
                                type="submit"
                              >
                                2개월
                              </CButton>
                            </CCol>

                            <CCol lg="5" className="text-center">
                              <CRow
                                style={{
                                  justifyContent: "flex-end",
                                  background: "#f8f8f8",
                                  margin: "10px 0px",
                                  padding: "10px",
                                  borderRadius: "30px",
                                }}
                              >
                                <CCol
                                  style={{
                                    color: "#989898",
                                    textAlign: "left",
                                  }}
                                >
                                  TOTAL 사용시간
                                </CCol>
                                <CCol
                                  style={{
                                    fontWeight: "700",
                                    textAlign: "right",
                                  }}
                                >
                                  0분
                                </CCol>
                              </CRow>
                              <CRow
                                style={{
                                  justifyContent: "flex-end",
                                  background: "#f8f8f8",
                                  margin: "0px 0px 10px 0px",
                                  padding: "10px",
                                  borderRadius: "30px",
                                }}
                              >
                                <CCol
                                  style={{
                                    color: "#989898",
                                    textAlign: "left",
                                  }}
                                >
                                  TOTAL 예상비용
                                </CCol>
                                <CCol
                                  style={{
                                    fontWeight: "700",
                                    textAlign: "right",
                                  }}
                                >
                                  0원
                                </CCol>
                              </CRow>
                            </CCol>
                          </CRow>
                          <CDataTable
                            items={usersData}
                            fields={[
                              "충전일",
                              "이름",
                              "충전기",
                              "시작시간",
                              "종료시간",
                              "사용시간",
                            ]}
                            itemsPerPage={15}
                            pagination
                            hover
                            onRowClick={(item, index) => this.rowClicked(item)}
                            clickableRows
                            scopedSlots={{
                              충전일: (item, index) => (
                                <td>{item.registered}</td>
                              ),
                              이름: (item, index) => <td>{item.name}</td>,
                              충전기: (item, index) => <td>{item.role}</td>,
                              시작시간: (item, index) => <td>{item.role}</td>,
                              종료시간: (item, index) => <td>{item.role}</td>,
                              사용시간: (item, index) => (
                                <td>{item.registered}</td>
                              ),
                            }}
                          />
                        </CCardBody>
                      </CCol>
                    </CTabPane>
                    <CTabPane active={this.state.tabDefaultValue}>
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
                            onRowClick={(sitem, index) =>
                              this.rrowClicked(sitem)
                            }
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
                    </CTabPane>
                  </CTabContent>
                </CTabs>
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
                            충전기
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

export default StationChargeList;

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
