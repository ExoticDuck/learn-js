<template>
  <header>
    <div :class="$style.wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/chapter/1"> Chapter 1</RouterLink>
        <RouterLink to="/chapter/2">Chapter 2</RouterLink>
        <RouterLink to="/chapter/3">Chapter 3</RouterLink>
        <RouterLink to="/chapter/4">Chapter 4</RouterLink>
        <RouterLink to="/chapter/5">Chapter 5</RouterLink>
        <RouterLink to="/chapter/6">Chapter 6</RouterLink>
        <RouterLink to="/chapter/7">Chapter 7</RouterLink>
        <RouterLink to="/chapter/8">Chapter 8</RouterLink>
        <RouterLink to="/chapter/9">Chapter 9</RouterLink>
        <RouterLink to="/chapter/10">Chapter 10</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style module lang="scss">
header {
  line-height: 1.5;
  height: 100vh;

  @media (min-width: 1024px) {
    header {
      display: flex;
      padding-right: calc(var(--section-gap) / 2);
    }

    header .wrapper {
      display: flex;
      place-items: flex-start;
      flex-wrap: wrap;
    }
  }
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;

  a.router-link-exact-active {
    color: var(--color-text);
  }

  a.router-link-exact-active:hover {
    background-color: transparent;
  }

  a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
    min-width: 120px;
  }

  a:first-of-type {
    border: 0;
  }

  @media (min-width: 1024px) {
    nav {
      text-align: left;
      margin-left: -1rem;
      font-size: 1rem;

      padding: 1rem 0;
      margin-top: 1rem;
    }
  }
}
</style>
