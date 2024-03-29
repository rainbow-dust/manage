<template>
  <div class="container">
    <Breadcrumb :items="['用户管理', '列表']" />
    <a-card class="general-card" :title="'用户管理'">
      <a-row>
        <a-col :flex="1">
          <a-form
            :model="formModel"
            :label-col-props="{ span: 6 }"
            :wrapper-col-props="{ span: 18 }"
            label-align="left"
          >
            <a-row :gutter="16">
              <a-col :span="8">
                <a-form-item field="_id" :label="'用户id'">
                  <a-input
                    v-model="formModel._id"
                    :placeholder="'请输入用户id'"
                  />
                </a-form-item>
              </a-col>
              <a-col :span="8">
                <a-form-item field="username" :label="'用户名'">
                  <a-input
                    v-model="formModel.username"
                    :placeholder="'请输入用户名'"
                  />
                </a-form-item>
              </a-col>
              <a-col :span="8">
                <a-form-item
                  field="createdTime"
                  :label="$t('searchTable.form.createdTime')"
                >
                  <a-range-picker
                    v-model="formModel.createdTime"
                    style="width: 100%"
                  />
                </a-form-item>
              </a-col>
              <a-col :span="8">
                <a-form-item
                  field="status"
                  :label="$t('searchTable.form.status')"
                >
                  <a-select
                    v-model="formModel.status"
                    :options="statusOptions"
                    :placeholder="$t('searchTable.form.selectDefault')"
                  />
                </a-form-item>
              </a-col>
            </a-row>
          </a-form>
        </a-col>
        <a-divider style="height: 84px" direction="vertical" />
        <a-col :flex="'86px'" style="text-align: right">
          <a-space direction="vertical" :size="18">
            <a-button type="primary" @click="search">
              <template #icon>
                <icon-search />
              </template>
              {{ $t('searchTable.form.search') }}
            </a-button>
            <a-button @click="reset">
              <template #icon>
                <icon-refresh />
              </template>
              {{ $t('searchTable.form.reset') }}
            </a-button>
          </a-space>
        </a-col>
      </a-row>
      <a-divider style="margin-top: 0" />
      <a-row style="margin-bottom: 16px">
        <a-col :span="12"> </a-col>
        <a-col
          :span="12"
          style="display: flex; align-items: center; justify-content: end"
        >
          <a-tooltip :content="$t('searchTable.actions.refresh')">
            <div class="action-icon" @click="search"
              ><icon-refresh size="18"
            /></div>
          </a-tooltip>
          <a-dropdown @select="handleSelectDensity">
            <a-tooltip :content="$t('searchTable.actions.density')">
              <div class="action-icon"><icon-line-height size="18" /></div>
            </a-tooltip>
            <template #content>
              <a-doption
                v-for="item in densityList"
                :key="item.value"
                :value="item.value"
                :class="{ active: item.value === size }"
              >
                <span>{{ item.name }}</span>
              </a-doption>
            </template>
          </a-dropdown>
          <a-tooltip :content="$t('searchTable.actions.columnSetting')">
            <a-popover
              trigger="click"
              position="bl"
              @popup-visible-change="popupVisibleChange"
            >
              <div class="action-icon"><icon-settings size="18" /></div>
              <template #content>
                <div id="tableSetting">
                  <div
                    v-for="(item, index) in showColumns"
                    :key="item.dataIndex"
                    class="setting"
                  >
                    <div style="margin-right: 4px; cursor: move">
                      <icon-drag-arrow />
                    </div>
                    <div>
                      <a-checkbox
                        v-model="item.checked"
                        @change="
                          handleChange($event, item as TableColumnData, index)
                        "
                      >
                      </a-checkbox>
                    </div>
                    <div class="title">
                      {{ item.title === '#' ? '序列号' : item.title }}
                    </div>
                  </div>
                </div>
              </template>
            </a-popover>
          </a-tooltip>
        </a-col>
      </a-row>
      <a-table
        row-key="id"
        :loading="loading"
        :pagination="pagination"
        :columns="(cloneColumns as TableColumnData[])"
        :data="renderData"
        :bordered="false"
        :size="size"
        @change="onTableChange"
        @on-page-change="onPageChange"
      >
        <template #index="{ rowIndex }">
          {{
            rowIndex + 1 + (pagination.pageCurrent - 1) * pagination.pageSize
          }}
        </template>
        <template #status="{ record }">
          <span v-if="record.status === 'offline'" class="circle"></span>
          <span v-else class="circle pass"></span>
          {{ $t(`searchTable.form.status.${record.status}`) }}
        </template>
        <template #operations="{ record }">
          <a-button type="text" size="small">
            {{ $t('searchTable.columns.operations.view') }}
          </a-button>
          <a-popover v-permission="['admin']" trigger="click" placement="top">
            <template #content>
              <a-button
                v-if="record.status === 'normal'"
                type="text"
                size="small"
                @click="
                  async () => {
                    await blockUser(record._id);
                    Message.success('封禁成功');
                    fetchData();
                  }
                "
              >
                封禁
              </a-button>
              <a-button
                v-else
                type="text"
                size="small"
                @click="
                  async () => {
                    await unblockUser(record._id);
                    Message.success('解封成功');
                    fetchData();
                  }
                "
              >
                解封
              </a-button>
              <a-button
                type="text"
                size="small"
                @click="
                  async () => {
                    await changeRole(
                      record._id,
                      record.role === 'admin' ? 'user' : 'admin'
                    );
                    Message.success('设置成功');
                    fetchData();
                  }
                "
              >
                设为 {{ record.role === 'admin' ? '用户' : '管理员' }}
              </a-button>
            </template>
            <a-button type="text" size="small"> 设置 </a-button>
          </a-popover>

          <!-- <a-button v-permission="['admin']" type="text" size="small">
            设置
          </a-button> -->
        </template>
      </a-table>
    </a-card>
  </div>
