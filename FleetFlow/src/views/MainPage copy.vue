<template>
  <div>
    <label>
      {{ t('language') }}:
      <select v-model="locale">
        <option value="en">
          en
        </option>
        <option value="ja">
          ja
        </option>
      </select>
    </label>
  </div>
  <p>{{ t('hello') }}</p>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n({
  useScope: 'global',
});
</script>
