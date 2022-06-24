import React, { Component } from "react";
import {
  CCard,
  CCardBody,
  CCol,
  CRow,
  CButton,
  CDataTable,
  CFormGroup,
  CSelect,
} from "@coreui/react";
import usersData from "../home/UsersData";

import "react-datepicker/dist/react-datepicker.css";
import ko from "date-fns/locale/ko";
import DatePicker, { registerLocale } from "react-datepicker";
registerLocale("ko", ko);

class AdChargeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      selectedItem: null,
      startDate: new Date(),
      endDate: new Date(),
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

  searchAddBtnClicked = () => {
    this.setState({
      searchAddPageOpen: true,
      selectedItem: null,
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
              <CFormGroup style={{ marginTop: "20px" }}>
                <CRow style={{ marginLeft: "20px" }}>
                  <CCol xs="2">
                    <CSelect custom name="select" id="select">
                      <option value="0">파트너 선택</option>
                      <option value="1">강원도</option>
                      <option value="2">경기도</option>
                      <option value="3">경상남도</option>
                      <option value="3">경상북도</option>
                    </CSelect>
                  </CCol>
                  <CCol xs="3">
                    <CSelect custom name="select" id="select">
                      <option value="0">충전소 선택</option>
                      <option value="1">수원시</option>
                      <option value="2">화성시</option>
                      <option value="3">광주시</option>
                    </CSelect>
                  </CCol>
                  <CCol xs="2">
                    <CSelect custom name="select" id="select">
                      <option value="0">주차장 선택</option>
                      <option value="1">수원시</option>
                      <option value="2">화성시</option>
                      <option value="3">광주시</option>
                    </CSelect>
                  </CCol>
                  <CCol xs="1">
                    <CSelect custom name="select" id="select">
                      <option value="0">층 선택</option>
                      <option value="1">수원시</option>
                      <option value="2">화성시</option>
                      <option value="3">광주시</option>
                    </CSelect>
                  </CCol>{" "}
                  <CCol xs="2">
                    <CSelect custom name="select" id="select">
                      <option value="0">구역 선택</option>
                      <option value="1">수원시</option>
                      <option value="2">화성시</option>
                      <option value="3">광주시</option>
                    </CSelect>
                  </CCol>
                  <CCol>
                    <CButton
                      active
                      onClick={() => this.searchAddBtnClicked()}
                      color="light"
                      aria-pressed="true"
                    >
                      적용하기
                    </CButton>
                  </CCol>
                </CRow>
              </CFormGroup>
            </CCard>
            {this.state.searchAddPageOpen && (
              <CCard>
                <CCardBody>
                  <CCol xs="12">
                    <h5 style={{ marginBottom: "20px" }}>충전내역</h5>
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
                              style={{ color: "#989898", textAlign: "left" }}
                            >
                              TOTAL 사용시간
                            </CCol>
                            <CCol
                              style={{ fontWeight: "700", textAlign: "right" }}
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
                              style={{ color: "#989898", textAlign: "left" }}
                            >
                              TOTAL 예상비용
                            </CCol>
                            <CCol
                              style={{ fontWeight: "700", textAlign: "right" }}
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
                          충전일: (item, index) => <td>{item.registered}</td>,
                          이름: (item, index) => <td>{item.name}</td>,
                          충전기: (item, index) => <td>{item.role}</td>,
                          시작시간: (item, index) => <td>{item.role}</td>,
                          종료시간: (item, index) => <td>{item.role}</td>,
                          사용시간: (item, index) => <td>{item.registered}</td>,
                        }}
                      />
                    </CCardBody>
                  </CCol>
                </CCardBody>
              </CCard>
            )}
          </CCol>
          <CCol xs="12" sm="12" md="12" lg="12" xl="4">
            {this.state.selectedItem && (
              <CCard>
                <CCardBody>
                  <CRow style={{ marginBottom: "20px" }}>
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
          </CCol>
        </CRow>
      </>
    );
  }
}

export default AdChargeList;

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
