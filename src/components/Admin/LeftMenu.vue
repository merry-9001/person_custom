<template>
  <el-aside class="con">
    <el-row class="menu_page">
      <el-col>
        <!-- background-color="#b5b5ab" -->
        <!-- class="el-menu-vertical-demo" -->

        <el-menu background-color="#b5b5ab" text-color="#000" active-text-color="#6b2486">
          <router-link to="/index">
            <el-menu-item index="0">
              <span>首页</span>
            </el-menu-item>
          </router-link>
          <div v-if="flag==2">
            <template v-for="item in items" >
              <!--   -->
              <el-submenu v-if="item.children" :index="item.path" :key="item.path">
                <template slot="title">
                  <i :class="'el-icon-' +item.icon"></i>
                  <span slot="title">{{item.name}}</span>
                </template>
                <router-link v-for="(citem,cindex) in item.children" :to="citem.path" :key="cindex">
                  <el-menu-item :index="citem.path">
                    <span slot="title">{{citem.name}}</span>
                  </el-menu-item>
                </router-link>
              </el-submenu>
            </template>
          </div>
                    <div v-else>
            <template v-for="item in items2" >
              <!--   -->
              <el-submenu v-if="item.children" :index="item.path" :key="item.path">
                <template slot="title">
                  <i :class="'el-icon-' +item.icon"></i>
                  <span slot="title">{{item.name}}</span>
                </template>
                <router-link v-for="(citem,cindex) in item.children" :to="citem.path" :key="cindex">
                  <el-menu-item :index="citem.path">
                    <span slot="title">{{citem.name}}</span>
                  </el-menu-item>
                </router-link>
              </el-submenu>
            </template>
          </div>
        </el-menu>
      </el-col>
    </el-row>
  </el-aside>
</template>

<script>
export default {
  name: "leftMenu",
  data() {
    return {
      items: [
        {
          icon: "user-solid",
          name: "私人订制项目",
          path: "fund",
          children: [
            {
              path: "/admin/PersonCustom",
              name: "项目管理"
            },
            {
              path: "/admin/Order",
              name: "订单管理"
            }
          ]
        },
        // {
        //   icon: "s-order",
        //   name: "账号租赁",
        //   path: "info",
        //   children: [
        //     {
        //       path: "/admin/PersonCustom/2",
        //       name: "个人信息"
        //     }
        //   ]
        // },
        // {
        //   icon: "s-platform",
        //   name: "提问回答",
        //   path: "info1",
        //   children: [
        //     {
        //       path: "infoshow1",
        //       name: "个人信息"
        //     }
        //   ]
        // },
        {
          icon: "s-tools",
          name: "用户管理",
          path: "info2",
          children: [
            {
              path: "user",
              name: "会员信息"
            },
            {
              path: "apply",
              name: "资质审核"
            }
          ]
        }
      ],
        items2: [
        {
          icon: "s-platform",
          name: "提问回答",
          path: "info1",
          children: [
            {
              path: "question",
              name: "提问中心"
            }
          ]
        },
      ],
      flag:this.$store.state.admin.isAdmin
    };
  },
  methods: {}
};
</script>
<style scoped lang="scss">
.menu_page {
  position: fixed;
  width: 180px;
  top: 60px;
  // left: 0;
  // flex:1;
  height: 100%;
  background-color: #b5b5ab;
  // z-index: 99;
}

// .el-menu {
//     border: none;
// }

// .fa-margin {
//     margin-right: 5px;
// }

// .el-menu-vertical-demo:not(.el-menu--collapse) {
//     width: 180px;
//     min-height: 400px;
// }

// .el-menu-vertical-demo {
//     width: 35px;
// }

.el-submenu .el-menu-item {
  min-width: 180px;
}

.hiddenDropdown,
.hiddenDropname {
  display: none;
}

a {
  text-decoration: none;
}
</style>
