var Biographie = Vue.component('Biographie', {
    template: `
		<div>
	    <n-header></n-header>
	    <main>
	    <h1>Biographie</h1>
	    <div class="biographie">
	    <div class="bio-items" v-for="biographie in biographies" :key="biographies.id">
	    <img :src="biographie.image" alt="Dua lipa Enfant" id="enfance">
	    <h3>{{biographie.titre}}</h3>
	    <p>
	    {{biographie.evenement}} 
        </p>
        </div>    
        </div>
	
</main>
<n-footer></n-footer>
		</div>
		
	`,

    data() {
        return {
            biographies:[

            ]
        }
    },
    mounted() {
        axios.get('./json/biographies.json').then((response) => {
            this.biographies = response.data;
            console.log(this.biographies);
        });
    },
    methods: {}
});