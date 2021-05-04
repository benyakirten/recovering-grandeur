<template>
  <base-caption>
    <template #caption> Some of Our Very Generous Offers </template>
    <template #content>
      <base-four-columns
        childBoxShadow="small"
        containerWidth="95%"
        paddingVertical="3rem"
        paddingHorizontal="2rem"
        sectionWidth="24%"
        :normalBorder="columnBorder.normal"
        :highlightedBorder="columnBorder.highlight"
      >
        <template #first>
          <list-and-button-column
            v-bind="breakpointActive ? getRandomColumn() : costsaverPlan"
          >
            <p
              class="no-margin"
              v-html="
                breakpointActive ? getRandomColumn().price : costsaverPlan.price
              "
            />
          </list-and-button-column>
        </template>
        <template #second>
          <list-and-button-column
            v-bind="breakpointActive ? getRandomColumn() : popularPlan"
          >
            <p
              class="no-margin"
              v-html="
                breakpointActive ? getRandomColumn().price : popularPlan.price
              "
            ></p>
          </list-and-button-column>
        </template>
        <template #third>
          <list-and-button-column
            v-bind="breakpointActive ? getRandomColumn() : luxuryPlan"
          >
            <p
              class="no-margin"
              v-html="
                breakpointActive ? getRandomColumn().price : luxuryPlan.price
              "
            ></p>
          </list-and-button-column>
        </template>
        <template #fourth>
          <list-and-button-column
            v-bind="breakpointActive ? getRandomColumn() : vipPlan"
          >
            <p
              class="no-margin"
              v-html="
                breakpointActive ? getRandomColumn().price : vipPlan.price
              "
            ></p>
          </list-and-button-column>
        </template>
      </base-four-columns>
    </template>
  </base-caption>
</template>

<script>
import { mapState } from "vuex";

import { checkBreakpointActive } from "@/utils/other";
import {
  costsaverPlan,
  popularPlan,
  luxuryPlan,
  vipPlan
} from "@/data/pricing/centerColumns";

import BaseCaption from "@/components/ui/BaseCaption";
import BaseFourColumns from "@/components/ui/BaseFourColumns";
import ListAndButtonColumn from "@/components/columns/ListAndButtonColumn";
export default {
  components: {
    BaseCaption,
    BaseFourColumns,
    ListAndButtonColumn
  },
  data() {
    return {
      costsaverPlan,
      popularPlan,
      luxuryPlan,
      vipPlan,
      EVENT_NOT_CHANCE: 40
    };
  },
  computed: {
    ...mapState("breakpoint", ["breakpoint", "minimum"]),
    ...mapState("settings", ["breakpointEnabled"]),
    breakpointActive() {
      return checkBreakpointActive(
        this.breakpointEnabled,
        this.breakpoint,
        this.minimum,
        this.EVENT_NOT_CHANCE
      );
    },
    columnBorder() {
      return {
        normal: `1rem solid #925f45`,
        highlight: `1rem solid #459286`
      };
    }
  },
  methods: {
    getRandomColumn() {
      const randomChoice = Math.floor(Math.random() * 4);
      switch (randomChoice) {
        case 0:
          return this.costsaverPlan;
        case 1:
          return this.popularPlan;
        case 2:
          return this.luxuryPlan;
        case 3:
          return this.vipPlan;
        default:
          return this.costsaverPlan;
      }
    }
  }
};
</script>
