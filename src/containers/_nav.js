import React from "react";
import CIcon from "@coreui/icons-react";

const _nav = [
  {
    _tag: "CSidebarNavTitle",
    _children: ["Manager"],
  },
  {
    _tag: "CSidebarNavItem",
    name: "Home",
    to: "/home",
    icon: "cil-home",
  },
  {
    _tag: "CSidebarNavItem",
    name: "충전소 관리",
    to: "/chargestation",
    icon: "cil-input-power",
  },
  {
    _tag: "CSidebarNavItem",
    name: "충전기 사용량 분석",
    to: "/chargerchart",
    icon: "cil-graph",
  },
  {
    _tag: "CSidebarNavItem",
    name: "멤버쉽 관리",
    to: "/member",
    icon: "cil-user",
  },
  {
    _tag: "CSidebarNavItem",
    name: "고장내역",
    to: "/breakdown",
    icon: "cil-notes",
  },
  {
    _tag: "CSidebarNavItem",
    name: "공지사항",
    to: "/notice",
    icon: "cil-paper-plane",
  },
  {
    _tag: "CSidebarNavItem",
    name: "문의내역",
    to: "/query",
    icon: "cil-comment-square",
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["Admin"],
  },
  {
    _tag: "CSidebarNavItem",
    name: "HomeAdmin",
    to: "/homeadmin",
    icon: "cil-home",
  },
  {
    _tag: "CSidebarNavItem",
    name: "파트너 관리",
    to: "/partner",
    icon: "cil-input-power",
  },
  {
    _tag: "CSidebarNavItem",
    name: "전체 유저 관리",
    to: "/partneruser",
    icon: "cil-user",
  },
  {
    _tag: "CSidebarNavItem",
    name: "충전기 사용량 분석",
    to: "/adminchargerchart",
    icon: "cil-graph",
  },
  {
    _tag: "CSidebarNavItem",
    name: "충전내역",
    to: "/adchargelist",
    icon: "cil-notes",
  },
  {
    _tag: "CSidebarNavItem",
    name: "고장내역",
    to: "/adbreakdown",
    icon: "cil-notes",
  },
  {
    _tag: "CSidebarNavItem",
    name: "공지사항",
    to: "/adnotice",
    icon: "cil-paper-plane",
  },
  {
    _tag: "CSidebarNavItem",
    name: "문의내역",
    to: "/adquery",
    icon: "cil-comment-square",
  },
];

export default _nav;
