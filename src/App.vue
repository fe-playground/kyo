<template>
  <div id="app">
    <div>
      <span>문장입력연습</span>
    </div>
    <div>
      <button id="startButton" v-on:click="removeDisable">{{message}}</button>
    </div>
    <div id="text1" v-for="item in items">
      <input type="input" v-once v-bind:value="{{item.message}}"/>
      <input type="input" v-model="inputText" v-bind:class="{ active: isActive }" v-bind:value="{{answer}}"/>

    </div>
  </div>
</template>
<script>
    var text1 = new Vue({
        el: '#text1',
        data: {
            seen : true,
            isActive : false,
            items : [
                {message : '동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세'},
                {message : '무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세'}
            ],
            answer : '',
            watch: {
                inputText: function (value) {
                    this.typingText()
                }
            },
            methods: {
                typingText: _.debounce(
                    function () {
                        if(this.items.message != this.answer){
                            return false;
                        }


                    }

                ,500)

            }
        }
    })


    var app5 = new Vue({
        el: 'startButton',
        data: {
            message: '시작'
        },
        methods: {
            removeDisable: function () {
                text1.isActive = true;
            }
        }
    })

</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
