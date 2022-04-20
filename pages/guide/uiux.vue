<template>
  <main class="page-uiux">
    <h2>Form Elements</h2>
    <section>
      <div>
        <h3>Input[type=text]</h3>
        <input type="text">
      </div>
      <div>
        <h3>Input[type=number]</h3>
        <input type="number">
      </div>
      <div>
        <h3>Select</h3>
        <select>
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
      </div>
      <div>
        <h3>Textarea</h3>
        <textarea></textarea>
      </div>
      <div>
        <h3>Button</h3>
        <div style="display: flex; column-gap: 6px;">
          <z-btn class="c1">Button</z-btn>
          <z-btn class="e1">Button</z-btn>
        </div>
      </div>
      <div>
        <h3>Radio</h3>
        <label class="radio">
          <input type="radio" v-model="radioModel" :value="1">
          <div class="label">Radio 1</div>
        </label>
        <label class="radio">
          <input type="radio" v-model="radioModel" :value="2">
          <div class="label">Radio 2</div>
        </label>
      </div>
      <div>
        <h3>Checkbox</h3>
        <label class="checkbox">
          <input type="checkbox">
          <div class="label">Checkbox 1</div>
        </label>
        <label class="checkbox">
          <input type="checkbox">
          <div class="label">Checkbox 2</div>
        </label>
      </div>
    </section>
  </main>
</template>

<script setup>
const radioModel = ref(1)
</script>


<style lang="scss">
.page-uiux {
  padding: 50px;

  h2 {
    margin-bottom: 20px;
    font-weight: 700;
    font-size: 24px;
  }
  h3 {
    margin-bottom: 15px;
    font-weight: 700;
    font-size: 16px;
  }
  section {
    display: grid;
    row-gap: 60px;
    padding: 0 20px;
  }
}
</style>