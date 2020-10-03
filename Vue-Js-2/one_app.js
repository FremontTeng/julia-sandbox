var one = new Vue({
    el: '#vue-app-one',
    data:{
        title: 'Vue App One'
    },
    methods: {

    },
    computed: {
        greet: function(){
        return 'Hello from app one~! :)';
        }

    }
})

var two = new Vue({
    el: '#vue-app-two',
    data:{
        title: 'Vue App Two'
    },
    methods: {
        changeTitle: function(){
            //Change title of vue instance one
            one.title = "Title changed";
        }
    },
    computed: {
        greet: function(){
            return 'Guten Tag! App Zwei hier.';
        }
        
    }
})

//Can change the title outside of the instances
two.title = "Changed from outside";