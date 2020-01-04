<template>
    <div>
        <Hooper
            class="hooper"
            :vertical="true"
            :style="hooperStyle"
            :itemsToShow="1"
            :centerMode="true"
            :infiniteScroll="true"
            ::autoPlay="true"
        >
            <HooperNavigation slot="hooper-addons"></HooperNavigation>

            <Slide v-for="(sliderItem, index) in sliderItems" :key="index">
                {{ sliderItem }}
            </Slide>
        </Hooper>
    </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import {
  Hooper,
  Slide,
  Navigation as HooperNavigation
} from 'hooper'
import { IHooperSliderProps, ISliderItem } from '@/Interfaces'

@Component({
  components: {
    Hooper,
    Slide,
    HooperNavigation
  }
})
export default class HooperSlider extends Vue {
    @Prop()
    sliderItems!: String[];

    @Prop()
    hooperStyle!: any;
}
</script>

<style lang="scss" scoped>
::v-deep .hooper-list {
    .hooper-track {
        padding: 0;
        max-height: 1rem;
        font-size: 72px;
        color: $color-white-solid;
    }
}

    ::v-deep .hooper-navigation {
        width: 100%;
        min-height: 3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        .hooper-next, .hooper-prev {
            background-color: transparent;
            border: none;
            padding: 0.5em;
            position: absolute;
            cursor: pointer;
            font-size: 2em;
            svg {
                fill: $color-white-solid;
                width: 2rem;
                height: 2rem;
            }
        }
        .hooper-next {
            margin-top: 2rem;
        }
        .hooper-prev {
            margin-top: -2rem;
        }
    }
</style>
