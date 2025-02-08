// import { $t } from "@/plugins/i18n";
import { forecast } from "@/router/enums";

export default {
  path: "/forecast",
  redirect: "/forecast/index",
  meta: {
    icon: "icon-park:adobe-illustrate",
    // showLink: false,
    title: "风险预测",
    rank: forecast
  },
  children: [
    {
      path: "/forecast/index",
      name: "风险预测",
      component: () => import("@/views/forecast/index.vue"),
      meta: {
        title: "风险预测"
        // showParent: true
      }
    }
  ]
} satisfies RouteConfigsTable;
