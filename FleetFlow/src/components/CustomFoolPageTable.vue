<template>
  <div class="main-table-root">
    <a-table
      sticky
      :columns="columns"
      :data-source="curData"
      :scroll="{ x: 1500 }"
      :pagination="false"
    >
      <template #bodyCell="{ column }">
        <template v-if="column.key === 'operation'">
          <a>action</a>
        </template>
      </template>
    </a-table>
    <div class="table-pagination">
      <a-pagination
        v-model:current="current"
        v-model:pageSize="pageSize"
        :show-size-changer="false"
        :total="mainData.length"
      />
      <a-select
        v-model:value="pageSize"
        :options="pageSizeOptions"
        placement="topRight"
      />
    </div>
  </div>
</template>
<script lang="ts" setup>
import type { TableColumnsType } from 'ant-design-vue';
import {
  computed,
  ref,
  watch,
  onBeforeMount,
} from 'vue';

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

const props = defineProps({
  tableData: {
    type: Object,
    default: () => ({}),
  },
  paginationData: {
    type: Object,
    default: () => ({}),
  },
});

const mainData = ref<any>([]);

const current = ref<number>(1);
const pageSize = ref<number>(20);
const pageSizeOptions = [
  { value: 10, label: '10 / page' },
  { value: 20, label: '20 / page' },
  { value: 30, label: '30 / page' },
  { value: 50, label: '50 / page' },
];

const start = ref(0);
const end = ref(0);

const curData = computed(() => mainData.value.slice(start.value, end.value));

const getRange = () => {
  const rStart = pageSize.value * (current.value - 1);
  const rEnd = rStart + pageSize.value;

  return {
    rStart,
    rEnd,
  };
};

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

watch(current, () => {
  const { rStart, rEnd } = getRange();

  start.value = rStart;
  end.value = rEnd;
}, { immediate: true });

watch(pageSize, () => {
  if ((pageSize.value * current.value) > mainData.value.length) {
    current.value = Math.ceil(mainData.value.length / pageSize.value);
  }
});
</script>

<style scoped>
.main-table-root {
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: white;
}

.table-pagination {
  position: sticky;
  bottom: 0;
  z-index: 100;
  background: white;
  padding: 16px 0;
  display: flex;
  align-items: center;
  margin-top: auto;
  border-top: 1px solid #f0f0f0;
}
</style>
