<template>
  <div class="main-section">
    <ContentBlock>
      <MainSectionHeader />
    </ContentBlock>
    <ContentBlock>
      <QuotationBlock />
    </ContentBlock>
    <ContentBlock>
      <WhoWeAreBlock />
    </ContentBlock>
    <ContentBlock>
      <Services />
    </ContentBlock>
    <ContentBlock>
      <OurWork />
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
import WhoWeAreBlock from '@/components/MainSection/components/WhoWeAreBlock'
import Services from '@/components/MainSection/components/Services'
import OurWork from '@/components/MainSection/components/OurWork'

export default {
  name: 'mainSection',
  components: {
    ContentBlock,
    MainSectionHeader,
    QuotationBlock,
    WhoWeAreBlock,
    Services,
    OurWork
  }
}
</script>
<style lang="scss" scoped>
  .main-section {
    grid-area: main;
    padding-top: 5.2rem
  }
</style>
