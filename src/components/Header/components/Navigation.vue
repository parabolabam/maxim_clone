<template>
    <div class="navigation">
      <nav class="header-nav">
        <ul>
          <li v-for="(navigationMenuItem, index) in navigationMenuItems" :key="index">
            <a class="link" :href="navigationMenuItem.href">{{ navigationMenuItem.text }}</a>
          </li>
        </ul>
    </nav>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { INavigationMenuItem } from '@/Interfaces'

@Component
export default class Navigation extends Vue {
  @Prop({ default: () => [] })
  navigationMenuItems!: INavigationMenuItem[];
}
</script>

<style lang="scss" scoped>
    .navigation {
      margin-right: 2rem;
      .header-nav {
        color: $header-text-color;
        ul {
          color: $header-text-color;
          display: flex;
          flex-direction: row;
          li {
            .link {
              min-height: 1rem;
              padding: 1rem;
              color: $header-text-color;
            }
            &:hover {
              margin-top: -0.1rem;
              .link {
                color: $color-mountain-meadow;
              }

            }
          }
        }
      }
    }
    @include iPhonefrom6to8Models {
        .navigation {
            margin-right: -1.83rem;
        }
    }

</style>
