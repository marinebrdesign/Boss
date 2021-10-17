var CreateAlbums = Vue.component('CreateAlbums',{
    template:`
 <div>
  <n-header></n-header>
	    <main>
	    <h1>Modification</h1>
	    <div class="modification">
	        <form id="ajouter_album">
	            <h2>Ajouter un album</h2>
                <div class="nom">
                    <label for="nom">Titre de l'album</label>
                    <input type="text" id="nom" name="user_name" required>
                </div>
                <div class="date">
                    <label for="date">Date de sortie</label>
                    <input type="text" id="date" name="user_firstname" required>
                </div>
                <div class="ajouter_photos">
                    <h2>Ajouter une photo</h2>
                    <router-link to=""><svg id="plus_ajouter" height="426.66667pt" viewBox="0 0 426.66667 426.66667" width="426.66667pt" xmlns="http://www.w3.org/2000/svg"><path d="m405.332031 192h-170.664062v-170.667969c0-11.773437-9.558594-21.332031-21.335938-21.332031-11.773437 0-21.332031 9.558594-21.332031 21.332031v170.667969h-170.667969c-11.773437 0-21.332031 9.558594-21.332031 21.332031 0 11.777344 9.558594 21.335938 21.332031 21.335938h170.667969v170.664062c0 11.777344 9.558594 21.335938 21.332031 21.335938 11.777344 0 21.335938-9.558594 21.335938-21.335938v-170.664062h170.664062c11.777344 0 21.335938-9.558594 21.335938-21.335938 0-11.773437-9.558594-21.332031-21.335938-21.332031zm0 0"/></svg><p></p></router-link>
                <div class="ajouter">
                    <button>
                        Ajouter l'album
                    </button>
                </div>
                </div>
            </form>
        </div>
        <div class="modification">
	        <form id="changer_bio">
	            <h2>Changer biographie</h2>
                <div class="nom">
                    <label for="nom">Titre</label>
                    <input type="text" id="nom" name="user_name" required>
                </div>
                <div class="event">
                    <label for="event">Evenement</label>
                    <input type="text" id="event" name="user_firstname" required>
                </div>
                <div class="ajouter">
                    <button>
                        Ajouter l'évenement
                    </button>
                </div>
            </form>
        </div>
</main>
<n-footer></n-footer>
</div>

    `,
    data(){
        return{
            albums:{ // Bataille à créer
                id:null,
                nom:null,
                date: '0045-01-01',
                image:null
            },
        }
    },
    mounted(){
        // Appel Ajax via axios liste des lieux
        axios.get(albums)
            // Réponse et récupération des données
            .then(response => {
                // Récupérer les données
                this.albums = response.data;
                console.log("albums : ",this.albums);
            })
            // Cas d'erreur
            .catch(error =>{
                console.log("Erreur : ", error);
            })
    },
    methods:{

        submit:function(){

            let params = new FormData();
            // Ajout des paramètres de la batailles
            params.append("id",     this.albums.id);
            params.append("nom",    this.albums.nom);
            params.append("date",   this.albums.date);
            params.append("image",  this.albums.image);


            axios.post(modification, params)
                // Réponse et récupération des données
                .then(response => {
                    // Récupérer les données
                    console.log("retour de la promesse : ",response);
                    // Redirection sur la liste des batailles
                    this.$router.push('/albums');
                })
                // Cas d'erreur
                .catch(error =>{
                    console.log("Erreur : ", error);
                })

        }

    }
})