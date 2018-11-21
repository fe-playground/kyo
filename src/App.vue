<template>
  <div id="app">
    <div>
      <span>문장입력연습</span>
    </div>
    <div>
      <button>시작</button>
    </div>
    <div>
      <ul>
        <li>
          <p>동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세</p>
          <input type="text" value=""/>
        </li>
        <li>
          <p>무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세</p>
          <input type="text" value=""/>
        </li>
      </ul>
    </div>
    <div>
      <button>종료</button>
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
input {
  display: block;
  margin: 10px auto 20px;
  height: 40px;
  width: 600px;
  outline: 0;
  border: 1px solid #ddd;
  border-radius: 7px;
  padding: 3px 10px;
  font-size: 16px;
  text-align: center;
}

</style>
