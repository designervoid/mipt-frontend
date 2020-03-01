<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style media="screen">
html,
body {
  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 0px;
  overflow-x: hidden;
}
#app {
  height: 100%;
}

.block {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  white-space: nowrap;
  overflow: auto;
}
.block::-webkit-scrollbar {
  -webkit-appearance: none;
}
.block::-webkit-scrollbar:horizontal {
  height: 11px;
}
.block::-webkit-scrollbar-thumb {
  border-radius: 8px;
  border: 2px solid white;
  background-color: rgba(0, 0, 0, 0.5);
}
.block::-webkit-scrollbar-track {
  background-color: #fff;
  border-radius: 8px;
}
</style>
