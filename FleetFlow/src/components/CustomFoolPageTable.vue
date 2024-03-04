<template>
  <div class="main-table-root">
    <a-table
      sticky
      :columns="columns"
      :data-source="curData"
      :scroll="scroll"
      :pagination="false"
    >
      <template #bodyCell="bodyCellData">
        <slot name="bodyCell" v-bind="bodyCellData">
          <template v-if="bodyCellData.column.key === 'operation'">
            <a>action</a>
          </template>
        </slot>
      </template>
    </a-table>
    <div class="table-pagination">
      <a-pagination
        v-model:current="currentCounter"
        v-model:pageSize="pageSizeCounter"
        :show-size-changer="false"
        :total="mainData.length"
      />
      <a-select
        v-model:value="pageSizeCounter"
        :options="pagination.options"
        placement="topRight"
      />
    </div>
  </div>
</template>
<script lang="ts" setup>
import {
  computed,
  ref,
  watch,
  defineModel,
} from 'vue';

const props = defineProps({
  dataSource: {
    type: Array,
    default: () => ([]),
  },
  columns: {
    type: Array,
    required: true,
  },
  scroll: {
    type: Object,
    default: null,
  },
  current: {
    type: Number,
    default: 1,
  },
  pageSize: {
    type: Number,
    default: 10,
  },
  pagination: {
    type: Object,
    default: () => ({
      options: [
        { value: 10, label: '10 / page' },
        { value: 20, label: '20 / page' },
        { value: 30, label: '30 / page' },
        { value: 50, label: '50 / page' },
      ],
    }),
  },
});

const currentCounter = defineModel<number>('current', { type: Number, default: 1 });
const pageSizeCounter = defineModel<number>('pageSize', { type: Number, default: 10 });

const start = ref(0);
const end = ref(0);

const mainData = computed(() => props?.dataSource);
const curData = computed(() => mainData.value.slice(start.value, end.value));

const getRange = () => {
  const rStart = pageSizeCounter.value * (currentCounter.value - 1);
  const rEnd = rStart + pageSizeCounter.value;

  return {
    rStart,
    rEnd,
  };
};

watch(currentCounter, () => {
  const { rStart, rEnd } = getRange();

  start.value = rStart;
  end.value = rEnd;
}, { immediate: true });

watch(pageSizeCounter, () => {
  if ((pageSizeCounter.value * currentCounter.value) > mainData.value.length) {
    currentCounter.value = Math.ceil(mainData.value.length / pageSizeCounter.value);
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
