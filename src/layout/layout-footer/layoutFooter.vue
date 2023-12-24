<template>
  <div class="block"></div>
  <div class = "footer"  id="contacts">
    <div class = "footer_block1">
      <div class="footer_block1_header">
        <h5>Cut und Style Group</h5>
      </div>

      <div class="footer_block1_data">
        <div class="footer_block1_inf">
          <p class="footer_text">Пн-пт с 10:00 до 19:00</p>
          <p class="footer_text">support@CutUndStyle.ru</p>
          <p class="footer_text">+7 937 111 000</p>

          <div class="footer__icons">

            <a href="https://t.me/" class="footer_link" target="_blank">
              <img class="footer__photo" src="C:\Users\User1\WebstormProjects\42lab\MrFirstProjectOnVue\src\assets\img\tg.png" alt="Иконка Телеграм">
            </a>

            <a href="https://vk.com/" class="footer_link" target="_blank">
              <img class="footer__photo" src="C:\Users\User1\WebstormProjects\42lab\MrFirstProjectOnVue\src\assets\img\vk.png" alt="Иконка ВК">
            </a>

            <a href="https://instagram.com/" class="footer_link" target="_blank">
              <img class="footer__photo" src="C:\Users\User1\WebstormProjects\42lab\MrFirstProjectOnVue\src\assets\img\insta.png" alt="Иконка инстаграмма">
            </a>

          </div>
        </div>

      </div>
    </div>
  </div>

  <div class="block"></div>

  <div class="footer_block2">
    <p class="footer_text1">Все права защищены 2023</p>
  </div>
</template>

<script>
export default {
  name: "layoutFooter"
}
</script>

<style scoped lang="scss" src="/src/assets/scss/layoutFooter.scss"></style>