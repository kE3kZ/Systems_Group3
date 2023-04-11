const app = new Vue({
  el: '#app',
  data: {
    employeeName: '',
    customerName: '',
    contactInfo: '',
    orderItems: {
      'white bread': 1,
      'wheat bread': 1,
      'white buns': 1,
      'wheat buns': 1,
      'flatbread': 1,
      'French bread': 1
    }
  },
  methods: {
    incrementItem(item) {
      this.orderItems[item]++;
    },
    decrementItem(item) {
      if (this.orderItems[item] > 1) {
        this.orderItems[item]--;
      }
    },
    submitOrder() {
      const order = {
        employeeName: this.employeeName,
        customerName: this.customerName,
        contactInfo: this.contactInfo,
        orderItems: this.orderItems
      };
      axios.post('/api/orders', order)
        .then(response => {
          console.log('Order submitted!');
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
});