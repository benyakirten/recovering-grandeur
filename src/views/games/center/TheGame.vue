<template>
  <GameEndModal
    v-if="showModal && gameWonOrLost"
    :victory="gameWon"
    :onButtonPress="setGameBegin"
    :count="guessCount"
    @dismiss="dismissModal"
  />
  <base-sidebar
    :popout="popout"
    :side="sidebarPosition"
    @sidebar-click="onSidebarClick"
  >
    <base-grid>
      <transition-group name="opacity">
        <flip-card
          v-for="(card, idx) in cards"
          @click="rotateCard(idx)"
          :rotated="isCardRotated(idx)"
          :key="card.id"
          :backColor="card.color"
          :backText="cardBack(idx)"
          frontText="Guess Me!"
        >
        </flip-card>
      </transition-group>
    </base-grid>
    <template #summary>
      <div class="summary">
        <div class="summary__top">
          <square-button :onClick="setGameBegin" color="#8b4513">
            <span class="button-text">
              {{ gameOngoing ? "Res" : "S" }}tart game
            </span>
          </square-button>
          <square-button
            color="#acacac"
            :onClick="toggleGamePause"
            :disabled="!gameCanBePausedOrEnded"
          >
            <span class="button-text">
              Pause game
            </span>
          </square-button>
          <square-button
            :onClick="setGameEnd"
            :disabled="!gameCanBePausedOrEnded"
          >
            <span class="button-text">
              End game
            </span>
          </square-button>
        </div>
        <div class="summary__middle" v-if="maxGuesses">
          <div class="summary__middle__head">Guesses</div>
          <div class="summary__middle__max">Max: {{ maxGuesses }}</div>
          <div class="summary__middle__remaining">Left: {{ guessesLeft }}</div>
        </div>
        <div class="summary__bottom">
          <square-button
            :onClick="togglePopout"
            :disabled="gameOngoing"
            color="#ffebcd"
          >
            <span class="button-text">
              {{ popout ? "Less Options" : "More Options" }}
              <div v-html="arrowDirection" />
            </span>
          </square-button>
        </div>
      </div>
    </template>
    <template #popout>
      <GameOptions
        :allowDropdown="!gameOngoing"
        @dropdown-click="toggleGameOptionsDropdown"
        :showDropdown="showDropdown"
        :numCards="cardTotal"
        @num-box-change="changeCardTotal"
        :numGuesses="maxGuesses"
        @max-guesses-change="changeMaxGuesses"
      />
    </template>
  </base-sidebar>
</template>

<script>
import defaultCards from "@/data/games/defaultMemoryCards";

import { memoryEnum, gameStateEnum, gameOutcomeEnum } from "@/utils/enums";
import { namedColorsAndHexes } from "@/utils/namedColors";
import { getRandomItemFromArray, shuffleLongArray } from "@/utils/other";

import GameEndModal from "./GameEndModal";
import GameOptions from "./GameOptions";

