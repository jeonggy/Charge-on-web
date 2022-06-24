import React, { Component } from "react";
import {
  CCard,
  CCardBody,
  CCol,
  CRow,
  CButton,
  CNav,
  CNavItem,
  CNavLink,
  CTabContent,
  CTabPane,
  CTabs,
  CModal,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CFormGroup,
  CLabel,
  CSelect,
  CInput,
  CInputFile,
} from "@coreui/react";
import stationData from "../home/stationData";
import Swal from "sweetalert2";

class ChargeStation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      tabDefaultValue: 0,
    };
  }

  componentDidMount = () => {
    // alert(JSON.stringify(this.props.location))
    const { search } = this.props.location;
    const urlParams = this.queryParse(search);

    const sortValue = Number(urlParams.get("tab"));
    this.setState({
      tabDefaultValue: sortValue ? sortValue : 0,
    });
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
        Swal.fire("삭제완료", "구역 삭제가 완료되었습니다.", "success");
      }
    });
  };

  mapAddBtnClicked = () => {
    document.location.href = "#/chargermap";
  };

  rowClicked = (stationItem, areaItem) => {
    //areaItem.id 통신 받은값을 selecteditem
    this.setState({
      selectedStationItem: stationItem,
      selectedAreaItem: areaItem,
    });
  };

  stationareaAddBtnClicked = () => {
    this.setState({
      isAddModalOpen: true,
    });
  };

  edstationareaAddBtnClicked = () => {
    this.setState({
      edisAddModalOpen: true,
    });
  };

  edstationAddBtnClicked = () => {
    this.setState({
      edstationAddModalOpen: true,
    });
  };

  stationAddBtnClicked = () => {
    this.setState({
      stationAddModalOpen: true,
    });
  };

  modalConfirmBtnClicked = () => {
    this.setState({
      isAddModalOpen: false,
    });
  };

  stmodalConfirmBtnClicked = () => {
    this.setState({
      stationAddModalOpen: false,
    });
  };

  stationlistAddBtnClicked = (tag) => {
    document.location.href = "#/stationchargelist?tab=" + tag;
  };

  test = () => {
    var stationData; // 키밸류
    //  stationData.stationList // 키밸류 객체 3개짜리 배열
    //  stationData.stationList[0].floors[1].areaList[2]
  };

  render() {
    return (
      <>
        <CRow>
          <CCol sm="12" md="12" lg="12" xl="9" xs="12">
            <CCard>
              <CCardBody>
                <CTabs>
                  <CNav variant="tabs" className="nav nav-fill">
                    {stationData.stationList.map((item, index) => (
                      <CNavItem>
                        <CNavLink
                          active={this.state.tabDefaultValue == index}
                          onClick={() =>
                            this.setState({ tabDefaultValue: index })
                          }
                        >
                          <CRow style={{ fontWeight: "600", fontSize: "22px" }}>
                            <CCol className="text-left" xs="8">
                              {item.name}
                            </CCol>
                            <CCol className="text-right">
                              <CButton
                                size="sm"
                                active
                                color="light"
                                aria-pressed="true"
                                onClick={() => this.edstationAddBtnClicked()}
                              >
                                편집
                              </CButton>
                            </CCol>
                          </CRow>
                        </CNavLink>
                      </CNavItem>
                    ))}
                    <CNavItem>
                      <CNavLink
                        className="navp"
                        onClick={() => this.stationAddBtnClicked()}
                      >
                        +
                      </CNavLink>
                    </CNavItem>
                  </CNav>
                  <CTabContent>
                    {stationData.stationList.map((stationItem, index) => (
                      <CTabPane show={this.state.tabDefaultValue == index}>
                        <CCol className="text-right">
                          <CButton
                            active
                            style={{ margin: "10px 0px 10px 0px" }}
                            color="light"
                            aria-pressed="true"
                            onClick={() => this.stationareaAddBtnClicked()}
                          >
                            구역 추가
                          </CButton>
                        </CCol>
                        <CCol sm="12">
                          <CRow style={{ margin: 10 }}>
                            <CCol sm="2">
                              <CCol></CCol>
                              <CRow>
                                <CLabel lg="12" xl="6"></CLabel>
                                <CLabel lg="12" xl="6"></CLabel>
                              </CRow>
                            </CCol>
                            <CCol sm="10">
                              <CRow>
                                <CCol xs="12" sm="12" md="12" lg="12" xl="6">
                                  <CRow style={{ paddingTop: "10px" }}>
                                    <CCol></CCol>
                                    <CCol className="status-parking">고장</CCol>
                                    <CCol className="status-parking">
                                      점검중
                                    </CCol>
                                    <CCol className="status-parking">
                                      사용중
                                    </CCol>
                                    <CCol className="status-parking">
                                      사용가능
                                    </CCol>
                                    <CCol></CCol>
                                  </CRow>
                                </CCol>
                              </CRow>
                            </CCol>
                          </CRow>
                        </CCol>
                        <CCol sm="12">
                          {stationItem.floors.map((floorItem, floorIndex) => (
                            <CRow
                              style={{ backgroundColor: "#fff", margin: 10 }}
                            >
                              <CCol sm="2">
                                <CCol
                                  style={{
                                    fontWeight: "700",
                                    fontSize: "20px",
                                    textAlign: "left",
                                    padding: 0,
                                  }}
                                >
                                  {floorItem.floor}
                                </CCol>
                                <CCol>
                                  <CRow>
                                    <CLabel
                                      lg="12"
                                      xl="6"
                                      style={{
                                        color: "#318CFB",
                                        fontWeight: "700",
                                        fontSize: "20px",
                                      }}
                                    >
                                      008{" "}
                                    </CLabel>
                                    <CLabel
                                      lg="12"
                                      xl="6"
                                      style={{ marginTop: "5px" }}
                                    >
                                      /120
                                    </CLabel>
                                  </CRow>
                                </CCol>
                              </CCol>
                              <CCol sm="10">
                                <CRow>
                                  {floorItem.areaList.map(
                                    (areaItem, areaIndex) => (
                                      <CCol
                                        xs="12"
                                        sm="12"
                                        md="12"
                                        lg="12"
                                        xl="6"
                                      >
                                        <CRow
                                          className="hover1"
                                          hover
                                          onClick={() =>
                                            this.rowClicked(
                                              stationItem,
                                              areaItem
                                            )
                                          }
                                          style={{
                                            margin: 5,
                                            padding: "12px 0px 12px 0px",
                                            borderRadius: "8px",
                                          }}
                                        >
                                          <CCol style={{ fontWeight: "700" }}>
                                            {areaItem.area_name}
                                          </CCol>
                                          <CCol
                                            className="text-right"
                                            style={{
                                              color: "red",
                                              fontWeight: "700",
                                            }}
                                          >
                                            {areaItem.breakdown_count}
                                          </CCol>
                                          <CCol
                                            className="text-right"
                                            style={{
                                              color: "orange",
                                              fontWeight: "700",
                                            }}
                                          >
                                            {areaItem.checking_count}
                                          </CCol>
                                          <CCol
                                            className="text-right"
                                            style={{
                                              color: "#7EC757",
                                              fontWeight: "700",
                                            }}
                                          >
                                            {areaItem.checking_count}
                                          </CCol>
                                          <CCol
                                            className="text-right"
                                            style={{
                                              color: "#318CFB",
                                              fontWeight: "700",
                                            }}
                                          >
                                            {areaItem.usable_count}
                                          </CCol>
                                          <CCol>/ {areaItem.total_count}</CCol>
                                        </CRow>
                                      </CCol>
                                    )
                                  )}
                                </CRow>
                              </CCol>
                            </CRow>
                          ))}
                        </CCol>
                      </CTabPane>
                    ))}
                  </CTabContent>
                </CTabs>
              </CCardBody>
            </CCard>
          </CCol>

          <CCol lg="12" sm="12" md="12" xl="3" xs="12">
            {this.state.selectedStationItem && this.state.selectedAreaItem && (
              <CCard id="deleteId">
                <CCardBody>
                  <CRow style={{ marginBottom: "10px" }}>
                    <CCol>
                      <h5
                        style={{
                          paddingTop: "6px",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        구역 상세 정보
                      </h5>
                    </CCol>
                    <CRow>
                      <CCol className="text-right">
                        <CButton
                          onClick={(e) => this.deletAlert()}
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
                          onClick={() => this.edstationareaAddBtnClicked()}
                        >
                          수정하기
                        </CButton>
                      </CCol>
                    </CRow>
                  </CRow>
                  <CRow>
                    <CCol xs="12">
                      <table className="table customtable">
                        <tr>
                          <td
                            xs="2"
                            style={{ color: "#989898", fontSize: "14px" }}
                          >
                            주차장
                          </td>
                          <td
                            className="text-right"
                            style={{ fontSize: "14px" }}
                          >
                            {this.state.selectedStationItem.name}
                          </td>
                        </tr>

                        <tr>
                          <td style={{ color: "#989898", fontSize: "14px" }}>
                            구역
                          </td>
                          <td
                            className="text-right"
                            style={{ fontSize: "14px" }}
                          >
                            {this.state.selectedAreaItem.area_name}
                          </td>
                        </tr>

                        <tr>
                          <td style={{ color: "#989898", fontSize: "14px" }}>
                            충전기 수
                          </td>
                          <td
                            className="text-right"
                            style={{ fontSize: "14px" }}
                          >
                            {this.state.selectedAreaItem.total_count}
                          </td>
                        </tr>

                        <tr>
                          <td style={{ color: "#989898", fontSize: "14px" }}>
                            고장
                          </td>
                          <td
                            className="text-right"
                            style={{ fontSize: "14px" }}
                          >
                            {this.state.selectedAreaItem.breakdown_count}
                          </td>
                        </tr>

                        <tr>
                          <td style={{ color: "#989898", fontSize: "14px" }}>
                            점검중
                          </td>
                          <td
                            className="text-right"
                            style={{ fontSize: "14px" }}
                          >
                            {this.state.selectedAreaItem.checking_count}
                          </td>
                        </tr>
                        <tr>
                          <td style={{ color: "#989898", fontSize: "14px" }}>
                            사용중
                          </td>
                          <td
                            className="text-right"
                            style={{ fontSize: "14px" }}
                          >
                            {this.state.selectedAreaItem.checking_count}
                          </td>
                        </tr>
                        <tr>
                          <td style={{ color: "#989898", fontSize: "14px" }}>
                            사용가능
                          </td>
                          <td
                            className="text-right"
                            style={{ fontSize: "14px" }}
                          >
                            {this.state.selectedAreaItem.checking_count}
                          </td>
                        </tr>

                        <tr>
                          <td style={{ color: "#989898", fontSize: "14px" }}>
                            등록일
                          </td>
                          <td
                            className="text-right"
                            style={{ fontSize: "14px" }}
                          >
                            2021.02.03
                          </td>
                        </tr>
                      </table>

                      <CCol className="text-center">
                        <CButton
                          active
                          color="light"
                          aria-pressed="true"
                          style={{
                            marginTop: "50px",
                            padding: "10px 84px 10px 84px",
                          }}
                          onClick={() => this.stationlistAddBtnClicked(0)}
                        >
                          충전내역
                        </CButton>
                      </CCol>
                      <CCol className="text-center">
                        <CButton
                          active
                          color="light"
                          aria-pressed="true"
                          style={{
                            marginTop: "10px",
                            marginBottom: "30px",
                            padding: "10px 70px 10px 70px",
                          }}
                          onClick={() => this.stationlistAddBtnClicked(1)}
                        >
                          충전기 리스트
                        </CButton>
                      </CCol>
                    </CCol>
                  </CRow>
                </CCardBody>
              </CCard>
            )}
          </CCol>

          <CModal
            centered
            size="lg"
            show={this.state.edisAddModalOpen}
            onClose={() => this.setState({ edisAddModalOpen: false })}
          >
            <CModalBody>
              <CRow style={{ marginBottom: "30px" }}>
                <CCol xs="8">
                  <h5>구역 정보수정</h5>
                </CCol>
              </CRow>
              <CRow style={{ margin: "0px 0px 6px 0px" }}>
                <CCol xs="6">구역 수정할 주차장 선택</CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CSelect custom name="ccstation" id="ccstation">
                      <option value="1">지상A</option>
                      <option value="2">지상B</option>
                      <option value="3">지하A</option>
                    </CSelect>
                  </CFormGroup>
                </CCol>
              </CRow>
              <CRow style={{ margin: "0px 0px 12px 0px" }}>
                <CCol xs="6">층</CCol>
                <CCol xs="6">
                  <CInput id="floor" name="floor" placeholder="입력" />
                </CCol>
              </CRow>
              <CRow style={{ margin: "6px 0px 0px 0px" }}>
                <CCol xs="6">구역이름</CCol>
                <CCol xs="6">
                  <CInput
                    id="station-area"
                    name="station-area"
                    placeholder="2자 이상 입력"
                  />
                </CCol>
              </CRow>
            </CModalBody>
            <CModalFooter>
              <CButton
                color="light"
                onClick={() => this.setState({ edisAddModalOpen: false })}
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
            size=""
            show={this.state.isAddModalOpen}
            onClose={() => this.setState({ isAddModalOpen: false })}
            style={{ borderRadius: "8px" }}
          >
            <CModalBody>
              <CRow style={{ marginBottom: "30px" }}>
                <CCol xs="8">
                  <h5>구역 추가 등록</h5>
                </CCol>
              </CRow>
              <CRow style={{ margin: "0px 0px 6px 0px" }}>
                <CCol xs="6">구역 추가할 주차장 선택</CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CSelect custom name="ccstation" id="ccstation">
                      <option value="1">지상A</option>
                      <option value="2">지상B</option>
                      <option value="3">지하A</option>
                    </CSelect>
                  </CFormGroup>
                </CCol>
              </CRow>
              <CRow style={{ margin: "0px 0px 12px 0px" }}>
                <CCol xs="6">층</CCol>
                <CCol xs="6">
                  <CInput id="floor" name="floor" placeholder="입력" />
                </CCol>
              </CRow>
              <CRow style={{ margin: "6px 0px 0px 0px" }}>
                <CCol xs="6">구역이름</CCol>
                <CCol xs="6">
                  <CInput
                    id="station-area"
                    name="station-area"
                    placeholder="2자 이상 입력"
                  />
                </CCol>
              </CRow>
            </CModalBody>
            <CModalFooter>
              <CButton
                color="light"
                onClick={() => this.setState({ isAddModalOpen: false })}
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
            size="lg"
            show={this.state.stationAddModalOpen}
            onClose={() => this.setState({ stationAddModalOpen: false })}
          >
            <CModalHeader>
              <CModalTitle>주차장 추가 등록</CModalTitle>
            </CModalHeader>
            <CModalBody>
              <CRow style={{ margin: "0px 0px 6px 0px" }}>
                <CCol xs="6">주차장 이름</CCol>
                <CCol xs="6">
                  <CInput
                    id="station-name"
                    name="station-name"
                    placeholder="2자 이상 입력"
                  />
                </CCol>
              </CRow>
              <CRow style={{ margin: "0px 0px 6px 0px" }}>
                <CCol xs="6">주차장 위도</CCol>
                <CCol xs="6">
                  <CInput id="floor" name="floor" />
                </CCol>
              </CRow>
              <CRow style={{ margin: "0px 0px 6px 0px" }}>
                <CCol xs="6">주차장 경도</CCol>
                <CCol xs="6">
                  <CInput id="station-area" name="station-area" />
                </CCol>
              </CRow>
              <CRow style={{ margin: "12px 0px 0px 0px" }}>
                <CCol xs="6">이미지 파일 첨부</CCol>
                <CCol className="text-right">
                  <CInputFile
                    id="file-input"
                    name="file-input"
                    accept="image/*"
                  />
                </CCol>
              </CRow>
            </CModalBody>
            <CModalFooter>
              <CButton
                color="light"
                onClick={() => this.setState({ stationAddModalOpen: false })}
              >
                취소
              </CButton>
              <CButton
                color="info"
                onClick={() => this.stmodalConfirmBtnClicked()}
              >
                등록
              </CButton>
            </CModalFooter>
          </CModal>

          <CModal
            centered
            size="lg"
            show={this.state.edstationAddModalOpen}
            onClose={() => this.setState({ edstationAddModalOpen: false })}
          >
            <CModalHeader>
              <CModalTitle>주차장 정보수정</CModalTitle>
            </CModalHeader>
            <CModalBody>
              <CRow style={{ margin: "0px 0px 6px 0px" }}>
                <CCol xs="6">주차장 이름</CCol>
                <CCol xs="6">
                  <CInput
                    id="station-name"
                    name="station-name"
                    placeholder="2자 이상 입력"
                  />
                </CCol>
              </CRow>
              <CRow style={{ margin: "0px 0px 6px 0px" }}>
                <CCol xs="6">주차장 위도</CCol>
                <CCol xs="6">
                  <CInput id="floor" name="floor" />
                </CCol>
              </CRow>
              <CRow style={{ margin: "0px 0px 6px 0px" }}>
                <CCol xs="6">주차장 경도</CCol>
                <CCol xs="6">
                  <CInput id="station-area" name="station-area" />
                </CCol>
              </CRow>
              <CRow style={{ margin: "12px 0px 0px 0px" }}>
                <CCol xs="6">이미지 파일 첨부</CCol>
                <CCol className="text-right">
                  <CInputFile
                    id="file-input"
                    name="file-input"
                    accept="image/*"
                  />
                </CCol>
              </CRow>
            </CModalBody>
            <CRow>
              <CCol
                className="text-left"
                style={{ margin: "20px 0px 16px 30px" }}
              >
                <CButton
                  color="light"
                  onClick={() => this.setState({ stationAddModalOpen: false })}
                >
                  주차장 삭제
                </CButton>
              </CCol>
              <CCol
                className="text-right"
                style={{ margin: "20px 30px 16px 0px" }}
              >
                <CButton
                  color="light"
                  onClick={() =>
                    this.setState({ edstationAddModalOpen: false })
                  }
                >
                  취소
                </CButton>
                <CButton
                  style={{ marginLeft: "8px" }}
                  color="info"
                  onClick={() => this.stmodalConfirmBtnClicked()}
                >
                  등록
                </CButton>
              </CCol>
            </CRow>
          </CModal>
        </CRow>
      </>
    );
  }
}

export default ChargeStation;
