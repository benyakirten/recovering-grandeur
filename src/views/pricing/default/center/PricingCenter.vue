<template>
  <base-caption>
    <template #caption>
      Some of Our Very Generous Offers
    </template>
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
          <list-and-button-column v-bind="firstColumn">
            Free<sup class="small-text">&ast;</sup>
          </list-and-button-column>
        </template>
        <template #second>
          <list-and-button-column v-bind="secondColumn">
            Partial Coverage Through Work<sup class="small-text"
              >&ast;&ast;
            </sup>
          </list-and-button-column>
        </template>
        <template #third>
          <list-and-button-column v-bind="thirdColumn">
            PRICING_PLAN ("human" &rarr; true);
          </list-and-button-column>
        </template>
        <template #fourth>
          <list-and-button-column v-bind="fourthColumn">
            Contact us for pricing details
          </list-and-button-column>
        </template>
      </base-four-columns>
    </template>
  </base-caption>
</template>

<script>
import { getRGBAStringFromHex } from "@/utils/hexAndDecimals";
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
  computed: {
    columnBorder() {
      const gold = getRGBAStringFromHex("#925f45", 1);
      const green = getRGBAStringFromHex("#459286", 1);
      return {
        normal: `1rem solid ${gold}`,
        highlight: `1rem solid ${green}`
      };
    },
    firstColumn() {
      return costsaverPlan;
    },
    secondColumn() {
      return popularPlan;
    },
    thirdColumn() {
      return luxuryPlan;
    },
    fourthColumn() {
      return vipPlan;
    }
  }
};
</script>
