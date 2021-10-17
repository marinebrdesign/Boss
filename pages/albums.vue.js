var Albums = Vue.component('Albums',{
    template: `
		<div>
	    <n-header></n-header>
	    <main>
	    <h1>Albums</h1>
	    <div class="albums">
            <div class="album-item" v-for="album in albums" :key="albums.id">
                <img :src="album.image" alt="" id="dua_lipa">
                <h2>{{ album.nom }}</h2>
                <h2>{{ album.date }}</h2>
            </div>  
        </div>
	
</main>
<n-footer></n-footer>
		</div>
		
	`,

    data(){
        return {
            albums:[
            ]
        }
    },
    mounted(){
        axios.get('./json/albums.json').then((response) => {
            this.albums = response.data;
            console.log(this.albums);
        });
    },
    methods:{
    }
});