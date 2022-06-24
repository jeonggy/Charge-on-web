import React from "react";

// 매니저 웹 개발 시작
const Home = React.lazy(() => import("./managerviews/home/Home"));
const ChargeStation = React.lazy(() =>
  import("./managerviews/chargestation/ChargeStation")
);
const ChargerChart = React.lazy(() =>
  import("./managerviews/chargerchart/ChargerChart")
);
const Member = React.lazy(() => import("./managerviews/member/Member"));
const Breakdown = React.lazy(() =>
  import("./managerviews/breakdown/Breakdown")
);
const CheckList = React.lazy(() =>
  import("./managerviews/checklist/CheckList")
);
const Notice = React.lazy(() => import("./managerviews/notice/Notice"));
const Query = React.lazy(() => import("./managerviews/query/Query"));
const ChargerMap = React.lazy(() =>
  import("./managerviews/chargermap/ChargerMap")
);
const MemberShip = React.lazy(() =>
  import("./managerviews/membership/MemberShip")
);
const ChargeList = React.lazy(() =>
  import("./managerviews/chargelist/ChargeList")
);
const StationChargeList = React.lazy(() =>
  import("./managerviews/stationchargelist/StationChargeList")
);

// 어드민 웹 개발 시작
const HomeAdmin = React.lazy(() => import("./adminviews/home/HomeAdmin"));
const Partner = React.lazy(() => import("./adminviews/partner/Partner"));
const AdminChargeStation = React.lazy(() =>
  import("./adminviews/chargestation/AdminChargeStation")
);
const AdminStationChargeList = React.lazy(() =>
  import("./adminviews/stationchargelist/AdminStationChargeList")
);
const PartnerShip = React.lazy(() =>
  import("./adminviews/partnership/PartnerShip")
);
const PartnerList = React.lazy(() =>
  import("./adminviews/partnerlist/PartnerList")
);
const PartnerUser = React.lazy(() =>
  import("./adminviews/partneruser/PartnerUser")
);
const AdminChargeList = React.lazy(() =>
  import("./adminviews/adminchargelist/AdminChargeList")
);
const AdminChargerChart = React.lazy(() =>
  import("./adminviews/chargerchart/AdminChargerChart")
);
const AdChargeList = React.lazy(() =>
  import("./adminviews/adchargelist/AdChargeList")
);
const AdBreakdown = React.lazy(() =>
  import("./adminviews/breakdown/AdBreakdown")
);
const AdNotice = React.lazy(() => import("./adminviews/notice/AdNotice"));
const AdQuery = React.lazy(() => import("./adminviews/query/AdQuery"));

const routes = [
  { path: "/home", name: "Home", component: Home },
  { path: "/chargestation", name: "충전소 관리", component: ChargeStation },
  {
    path: "/chargerchart",
    name: "충전기 사용량 분석",
    component: ChargerChart,
  },
  { path: "/member", name: "멤버쉽 관리", component: Member },
  { path: "/breakdown", name: "고장내역", component: Breakdown },
  { path: "/checklist", name: "점검 사항 관리", component: CheckList },
  { path: "/notice", name: "공지사항 등록", component: Notice },
  { path: "/query", name: "문의내역", component: Query },
  { path: "/chargermap", name: "문의내역", component: ChargerMap },
  { path: "/membership", name: "멤버쉽 등록", component: MemberShip },
  { path: "/chargelist", name: "충전내역", component: ChargeList },
  {
    path: "/stationchargelist",
    name: "주차장 충전내역",
    component: StationChargeList,
  },

  { path: "/homeadmin", name: "HomeAdmin", component: HomeAdmin },
  { path: "/partner", name: "파트너 관리", component: Partner },
  {
    path: "/adminchargestation",
    name: "파트너 구역",
    component: AdminChargeStation,
  },
  {
    path: "/adminstationchargelist",
    name: "파트너 구역 충전내역",
    component: AdminStationChargeList,
  },
  { path: "/partnership", name: "파트너 등록", component: PartnerShip },
  { path: "/partnerlist", name: "파트너 리스트", component: PartnerList },
  { path: "/partneruser", name: "전체 유저 관리", component: PartnerUser },
  { path: "/adminchargelist", name: "충전내역", component: AdminChargeList },
  {
    path: "/adminchargerchart",
    name: "전력 사용량 분석",
    component: AdminChargerChart,
  },
  { path: "/adchargelist", name: "충전내역", component: AdChargeList },
  { path: "/adbreakdown", name: "고장내역", component: AdBreakdown },
  { path: "/adnotice", name: "공지사항", component: AdNotice },
  { path: "/adquery", name: "문의내역", component: AdQuery },
];

export default routes;
