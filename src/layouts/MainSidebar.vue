<template>
  <div class="column is-3">
    <aside class="menu">
      <p class="menu-label">
        Админ
      </p>
      <ul class="menu-list">
        <li><a>Заявки</a></li>
        <li>
          <ul>
            <li><a>Просмотр заявок</a></li>
          </ul>
        </li>
      </ul>
      <p class="menu-label">
        Главное
      </p>
      <ul class="menu-list">
        <li><a>Личный кабинет</a></li>
        <li>
          <router-link to="/news">Новости</router-link>
        </li>
        <li>
          <router-link to="/requests">Заявки</router-link>
        </li>
        <!-- <li><a class="is-active">Заявки</a></li> -->
        <li><a>Обратная связь</a></li>
      </ul>
    </aside>
  </div>
</template>

<style lang="css">
.menu {
  padding: 1rem;
}

@media screen and (max-width: 979px) {
  .column.is-3 {
    display: none;
  }
}
</style>
