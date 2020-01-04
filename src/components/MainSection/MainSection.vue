<template>
  <div class="main-section">
    <ContentBlock>
      <MainSectionHeader />
    </ContentBlock>
    <ContentBlock>
      hi
    </ContentBlock>
    <ContentBlock>
      hi
    </ContentBlock>
    <ContentBlock>
      hi
    </ContentBlock>
    <ContentBlock>
      hi
    </ContentBlock>
    <ContentBlock>
      hi
    </ContentBlock>
    <ContentBlock>
      hi
    </ContentBlock>
    <ContentBlock>
      hi
    </ContentBlock>
  </div>
</template>

<script>
import ContentBlock from '@/components/MainSection/components/ContentBlock'
import MainSectionHeader from '@/components/MainSection/components/MainSectionHeader'

export default {
  name: 'mainSection',
  components: {
    ContentBlock,
    MainSectionHeader
  }
}
</script>
<style lang="scss" scoped>
  .main-section {
    grid-area: main;
    padding-top: 5.2rem
  }
</style>