</template>

<script lang="ts" setup>
  import { computed, ref, reactive, watch, nextTick } from 'vue';
  import { useI18n } from 'vue-i18n';
  import useLoading from '@/hooks/loading';
  import {
    queryUserList,
    UserRecord,
    UserParams,
    blockUser,
    unblockUser,
    changeRole,
  } from '@/api/manage-user';
  import { Pagination } from '@/types/global';
  import type { SelectOptionData } from '@arco-design/web-vue/es/select/interface';
  import type {
    TableChangeExtra,
    TableColumnData,
    TableData,
  } from '@arco-design/web-vue/es/table/interface';
  import cloneDeep from 'lodash/cloneDeep';
  import Sortable from 'sortablejs';
  import { Message } from '@arco-design/web-vue';

  type SizeProps = 'mini' | 'small' | 'medium' | 'large';
  type Column = TableColumnData & { checked?: true };

  const generateFormModel = () => {
    return {
      // number: '',
      // name: '',
      _id: '',
      username: '',
      contentType: '',
      filterType: '',
      createdTime: [],
      status: '',
    };
  };
  const { loading, setLoading } = useLoading(true);
  const { t } = useI18n();
  const renderData = ref<UserRecord[]>([]);
  const formModel = ref(generateFormModel());
  const cloneColumns = ref<Column[]>([]);
  const showColumns = ref<Column[]>([]);

  const size = ref<SizeProps>('medium');

  const basePagination: Pagination = {
    pageCurrent: 1,
    pageSize: 20,
  };
  const pagination = reactive({
    ...basePagination,
  });
  const densityList = computed(() => [
    {
      name: t('searchTable.size.mini'),
      value: 'mini',
    },
    {
      name: t('searchTable.size.small'),
      value: 'small',
    },
    {
      name: t('searchTable.size.medium'),
      value: 'medium',
    },
    {
      name: t('searchTable.size.large'),
      value: 'large',
    },
  ]);
  const columns = computed<TableColumnData[]>(() => [
    {
      title: t('searchTable.columns.index'),
      dataIndex: 'index',
      slotName: 'index',
    },
    {
      title: '用户id',
      dataIndex: '_id',
    },
    {
      title: '用户名',
      dataIndex: 'username',
    },
    {
      title: '角色',
      dataIndex: 'role',
    },
    {
      title: '文章数',
      dataIndex: 'note_count',
      sortable: {
        sorter: true,
        sortDirections: ['descend'],
      },
    },
    {
      title: '被喜欢',
      dataIndex: 'be_liked_count',
      sortable: {
        sorter: true,
        sortDirections: ['descend'],
      },
    },
    {
      title: '注册时间',
      dataIndex: 'created',
    },
    {
      title: t('searchTable.columns.status'),
      dataIndex: 'status',
      slotName: 'status',
    },
    {
      title: t('searchTable.columns.operations'),
      dataIndex: 'operations',
      slotName: 'operations',
    },
  ]);

  const statusOptions = computed<SelectOptionData[]>(() => [
    {
      label: t('searchTable.form.status.normal'),
      value: 'normal',
    },
    {
      label: t('searchTable.form.status.deleted'),
      value: 'abnormal',
    },
    {
      label: t('searchTable.form.status.blocked'),
      value: 'blocked',
    },
  ]);
  const fetchData = async (
    params: UserParams = { pageCurrent: 1, pageSize: 20 }
  ) => {
    setLoading(true);
    try {
      const data = await queryUserList(params);
      renderData.value = data.list;
      pagination.pageCurrent = params.pageCurrent;
      pagination.total = data.totalCount;
    } catch (err) {
      // you can report use errorHandler or other
    } finally {
      setLoading(false);
    }
  };

  const search = () => {
    fetchData({
      // ...basePagination,
      pageCurrent: basePagination.pageCurrent,
      pageSize: basePagination.pageSize,
      ...formModel.value,
    } as unknown as UserParams);
  };
  const onPageChange = (pageCurrent: number) => {
    fetchData({ ...basePagination, pageCurrent });
  };

  const onTableChange = (
    data: TableData[],
    extra: TableChangeExtra,
    pageCurrentData: TableData[]
  ) => {
    if (extra.type === 'sorter') {
      fetchData({
        pageCurrent: extra.page,
        pageSize: extra.pageSize,
        sort: [
          {
            field: extra.sorter?.field,
            order: extra.sorter?.direction,
          },
        ],
        ...formModel.value,
      } as unknown as UserParams);
    }
  };

  fetchData();
  const reset = () => {
    formModel.value = generateFormModel();
  };

  const handleSelectDensity = (
    val: string | number | Record<string, any> | undefined,
    e: Event
  ) => {
    size.value = val as SizeProps;
  };

  const handleChange = (
    checked: boolean | (string | boolean | number)[],
    column: Column,
    index: number
  ) => {
    if (!checked) {
      cloneColumns.value = showColumns.value.filter(
        (item) => item.dataIndex !== column.dataIndex
      );
    } else {
      cloneColumns.value.splice(index, 0, column);
    }
  };

  const exchangeArray = <T extends Array<any>>(
    array: T,
    beforeIdx: number,
    newIdx: number,
    isDeep = false
  ): T => {
    const newArray = isDeep ? cloneDeep(array) : array;
    if (beforeIdx > -1 && newIdx > -1) {
      // 先替换后面的，然后拿到替换的结果替换前面的
      newArray.splice(
        beforeIdx,
        1,
        newArray.splice(newIdx, 1, newArray[beforeIdx]).pop()
      );
    }
    return newArray;
  };

  const popupVisibleChange = (val: boolean) => {
    if (val) {
      nextTick(() => {
        const el = document.getElementById('tableSetting') as HTMLElement;
        const sortable = new Sortable(el, {
          onEnd(e: any) {
            const { oldIndex, newIndex } = e;
            exchangeArray(cloneColumns.value, oldIndex, newIndex);
            exchangeArray(showColumns.value, oldIndex, newIndex);
          },
        });
      });
    }
  };

  watch(
    () => columns.value,
    (val) => {
      cloneColumns.value = cloneDeep(val);
      cloneColumns.value.forEach((item, index) => {
        item.checked = true;
      });
      showColumns.value = cloneDeep(cloneColumns.value);
    },
    { deep: true, immediate: true }
  );
</script>

<script lang="ts">
  export default {
    name: 'ManageUser',
  };
</script>

<style scoped lang="less">
  .container {
    padding: 0 20px 20px;
  }

  :deep(.arco-table-th) {
    &:last-child {
      .arco-table-th-item-title {
        margin-left: 16px;
      }
    }
  }

  .action-icon {
    margin-left: 12px;
    cursor: pointer;
  }

  .active {
    color: #0960bd;
    background-color: #e3f4fc;
  }

  .setting {
    display: flex;
    align-items: center;
    width: 200px;

    .title {
      margin-left: 12px;
      cursor: pointer;
    }
  }
</style>
