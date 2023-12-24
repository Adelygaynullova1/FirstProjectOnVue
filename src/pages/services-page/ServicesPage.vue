<template>
  <div class="header">
    <div class="block1">
      <h1>САЛОНЫ <br> CUT AND STYLE</h1>
    </div>
    <div class="block2">
      <p class="header_text">
        Концепция бренда Cut and Style основана на идее сочетания двух ключевых слов:
        "cut" - стрижка и "style" - стиль. Это выражение призвано подчеркнуть важность правильной стрижки и
        оформления волос для создания идеального образа.
        Разрежьте свои сомнения и найдите свой уникальный стиль с помощью Cut and Style.
      </p>
    </div>
  </div>

  <div class="block3">
    <img  class="header_photo" src="C:\Users\User1\WebstormProjects\42lab\MrFirstProjectOnVue\src\assets\img\img.png" alt="фото">
    <img class="header_photo" src="C:\Users\User1\WebstormProjects\42lab\MrFirstProjectOnVue\src\assets\img\img_3.png" alt="фото">
    <img class="header_photo" src="C:\Users\User1\WebstormProjects\42lab\MrFirstProjectOnVue\src\assets\img\img_1.png" alt="фото">
    <img class="header_photo" src="C:\Users\User1\WebstormProjects\42lab\MrFirstProjectOnVue\src\assets\img\img_4.png" alt="фото">
    <img class="header_photo" src="C:\Users\User1\WebstormProjects\42lab\MrFirstProjectOnVue\src\assets\img\img_5.png" alt="фото">
    <img class="header_photo" src="C:\Users\User1\WebstormProjects\42lab\MrFirstProjectOnVue\src\assets\img\img_6.png" alt="фото">
  </div>

  <div class="main_section">
    <div class="main_section_1">
      <div class="header_1">
        <h3> ПАРИКМАХЕРСКИЙ ЗАЛ </h3>
        <p class="text">Волосы - их безупречное качество, великолепная текстура и естественность в укладке,
          составляют основу нашего стиля, делая его узнаваемым и неповторимым.
          Девушка Cut and Style олицетворяет лёгкость и любовь к жизни.
          Именно так можно описать работу наших стилистов.
          У нас вы можете сделать: укладку, стрижку и самые эффективные уходы.</p>
      </div>
      <img class="services_photo" src="C:\Users\User1\WebstormProjects\42lab\MrFirstProjectOnVue\src\assets\img\hair.jpg" alt="фото волос">
    </div>

    <div class="main_section_2">
        <h3> ПРАЙС </h3>
        <img class="services_photo2" src="C:\Users\User1\WebstormProjects\42lab\MrFirstProjectOnVue\src\assets\img\hairLenth.png" alt="фото длины волос">

          <div class="accordion">
            <div class="accordion-item" v-for="(service, index) in services" :key="index">
              <div class="accordion-item-header" @click="toggleAccordion(index)">
                {{ service.title }}
              </div>
              <div class="accordion-item-body" :style="{ maxHeight: service.isOpen ? '100%' : 0 }">
                <div class="accordion-item-body-content">
                  <ul style="padding-left: 1rem;">
                    <li v-for="(item, i) in service.items" :key="i">{{ item.name }} {{ item.price }}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>



    </div>
  </div>

  <button class="btn" @click="forwardMasters">просмотреть мастеров</button>

</template>

<script>
export default {
  name: "ServicesPage",
  data() {
    return {
      services: [
        {
          title: "СТРИЖКИ",
          isOpen: false,
          items: [
            { name: "СТРИЖКА С УКЛАДКОЙ ЖЕНСКАЯ (КОРОТКИЕ)", price: 5000 },
            { name: "СТРИЖКА С УКЛАДКОЙ ЖЕНСКАЯ (СРЕДНЯЯ ДЛИНА)", price: 6000 },
            { name: "СТРИЖКА С УКЛАДКОЙ ЖЕНСКАЯ (ДЛИННЫЕ)", price: 7000 },
            { name: "СТРИЖКА С УКЛАДКОЙ ЖЕНСКАЯ (ОЧЕНЬ ДЛИННЫЕ)", price: 8000 }
          ]
        },
        {
          title: "УКЛАДКИ",
          isOpen: false,
          items: [
            { name: "УКЛАДКА НА КОРОТКИЕ ВОЛОСЫ", price: 4000 },
            { name: "УКЛАДКА НА ВОЛОСЫ СРЕДНЕЙ ДЛИНЫ", price: 4500 },
            { name: "УКЛАДКА НА ДЛИННЫЕ ВОЛОСЫ", price: 5500 },
            { name: "УКЛАДКА НА ОЧЕНЬ ДЛИННЫЕ ВОЛОСЫ", price: 6500 }
          ]
        },
        {
          title: "ПРИЧЕСКИ",
          isOpen: false,
          items: [
            { name: "ПРИЧЕСКА НА СРЕДНИЕ ВОЛОСЫ", price: 6500 },
            { name: "ПРИЧЕСКА НА ДЛИННЫЕ ВОЛОСЫ", price: 7500 },
            { name: "АФРОКУДРИ", price: 9000 },
            { name: "ГОЛУВУДСКАЯ ВОЛНА", price: 9000 }
          ]
        },
        {
          title: "УХОДЫ",
          isOpen: false,
          items: [
            { name: "TOKIO INKARAMI НА КОРОТКИЕ/СРЕДНИЕ ПО ДЛИНЕ ВОЛОСЫ", price: 9000 },
            { name: "TOKIO INKARAMI НА ДЛИННЫЕ ВОЛОСЫ", price: 11500 },
            { name: "TOKIO INKARAMI НА ОЧЕНЬ ДЛИННЫЕ ВОЛОСЫ", price: 14000 },
            { name: "УХОД ELIOKAP ФИТОПИЛИНГ", price: 8500 }
          ]
        }
      ]
    };
  },
  methods: {
    toggleAccordion(index) {
      this.services.forEach((service, i) => {
        if (i === index) {
          service.isOpen = !service.isOpen;
        } else {
          service.isOpen = false;
        }
      });
    },
    forwardMasters(){
      this.$router.push(`/master`)
    }
  }
};
</script>

<style scoped lang="scss" src="/src/assets/scss/servicesPage.scss"></style>