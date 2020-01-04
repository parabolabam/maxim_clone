<template>
  <div class="main-section">
    <ContentBlock>
      <MainSectionHeader />
    </ContentBlock>
    <ContentBlock>
      <QuotationBlock />
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
import QuotationBlock from '@/components/MainSection/components/QuotationBlock'


export default {
  name: 'mainSection',
  components: {
    ContentBlock,
    MainSectionHeader,
    QuotationBlock
  }
}
</script>
<style lang="scss" scoped>
  .main-section {
    grid-area: main;
    padding-top: 5.2rem
  }
</style>
