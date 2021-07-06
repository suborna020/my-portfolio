<template>
  <div class="container">
      <div class="row">
    <div class="col-md-5 content offset-4 ">
        <h3 class="text-center">Bazar List</h3>
        <form action="" @submit.prevent="addItem">
            <input v-model="newItem" class="form-control" placeholder="Press Enter To Add">
            <!--  -->
        </form>
        <hr>
        <ul class="list-group">
            <li v-for="item in items" :key="item.index" class="list-group-item d-flex">
                {{item.name}} - <input class="ml-auto" type="text" v-model="item.price">
                <button class="btn btn-sm btn-info ml-1" @click="removeItem(item.index)">Remove</button>
            </li>
            <li class="list-group-item">Total - {{total}}</li>
        </ul>
    </div>
</div>
  </div>
</template>

<script>
export default {
  name: 'List',
    data() {
        return {
            items: [{
                    id: 1,
                    name: 'rice',
                    price: 3.00
                },
                {
                    id: 2,
                    name: 'wheat',
                    price: 4.00
                }
            ],
            newItem: ''
        }
    },
    computed: {
        total() {
            var total = 0
            this.items.forEach(item => {
                total += parseFloat(item.price) 
                // parseFloat()=number gulo string type hisebe niya stop korte proty number float type kora holo 
            })
            return total
        }
    },
    methods: {
        addItem() {
            this.items.push({
                name: this.newItem,
                price: 0.0
            }),
            this.newItem=''
        },
        removeItem(index){
// alert(index)
          this.items.splice(index,1)
          
        }
    }
}
</script>

<style>

</style>