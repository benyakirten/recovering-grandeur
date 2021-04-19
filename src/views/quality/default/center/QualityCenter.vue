<template>
  <base-caption>
    <template #caption>
      A sick man has never left our hospital
    </template>
    <template #content>
      <base-two-columns tabHeight="100rem">
        <template #left>
          <image-column image="Smokestack">
            Some of our advanced techniques?
          </image-column>
        </template>
        <template #right>
          <base-three-rows>
            <template #top>
              <skew-row>
                <portrait-with-text
                  imgName="Portrait2"
                  imgAlt="An abstract expression of jaundice"
                  animation="spin"
                >
                  <template #caption>
                    An esteemed doctor
                  </template>
                  <template #text>
                    I have never had a patient die on me. Go brain dead, but we
                    got organs for resale and cover the medical costs.
                  </template>
                </portrait-with-text>
              </skew-row>
            </template>
            <template #center>
              <skew-row :skew="-25">
                <portrait-with-text
                  imgName="Portrait2"
                  imgAlt="Death is inevitable"
                  animation="spin-back"
                >
                  <template #caption>
                    Not the same person
                  </template>
                  <template #text>
                    Does life have a purpose? Or do we just exist? Only our
                    bourgeouis status allows us to consider the question.
                  </template>
                </portrait-with-text>
              </skew-row>
            </template>
            <template #bottom>
              <text-column marginTop="0" marginBottom="0">
                <template #leading>
                  We run all the tests you'll need
                </template>
                <template #main>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </template>
              </text-column>
            </template>
          </base-three-rows>
        </template>
      </base-two-columns>
    </template>
  </base-caption>
</template>

<script>
import BaseCaption from "@/components/ui/BaseCaption";
import BaseTwoColumns from "@/components/ui/BaseTwoColumns";
import ImageColumn from "@/components/columns/ImageColumn";
import BaseThreeRows from "@/components/ui/BaseThreeRows";
import SkewRow from "@/components/rows/SkewRow";
import PortraitWithText from "@/components/general/PortraitWithText";
import TextColumn from "@/components/columns/TextColumn";
export default {
  components: {
    BaseCaption,
    BaseTwoColumns,
    ImageColumn,
    BaseThreeRows,
    SkewRow,
    PortraitWithText,
    TextColumn
  }
};
</script>
