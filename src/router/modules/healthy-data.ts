// import { $t } from "@/plugins/i18n";
import { healthyData } from "@/router/enums";

export default {
  path: "/healthyData",
  redirect: "/healthyData/index",
  meta: {
    icon: "icon-park:app-switch",
    // showLink: false,
    title: "健康数据管理",
    rank: healthyData
  },
  children: [
    {
      path: "/healthyData/dashboards",
      name: "数据看板",
      component: () => import("@/views/healthy-data/data-dashboards/index.vue"),
      meta: {
        icon: "icon-park:blackboard",
        title: "数据看板"
        // roles: ["common"]
      }
    },
    {
      path: "/healthyData/database",
      name: "健康知识库",
      component: () =>
        import("@/views/healthy-data/knowledge-dataBase/index.vue"),
      meta: {
        icon: "icon-park:data-all",
        title: "健康知识库"
        // roles: ["common"]
      }
    }
  ]
} satisfies RouteConfigsTable;
