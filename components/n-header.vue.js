var NHeader = Vue.component('n-header',{
    template: `
        <div>
<header>
    <!--<img src="img/moon-phase.png" alt="lune" id="lune">-->
    <div class="nav-toggle" onclick="document.documentElement.classList.toggle('menu-open')">
        <div class="nav-toggle-bar"></div>
    </div>
        <router-link to="/accueil"><img src="img/Logo.png" alt="logo" id="logo"></router-link>
    <nav class="menu">
        <ul>
            <li><router-link to="/accueil" onclick="document.documentElement.classList.toggle('menu-open')">Accueil<i class="fas fa-chevron-right"></i></router-link></li>
            <li><router-link to="/biographie" onclick="document.documentElement.classList.toggle('menu-open')">Biographie de Dua Lipa<i class="fas fa-chevron-right"></i></router-link></li>
            <li><router-link to="/albums" onclick="document.documentElement.classList.toggle('menu-open')">Ses albums<i class="fas fa-chevron-right"></i></router-link></li>
            <li><router-link to="/recompenses" onclick="document.documentElement.classList.toggle('menu-open')">Ses récompenses<i class="fas fa-chevron-right"></i></router-link></li>
            <li><router-link to="/modification" onclick="document.documentElement.classList.toggle('menu-open')">Modification<i class="fas fa-chevron-right"></i></router-link></li>

        </ul>
    </nav>
</header>

		</div>
	`,
    data(){
        return{
            logo:null

        }
    },
    mounted(){
    },
    methods:{
    }
});
