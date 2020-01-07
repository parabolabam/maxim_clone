<template>
  <div class="our-work-block">
    <h4>{{ headerTitle }}</h4>
    <div class="filter-tabs">
      <FilterTab v-for="(filterTab, index) in filterTabs" @tabActive="setCurrentTab" :key="index" :textCaption="filterTab" :tabIndex="index" :isActive="index === currentTabIndex"/>
    </div>
    <div class="portfolio-works">
      <Portfolio v-for="(portfolio, index) in filteredPortfolios" :key="index" :portfolio="portfolio" />
    </div>
  </div>
</template>

<script>
import FilterTab from '@/components/FilterTab'
import Portfolio from '@/components/MainSection/components/Portfolio'

export default {
  name: 'our-work-block',
  components: {
    FilterTab,
    Portfolio
  },
  methods: {
    isActive (index) {
      return this.currentTab === index
    },
    setCurrentTab (index) {
      this.currentTabIndex = index
    }
  },
  computed: {
    filteredPortfolios () {
      if (this.currentTabIndex === -1 || this.currentTabIndex === 0) {
        return this.portfolioWorks
      }
      return this.portfolioWorks.filter(portfolio => {
        return portfolio.types.includes(this.filterTabs[this.currentTabIndex])
      })
    }
  },
  data () {
    return {
      currentTabIndex: -1,
      headerTitle: 'Our Works',
      filterTabs: [
        'All',
        'Web',
        'Print',
        'Design'
      ],
      portfolioWorks: [{
        types: ['Web'],
        image: require('@/assets/images/works/1.png')
      }, {
        types: ['Print'],
        image: require('@/assets/images/works/2.png')
      }, {
        types: ['Design'],
        image: require('@/assets/images/works/3.png')
      }, {
        types: ['Web'],
        image: require('@/assets/images/works/4.png')
      }, {
        types: ['Design'],
        image: require('@/assets/images/works/5.png')
      }, {
        types: ['Web'],
        image: require('@/assets/images/works/6.png')
      }, {
        types: ['Design'],
        image: require('@/assets/images/works/7.png')
      }, {
        types: ['Print'],
        image: require('@/assets/images/works/8.png')
      }, {
        types: ['Web'],
        image: require('@/assets/images/works/9.png')
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
  .our-work-block {
    width: 100%;
    padding: 6.25rem 0 5rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    font-size: 46px;
    font-weight: bold;
    h4 {
        margin: 0.625rem 0 1.25rem 0
    }
    .filter-tabs {
      display: flex;
      justify-content: center;
    }
    .portfolio-works {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      transition: all 0.5s ease-in-out;
      max-width: 75%;
      margin: 0 auto;
    }
  }

</style>
