<template>
  <ul class="menu-bar">
    <li>
      <router-link to="/update">
        <svg-icon icon-class="update" />
        <span class="title">Update</span>
      </router-link>
    </li>
    <li>
      <router-link to="/analytics">
        <svg-icon icon-class="analytics" />
        <span class="title">Analytics</span>
      </router-link>
    </li>
    <li>
      <router-link to="/siteBuilder">
        <svg-icon icon-class="siteBuilder" />
        <span class="title">Site Builder</span>
      </router-link>
    </li>
    <li>
      <router-link to="/marketing">
        <svg-icon icon-class="update" />
        <span class="title">Marketing</span>
      </router-link>
    </li>
    <li>
      <router-link to="/home">
        <svg-icon icon-class="update" />
        <span class="title">Settings</span>
      </router-link>
    </li>
  </ul>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.menu-bar {
  margin: 0;
  padding: 0 30px;
  li {
    height: 40px;
    line-height: 40px;
    list-style: none;
    padding-left: 10px;
    &:hover {
      background-color: #ffffff;
      border-radius: 4px;
      cursor: pointer;
    }
    svg {
      width: 20px;
      height: 20px;
      margin-right: 10px;
    }
  }
}
</style>
