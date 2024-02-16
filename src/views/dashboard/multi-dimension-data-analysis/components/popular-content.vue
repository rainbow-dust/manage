<template>
  <a-spin :loading="loading" style="width: 100%">
    <a-card
      class="general-card"
      :header-style="{ paddingBottom: '0' }"
      :body-style="{ padding: '17px 20px 21px 20px' }"
    >
      <template #title> 热门内容 </template>
      <a-space direction="vertical" :size="10" fill>
        <a-table
          :data="renderList?.list as any ?? []"
          :pagination="false"
          :bordered="false"
          :scroll="{ x: '100%', y: '264px' }"
        >
          <template #columns>
            <a-table-column title="内容标题" data-index="title">
              <template #cell="{ record }">
                <a-typography-paragraph
                  :ellipsis="{
                    rows: 1,
                  }"
                >
                  {{ record.note.title }}
                </a-typography-paragraph>
              </template>
            </a-table-column>
            <a-table-column title="被喜欢" data-index="like_count">
            </a-table-column>
            <a-table-column title="被收藏" data-index="collect_count">
            </a-table-column>
            <a-table-column
              title="日涨幅"
              data-index="increases"
              :sortable="{
                sortDirections: ['ascend', 'descend'],
              }"
            >
              <template #cell="{ record }">
                <div class="increases-cell">
                  <span>{{ record.increases }}%</span>
                  <icon-caret-up
                    v-if="record.increases !== 0"
                    style="color: #f53f3f; font-size: 8px"
                  />
                </div>
              </template>
            </a-table-column>
          </template>
        </a-table>
      </a-space>
    </a-card>
  </a-spin>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import useLoading from '@/hooks/loading';
  import { queryPopularList, PopularNoteRes } from '@/api/dashboard';
  import { TableData } from '@arco-design/web-vue';

  const { loading, setLoading } = useLoading();
  const renderList = ref<PopularNoteRes>();
  const fetchData = async () => {
    try {
      setLoading(true);
      renderList.value = await queryPopularList();
      setLoading(false);
    } catch (err) {
      // you can report use errorHandler or other
    }
  };

  fetchData();
</script>

<style scoped lang="less">
  .general-card {
    min-height: 395px;
  }

  :deep(.arco-table-tr) {
    height: 44px;

    .arco-typography {
      margin-bottom: 0;
    }
  }

  .increases-cell {
    display: flex;
    align-items: center;

    span {
      margin-right: 4px;
    }
  }
</style>
