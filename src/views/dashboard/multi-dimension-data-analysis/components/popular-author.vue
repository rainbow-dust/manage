<template>
  <a-spin :loading="loading" style="width: 100%">
    <a-card class="general-card" :header-style="{ paddingBottom: '14px' }">
      <template #title> 热门作者 </template>
      <a-table
        :data="tableData.list"
        :pagination="false"
        :bordered="false"
        style="margin-bottom: 20px"
        :scroll="{ x: '100%', y: '350px' }"
      >
        <template #columns>
          <a-table-column :title="'用户'" data-index="user.user">
          </a-table-column>
          <a-table-column
            :title="'作品数'"
            data-index="note_count"
            :sortable="{
              sortDirections: ['ascend', 'descend'],
            }"
          >
          </a-table-column>
          <a-table-column
            :title="'被喜欢'"
            data-index="like_count"
            :sortable="{
              sortDirections: ['ascend', 'descend'],
            }"
          >
          </a-table-column>
        </template>
      </a-table>
    </a-card>
  </a-spin>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import useLoading from '@/hooks/loading';
  import { queryPopularAuthor, PopularAuthorRes } from '@/api/visualization';

  const { loading, setLoading } = useLoading();
  const tableData = ref<PopularAuthorRes>({ list: [] });
  const fetchData = async () => {
    try {
      setLoading(true);
      tableData.value = await queryPopularAuthor();
    } catch (err) {
      // you can report use errorHandler or other
    } finally {
      setLoading(false);
    }
  };
  fetchData();
</script>

<style scoped lang="less">
  .general-card {
    max-height: 425px;
  }
</style>
