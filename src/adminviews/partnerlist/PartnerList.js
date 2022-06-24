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

import "react-datepicker/dist/react-datepicker.css";
import ko from "date-fns/locale/ko";
import DatePicker, { registerLocale } from "react-datepicker";
registerLocale("ko", ko);

class PartnerList extends Component {
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
    if (sortValue == "group") {
      this.setState({
        tabDefaultValue: 0,
      });
    } else if (sortValue == "member") {
      this.setState({
        tabDefaultValue: 1,
      });
    }
  };
  queryParse = (queryString) => {
    const urlParams = new URLSearchParams(queryString);
    return urlParams;
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

  listAddBtnClicked = () => {
    document.location.href = "#/adminchargelist";
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

  groupAddBtnClicked = (item) => {
    this.setState({
      piisAddModalOpen: false,
      selectedItem: true,
      memberselectedItem: true,
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
  edmemberBtnClicked = () => {
    this.setState({
      edAddModalOpen: true,
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
                  <span style={{ color: "#989898" }}>논현동A아파트단지 / </span>
                  <span style={{ color: "#318CFB" }}>소속그룹 리스트</span>
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
                        소속그룹 리스트
                      </CNavLink>
                    </CNavItem>
                    <CNavItem>
                      <CNavLink
                        active={this.state.tabDefaultValue}
                        onClick={() => this.setState({ tabDefaultValue: 1 })}
                      >
                        멤버 리스트
                      </CNavLink>
                    </CNavItem>
                  </CNav>
                  <CTabContent>
                    <CTabPane active={!this.state.tabDefaultValue}>
                      <CCol xs="12">
                        <CRow style={{ marginTop: "10px" }}>
                          <CCol></CCol>

                          <CCol xs="3" className="text-right">
                            <CInput placeholder="그룹 검색" />
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
                        <CCardBody>
                          <CDataTable
                            items={usersData}
                            fields={[
                              "등록일",
                              "대분류",
                              "중분류",
                              "소분류",
                              "멤버 수",
                              "최근사용일",
                            ]}
                            itemsPerPage={15}
                            pagination
                            hover
                            onRowClick={(item, index) => this.rowClicked(item)}
                            clickableRows
                            scopedSlots={{
                              등록일: (item, index) => (
                                <td>{item.registered}</td>
                              ),
                              대분류: (item, index) => <td>{item.name}</td>,
                              중분류: (item, index) => <td>{item.role}</td>,
                              소분류: (item, index) => <td>{item.role}</td>,
                              "멤버 수": (item, index) => <td>{item.role}</td>,
                              최근사용일: (item, index) => (
                                <td>{item.registered}</td>
                              ),
                            }}
                          />
                        </CCardBody>
                      </CCol>
                    </CTabPane>
                    <CTabPane active={this.state.tabDefaultValue}>
                      <CCol xs="12">
                        <CRow style={{ marginTop: "10px" }}>
                          <CCol></CCol>

                          <CCol xs="3" className="text-right">
                            <CInput placeholder="회원 검색" />
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
                        <CCardBody>
                          <CDataTable
                            items={usersData}
                            fields={[
                              "이름",
                              "아이디",
                              "휴대폰번호",
                              "중분류",
                              "소분류",
                              "가입일",
                            ]}
                            itemsPerPage={15}
                            pagination
                            hover
                            onRowClick={(sitem, index) =>
                              this.rrowClicked(sitem)
                            }
                            clickableRows
                            scopedSlots={{
                              이름: (sitem, index) => <td>{sitem.name}</td>,
                              아이디: (sitem, index) => (
                                <td>{sitem.registered}</td>
                              ),
                              휴대폰번호: (sitem, index) => (
                                <td>{sitem.registered}</td>
                              ),
                              중분류: (sitem, index) => <td>{sitem.name}</td>,
                              소분류: (sitem, index) => <td>{sitem.name}</td>,
                              가입일: (sitem, index) => <td>{sitem.name}</td>,
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
                            등록일
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
                            소속멤버
                          </td>
                          <td
                            style={{ fontSize: "14px" }}
                            className="text-right"
                          >
                            <CCol>
                              {this.state.selectedItem.registered}{" "}
                              <CButton
                                active
                                onClick={() => this.groupAddBtnClicked()}
                                color="light"
                                aria-pressed="true"
                              >
                                상세보기
                              </CButton>
                            </CCol>
                            <br />
                            <CCol>
                              {this.state.selectedItem.registered}{" "}
                              <CButton
                                active
                                onClick={() => this.groupAddBtnClicked()}
                                color="light"
                                aria-pressed="true"
                              >
                                상세보기
                              </CButton>
                            </CCol>
                          </td>
                        </tr>
                      </table>
                    </CCol>
                  </CRow>
                </CCardBody>
              </CCard>
            )}
            {this.state.selectedSitem && (
              <CCard>
                <CCardBody>
                  <CRow style={{ marginBottom: "20px" }}>
                    <CCol
                      xs="8"
                      style={{ justifyContent: "center", alignItems: "center" }}
                    >
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
                            {this.state.selectedSitem.registered}
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
                            {this.state.selectedSitem.name}
                          </td>
                        </tr>
                        <tr>
                          <td style={{ color: "#989898", fontSize: "14px" }}>
                            휴대폰
                          </td>
                          <td
                            style={{ fontSize: "14px" }}
                            className="text-right"
                          >
                            {this.state.selectedSitem.role}
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
                            {this.state.selectedSitem.role}
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
                            {this.state.selectedSitem.role}
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
                            {this.state.selectedSitem.role}
                          </td>
                        </tr>
                        <tr>
                          <td style={{ color: "#989898", fontSize: "14px" }}>
                            가입일
                          </td>
                          <td
                            style={{ fontSize: "14px" }}
                            className="text-right"
                          >
                            {this.state.selectedSitem.registered}
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
                  <h3>현재 페이지는 준비중입니다.</h3>
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

        {this.state.memberselectedItem && (
          <CModal centered show={this.state.memberselectedItem}>
            <CModalBody>
              <CRow style={{ marginBottom: "20px" }}>
                <CCol>
                  <h5>멤버 상세 정보</h5>
                </CCol>
                <CCol className="text-right">
                  <CButton
                    color="light"
                    onClick={() => this.setState({ memberselectedItem: false })}
                  >
                    닫기
                  </CButton>
                </CCol>
              </CRow>
              <table className="table customtable">
                <tr>
                  <td style={{ color: "#989898", fontSize: "14px" }}>이름</td>
                  <td style={{ fontSize: "14px" }} className="text-right">
                    {this.state.memberselectedItem.registered}
                  </td>
                </tr>
                <tr>
                  <td style={{ color: "#989898", fontSize: "14px" }}>아이디</td>
                  <td style={{ fontSize: "14px" }} className="text-right">
                    {this.state.memberselectedItem.name}
                  </td>
                </tr>
                <tr>
                  <td style={{ color: "#989898", fontSize: "14px" }}>휴대폰</td>
                  <td style={{ fontSize: "14px" }} className="text-right">
                    {this.state.memberselectedItem.role}
                  </td>
                </tr>
                <tr>
                  <td style={{ color: "#989898", fontSize: "14px" }}>대분류</td>
                  <td style={{ fontSize: "14px" }} className="text-right">
                    {this.state.memberselectedItem.role}
                  </td>
                </tr>
                <tr>
                  <td style={{ color: "#989898", fontSize: "14px" }}>중분류</td>
                  <td style={{ fontSize: "14px" }} className="text-right">
                    {this.state.memberselectedItem.role}
                  </td>
                </tr>
                <tr>
                  <td style={{ color: "#989898", fontSize: "14px" }}>소분류</td>
                  <td style={{ fontSize: "14px" }} className="text-right">
                    {this.state.memberselectedItem.role}
                  </td>
                </tr>
                <tr>
                  <td style={{ color: "#989898", fontSize: "14px" }}>가입일</td>
                  <td style={{ fontSize: "14px" }} className="text-right">
                    {this.state.memberselectedItem.registered}
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
          show={this.state.edAddModalOpen}
          onClose={() => this.setState({ edAddModalOpen: false })}
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
            <CButton
              color="light"
              onClick={() => this.setState({ edAddModalOpen: false })}
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

export default PartnerList;

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