import BaseSidebar from "@/components/ui/BaseSidebar";
import BaseGrid from "@/components/ui/BaseGrid";
import FlipCard from "@/components/general/FlipCard";
import SquareButton from "@/components/general/SquareButton";
export default {
  components: {
    GameEndModal,
    GameOptions,
    BaseSidebar,
    BaseGrid,
    FlipCard,
    SquareButton
  },
  data() {
    return {
      // State variables
      popout: false,
      showModal: false,
      sidebarPosition: "left",
      showDropdown: false,
      // Timeout and Intervals
      noClick: null,
      interval: null,
      // Enums
      gameOutcome: gameOutcomeEnum.unfinished,
      gameState: gameStateEnum.ended,
      // Non-mutating constants
      allColors: Object.values(namedColorsAndHexes),
      // Game variables
      maxGuesses: 20,
      guessCount: 0,
      cards: defaultCards, // Default placeholder until game begins
      cardTotal: 8,
      selectedCard: null
    };
  },
  computed: {
    usedColors() {
      if (this.cards.length > 0) {
        const usedColorsArray = this.cards.map(c => c.color);
        return new Set(usedColorsArray);
      } else {
        return new Set();
      }
    },
    availableColors() {
      return this.allColors.filter(c => !this.usedColors.has(c));
    },
    guessesLeft() {
      return this.maxGuesses - this.guessCount;
    },
    arrowDirection() {
      if (this.sidebarPosition === "left") {
        return this.popout ? "&rarr;" : "&larr;";
      } else if (this.sidebarPosition === "right") {
        return this.popout ? "&larr;" : "&rarr;";
      }
      return "&larr";
    },
    gameOngoing() {
      return (
        this.gameState === gameStateEnum.started ||
        this.gameState === gameStateEnum.paused
      );
    },
    gameStarted() {
      return this.gameState === gameStateEnum.started;
    },
    gameCanBePausedOrEnded() {
      return this.gameState !== gameStateEnum.ended;
    },
    gameWonOrLost() {
      return this.gameOutcome !== gameOutcomeEnum.undecided;
    },
    gameWon() {
      return this.gameOutcome === gameOutcomeEnum.victory;
    },
    gameLost() {
      return this.gameOutcome === gameOutcomeEnum.defeat;
    }
  },
  methods: {
    rotateCard(idx) {
      if (this.gameState !== gameStateEnum.started || this.noClick) {
        return;
      }
      // MATCHED ALREADY -- NOTHING
      if (this.cards[idx].state === memoryEnum.matched) {
        return;
      }
      // CLICKING SELECTED CARD AGAIN -- CANCEL SELECTION
      if (this.cards[idx].state === memoryEnum.selected) {
        this.cards[idx].state = memoryEnum.default;
        this.selectedCard = null;
        return;
      }
      // POTENTIAL NEW MATCH
      if (this.selectedCard) {
        this.cards[idx].state = memoryEnum.selected;
        const otherCard = this.cards.find(c => c.id === this.selectedCard.id);
        this.guessCount += 1;
        // SUCCESS -- SET CARDS TO MATCHED, NULLIFY SELECTION
        if (this.cards[idx].color === this.selectedCard.color) {
          otherCard.state = memoryEnum.matched;
          this.cards[idx].state = memoryEnum.matched;
          this.selectedCard = null;
        } else {
          // FAILURE -- SET TIMEOUT TO RESET ROTATION, NULLIFY SELECTION
          // No clicking while this timeout is going on, or the game gets confused
          this.noClick = setTimeout(() => {
            otherCard.state = memoryEnum.default;
            this.cards[idx].state = memoryEnum.default;
            this.selectedCard = null;
            this.noClick = null;
          }, 800);
        }
        this.checkGameState();
        return;
      }
      // NEW SELECTION -- SELECT CARD
      if (!this.selectedCard && this.cards[idx].state === memoryEnum.default) {
        this.cards[idx].state = memoryEnum.selected;
        this.selectedCard = this.cards[idx];
        return;
      }
    },
    checkGameState() {
      const matchedCards = this.cards.filter(
        c => c.state === memoryEnum.matched
      );
      // DEFEAT -- Not all cards matched, out of guesses
      if (
        this.maxGuesses > 0 &&
        this.guessesLeft === 0 &&
        matchedCards.length < this.cardTotal
      ) {
        this.gameHasEnded(gameOutcomeEnum.defeat);
      }
      // VICTORY -- All cards matched, remaining guesses
      if (matchedCards.length === this.cardTotal) {
        this.gameHasEnded(gameOutcomeEnum.victory);
      }
    },
    gameHasEnded(condition) {
      this.gameOutcome = condition;
      this.setGameEnd();
      setTimeout(() => (this.showModal = true), 800);
    },
    isCardRotated(idx) {
      return this.cards[idx].state !== memoryEnum.default;
    },
    cardBack(idx) {
      if (this.gameState === gameStateEnum.started) {
        return this.cards[idx].state === memoryEnum.matched
          ? "Matched!"
          : "The match?";
      }
      return this.cards[idx].color;
    },
    generateCardPair() {
      if (this.availableColors.length === 0) {
        return;
      }
      const color = getRandomItemFromArray(this.availableColors);
      const firstCard = {
        color,
        state: memoryEnum.default,
        id: Math.random()
      };
      const secondCard = {
        color,
        state: memoryEnum.default,
        id: Math.random()
      };
      return [firstCard, secondCard];
    },
    beginGame() {
      this.gameOutcome = gameOutcomeEnum.undecided;
      this.guessCount = 0;
      this.cards = [];
      while (this.cards.length < this.cardTotal) {
        if (this.availableColors.length > 0) {
          const [card1, card2] = this.generateCardPair();
          this.cards.push(card1, card2);
        } else {
          break;
        }
      }
      shuffleLongArray(this.cards);
    },
    onSidebarClick(e) {
      if (e.target.id && e.target.id === "sidebar-summary") {
        this.togglePopout();
      }
    },
    togglePopout() {
      this.popout = !this.popout;
    },
    dismissModal() {
      this.showModal = false;
    },
    toggleGameOptionsDropdown() {
      this.showDropdown = !this.showDropdown;
    },
    changeCardTotal(n) {
      this.cardTotal = n;
    },
    changeMaxGuesses(n) {
      this.maxGuesses = n;
    },
    setGameBegin() {
      if (this.interval) {
        window.clearInterval(this.interval);
        this.interval = null;
      }
      if (this.showModal) {
        this.showModal = false;
      }
      this.gameState = gameStateEnum.started;
      this.beginGame();
      return;
    },
    toggleGamePause() {
      if (this.interval) {
        window.clearInterval(this.interval);
        this.interval = null;
      }
      if (this.gameState === gameStateEnum.started) {
        this.gameState = gameStateEnum.paused;
      } else if (this.gameState === gameStateEnum.paused) {
        this.gameState = gameStateEnum.started;
      }
    },
    setGameEnd() {
      if (this.interval) {
        window.clearInterval(this.interval);
        this.interval = null;
      }
      this.gameState = gameStateEnum.ended;
      for (let i = 0; i < this.cards.length; i++) {
        this.cards[i].state = memoryEnum.matched;
      }
      this.interval = setInterval(() => {
        for (let i = 0; i < this.cardTotal / 2; i++) {
          const randInd = Math.floor(Math.random() * this.cards.length);
          this.cards[randInd].color = getRandomItemFromArray(this.allColors);
        }
      }, 500);
    }
  },
  watch: {
    cardTotal(val) {
      if (val % 2 !== 0) {
        this.cardTotal += 1;
        return;
      }
      if (this.gameState === gameStateEnum.started) {
        return;
      }
      while (this.cards.length !== val) {
        if (this.cards.length < val) {
          const [card1, card2] = this.generateCardPair();
          this.cards.push(card1, card2);
        } else {
          this.cards.splice(this.cards.length - 2, 2);
        }
      }
      if (this.interval) {
        window.clearInterval(this.interval);
        this.interval = null;
        this.setGameEnd();
      }
    }
  },
  mounted() {
    this.setGameEnd();
  },
  unmounted() {
    if (this.interval) {
      window.clearInterval(this.interval);
      this.interval = null;
    }
  }
};
</script>

<style lang="scss" scoped>
.summary {
  position: relative;

  display: flex;
  flex-direction: column;

  &__top {
    display: flex;
    flex-direction: column;
  }

  &__middle {
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 2rem 0;
    margin-top: 4rem;

    border-radius: $border-radius-corners;
    box-shadow: $shadow-small;

    background-color: $color-black;
    color: $color-white;

    font-size: $font-size-medium;
    @include respond(tab-port) {
      font-size: $font-size-small;
    }

    &__head {
      margin-bottom: 2rem;
      @include clarify-on-hover;
    }

    &__max {
      margin-bottom: 0.5rem;
      @include clarify-on-hover;
    }
    &__remaining {
      @include clarify-on-hover;
    }
  }

  &__bottom {
    margin-top: 8rem;
  }
}

.button-text {
  font-size: $font-size-medium;
  @include respond(tab-port) {
    font-size: $font-size-small;
  }
  @include respond(phone) {
    font-size: $font-size-medium;
  }
}
</style>
