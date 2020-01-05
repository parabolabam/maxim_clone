<template>
  <div class="services-block">
    <h4> {{ headerLevelFourTitle }} </h4>
    <div class="activities">
        <Activity v-for="(activity, index) in activities" :key="index" :activityLittleInfo="activity"/>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import Activity from '@/components/MainSection/components/Activity'
import { IActivityLittleInfo } from '@/Interfaces'

interface IDataReturnStatement {
    headerLevelFourTitle: String,
    activities: IActivityLittleInfo[]
}

@Component({
  components: {
    Activity
  }
})
export default class Services extends Vue {
  data () : IDataReturnStatement {
    return {
      headerLevelFourTitle: 'Services',
      activities: [{
        field: 'Web',
        activity: 'design',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        imageUrl: require('@/assets/images/activities/laptop.png')
      },
      {
        field: 'Web',
        activity: 'development',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        imageUrl: require('@/assets/images/activities/lab.png')
      },
      {
        field: 'Photography',
        activity: '',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        imageUrl: require('@/assets/images/activities/camera.png')
      },
      {
        field: 'Ecommerce',
        activity: '',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        imageUrl: require('@/assets/images/activities/basket.png')
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
    .services-block {
        background: $color-flamingo;
        width: 100%;
        padding: 6.25rem 0 5rem 0;
        h4 {
            text-transform: capitalize;
            text-align: center;
            color: $color-alabaster;
            font-size: 46px;
            margin: 0.625rem 0 2.5rem 0
        }
        .activities {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0 6rem 0 6rem;
        }
    }
</style>
