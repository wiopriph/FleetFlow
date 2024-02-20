<template>
  <a-table
    class="main-table-root"
    sticky
    :columns="columns"
    :data-source="data"
    :scroll="{ x: 1500 }"
  >
    <template #bodyCell="{ column }">
      <template v-if="column.key === 'operation'">
        <a>action</a>
      </template>
    </template>
  </a-table>
</template>
<script lang="ts" setup>
import type { TableColumnsType } from 'ant-design-vue';
import { computed, ref, unref } from 'vue';

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

const data: any[] = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edrward ${i}`,
    age: 32,
    address: `London Park no. ${i}`,
  });
}

const current1 = ref<number>(1);
const pageSize1 = ref<number>(20);

const pagination = computed(() => ({
  current: unref(current1),
  pageSize: unref(pageSize1),
}));
</script>

<style>
.main-table-root > .ant-table-pagination {
  position: sticky;
  bottom: 0;
  z-index: 100;
  background: white;
  padding: 16px 0;

}
</style>
