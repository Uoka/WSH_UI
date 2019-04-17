<template>
  <form>
    <div v-for="item in dataObject" :key="item.name"
         class="wsh-input-bar">
      <span class="wsh-input-bar-left">{{item.name}} :</span>
      <div class="wsh-input-bar-right" v-if="item.type==='radio'"
           :style="{width: width, height: height, margin: '5px'}">
        <label v-for="val in item.values" :key="val">
          {{val}}
          <input  type="radio"
                  name="item.name"
                  v-model="item.data"
                 :value="val"/>
        </label>
      </div>
      <div class="wsh-input-bar-right" v-else-if="item.type==='checkbox'"
           :style="{width: width, height: height, margin: '5px'}">
        <label v-for="val in item.values" :key="val">
          {{val}}
          <input  type="checkbox"
                  name="item.name"
                  v-model="item.data"
                  :value="val"/>
        </label>
      </div>
      <label class="wsh-input-bar-right" v-else-if="item.type==='select'">
        <select v-model="item.data" :style="{width: width, height: height,margin: '5px'}">
          <option disabled value="">请选择</option>
          <option v-for="val in item.values" :key="val">{{val}}</option>
        </select>
      </label>
      <label class="wsh-input-bar-right" v-else-if="item.type==='password'">
        <input class="wsh-input" type="password"
               v-model="item.data"
               :style="{width: width, height: height, fontSize: textSize}"/>
      </label>
      <label class="wsh-input-bar-right" v-else >
        <input class="wsh-input" type="text"
               v-model="item.data"
               :disabled="!item.edit"
               :style="{width: width, height: height, fontSize: textSize}"/>
      </label>
    </div>
    <div style="display: flex; justify-content: space-around;margin: 8px">
      <button v-for="btn in btnData" :key="btn" class="wsh-input-button" @click="btn.fun(dataObject)">{{btn.name}}</button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'wsInput',
  props: {
    dataObject: {
      /* 数据 */
      type: Array,
      default: () => {
        return [{'name': 'input', 'data': '', 'type': 'text', 'edit': false}]
      }
    },
    btnData: {
      /* 按钮数据 */
      type: Array,
      default: () => {
        return [
          {'name': '确认',
            'fun': (data) => {
              data.forEach((object) => {
                console.log(object.name + ':' + object.data)
              })
            },
            'use': false}
        ]
      }
    },
    fun: {
      /* 处理数据的方法 */
      type: Function,
      default: (data) => {
        data.forEach((object) => {
          console.log(object.name + ':' + object.data)
        })
      }
    },
    textSize: {
      /* 字体大小 */
      type: String,
      default: '1em'
    },
    width: {
      /* 输入端的宽度 */
      type: String,
      default: '180px'
    },
    height: {
      /* 输入端的高度 */
      type: String,
      default: '26px'
    }
  }
}
</script>

<style scoped>
  .wsh-input-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 2px;
  }

  .wsh-input-bar-left{
    flex-grow: 1;
    text-align: right;
  }

  .wsh-input-bar-right {
    margin: 0 5px;
  }

  .wsh-input {
  }

  .wsh-input-button {
    background-color: #2d5e90; /* Green */
    border: none;
    cursor: pointer;
    border-radius: 5px;
    color: white;
    padding: 10px 15px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
  }
</style>
