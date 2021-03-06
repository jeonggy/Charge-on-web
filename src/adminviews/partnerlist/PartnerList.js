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
                  <span style={{ color: "#989898" }}>?????????A??????????????? / </span>
                  <span style={{ color: "#318CFB" }}>???????????? ?????????</span>
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
                        ???????????? ?????????
                      </CNavLink>
                    </CNavItem>
                    <CNavItem>
                      <CNavLink
                        active={this.state.tabDefaultValue}
                        onClick={() => this.setState({ tabDefaultValue: 1 })}
                      >
                        ?????? ?????????
                      </CNavLink>
                    </CNavItem>
                  </CNav>
                  <CTabContent>
                    <CTabPane active={!this.state.tabDefaultValue}>
                      <CCol xs="12">
                        <CRow style={{ marginTop: "10px" }}>
                          <CCol></CCol>

                          <CCol xs="3" className="text-right">
                            <CInput placeholder="?????? ??????" />
                          </CCol>
                          <CButton
                            style={{ marginRight: "30px" }}
                            color="info"
                            className="my-2 my-sm-0"
                            type="submit"
                          >
                            ??????
                          </CButton>
                        </CRow>
                        <CCardBody>
                          <CDataTable
                            items={usersData}
                            fields={[
                              "?????????",
                              "?????????",
                              "?????????",
                              "?????????",
                              "?????? ???",
                              "???????????????",
                            ]}
                            itemsPerPage={15}
                            pagination
                            hover
                            onRowClick={(item, index) => this.rowClicked(item)}
                            clickableRows
                            scopedSlots={{
                              ?????????: (item, index) => (
                                <td>{item.registered}</td>
                              ),
                              ?????????: (item, index) => <td>{item.name}</td>,
                              ?????????: (item, index) => <td>{item.role}</td>,
                              ?????????: (item, index) => <td>{item.role}</td>,
                              "?????? ???": (item, index) => <td>{item.role}</td>,
                              ???????????????: (item, index) => (
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
                            <CInput placeholder="?????? ??????" />
                          </CCol>
                          <CButton
                            style={{ marginRight: "30px" }}
                            color="info"
                            className="my-2 my-sm-0"
                            type="submit"
                          >
                            ??????
                          </CButton>
                        </CRow>
                        <CCardBody>
                          <CDataTable
                            items={usersData}
                            fields={[
                              "??????",
                              "?????????",
                              "???????????????",
                              "?????????",
                              "?????????",
                              "?????????",
                            ]}
                            itemsPerPage={15}
                            pagination
                            hover
                            onRowClick={(sitem, index) =>
                              this.rrowClicked(sitem)
                            }
                            clickableRows
                            scopedSlots={{
                              ??????: (sitem, index) => <td>{sitem.name}</td>,
                              ?????????: (sitem, index) => (
                                <td>{sitem.registered}</td>
                              ),
                              ???????????????: (sitem, index) => (
                                <td>{sitem.registered}</td>
                              ),
                              ?????????: (sitem, index) => <td>{sitem.name}</td>,
                              ?????????: (sitem, index) => <td>{sitem.name}</td>,
                              ?????????: (sitem, index) => <td>{sitem.name}</td>,
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
                      <h5>?????? ?????? ??????</h5>
                    </CCol>
                  </CRow>
                  <CRow>
                    <CCol xs="12">
                      <table className="table customtable">
                        <tr>
                          <td style={{ color: "#989898", fontSize: "14px" }}>
                            ?????????
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
                            ?????????
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
                            ?????????
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
                            ?????????
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
                            ????????????
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
                                ????????????
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
                                ????????????
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
                      <h5>?????? ?????? ??????</h5>
                    </CCol>
                    <CCol className="text-right">
                      <CButton
                        active
                        color="light"
                        aria-pressed="true"
                        style={{ margin: 5 }}
                        onClick={() => this.edmemberBtnClicked()}
                      >
                        ????????????
                      </CButton>
                    </CCol>
                  </CRow>
                  <CRow>
                    <CCol xs="12">
                      <table className="table customtable">
                        <tr>
                          <td style={{ color: "#989898", fontSize: "14px" }}>
                            ??????
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
                            ?????????
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
                            ?????????
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
                            ?????????
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
                            ?????????
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
                            ?????????
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
                            ?????????
                          </td>
                          <td
                            style={{ fontSize: "14px" }}
                            className="text-right"
                          >
                            {this.state.selectedSitem.registered}
                          </td>
                        </tr>
                        <tr>
                          <td style={{ fontSize: "14px" }}>????????????</td>
                          <td className="text-right">
                            <CButton
                              active
                              color="light"
                              aria-pressed="true"
                              onClick={() => this.listAddBtnClicked()}
                            >
                              ????????????
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
                  <h5>????????? ???????????? ??????</h5>
                </CCol>
              </CRow>
              <CCol xs="12">
                <CTextarea
                  name="textarea-input"
                  id="textarea-input"
                  rows="5"
                  placeholder="???????????? ??????"
                />
              </CCol>
              <CCol style={{ marginTop: "10px" }}>
                <CDropdown className="m-1 btn-group">
                  <CDropdownToggle color="light">???????????? ??????</CDropdownToggle>
                  <CDropdownMenu>
                    <CDropdownItem>??????</CDropdownItem>
                    <CDropdownItem>?????????</CDropdownItem>
                    <CDropdownItem>????????????</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>
              </CCol>
            </CModalBody>
            <CModalFooter>
              <CButton
                color="light"
                onClick={() => this.setState({ iisAddModalOpen: false })}
              >
                ??????
              </CButton>
              <CButton
                color="info"
                onClick={() => this.modalConfirmBtnClicked()}
              >
                ??????
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
                  <h5>?????? ?????? ??????</h5>
                </CCol>
              </CRow>
              <CRow>
                <CCol xs="12">
                  <CRow style={{ margin: "10px 0px 32px 0px" }}>
                    <CCol xs="3" style={{ color: "#989898" }}>
                      ?????????
                    </CCol>

                    <CCol xs="7">
                      <CInput placeholder="????????? ?????? ??????(??????)" />
                    </CCol>
                    <CButton
                      color="info"
                      className="my-2 my-sm-0"
                      type="submit"
                    >
                      ??????
                    </CButton>
                  </CRow>
                  <CRow style={{ margin: "10px 0px 10px 0px" }}>
                    <CCol xs="6" style={{ color: "#989898" }}>
                      ?????????
                    </CCol>
                    <CCol xs="6">
                      <CSelect custom name="ccstation" id="ccstation">
                        <option value="1">??????A</option>
                        <option value="2">??????B</option>
                        <option value="3">??????A</option>
                      </CSelect>
                    </CCol>
                  </CRow>
                  <CRow style={{ margin: "10px 0px 10px 0px" }}>
                    <CCol xs="6" style={{ color: "#989898" }}>
                      ??????
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
                    <CCol style={{ color: "#989898" }}>???</CCol>
                    <CCol xs="6">
                      <CInput id="floor" name="floor" placeholder="??????" />
                    </CCol>
                  </CRow>
                  <CRow style={{ margin: "10px 0px 10px 0px" }}>
                    <CCol style={{ color: "#989898" }}>???????????????</CCol>
                    <CCol>
                      <CInput id="floor" name="floor" placeholder="??????" />
                    </CCol>
                  </CRow>
                  <CRow style={{ margin: "10px 0px 10px 0px" }}>
                    <CCol xs="2">
                      <CLabel
                        htmlFor="textarea-input"
                        style={{ color: "#989898" }}
                      >
                        ??????
                      </CLabel>
                    </CCol>
                    <CCol CCol xs="10">
                      <CTextarea
                        name="textarea-input"
                        id="textarea-input"
                        rows="8"
                        placeholder="?????? ????????? ????????? ?????????(??????)"
                      />
                    </CCol>
                  </CRow>
                  <CRow style={{ margin: "10px 0px 10px 0px" }}>
                    <CCol xs="6" style={{ color: "#989898" }}>
                      ????????????
                    </CCol>
                    <CCol xs="6">
                      <CSelect custom name="ccstation" id="ccstation">
                        <option value="1">??????</option>
                        <option value="2">?????????</option>
                        <option value="3">????????????</option>
                      </CSelect>
                    </CCol>
                  </CRow>
                  <CRow style={{ margin: "10px 0px 10px 0px" }}>
                    <CCol style={{ color: "#989898" }}>????????? ??????</CCol>
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
                ??????
              </CButton>
              <CButton
                color="info"
                onClick={() => this.modalConfirmBtnClicked()}
              >
                ??????
              </CButton>
            </CModalFooter>
          </CModal>
          <CModal centered show={this.state.ciisAddModalOpen}>
            <CModalBody>
              <CRow style={{ marginBottom: "20px" }}>
                <CCol xs="8">
                  <h5>????????? ?????? ??????</h5>
                </CCol>
              </CRow>
              <CRow>
                <CCol xs="12">
                  <h3>?????? ???????????? ??????????????????.</h3>
                </CCol>
              </CRow>
            </CModalBody>
            <CModalFooter>
              <CButton color="light" onClick={() => this.cpccloseBtnClicked()}>
                ??????
              </CButton>
              <CButton
                color="info"
                onClick={() => this.modalConfirmBtnClicked()}
              >
                ??????
              </CButton>
            </CModalFooter>
          </CModal>
        </CRow>

        {this.state.memberselectedItem && (
          <CModal centered show={this.state.memberselectedItem}>
            <CModalBody>
              <CRow style={{ marginBottom: "20px" }}>
                <CCol>
                  <h5>?????? ?????? ??????</h5>
                </CCol>
                <CCol className="text-right">
                  <CButton
                    color="light"
                    onClick={() => this.setState({ memberselectedItem: false })}
                  >
                    ??????
                  </CButton>
                </CCol>
              </CRow>
              <table className="table customtable">
                <tr>
                  <td style={{ color: "#989898", fontSize: "14px" }}>??????</td>
                  <td style={{ fontSize: "14px" }} className="text-right">
                    {this.state.memberselectedItem.registered}
                  </td>
                </tr>
                <tr>
                  <td style={{ color: "#989898", fontSize: "14px" }}>?????????</td>
                  <td style={{ fontSize: "14px" }} className="text-right">
                    {this.state.memberselectedItem.name}
                  </td>
                </tr>
                <tr>
                  <td style={{ color: "#989898", fontSize: "14px" }}>?????????</td>
                  <td style={{ fontSize: "14px" }} className="text-right">
                    {this.state.memberselectedItem.role}
                  </td>
                </tr>
                <tr>
                  <td style={{ color: "#989898", fontSize: "14px" }}>?????????</td>
                  <td style={{ fontSize: "14px" }} className="text-right">
                    {this.state.memberselectedItem.role}
                  </td>
                </tr>
                <tr>
                  <td style={{ color: "#989898", fontSize: "14px" }}>?????????</td>
                  <td style={{ fontSize: "14px" }} className="text-right">
                    {this.state.memberselectedItem.role}
                  </td>
                </tr>
                <tr>
                  <td style={{ color: "#989898", fontSize: "14px" }}>?????????</td>
                  <td style={{ fontSize: "14px" }} className="text-right">
                    {this.state.memberselectedItem.role}
                  </td>
                </tr>
                <tr>
                  <td style={{ color: "#989898", fontSize: "14px" }}>?????????</td>
                  <td style={{ fontSize: "14px" }} className="text-right">
                    {this.state.memberselectedItem.registered}
                  </td>
                </tr>
                <tr>
                  <td style={{ fontSize: "14px" }}>????????????</td>
                  <td className="text-right">
                    <CButton
                      active
                      color="light"
                      aria-pressed="true"
                      onClick={() => this.listAddBtnClicked()}
                    >
                      ????????????
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
                <h5>?????? ?????? ??????</h5>
              </CCol>
            </CRow>
            <CRow style={{ margin: "0px 0px 12px 0px" }}>
              <CCol xs="4">??????</CCol>
              <CCol xs="8">
                <CInput id="floor" name="floor" />
              </CCol>
            </CRow>
            <CRow style={{ margin: "0px 0px 12px 0px" }}>
              <CCol xs="4">?????????</CCol>
              <CCol xs="8">
                <CInput id="floor" name="floor" />
              </CCol>
            </CRow>
            <CRow style={{ margin: "0px 0px 12px 0px" }}>
              <CCol xs="4">?????????</CCol>
              <CCol xs="8">
                <CInput id="floor" name="floor" />
              </CCol>
            </CRow>
            <CRow style={{ margin: "0px 0px 12px 0px" }}>
              <CCol xs="4">?????????</CCol>
              <CCol xs="8">
                <CInput
                  id="floor"
                  name="floor"
                  placeholder="????????? ?????? ?????? ??????"
                />
              </CCol>
            </CRow>
            <CRow style={{ margin: "0px 0px 12px 0px" }}>
              <CCol xs="4">?????????</CCol>
              <CCol xs="8">
                <CInput id="floor" name="floor" placeholder="?????? ??? ??? ??????" />
              </CCol>
            </CRow>
            <CRow style={{ margin: "0px 0px 12px 0px" }}>
              <CCol xs="4">?????????</CCol>
              <CCol xs="8">
                <CInput id="floor" name="floor" placeholder="?????? ??? ??? ??????" />
              </CCol>
            </CRow>
            <CRow style={{ margin: "0px 0px 12px 0px" }}>
              <CCol xs="4">?????????</CCol>
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
              ??????
            </CButton>
            <CButton color="info" onClick={() => this.modalConfirmBtnClicked()}>
              ??????
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
); // ???/???
const getDayName = (date) => {
  return date.toLocaleDateString("ko-KR", { weekday: "long" }).substr(0, 1);
}; // ?????? ????????? ??? ??? ???????????? ???????????????
const createDate = (date) => {
  return new Date(
    new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0)
  );
};
