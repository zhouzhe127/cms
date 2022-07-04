<template>
  <div class="pagination">
    <div class="option">
      <svg-icon icon-class="first_page" color="#C7CBCA" class="sicon" />
      <svg-icon icon-class="expand_more" color="#C7CBCA" class="sicon rgan" />
    </div>
    <div class="page-ul">
      <div class="page-list active">1</div>
      <div class="page-list">2</div>
      <div class="page-list">3</div>
      <div class="page-list">4</div>
      <div class="page-list">5</div>
      <div class="page-list">6</div>
      <div class="els">...</div>
      <div class="page-list">10</div>
    </div>
    <div class="option">
      <svg-icon icon-class="expand_more" class="sicon mas" />
      <svg-icon icon-class="first_page" class="sicon nuo" />
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.pagination {
  display: grid;
  grid-template-columns: 60px 1fr 60px;
  justify-content: center;
  .option {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .rgan {
      transform: rotate(90deg);
    }
    .sicon {
      font-size: 20px;
    }
    .mas {
      transform: rotate(-90deg);
    }
    .nuo {
      transform: rotate(180deg);
    }
  }
  .page-ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, 30px);
    column-gap: 20px;
    justify-content: center;
    .page-list {
      width: 30px;
      height: 30px;
      text-align: center;
      line-height: 30px;
      background-color: #F3F4F4;
      border-radius: 50%;
      cursor: pointer;
    }
    .els {
      width: 30px;
      height: 30px;
      text-align: center;
      line-height: 25px;
    }
    .active {
      color: #ffffff;
      background-color: $theme;
    }
  }
}
</style>