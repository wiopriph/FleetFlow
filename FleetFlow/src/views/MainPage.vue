<template>
  <CustomFoolPageTable
    v-model:current="current"
    v-model:page-size="pageSize"
    :scroll="{ x: 1500 }"
    :data-source="mainData"
    :columns="columns"
    :pagination="{
      options: pageSizeOptions,
    }"
  />
</template>
<script lang="ts" setup>
import CustomFoolPageTable from '@/components/CustomFoolPageTable.vue';
import type { TableColumnsType } from 'ant-design-vue';
import { ref, onBeforeMount } from 'vue';

const columns = ref<TableColumnsType>([
  {
    title: 'Full Name',
    width: 100,
    dataIndex: 'name',
    key: 'name',
    fixed: 'left',
  },
  {
    title: 'Age',
    width: 100,
    dataIndex: 'age',
    key: 'age',
    fixed: 'left',
  },
  {
    title: 'Column 1',
    dataIndex: 'address',
    key: '1',
    width: 150,
  },
  {
    title: 'Column 2',
    dataIndex: 'address',
    key: '2',
    width: 150,
  },
  {
    title: 'Column 3',
    dataIndex: 'address',
    key: '3',
    width: 150,
  },
  {
    title: 'Column 4',
    dataIndex: 'address',
    key: '4',
    width: 150,
  },
  {
    title: 'Column 5',
    dataIndex: 'address',
    key: '5',
    width: 150,
  },
  {
    title: 'Column 6',
    dataIndex: 'address',
    key: '6',
    width: 150,
  },
  {
    title: 'Column 7',
    dataIndex: 'address',
    key: '7',
    width: 150,
  },
  { title: 'Column 8', dataIndex: 'address', key: '8' },
  {
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: 100,
  },
]);
const mainData = ref<any>([]);
const current = ref<number>(1);
const pageSize = ref<number>(20);
const pageSizeOptions = [
  { value: 10, label: '10 / page' },
  { value: 20, label: '20 / page' },
  { value: 30, label: '30 / page' },
  { value: 50, label: '50 / page' },
];

onBeforeMount(() => {
  const data: any[] = [];
  for (let i = 0; i < 100; i++) {
    data.push({
      key: i,
      name: `Edrward ${i}`,
      age: 32,
      address: `London Park no. ${i}`,
    });
  }

  mainData.value = data;
});
</script>

<style>
.table-pagination {
  position: sticky;
  bottom: 0;
  z-index: 100;
  background: white;
  padding: 16px 0;
  display: flex;
  align-items: center;
}
</style>
