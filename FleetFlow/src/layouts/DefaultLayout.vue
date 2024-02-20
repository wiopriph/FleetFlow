<template>
  <a-layout style="min-height: 100vh">
    <a-layout-sider
      v-model:collapsed="collapsed"
      collapsible
    >
      <div class="side-menu">
        <div class="logo" />
        <a-menu
          v-model:selectedKeys="selectedKeys"
          theme="dark"
          mode="inline"
        >
          <a-menu-item key="1">
            <pie-chart-outlined />
            <span>Option 1</span>
          </a-menu-item>
          <a-menu-item key="2">
            <desktop-outlined />
            <span>Option 2</span>
          </a-menu-item>
          <a-sub-menu key="sub1">
            <template #title>
              <span>
                <user-outlined />
                <span>User</span>
              </span>
            </template>
            <a-menu-item key="3">
              Tom
            </a-menu-item>
            <a-menu-item key="4">
              Bill
            </a-menu-item>
            <a-menu-item key="5">
              Alex
            </a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub2">
            <template #title>
              <span>
                <team-outlined />
                <span>Team</span>
              </span>
            </template>
            <a-menu-item key="6">
              Team 1
            </a-menu-item>
            <a-menu-item key="8">
              Team 2
            </a-menu-item>
          </a-sub-menu>
          <a-menu-item key="9">
            <file-outlined />
            <span>File</span>
          </a-menu-item>
        </a-menu>
      </div>
    </a-layout-sider>
    <a-layout>
      <a-layout-header class="header">
        <a-menu
          v-model:selectedKeys="selectedKeys1"
          theme="dark"
          mode="horizontal"
          :style="{ lineHeight: '64px' }"
        >
          <a-menu-item key="1">
            nav 1
          </a-menu-item>
          <a-menu-item key="2">
            nav 2
          </a-menu-item>
          <a-menu-item key="3">
            nav 3
          </a-menu-item>
        </a-menu>
      </a-layout-header>
      <a-layout-content class="main-content-wrapper">
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script lang="ts" setup>
import {
  PieChartOutlined,
  DesktopOutlined,
  UserOutlined,
  TeamOutlined,
  FileOutlined,
} from '@ant-design/icons-vue';
import { ref } from 'vue';

const collapsed = ref<boolean>(false);
const selectedKeys = ref<string[]>(['1']);
const selectedKeys1 = ref<string[]>(['2']);
</script>
<style scoped>
.logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
}

.header {
  padding: 0;
}

.side-menu {
  overflow: auto;
  height: calc(100vh - 50px);
  position: sticky;
  top: 0;
}
</style>
