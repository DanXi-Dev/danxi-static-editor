<script setup lang="ts">
import { Check, ArrowDown, ArrowUp } from '@vicons/fa'
import ObjectList from '../components/ObjectList.vue'
</script>

<template>
  <n-layout has-sider class="h-screen">
    <n-layout-sider bordered collapse-mode="transform" :collapsed-width="0" show-trigger="bar">
      <div class="h-full w-full py-3 px-3">
        <h1 class="text-2xl">
          <div class="text-lg">DanXi</div>
          <div class="font-bold">Static Editor</div>
        </h1>
        <n-divider title-placement="left">
          <div class="text-gray-400 text-sm">Git 状态</div>
        </n-divider>
        <div class="flex">
          <div class="flex-none mx-3 my-auto">
            <n-icon-wrapper :border-radius="16" color="green" :size="32">
              <n-icon color="white" size="18">
                <Check />
              </n-icon>
            </n-icon-wrapper>
          </div>
          <div class="flex-1 my-auto">
            <div class="git-username font-bold">KYLN24</div>
            <div class="git-email">1296845690@qq.com</div>
            <div class="git-path">D:\Code\danxi-static</div>
          </div>
        </div>
        <n-divider title-placement="left">
          <div class="text-gray-400 text-sm">操作</div>
        </n-divider>
        <div class="p-1">
          <n-button-group vertical class="w-full">
            <n-button>
              <template #icon>
                <n-icon>
                  <ArrowDown />
                </n-icon>
              </template>
              Pull
            </n-button>
            <n-button>
              <template #icon>
                <n-icon>
                  <Check />
                </n-icon>
              </template>
              Commit
            </n-button>
            <n-button>
              <template #icon>
                <n-icon>
                  <ArrowUp />
                </n-icon>
              </template>
              Push
            </n-button>
          </n-button-group>

        </div>
      </div>
    </n-layout-sider>
    <n-layout-content embedded>
      <div class="h-full w-full py-3 px-5">
        <n-tabs type="line" animated>
          <n-tab-pane name="oasis" tab="公告">
            <ObjectList />
          </n-tab-pane>
          <n-tab-pane name="the beatles" tab="横幅">
            <ObjectList />
          </n-tab-pane>
          <n-tab-pane name="jay chou" tab="">
            <ObjectList />
          </n-tab-pane>
        </n-tabs>
      </div>
    </n-layout-content>
  </n-layout>
</template>

<style scoped>
</style>
