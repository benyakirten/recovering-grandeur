<template>
  <base-three-rows>
    <template #top>
      <skew-row>
        <portrait-with-text
          imgName="Portrait1"
          imgAlt="Very Human Indeed"
          animation="alternate"
        >
          <template #caption>
            Surgeon.__init__(), Very Human
          </template>
          <template #text>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </template>
        </portrait-with-text>
      </skew-row>
    </template>
    <template #center>
      <skew-row :skew="35">
        <portrait-with-text
          imgName="Portrait1"
          imgAlt="Very Human Indeed"
          :rotate="90"
          animation="reverse"
        >
          <template #caption>
            Director.undefined(), VIP Manager
          </template>
          <template #text>
            Not one of my clients has ever asked me to be treated more like a
            human.
          </template>
        </portrait-with-text>
      </skew-row>
    </template>
    <template #bottom>
      <skew-row :skew="-15">
        <portrait-with-text
          imgName="Portrait1"
          imgAlt="Very Human Indeed"
          :rotate="180"
          animation="normal"
        >
          <template #caption>
            Custodian.__call__(), Spongiform
          </template>
          <template #text>
            What do you want to hear from me?
          </template>
        </portrait-with-text>
      </skew-row>
    </template>
  </base-three-rows>
</template>

<script>
import BaseThreeRows from "@/components/ui/BaseThreeRows";
import SkewRow from "@/components/rows/SkewRow";
import PortraitWithText from "@/components/general/PortraitWithText";
export default {
  components: {
    BaseThreeRows,
    SkewRow,
    PortraitWithText
  }
};
</script>
