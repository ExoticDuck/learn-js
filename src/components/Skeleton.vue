<template>
  <div :class="$style.skeleton">
    <div :class="[$style.skeleton_line, $style.shimmer]"></div>
    <div :class="[$style.skeleton_line, $style.shimmer, $style.button]"></div>
    <div :class="[$style.skeleton_line, $style.shimmer, $style.console]"></div>
  </div>
</template>

<style module lang="scss">
.skeleton {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  background-color: var(--grey);
  min-height: 66vh;
  border-radius: 4px;

  .skeleton_line {
    width: 100%;
    height: 480px;
    background-color: var(--background-color);
    position: relative;
    overflow: hidden;

    &.button {
      border-radius: 4px;
      width: 108px;
      height: 35px;
    }

    &.console {
      border-radius: 4px;
      margin-top: 10px;
      width: 100%;
      height: 48px;
    }

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      height: 100%;
      width: 200%;
      background: linear-gradient(
        120deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0.4) 50%,
        rgba(255, 255, 255, 0) 100%
      );
      animation: shimmer 1.5s infinite;
    }

    @keyframes shimmer {
      0% {
        left: -100%;
      }
      100% {
        left: 100%;
      }
    }
  }
}
</style>
